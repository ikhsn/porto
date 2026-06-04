import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-12 mt-20 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium text-muted-foreground">
          <span className="text-foreground">{content.site.name}</span>
          <a
            href={`mailto:${content.site.email}`}
            className="hover:text-foreground transition-colors"
            data-testid="link-email"
          >
            {content.site.email}
          </a>
          <a
            href={content.site.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            data-testid="link-linkedin"
          >
            {content.site.linkedin.label}
          </a>
        </div>
        <div className="text-sm text-muted-foreground">{content.footer.copyright}</div>
      </div>
    </footer>
  );
}
