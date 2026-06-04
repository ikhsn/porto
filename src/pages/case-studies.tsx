import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { content } from "@/lib/content";

const { caseStudies } = content;

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full px-6 md:px-12">
        <section className="w-full max-w-6xl mx-auto pt-16 pb-20 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-mono font-medium text-muted-foreground mb-6"
          >
            {caseStudies.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-4"
          >
            {caseStudies.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            {caseStudies.subtitle}
          </motion.p>
        </section>

        <section className="w-full max-w-6xl mx-auto pb-24 flex flex-col gap-12 md:gap-16">
          {caseStudies.projects.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[2rem] border border-border bg-card overflow-hidden flex flex-col md:flex-row w-full"
              data-testid={`card-case-study-${study.slug}`}
            >
              <Link
                href={`/case-studies/${study.slug}`}
                className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center group"
                data-testid={`link-case-study-${study.slug}`}
              >
                <div className="text-xs font-mono font-medium text-muted-foreground mb-6 uppercase tracking-wider">
                  {study.type}
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 group-hover:opacity-80 transition-opacity">
                  {study.headline}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-12 text-base md:text-lg">
                  {study.description}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-auto">
                  {study.results.map((metric, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-xs md:text-sm font-medium text-muted-foreground">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Link>

              <div className="w-full md:w-1/2 bg-muted relative min-h-[300px] md:min-h-full">
                <img
                  src={study.image}
                  alt={study.headline}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
