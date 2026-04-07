import NavWrapper from "./navwrapper";

export default function Language() {
  return (
    <NavWrapper>
      <span className="hover:scale-110 transition-all font-bold cursor-pointer text-md text-brand-primary">
        EN
      </span>
      <span className="hover:scale-110 transition-all font-bold cursor-pointer text-md text-brand-primary">
        PT
      </span>
    </NavWrapper>
  );
}
