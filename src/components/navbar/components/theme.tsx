import { LucideMoon, LucideSun } from "lucide-react";

export default function Theme() {
  return (
    <div className="rounded-2xl gap-6 flex items-center bg-background-secondary justify-center  p-5">
      <LucideSun className="hover:scale-110 transition-all cursor-pointer h-5 w-5 text-brand-primary" />
      <LucideMoon className="hover:scale-110 transition-all cursor-pointer h-5 w-5 text-brand-primary" />
    </div>
  );
}
