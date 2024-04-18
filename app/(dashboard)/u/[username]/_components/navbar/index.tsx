import { Logo } from "./logo";
import { Actions } from "./actions";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Press_Start_2P({
 subsets: ["latin"],
 weight: "400",
});
export const Navbar = () => {
 return (
  <>
   <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:4 flex justify-between items-center shadow-sm">
    <Logo />

    <Actions />
   </nav>
  </>
 );
};
