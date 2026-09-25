export const hero = {
  name: "Priyanka Mysore Krishna",
  bio: "MSc Data Science student at the University of Bath. I specialise in product analytics, statistical modelling, and self-serve tools that let teams answer their own questions, written up clearly enough for a C-suite audience.",
  badge: "Merit & Global Leaders Scholar, Bath",
  email: "pmk46@bath.ac.uk",
  linkedin: "https://linkedin.com/in/priyanka-m-krishna",
  github: "https://github.com/Priyaaaa2",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  badge?: string;
};

export const flagshipProject: Project = {
  title: "NYC Congestion Pricing: Equity Impact Analysis",
  description:
    "Built a Python data pipeline combining 509M taxi and ride-hail trips, 93M subway journeys, and Census data across 263 zones, then used causal inference to isolate transport access, not income, as the true driver of a 7% ride-hail drop versus a 9.5% cab rise. Controlled for confounding demographic and economic factors to validate the claim, then applied the model to a proposed 2027 toll price rise and published the full analysis, code, and paper openly.",
  tags: ["Python", "Causal Inference"],
  links: [
    { label: "GitHub", href: "https://github.com/Priyaaaa2/nyc-congestion" },
    { label: "SSRN", href: "https://dx.doi.org/10.2139/ssrn.6979038" },
  ],
};

export const featuredProjects: Project[] = [
  {
    title: "Adaptive Video Action Recognition: Codec Signal Quality",
    description:
      "Trained two video recognition models on UCF-101, a compressed-domain model at 90% accuracy and a full pixel-decode model at 95%, then tested and rejected the hypothesis that richer codec motion data predicts the cheaper model's failures. Diagnosed that failures cluster by action class instead, then designed a lightweight router reaching 94.45% system accuracy while sending only 15.1% of clips to the expensive model.",
    tags: ["Python", "PyTorch", "Deep Learning"],
    badge: "MSc Dissertation",
  },
  {
    title: "Product Analytics & A/B Experimentation",
    description:
      "Built retention, funnel, RFM, and LTV/CAC analyses on 31,524 events using dbt. Frequentist and Bayesian A/B tests agreed on a +31.6% uplift. Shipped a 6-page Streamlit dashboard so stakeholders stopped asking the analyst.",
    tags: ["Python", "SQL", "dbt", "A/B Testing", "Streamlit"],
  },
];

export const moreProjects: Project[] = [
  {
    title: "Demand Forecasting & Inventory Optimisation",
    description:
      "Benchmarked 6 models on 36,500 rows of retail data. Moving Average 7d won at MAPE 14.9%. Built an inventory optimiser (EOQ, safety stock, reorder points) and deployed it as a live Docker API.",
    tags: ["Python", "SARIMA", "Prophet", "LSTM", "FastAPI", "Docker"],
  },
  {
    title: "London Grocery Consumption Analysis",
    description:
      "Merged 1.6M Clubcard records with ONS income data. Found ready-meal consumption has no link to income. Delivered as a video and infographic to a C-level audience.",
    tags: ["Python", "Pandas", "Bath coursework"],
  },
  {
    title: "National Student Survey Feasibility Analysis",
    description:
      "Recommended revamping Business Studies to a university executive board. Found a 2.5% teaching quality gap and built a composite satisfaction index.",
    tags: ["Python", "Gap Analysis", "Bath coursework"],
  },
  {
    title: "Bayesian Component Degradation Modelling",
    description:
      "Built a hierarchical Bayesian model (NumPyro/NUTS) to predict mechanical failures. Cut unexplained variation by 75% and correctly flagged high-risk components in a blind test.",
    tags: ["NumPyro", "Bayesian", "Bath coursework"],
  },
  {
    title: "Diabetes Progression Statistical Analysis",
    description:
      "Found BMI predicts disease progression strongest (p < 10⁻⁴¹). Built a sex classifier at 73% test accuracy using linear discriminant analysis.",
    tags: ["Python", "SciPy", "scikit-learn"],
  },
  {
    title: "Click2Flick: Automated Educational Video Generator",
    description:
      "1st Prize at a national 12-hour hackathon. Converts a text description into an educational video automatically using NLP, D-ID, and FFmpeg.",
    tags: ["Python", "Flask", "React", "D-ID"],
    badge: "1st Prize, INFOTHON 2023",
  },
  {
    title: "Code Revive: Legacy Code Migration Tool",
    description:
      "Grand Finale finalist from 300+ teams at EG AI Hackathon 2024. Converts COBOL codebases to Python, Java, or C++ using LLaMA 3.",
    tags: ["LLaMA 3", "Python", "Streamlit"],
    badge: "Grand Finale Finalist, 300+ teams",
  },
];

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  location: string;
  pill?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "Google Cloud & AICTE EduSkills",
    role: "Generative AI Intern",
    period: "Apr – Jun 2025",
    location: "Remote",
    pill: "Outstanding, 90 to 100%",
    bullets: [
      "Noticed students struggled to find matching roles, so built an AI-powered job portal (Gemini AI and Firebase) that helped 50+ students discover roles, with 12 landing interviews.",
      "Added a CV-parsing tool that cut search time to under 2 minutes.",
      "Completed 24 Google certifications in cloud data, AI, and MLOps, earning the top grade.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  description: string;
  chips: { label: string }[];
};

