import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Press_Start_2P({
 subsets: ["latin"],
 weight: "400",
});

export const Logo = () => {
 return (
  <>
   <Link href="/">
    <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
     <div className="bg-inherit  rounded-md p-1">
      <Image src="/spooky.png" alt="Glitch Home Page" width="50" height="50" />
     </div>
     <div className={cn(font.className)}>
      <h1>
       Glitch
       <span className="text-sm text-muted-foreground"> GG Go Next-</span>{" "}
      </h1>
     </div>
    </div>
   </Link>
  </>
 );
};
