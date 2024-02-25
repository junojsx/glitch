import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
