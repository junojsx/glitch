import Image from "next/image";
import { Press_Start_2P } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Press_Start_2P({
 subsets: ["latin"],
 weight: "400",
});

export const Logo = () => {
 return (
  <>
   <div className="flex flex-col items-center gap-y-4">
    <div className="bg-gray-50 rounded-md p-2">
     <Image src="/spooky.png" alt="Glitch-logo" width="100" height="100" />
    </div>
    <div className="flex flex-col items-center">
     <h1 className={cn("text-xl font-semibold", font.className)}>Glitch</h1>
     <h2 className={cn("text-sm text-muted-foreground", font.className)}>
      Game on!
     </h2>
    </div>
   </div>
  </>
 );
};
