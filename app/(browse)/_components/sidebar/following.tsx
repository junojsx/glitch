"use client";
import { Follow, User } from "@prisma/client";

interface FollowingProps {
 data: (Follow & { following: User })[];
}

export const Following = ({}: FollowingProps) => {
 return (
  <>
   <div className="">Following</div>
  </>
 );
};
