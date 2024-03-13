"use client";

import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

interface ContainerProps {
 children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
 const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
 const matches = useMediaQuery("(max-width: 1024px)"); //checking the size of the screen

 useEffect(() => {
  if (matches) {
   onCollapse();
  } else {
   onExpand();
  }
 }, [matches, onExpand, onCollapse]); //this useEffect automatically expands/collapses the sidebar when the screen is below 1024px

 return (
  <>
   <div
    className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
   >
    {children}
   </div>
  </>
 );
};
