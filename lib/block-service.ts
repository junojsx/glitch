import { db } from "./db";
import { getSelf } from "./auth-service";

export const isBlockedByUser = async (id: string) => {
 try {
  const self = await getSelf();
  const otherUser = await db.user.findUnique({
   where: { id },
  });
  if (!otherUser) {
   throw new Error("User not found!");
  }

  const existingBlock = await db.block.findUnique({
   where: {
    blockerId_blockedId: {
     blockerId: otherUser.id,
     blockedId: self.id,
    },
   },
  });

  return !!existingBlock; // double exclamation returns a boolean instead of false or an entire object.
 } catch {
  return false;
 }
};

export const blockUser = async (id: string) => {
 const self = await getSelf();

 if (self.id === id) {
  throw new Error("Cannot block yourself!");
 }

 const otherUser = await db.user.findUnique({
  where: { id },
 });

 if (!otherUser) {
  throw new Error("User not found!");
 }

 const existingBlock = await db.block.findUnique({
  where: {
   blockerId_blockedId: {
    blockerId: self.id,
    blockedId: otherUser.id,
   },
  },
 });

 if (existingBlock) {
  throw new Error("User is already blocked!");
 }

 const block = await db.block.create({
  data: {
   blockerId: self.id,
   blockedId: otherUser.id,
  },
  include: {
   blocked: true,
  },
 });
 return block;
};
