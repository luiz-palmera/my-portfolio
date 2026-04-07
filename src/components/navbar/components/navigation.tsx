import NavWrapper from "./nav-wrapper";
import NavItem from "./nav-item";

export default function Navigation() {
  return (
    <NavWrapper>
      <NavItem icon="House" />
      <NavItem icon="Folder" />
      <NavItem icon="Briefcase" />
      <NavItem icon="Hammer" />
    </NavWrapper>
  );
}
