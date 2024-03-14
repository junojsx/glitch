"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserAvatar } from "@/components/ui/user-avatar";

interface UserItemProps {
 username: string;
 imageUrl: string;
 isLive?: boolean;
}

export const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
 const pathname = usePathname();
 console.log(username);

 const { collapsed } = useSidebar((state) => state);
 const href = `/${username}`;
 const isActive = pathname === href;

 return (
  <>
   <li className="">
    <Button
     className={cn(
      "w-full h-12",
      collapsed ? "justify-center" : "justify-start",
      isActive && "bg-accent"
     )}
     asChild
     variant="ghost"
    ></Button>
    <Link href={href}>
     <div
      className={cn(
       "flex items-center w-full gap-x-4",
       collapsed && "justify center"
      )}
     >
      <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
     </div>
    </Link>
   </li>
  </>
 );
};
