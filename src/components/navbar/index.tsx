import Language from "./components/language";
import Navigation from "./components/navigation";
import Theme from "./components/theme";

export default function Navbar() {
  return (
    <div className="mt-10 w-full  flex items-center justify-center gap-85">
      <Theme />
      <Navigation />
      <Language />
    </div>
  );
}
