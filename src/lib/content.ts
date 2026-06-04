import contentRaw from "../../content.md?raw";

function parseSections(raw: string): Record<string, string> {
  const sections: Record<string, string> = {};
  const parts = raw.split(/^### /m);
  for (const part of parts.slice(1)) {
    const nl = part.indexOf("\n");
    const key = part.slice(0, nl).trim();
    let value = part.slice(nl);
    // Strip everything from the first --- separator or ## section heading onwards
    value = value.replace(/\n---[\s\S]*$/, "").replace(/\n##[\s\S]*$/, "");
    value = value.replace(/<!--[^>]*-->/g, "").trim();
    sections[key] = value;
  }
  return sections;
}

function parseList(text: string): string[] {
  return (text || "")
    .split("\n")
    .filter((line) => line.trimStart().startsWith("- "))
    .map((line) => line.replace(/^\s*-\s*/, "").trim());
}

function parseMetrics(text: string): { value: string; label: string }[] {
  return parseList(text).map((item) => {
    const sep = item.indexOf(" | ");
    return {
      value: sep === -1 ? item : item.slice(0, sep).trim(),
      label: sep === -1 ? "" : item.slice(sep + 3).trim(),
    };
  });
}

function parseNavLinks(text: string): { label: string; href: string }[] {
  return parseList(text).map((item) => {
    const sep = item.indexOf(" | ");
    return {
      label: sep === -1 ? item : item.slice(0, sep).trim(),
      href: sep === -1 ? "/" : item.slice(sep + 3).trim(),
    };
  });
}

function parsePipeList(text: string): string[][] {
  return parseList(text).map((item) => item.split(" | ").map((s) => s.trim()));
}

function parseSkillGroups(text: string): { group: string; skills: string[] }[] {
  return parseList(text).map((item) => {
    const sep = item.indexOf(" | ");
    if (sep === -1) return { group: item, skills: [] };
    return {
      group: item.slice(0, sep).trim(),
      skills: item
        .slice(sep + 3)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
  });
}

function parseChartData(text: string): { label: string; value: number }[] {
  return parsePipeList(text).map(([label = "", raw = "0"]) => ({
    label,
    value: parseInt(raw, 10) || 0,
  }));
}

const s = parseSections(contentRaw);

export const content = {
  site: {
    name: s["site.name"] ?? "",
    email: s["site.email"] ?? "",
    linkedin: {
      url: s["site.linkedin.url"] ?? "",
      label: s["site.linkedin.label"] ?? "",
    },
    location: s["site.location"] ?? "",
  },

  nav: {
    logo: s["nav.logo"] ?? "",
    links: parseNavLinks(s["nav.links"] ?? ""),
    cta: {
      label: s["nav.cta.label"] ?? "",
      href: s["nav.cta.href"] ?? "",
    },
  },

  footer: {
    copyright: s["footer.copyright"] ?? "",
  },

  home: {
    hero: {
      badge: s["home.hero.badge"] ?? "",
      heading: s["home.hero.heading"] ?? "",
      subtitle: s["home.hero.subtitle"] ?? "",
      cta: s["home.hero.cta"] ?? "",
    },
    companies: parseList(s["home.companies"] ?? ""),
    metrics: parseMetrics(s["home.metrics"] ?? ""),
    differentiators: {
      heading: s["home.differentiators.heading"] ?? "",
      subtitle: s["home.differentiators.subtitle"] ?? "",
      items: parsePipeList(s["home.differentiators.items"] ?? "").map(
        ([title = "", description = ""]) => ({ title, description })
      ),
    },
    cta: {
      badge: s["home.cta.badge"] ?? "",
      heading: s["home.cta.heading"] ?? "",
      subtitle: s["home.cta.subtitle"] ?? "",
      primary: s["home.cta.primary"] ?? "",
      secondary: s["home.cta.secondary"] ?? "",
    },
    testimonials: {
      heading: s["home.testimonials.heading"] ?? "",
      items: parsePipeList(s["home.testimonials.items"] ?? "").map(
        ([quote = "", name = "", role = "", company = ""]) => ({ quote, name, role, company })
      ),
    },
    selected: {
      heading: s["home.selected.heading"] ?? "",
      link: s["home.selected.link"] ?? "",
    },
    backLink: s["home.back.link"] ?? "",
  },

  caseStudies: {
    badge: s["case-studies.badge"] ?? "",
    heading: s["case-studies.heading"] ?? "",
    subtitle: s["case-studies.subtitle"] ?? "",
    projects: [
      {
        slug: "payments-strategy",
        image: "/images/cs1.png",
        type: s["cs.payments.type"] ?? "",
        headline: s["cs.payments.headline"] ?? "",
        subtitle: s["cs.payments.subtitle"] ?? "",
        description: s["cs.payments.description"] ?? "",
        challenge: s["cs.payments.challenge"] ?? "",
        approach: s["cs.payments.approach"] ?? "",
        results: parseMetrics(s["cs.payments.results"] ?? ""),
      },
      {
        slug: "insurance-rpa",
        image: "/images/cs2.png",
        type: s["cs.insurance.type"] ?? "",
        headline: s["cs.insurance.headline"] ?? "",
        subtitle: s["cs.insurance.subtitle"] ?? "",
        description: s["cs.insurance.description"] ?? "",
        challenge: s["cs.insurance.challenge"] ?? "",
        approach: s["cs.insurance.approach"] ?? "",
        results: parseMetrics(s["cs.insurance.results"] ?? ""),
      },
      {
        slug: "hr-ai-compliance",
        image: "/images/cs3.png",
        type: s["cs.hr.type"] ?? "",
        headline: s["cs.hr.headline"] ?? "",
        subtitle: s["cs.hr.subtitle"] ?? "",
        description: s["cs.hr.description"] ?? "",
        challenge: s["cs.hr.challenge"] ?? "",
        approach: s["cs.hr.approach"] ?? "",
        results: parseMetrics(s["cs.hr.results"] ?? ""),
      },
      {
        slug: "payment-ops-optimization",
        image: "/images/cs4.png",
        type: s["cs.paymentops.type"] ?? "",
        headline: s["cs.paymentops.headline"] ?? "",
        subtitle: s["cs.paymentops.subtitle"] ?? "",
        description: s["cs.paymentops.description"] ?? "",
        challenge: s["cs.paymentops.challenge"] ?? "",
        approach: s["cs.paymentops.approach"] ?? "",
        results: parseMetrics(s["cs.paymentops.results"] ?? ""),
      },
    ],
  },

  about: {
    badge: s["about.badge"] ?? "",
    heading: s["about.heading"] ?? "",
    intro: s["about.intro"] ?? "",
    metrics: parseMetrics(s["about.metrics"] ?? ""),
    charts: {
      verticals: {
        title: s["about.chart.verticals.title"] ?? "",
        data: parseChartData(s["about.chart.verticals.data"] ?? ""),
      },
      stages: {
        title: s["about.chart.stages.title"] ?? "",
        data: parseChartData(s["about.chart.stages.data"] ?? ""),
      },
    },
    skills: {
      heading: s["about.skills.heading"] ?? "",
      groups: parseSkillGroups(s["about.skills.groups"] ?? ""),
    },
    cta: {
      heading: s["about.cta.heading"] ?? "",
      button: s["about.cta.button"] ?? "",
    },
  },
};
