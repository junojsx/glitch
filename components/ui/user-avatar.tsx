import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatarSizes = cva("", {
 variants: {
  size: {
   default: "h-8 w-8",
   lg: "h-14 w-14",
  },
  defaultVariants: {
   size: "default",
  },
 },
});

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
 username: string;
 imageUrl: string;
 isLive?: boolean;
 showBadge?: boolean;
}

export const UserAvatar = ({
 username,
 imageUrl,
 isLive,
 showBadge,
 size,
}: UserAvatarProps) => {
 return (
  <>
   <div className="">User Avatar</div>
  </>
 );
};
