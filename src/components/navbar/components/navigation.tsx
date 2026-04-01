import {
  LucideBriefcase,
  LucideFolder,
  LucideHammer,
  LucideHouse,
} from "lucide-react";

export default function Navigation() {
  return (
    <div className="rounded-2xl gap-6 flex items-center bg-background-secondary justify-center px-10 py-5">
      <LucideHouse className="hover:scale-110 transition-all cursor-pointer h-5 w-5 text-brand-primary" />
      <LucideFolder className="hover:scale-110 transition-all cursor-pointer h-5 w-5 text-brand-primary" />
      <LucideBriefcase className="hover:scale-110 transition-all cursor-pointer h-5 w-5 text-brand-primary" />
      <LucideHammer className="hover:scale-110 transition-all cursor-pointer h-5 w-5 text-brand-primary" />
    </div>
  );
}
