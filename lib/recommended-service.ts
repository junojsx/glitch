import { db } from "@/lib/db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
 let userId;

 try {
  const self = await getSelf();
  userId = self.id;
 } catch {
  userId = null;
 }

 let users = [];

 if (userId) {
  users = await db.user.findMany({
   where: {
    AND: [
     {
      NOT: {
       id: userId,
      },
     },
     {
      NOT: {
       followedBy: {
        some: {
         followerId: userId, //we are not gonna reco a user if we're already following them
        },
       },
      },
     },
    ],
    NOT: {
     id: userId,
    },
   },
   orderBy: {
    createdAt: "desc",
   },
  });
 } else {
  users = await db.user.findMany({
   orderBy: {
    createdAt: "desc",
   },
  });
 }
 return users;
};
