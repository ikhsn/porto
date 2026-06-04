import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const { about, nav } = content;

const CHART_PALETTES = [
  ["#4F46E5", "#0D9488", "#D97706", "#E11D48"],
  ["#059669", "#2563EB", "#7C3AED", "#EA580C"],
];

const SKILL_GROUP_ICONS: Record<string, string> = {
  "Product & Strategy": "◈",
  "Domain Expertise": "◉",
  "Technical Skills": "◎",
  "Platforms & Tools": "◇",
};

const RADIAN = Math.PI / 180;

type InnerLabelProps = {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
};

function InnerLabel({ cx = 0, cy = 0, midAngle = 0, innerRadius = 0, outerRadius = 0, percent = 0 }: InnerLabelProps) {
  if (percent < 0.09) return null;
  const r = innerRadius + (outerRadius - innerRadius) * 0.52;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="white" fontSize={12} fontWeight={700} style={{ pointerEvents: "none" }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

const CX = 130;
const CY = 130;

function DonutChart({ chart, palette }: { chart: { title: string; data: { label: string; value: number }[] }; palette: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-6">
      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">{chart.title}</h3>

      <div className="flex justify-center">
        <div style={{ position: "relative", width: 260, height: 260, flexShrink: 0 }}>
          <PieChart width={260} height={260}>
            <Pie
              data={chart.data}
              cx={CX}
              cy={CY}
              innerRadius={64}
              outerRadius={108}
              dataKey="value"
              nameKey="label"
              labelLine={false}
              label={InnerLabel}
              strokeWidth={3}
              stroke="white"
              startAngle={90}
              endAngle={-270}
              isAnimationActive={false}
            >
              {chart.data.map((_, idx) => (
                <Cell key={idx} fill={palette[idx % palette.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [`${value}%`, ""]}
              contentStyle={{
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
                fontSize: "12px",
                padding: "6px 10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
          </PieChart>
          {/* Center text overlay */}
          <div style={{ position: "absolute", top: 0, left: 0, width: 260, height: 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <span style={{ fontSize: 10, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "monospace" }}>Total</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: "#111", lineHeight: 1.2 }}>100%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {chart.data.map((d, di) => (
          <div key={di} className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: palette[di % palette.length] }}
            />
            <div className="flex items-center justify-between w-full gap-2">
              <span className="text-sm text-foreground">{d.label}</span>
              <span className="text-sm font-bold text-foreground tabular-nums">{d.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full">

        {/* ── Hero ── */}
        <section className="w-full max-w-3xl mx-auto px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-20 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-mono font-medium text-muted-foreground mb-6"
          >
            {about.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-8"
          >
            {about.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {about.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <a
              href={nav.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground h-11 px-7 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {nav.cta.label}
            </a>
            <a
              href={content.site.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card h-11 px-7 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              {content.site.linkedin.label} ↗
            </a>
          </motion.div>
        </section>

        {/* ── Metrics Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full border-y border-border"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 divide-x divide-dashed divide-border">
            {about.metrics.map((m, i) => (
              <div key={i} className="px-6 py-8 md:py-10 flex flex-col gap-2" data-testid={`about-metric-${i}`}>
                <span className="text-xs text-muted-foreground font-medium leading-snug">{m.label}</span>
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{m.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Client Mix Charts ── */}
        <section className="w-full border-b border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-mono font-medium text-muted-foreground mb-5">
                Client profile
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Who I Work With
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[about.charts.verticals, about.charts.stages].map((chart, ci) => (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: ci * 0.1 }}
                  data-testid={`chart-${ci}`}
                >
                  <DonutChart chart={chart} palette={CHART_PALETTES[ci]} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills & Tech Stack ── */}
        <section className="w-full border-b border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-mono font-medium text-muted-foreground mb-5">
                Capabilities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {about.skills.heading}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {about.skills.groups.map((group, gi) => (
                <motion.div
                  key={gi}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: gi * 0.07 }}
                  className="rounded-2xl border border-border bg-card p-7"
                  data-testid={`skill-group-${gi}`}
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="text-lg text-muted-foreground/50 select-none">
                      {SKILL_GROUP_ICONS[group.group] ?? "◆"}
                    </span>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">{group.group}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                        data-testid={`skill-tag-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl mx-auto px-6 md:px-12 py-20"
        >
          <div className="bg-foreground text-background rounded-[2rem] p-12 md:p-16 text-center flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{about.cta.heading}</h2>
            <a
              href={nav.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-background text-foreground h-12 px-8 text-base font-medium hover:opacity-90 transition-opacity"
              data-testid="link-book-call"
            >
              {about.cta.button}
            </a>
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}
