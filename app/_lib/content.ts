export const site = {
  name: "Qodesh CM",
  legalName: "QPS, Inc.",
  predecessorName: "Qodesh Engineering Services, Inc.",
  tradeName: "Qodesh CM & Qodesh Engineering",
  url: "https://qodeshcm.com",
  founded: 1986,
  foundedISO: "1986-01-01",
  description:
    "Qodesh CM is a Baltimore-based structural and civil engineering firm delivering master planning, structural engineering design, design-build, and construction management with a sustainability-first approach across the northeastern U.S.",
  tagline: "Engineering for a Greener World.",
  distinction:
    "One of the longest-operating minority-owned businesses in the civil and structural engineering design and construction industry.",
  serviceRegion: "Northeastern U.S., from Virginia to New York",
  nameMeaning:
    "“Qodesh” (pronounced ko-DESH) comes from a Hebrew and Aramaic root meaning set apart, consecrated, and dedicated — a name the firm treats as a standard for how it practices, not just what it's called.",
  guidingPrinciple:
    "We do not inherit the earth from our ancestors, we borrow it from our children.",
  process: [
    {
      step: "01",
      name: "Plan",
      description:
        "We start with master planning grounded in site realities, community needs, and long-term environmental performance.",
    },
    {
      step: "02",
      name: "Design",
      description:
        "Structural, civil, and environmental engineering come together in designs built for durability, efficiency, and Net Zero goals.",
    },
    {
      step: "03",
      name: "Implement",
      description:
        "Hands-on project and construction management carries each design through to a quality-controlled, on-schedule delivery.",
    },
  ],
  contact: {
    addressLine1: "30 W. 25th Street",
    addressLine2: "Baltimore, Maryland 21218",
    city: "Baltimore",
    region: "MD",
    postalCode: "21218",
    country: "US",
    phone: "410.662.5599",
    phoneHref: "+14106625599",
    email: "info@qodeshcm.com",
  },
  basecampUrl: "https://qodeshcm.basecamphq.com/",
} as const;

export const heroImages = {
  home: "/images/services/project-construction-management.webp",
  about: "/images/site/river.webp",
  services: "/images/services/structural-engineering.webp",
  contact: "/images/services/master-planning.webp",
} as const;

export const services = [
  {
    slug: "master-planning",
    name: "Master Planning",
    summary:
      "Long-range site and community planning that balances growth, land, and environmental stewardship from day one.",
    tagline: "A roadmap for growth that stewards the land instead of consuming it.",
    intro:
      "Master planning sets the strategic direction for a campus, site, or community: how it grows, where it builds, and what it protects along the way. We treat the land as something to be stewarded through that growth, not simply claimed by it, so the plan still holds up decades after groundbreaking.",
    details: [
      "Site analysis and feasibility studies",
      "Campus and land use development planning",
      "Sustainability and Net Zero roadmapping",
      "Stakeholder and regulatory coordination",
    ],
    image: "/images/services/master-planning.webp",
    imageAlt: "Campus building survey map for the University of Maryland Eastern Shore",
    project: "University of Maryland Eastern Shore — campus building survey",
  },
  {
    slug: "structural-engineering",
    name: "Structural Engineering",
    summary:
      "Design, inspection, and assessment services engineered for safety, longevity, and efficient use of materials.",
    tagline: "We design as if the ground beneath every structure is alive.",
    intro:
      "Structural work is where sustainability commitments meet load calculations. We design and inspect with an ethic that treats the earth as something animate and worth building carefully upon, not just a surface to bear weight, translating that into structures that are safe, durable, and efficient with material.",
    details: [
      "Structural engineering design services",
      "Design-build project delivery",
      "Structural inspections and condition assessments",
      "Renovation and adaptive-reuse structural analysis",
    ],
    image: "/images/services/structural-engineering.webp",
    imageAlt: "Concrete formwork and rebar under construction at Holtwood Dam",
    project: "Holtwood Dam — structural concrete construction",
  },
  {
    slug: "civil-environmental-engineering",
    name: "Civil & Environmental Engineering",
    summary:
      "Infrastructure and environmental engineering that treats natural systems as part of the design, not an afterthought.",
    tagline: "Eco-effective over merely efficient: systems built to regenerate.",
    intro:
      "Civil and environmental engineering is where our sustainability philosophy is most literal: stormwater, grading, and utility systems designed to work with a site's natural cycles instead of fighting them, aiming for rejuvenation over waste rather than just incremental efficiency.",
    details: [
      "Site civil and grading design",
      "Stormwater and environmental systems engineering",
      "Utility and infrastructure coordination",
      "Sustainable and low-impact development strategies",
    ],
    image: "/images/services/civil-environmental-engineering.webp",
    imageAlt: "A stormwater management pond bordered by trees on a project site",
    project: "Stormwater management pond — site civil & environmental engineering",
  },
  {
    slug: "project-construction-management",
    name: "Project & Construction Management",
    summary:
      "End-to-end oversight that keeps design intent, budget, and schedule aligned from groundbreaking to closeout.",
    tagline:
      "“Planning is bringing the future into the present so you can do something about it now.” — Alan Lakein",
    intro:
      "Design intent only survives contact with a job site if someone is managing for it every day. Our project and construction management works alongside owners and contractors from design services management through final quality control, so what gets built matches what was planned.",
    details: [
      "Design services management",
      "Construction quality control",
      "Construction management and field oversight",
      "Schedule, budget, and contractor coordination",
    ],
    image: "/images/services/project-construction-management.webp",
    imageAlt: "Aerial view of the Riverwalk JFK construction site in Philadelphia",
    project: "Riverwalk JFK, Philadelphia — concrete construction engineering",
  },
] as const;

