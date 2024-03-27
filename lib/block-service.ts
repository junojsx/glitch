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

  const existingBlock = await db.block.findFirst({
   where: {
    blockerId: otherUser.id,
    blockedId: self.id,
   },
  });

  return !!existingBlock; // double exclamation returns a boolean instead of false or an entire object.
 } catch {
  return false;
 }
};
