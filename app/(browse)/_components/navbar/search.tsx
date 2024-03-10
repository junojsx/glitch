"use client";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import qs from "query-string";

export const Search = () => {
 const router = useRouter();
 const [value, setValue] = useState("");

 const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!value) return;
  const url = qs.stringifyUrl(
   {
    url: "/",
    query: { term: value },
   },
   { skipEmptyString: true } //never gonna have accept an empty search query
  );

  router.push(url);
 };

 const onClear = () => {
  setValue("");
 };

 return (
  <>
   <form
    className="relative w-full lg:w-[400px] flex items-center"
    onSubmit={onSubmit}
   >
    <Input
     placeholder="Search"
     className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
     value={value}
     onChange={(e) => setValue(e.target.value)}
    />
    {value && (
     <X
      tabIndex={0}
      onClick={onClear}
      onKeyDown={onClear}
      className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
     />
    )}
    <Button
     type="submit"
     size="sm"
     className="rounded-l-none"
     variant="secondary"
    >
     <SearchIcon className="h-5 w-5 text-muted-foreground" />
    </Button>
   </form>
  </>
 );
};
