"use client";
import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

interface ActionsProps {
 isFollowing: boolean;
}

export const Actions = ({ isFollowing }: ActionsProps) => {
 const [isPending, startTransition] = useTransition(); //button disables quite quickly because we're only using console.log. but not when using setLoading.

 const followButtonClickHandler = () => {
  startTransition(() => {
   onFollow("123");
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
