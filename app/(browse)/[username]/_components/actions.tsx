"use client";
import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
 isFollowing: boolean;
}

export const Actions = ({ isFollowing }: ActionsProps) => {
 const [isPending, startTransition] = useTransition(); //button disables quite quickly because we're only using console.log. but not when using setLoading.

 const followButtonClickHandler = () => {
  startTransition(() => {
   onFollow("123")
    .then(() => toast.success("Followed the user!"))
    .catch(() => toast.error("Something went wrong."));
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
