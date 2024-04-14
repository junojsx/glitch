"use client";
import { onBlock, onUnblock } from "@/actions/block";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { start } from "repl";
import { toast } from "sonner";

interface ActionsProps {
 isFollowing: boolean;
 userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
 const [isPending, startTransition] = useTransition(); //button disables quite quickly because we're only using console.log. but not when using setLoading.

 const followClickHandler = () => {
  startTransition(() => {
   onFollow(userId)
    .then((data) =>
     toast.success(`You are now following ${data.following.username}`)
    )
    .catch((data) =>
     toast.error(`Something went wrong with following ${data}.`)
    );
  });
 };
 const unFollowClickHandler = () => {
  startTransition(() => {
   onUnfollow(userId)
    .then((data) => toast.success(`You unfollowed ${data.following.username}`))
    .catch(() => toast.error(`Something went wrong with unfollowing.`));
  });
 };

 const onClickBtnHandler = () => {
  if (isFollowing) {
   unFollowClickHandler();
  } else {
   followClickHandler();
  }
 };

 const blockHandler = () => {
  startTransition(() => {
   onBlock(userId)
    .then((data) => toast.success(`Blocked the user ${data.blocked.username}`))
    .catch(() => toast.error(`Something went wrong with blocking`));
  });
 };

 return (
  <>
   <div className="">
    <Button disabled={isPending} variant="primary" onClick={onClickBtnHandler}>
     {isFollowing ? "Unfollow" : "Follow"}
    </Button>
    <Button onClick={blockHandler} disabled={isPending}>
     Block User
    </Button>
   </div>
  </>
 );
};
