import { ArrowUpRight, Heart } from "lucide-react";

import ExternalLink from "@/components/ui/external-link";
import { XLogo } from "../icons/external";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";

interface Props {
  className?: ClassValue;
}

const Footer = (props: Props) => {
  return (
    <footer
      className={cn(
        "group w-full text-sm text-muted-foreground animate-in fade-in-25 backdrop-blur-md",
        props.className
      )}
    >
      <div className={cn("container flex items-center justify-between")}>
        <div className="flex items-center space-x-2">
          <Heart
            size={14}
            className="text-red-500 group-hover:transform group-hover:animate-pulse"
          />
          <p>An experiment of  Enoabasi</p>
        </div>
        <ExternalLink
          href="https://twitter.com/from_enoabasi"
          className="flex items-center space-x-2"
        >
          <XLogo className="w-3 h-3" />
          <p className="hidden md:block">X formerly know as Twitter</p>
          <ArrowUpRight size={14} />
        </ExternalLink>
      </div>
    </footer>
  );
};

export { Footer };
