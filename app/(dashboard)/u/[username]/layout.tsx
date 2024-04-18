import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";

interface CreatorLayoutProps {
 params: { username: string };
 children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
 const self = await getSelfByUsername(params.username);

 if (!self) {
  redirect("/");
 }
 return (
  <>
   <div className="flex h-full pt-20">{children}</div>
  </>
 );
};

export default CreatorLayout;
