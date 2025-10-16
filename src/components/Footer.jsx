import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToHero = () => {
    const el = document.getElementById("hero");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} RusheilBaath. All rights reserved.
      </p>
      <button
        onClick={scrollToHero}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
