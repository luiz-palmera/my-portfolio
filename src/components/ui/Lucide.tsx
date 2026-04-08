import { cn } from "@/lib/utlis";
import * as lucideIcons from "lucide-react";

export const { icons } = lucideIcons;

export interface LucideProps extends React.ComponentPropsWithoutRef<"svg"> {
  icon: keyof typeof icons;
  title?: string;
}

function Lucide(props: LucideProps) {
  const { icon, className, ...computedProps } = props;
  const Component = icons[icon];
  return (
    <Component
      {...computedProps}
      className={cn("stroke-1.5 w-5 h-5", className)}
    />
  );
}

export default Lucide;
