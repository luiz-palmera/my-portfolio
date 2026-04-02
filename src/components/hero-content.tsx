import { ArrowRight, Mail } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-6 max-w-[600px]">
      <h1 className="text-text-primary font-display font-semibold text-[3rem] leading-[3.4rem] tracking-tight">
        Frontend <span className="text-brand-primary">Developer</span> <br />
        building modern <span className="text-brand-primary">interfaces</span>
      </h1>

      <p className="text-text-secondary text-[1.1rem] max-w-[520px] leading-relaxed">
        Experience with React, TypeScript and real-world apps focused on
        performance and UX
      </p>

      <div className="flex items-center gap-4 mt-2">
        <button className="flex items-center bg-brand-primary text-text-inverse px-6 py-3 rounded-xl font-medium transition hover:opacity-90">
          View Projects
          <ArrowRight className="ml-2" />
        </button>

        <button className="flex border border-border-primary text-text-primary px-6 py-3 rounded-xl font-medium transition hover:bg-white/5">
          Contact Me
          <Mail className="ml-2" />
        </button>
      </div>
    </div>
  );
}
