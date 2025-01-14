"use client";

import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { BiReset } from "react-icons/bi";

export default function MySearches() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag");
  const q = searchParams.get("q");

  const hasSearchParams = tag || q;

  const handleReset = () => {
    router.push("/courses");
  };

  if (!hasSearchParams) return null;

  return (
    <div className="mx-auto flex max-w-screen-xl items-center p-2">
      <p className="mr-3">My Searches:</p>
      <div className="space-x-2">
        {tag && <Badge variant="outline">{tag}</Badge>}
        {q && <Badge variant="outline">{q}</Badge>}
      </div>
      <Badge
        variant="secondary"
        className="ml-3 cursor-pointer rounded-full"
        onClick={handleReset}
      >
        Reset
        <BiReset />
      </Badge>
    </div>
  );
}