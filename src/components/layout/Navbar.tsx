import { Link } from "wouter";
import { content } from "@/lib/content";

export function Navbar() {
  return (
    <header className="w-full pt-6 pb-12 px-6 md:px-12 flex items-center justify-between max-w-6xl mx-auto">
      <Link href="/" className="font-semibold text-lg hover:opacity-80 transition-opacity" data-testid="link-home">
        {content.nav.logo}
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {content.nav.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid={`link-nav-${link.href.replace(/\//g, "")}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center">
        <a
          href={content.nav.cta.href}
          className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground h-10 px-6 text-sm font-medium hover:opacity-90 transition-opacity"
          data-testid="button-nav-cta"
        >
          {content.nav.cta.label}
        </a>
      </div>
    </header>
  );
}
