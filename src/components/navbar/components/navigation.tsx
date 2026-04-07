import {
  LucideBriefcase,
  LucideFolder,
  LucideHammer,
  LucideHouse,
} from "lucide-react";
import NavWrapper from "./navwrapper";

export default function Navigation() {
  return (
    <NavWrapper>
      <LucideHouse className="hover:scale-110 transition-all cursor-pointer h-6 w-6 text-brand-primary" />
      <LucideFolder className="hover:scale-110 transition-all cursor-pointer h-6 w-6 text-brand-primary" />
      <LucideBriefcase className="hover:scale-110 transition-all cursor-pointer h-6 w-6 text-brand-primary" />
      <LucideHammer className="hover:scale-110 transition-all cursor-pointer h-6 w-6 text-brand-primary" />
    </NavWrapper>
  );
}
