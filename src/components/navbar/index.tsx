import Language from "./components/language";
import Navigation from "./components/navigation";
import Theme from "./components/theme";

export default function Navbar() {
  return (
    <div className="mt-15 w-full flex items-center justify-center gap-10">
      <Theme />
      <Navigation />
      <Language />
    </div>
  );
}
