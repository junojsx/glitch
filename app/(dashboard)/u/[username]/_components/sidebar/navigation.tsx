"use client";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Fullscreen, KeyRound, MessageSquare, Users } from "lucide-react";

export const Navigation = () => {
 const pathname = usePathname();
 const { user } = useUser();
 const routes = [
  {
   label: "Stream",
   href: `/u/${user?.username}`,
   icon: Fullscreen,
  },
  {
   label: "Keys",
   href: `/u/${user?.username}/keys`,
   icon: KeyRound,
  },
  {
   label: "Chat",
   href: `/u/${user?.username}/chat`,
   icon: MessageSquare,
  },
  {
   label: "Community",
   href: `/u/${user?.username}/community`,
   icon: Users,
  },
 ];

 return (
  <nav aria-label="User Dashboard Side Navigation">
   <ul className="">
    {routes.map((route) => (
     <li className="" key={route.href}>
      {route.label}
     </li>
    ))}
   </ul>
  </nav>
 );
};
