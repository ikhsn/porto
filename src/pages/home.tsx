import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { SiMeta, SiXendit } from "react-icons/si";
import { Building2, Target, BookOpen, Award, Zap } from "lucide-react";
import { useState } from "react";

const { home, caseStudies } = content;
const [project1, project2] = caseStudies.projects;

const DIFFERENTIATOR_ICONS = [Target, BookOpen, Award, Zap];

function CompanyLogo({ name }: { name: string }) {
  const [imgError, setImgError] = useState(false);

  if (name === "Meta") {
    return (
      <span className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        <SiMeta size={22} />
        <span className="text-sm font-medium">{name}</span>
      </span>
    );
  }
  if (name === "Xendit") {
    return (
      <span className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        <SiXendit size={22} />
        <span className="text-sm font-medium">{name}</span>
      </span>
    );
  }
  if ((name === "Oyster HR" || name === "Oyster") && !imgError) {
    return (
      <span className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        <img
          src="https://logo.clearbit.com/oysterhr.com"
          alt={name}
          width={22}
          height={22}
          className="rounded-sm grayscale opacity-60"
          onError={() => setImgError(true)}
        />
        <span className="text-sm font-medium">{name}</span>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
      <Building2 size={18} />
      <span className="text-sm font-medium">{name}</span>
    </span>
  );
}

function TestimonialInitials({ name }: { name: string }) {
  const parts = name.trim().split(" ");
  const initials = parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : name.slice(0, 2);
  return (
    <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold flex-shrink-0">
      {initials.toUpperCase()}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full">

        {/* ── Hero ── */}
        <section className="w-full max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-mono font-medium text-muted-foreground mb-8"
          >
            {home.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 max-w-3xl"
          >
            {home.hero.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            {home.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground h-12 px-8 text-base font-medium hover:opacity-90 transition-opacity"
              data-testid="link-view-work-hero"
            >
              {home.hero.cta}
            </Link>
          </motion.div>
        </section>

        {/* ── Metrics Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full border-y border-border"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-dashed divide-border">
            {home.metrics.map((m, i) => (
              <div key={i} className="px-8 py-8 md:py-10 flex flex-col gap-2" data-testid={`metric-${i}`}>
                <span className="text-sm text-muted-foreground font-medium">{m.label}</span>
                <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{m.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Company Logos ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-6xl mx-auto px-6 md:px-12 py-12 border-b border-border"
        >
          <p className="text-xs font-mono text-muted-foreground/60 text-center mb-8 uppercase tracking-widest">
            Previously worked with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {home.companies.map((company) => (
              <CompanyLogo key={company} name={company} />
            ))}
          </div>
        </motion.div>

        {/* ── What Sets Us Apart ── */}
        <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-mono font-medium text-muted-foreground mb-5">
              Why work with me
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {home.differentiators.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              {home.differentiators.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {home.differentiators.items.map((item, i) => {
              const Icon = DIFFERENTIATOR_ICONS[i] ?? Zap;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-4"
                  data-testid={`differentiator-${i}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                    <Icon size={18} className="text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Featured Work ── */}
        <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-20 border-t border-border">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{home.selected.heading}</h2>
            <Link
              href="/case-studies"
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
              data-testid="link-view-all-work"
            >
              {home.selected.link}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[project1, project2].map((project, idx) => (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                className="group block"
                data-testid={`card-project-${idx + 1}`}
              >
                <div className="rounded-[1.5rem] border border-border bg-card overflow-hidden hover:border-foreground/20 transition-colors h-full flex flex-col">
                  <div className="aspect-[4/3] bg-muted w-full overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.headline}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="text-xs font-mono font-medium text-muted-foreground mb-3">{project.type}</div>
                    <h3 className="text-xl font-semibold mb-2">{project.headline}</h3>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                        View project →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="w-full bg-muted/40 border-t border-border py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-mono font-medium text-muted-foreground mb-5">
                Client feedback
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {home.testimonials.heading}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {home.testimonials.items.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-6"
                  data-testid={`testimonial-${i}`}
                >
                  <span className="text-4xl font-serif text-muted-foreground/30 leading-none select-none">&ldquo;</span>
                  <p className="text-foreground leading-relaxed text-base flex-1 -mt-4">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <TestimonialInitials name={t.name} />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{t.name}</span>
                      <span className="text-xs text-muted-foreground">{t.role}, {t.company}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Home CTA ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="w-full bg-foreground text-background"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-28 md:py-40 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center rounded-full border border-background/20 px-3 py-1 text-xs font-mono font-medium text-background/50 mb-8 uppercase tracking-wider"
            >
              {home.cta.badge}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              {home.cta.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-background/55 max-w-lg mb-12 leading-relaxed"
            >
              {home.cta.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href={content.nav.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-background text-foreground h-12 px-8 text-base font-medium hover:opacity-90 transition-opacity"
                data-testid="link-cta-primary"
              >
                {home.cta.primary}
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-background/25 text-background h-12 px-8 text-base font-medium hover:border-background/60 transition-colors"
                data-testid="link-cta-secondary"
              >
                {home.cta.secondary}
              </Link>
            </motion.div>
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
}