export const certifications = [
  {
    abbr: "DBE",
    name: "Disadvantaged Business Enterprise",
  },
  {
    abbr: "MBE",
    name: "Minority-Owned Business Enterprise",
  },
] as const;

export const principles = [
  {
    name: "Collaboration",
    description:
      "We work as an extension of the owner's team, not a vendor handing off deliverables.",
  },
  {
    name: "Engagement",
    description:
      "Every stakeholder — client, community, and contractor — stays informed throughout the project.",
  },
  {
    name: "Focus on Results",
    description:
      "Decisions are measured against outcomes: schedule, budget, quality, and long-term performance.",
  },
  {
    name: "Responsiveness",
    description:
      "Questions get answered and issues get addressed on a timeline that respects the project's pace.",
  },
] as const;

export const leadership = [
  {
    name: "Brian A. Stephenson, PE, CCM",
    title: "Principal",
    bio: "40+ years of structural engineering experience.",
    photo: "/images/team/stephenson.webp",
    linkedin: "https://www.linkedin.com/in/brian-a-stephenson/",
  },
  {
    name: "Thomas “TJ” Epps, Jr.",
    title: "Construction Specialist",
    bio: "40+ years of construction industry experience.",
    photo: "/images/team/epps.webp",
    linkedin: "https://www.linkedin.com/in/thomas-e-tj-epps-jr-5a275658/",
  },
  {
    name: "Mariam T. Olorundare",
    title: "Business Development",
    bio: "Leads client and partnership development.",
    photo: "/images/team/olorundare.webp",
    linkedin: "https://www.linkedin.com/in/mariam-olorundare-059a4b59/",
  },
  {
    name: "Saviour Pade Okomol",
    title: "Civil / Structural Engineer",
    bio: "6+ years of civil and structural engineering experience.",
    photo: "/images/team/okomol.webp",
    linkedin: null,
  },
  {
    name: "Marcel Obiefuna",
    title: "IT Technical Support Officer",
    bio: "Keeps the firm's project and design tooling running.",
    photo: "/images/team/uche.webp",
    linkedin: "https://www.linkedin.com/in/obiefuna-marcel/",
  },
] as const;

export const sisterCompany = {
  name: "DHA East Africa, Ltd.",
  founded: 2023,
  location: "Nairobi, Kenya",
  url: "https://dhaeastafrica.com/",
  description:
    "Our Kenya-based subsidiary bridges business opportunities between the U.S. and Africa, applying the same planning-first, sustainability-minded approach to rural development and smart, sustainable agricultural communities across the continent.",
  membership: "American Chamber of Commerce, Kenya",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
