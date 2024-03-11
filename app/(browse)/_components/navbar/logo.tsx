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
    <div className="flex items-center gap-x-4 hover:opacity-75 transition">
     <div className="bg-inherit mr-12 lg:mr-0 shrink-0 rounded-md p-1">
      <Image src="/spooky.png" alt="Glitch Home Page" width="50" height="50" />
     </div>
     <div className={cn("hidden lg:block", font.className)}>
      <h1 className="text-lg">Glitch</h1>
      <h2 className="text-sm text-muted-foreground"> GG Go Next-</h2>{" "}
     </div>
    </div>
   </Link>
  </>
 );
};