export const education: EducationItem[] = [
  {
    degree: "MSc Data Science",
    school: "University of Bath, UK",
    period: "Sep 2025 – Sep 2026",
    description:
      "Studying core modules in Applied Data Science, Statistical & Bayesian Data Science, and Machine & Deep Learning. Represents postgraduate students in three elected roles: presenting course feedback from 30+ students to faculty, pitching a data-skills workshop series to the SU senate, and resolving communication gaps with department leadership.",
    chips: [{ label: "Merit Scholarship" }, { label: "Global Leaders Scholarship" }],
  },
  {
    degree: "BEng Computer Science & Engineering",
    school: "P.E.S. College of Engineering (VTU), India",
    period: "Dec 2021 – May 2025",
    description:
      "Built a foundation in data structures, algorithms, database systems, and software engineering. Planned and ran HackSprint 2024, a 24-hour hackathon for 500+ participants across 100 teams, mentoring teams on AI and machine learning problems.",
    chips: [{ label: "First Class with Distinction, CGPA 8.81/10" }],
  },
];

export const referee = "Referee: Dr Davide Moltisanti, University of Bath";

export const skills = [
  {
    group: "Proficient",
    items: ["SQL", "Python", "Excel", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Git", "Docker"],
  },
  {
    group: "Working Knowledge",
    items: ["R", "Power BI", "BigQuery", "AWS", "PyTorch"],
  },
  {
    group: "Methods",
    items: ["A/B Testing", "Cohort & Funnel Analysis", "RFM Analysis", "Time Series Analysis", "Bayesian Inference"],
  },
];

export const awards = [
  {
    prize: "1st Prize, AI/ML Category",
    event: "INFOTHON 2023, National Level 12-hour Hackathon, VVCE",
    year: "Jul 2023",
  },
  {
    prize: "Grand Finale Finalist",
    event: "EG AI Innovation Hackathon 2024, shortlisted from 300+ teams (Team PANDAS)",
    year: "2024",
  },
  {
    prize: "Outstanding, Google Cloud Internship",
    event: "Google Cloud & AICTE Generative AI Internship (90 to 100%)",
    year: "Jun 2025",
  },
  {
    prize: "3rd Prize",
    event: "National Level Software Hackathon, ACU-BGSIT",
    year: "Aug 2023",
  },
  {
    prize: "2nd Runner Up",
    event: "TensorFlow Competition, Google AI Campus Fest",
    year: "Nov 2023",
  },
  {
    prize: "Merit + Global Leaders Scholarships",
    event: "University of Bath, awarded on entry to MSc",
    year: "2025",
  },
];

export const contact = {
  title: "Contact",
  body: "I'm open to data analyst, product analyst, and BI analyst roles in the UK. If you have a hard question and a dataset, reach out.",
  panelStat: "31,524",
  panelLabel: "events in my largest product analytics dataset, so far",
  panelNote: "Looking for the next interesting problem",
};

export const footer = {
  copy: "© 2026 Priyanka Mysore Krishna, Bath, UK",
  note: "MSc Data Science, University of Bath",
};
