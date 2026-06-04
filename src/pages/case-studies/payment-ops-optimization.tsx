import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { content } from "@/lib/content";

const study = content.caseStudies.projects[3];
const backLink = content.home.backLink;

export default function CaseStudyPaymentOps() {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-1 w-full">
        <article className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-24">
          <div className="mb-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
              data-testid="link-back"
            >
              {backLink}
            </Link>

            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-mono font-medium text-muted-foreground mb-6 uppercase tracking-wider"
              >
                {study.type}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
              >
                {study.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                {study.subtitle}
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-muted mb-20"
          >
            <img src={study.image} alt={study.headline} className="w-full h-full object-cover" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-8 flex flex-col gap-16"
            >
              <section>
                <h2 className="text-2xl font-bold mb-6">The challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6">The approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.approach}</p>
              </section>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-4"
            >
              <h2 className="text-2xl font-bold mb-8">Results</h2>
              <div className="flex flex-col gap-8">
                {study.results.map((metric, i) => (
                  <div key={i}>
                    {i > 0 && <div className="h-px w-full bg-border mb-8" />}
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
