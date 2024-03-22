"use client";
import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
 isFollowing: boolean;
 userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
 const [isPending, startTransition] = useTransition(); //button disables quite quickly because we're only using console.log. but not when using setLoading.

 const followButtonClickHandler = () => {
  startTransition(() => {
   onFollow(userId)
    .then((data) => toast.success(`You are now following ${data}`))
    .catch((data) =>
     toast.error(`Something went wrong with following ${data}.`)
    );
  });
 };
 return (
  <>
   <div className="">
    <Button
     disabled={isFollowing || isPending}
     variant="primary"
     onClick={followButtonClickHandler}
    >
     Following
    </Button>
   </div>
  </>
 );
};
