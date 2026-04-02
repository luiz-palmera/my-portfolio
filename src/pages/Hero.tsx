import Navbar from "@/components/navbar";
import ProfileCard from "@/components/profile-card";
import HeroContent from "@/components/hero-content";

export default function Hero() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar />

      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <HeroContent />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
