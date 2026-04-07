import { LucideMoon, LucideSun } from "lucide-react";
import NavWrapper from "./navwrapper";

export default function Theme() {
  return (
    <NavWrapper>
      <LucideSun className="hover:scale-110 transition-all cursor-pointer h-6 w-6 text-brand-primary" />
      <LucideMoon className="hover:scale-110 transition-all cursor-pointer h-6 w-6 text-brand-primary" />
    </NavWrapper>
  );
}
