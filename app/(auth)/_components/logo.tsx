import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
 subsets: ["latin"],
 weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
 return (
  <>
   <div className="flex flex-col items-center gap-y-4">
    <div className="bg-white rounded-full p-1">
     <Image src="/spooky.png" alt="Glitch-logo" width="80" height="80" />
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
