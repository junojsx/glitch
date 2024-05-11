"use client";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { Hint } from "@/components/ui/hint";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

export const Toggle = () => {
 const { collapsed, onExpand, onCollapse } = useCreatorSidebar(
  (state) => state
 );

 const label = collapsed ? "Expand" : "Collapse";
 return (
  <>
   {collapsed && (
    <div className="w-full hidden lg:flex items-center justify-center pt-4 mb-4">
     <Hint label={label} side="right" asChild>
      <Button onClick={onExpand} variant="ghost" className="h-auto p-2">
       <ArrowRightFromLine
        className="h-4 w-4"
        aria-label={collapsed ? "false" : "expanded"}
       />
      </Button>
     </Hint>
    </div>
   )}

   {!collapsed && (
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
     <h4 className="font-semibold text-primary">Dashboard</h4>
     <Hint label={label} side="right" asChild>
      <Button
       onClick={onCollapse}
       variant="ghost"
       className="h-auto p-2 ml-auto"
      >
       <ArrowLeftFromLine
        className="h-4 w-4"
        aria-label={!collapsed ? "expanded" : "false"}
       />
      </Button>
     </Hint>
    </div>
   )}
  </>
 );
};
