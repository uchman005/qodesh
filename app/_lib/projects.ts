import { services } from "./content";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  client?: string;
  /** Human-readable location text as provided — never a guessed/geocoded coordinate. */
  location?: string;
  role: string;
  category: (typeof services)[number]["slug"];
  images: ProjectImage[];
  featured?: boolean;
};

function img(slug: string, n: number, alt: string): ProjectImage {
  return { src: `/images/projects/${slug}/${String(n).padStart(2, "0")}.webp`, alt };
}

export const projects: Project[] = [
  {
    slug: "101-walnut-street-condominiums",
    title: "101 Walnut Street Condominiums",
    location: "Philadelphia, Pennsylvania",
    role: "Structural Consultation – Concrete Systems",
    category: "structural-engineering",
    images: [img("101-walnut-street-condominiums", 1, "101 Walnut Street Condominiums in Philadelphia, Pennsylvania")],
  },
  {
    slug: "holtwood-dam-expansion",
    title: "130 MW Holtwood Dam Expansion",
    location: "Holtwood, Pennsylvania",
    role: "Structural Consultation – Concrete Systems",
    category: "structural-engineering",
    featured: true,
    images: [
      img("holtwood-dam-expansion", 1, "Aerial view of the Holtwood Dam hydroelectric expansion in Holtwood, Pennsylvania"),
      img("holtwood-dam-expansion", 2, "Concrete formwork and rebar under construction at the Holtwood Dam expansion"),
    ],
  },
  {
    slug: "4410-knox-road",
    title: "4410 Knox Road",
    location: "College Park, Maryland",
    role: "Structural Excavation Consulting",
    category: "structural-engineering",
    images: [img("4410-knox-road", 1, "4410 Knox Road development site in College Park, Maryland")],
  },
  {
    slug: "ati-allegheny-ludlum-steel-works",
    title: "ATI Allegheny Ludlum Brackenridge Steel Works",
    location: "Pennsylvania",
    role: "Hot Rolling Plant, Structural Engineer of Record",
    category: "structural-engineering",
    featured: true,
    images: [
      img("ati-allegheny-ludlum-steel-works", 1, "Molten steel pour inside the ATI Allegheny Ludlum hot rolling plant"),
      img("ati-allegheny-ludlum-steel-works", 2, "Aerial view of the ATI Allegheny Ludlum Brackenridge steel works"),
    ],
  },
  {
    slug: "administration-building-green-roof",
    title: "Administration Building Green Roof",
    client: "University of Maryland Baltimore County",
    role: "Structural Engineer of Record",
    category: "structural-engineering",
    images: [img("administration-building-green-roof", 1, "Administration Building green roof at the University of Maryland Baltimore County")],
  },
  {
    slug: "arlington-elementary-school",
    title: "Arlington Elementary School",
    location: "Baltimore, Maryland",
    role: "Storm Water Management Certification",
    category: "civil-environmental-engineering",
    images: [img("arlington-elementary-school", 1, "Arlington Elementary School stormwater management site in Baltimore, Maryland")],
  },
  {
    slug: "bio-solids-storage-accokeek",
    title: "Bio-Solids Storage Project",
    client: "Washington Suburban Sanitary Commission",
    location: "Accokeek, Maryland",
    role: "Civil Engineer of Record",
    category: "civil-environmental-engineering",
    images: [img("bio-solids-storage-accokeek", 1, "Bio-solids storage facility for the Washington Suburban Sanitary Commission in Accokeek, Maryland")],
  },
  {
    slug: "bio-solids-storage-seneca",
    title: "Bio-Solids Storage Project",
    client: "Washington Suburban Sanitary Commission",
    location: "Seneca, Maryland",
    role: "Civil Engineer of Record",
    category: "civil-environmental-engineering",
    images: [img("bio-solids-storage-seneca", 1, "Bio-solids storage facility for the Washington Suburban Sanitary Commission in Seneca, Maryland")],
  },
  {
    slug: "bowie-state-university-stormwater-audits",
    title: "Bowie State University",
    location: "Bowie, Maryland",
    role: "Storm Water Management Facility Audits",
    category: "civil-environmental-engineering",
    images: [img("bowie-state-university-stormwater-audits", 1, "Stormwater management facility audit site at Bowie State University")],
  },
  {
    slug: "calvin-and-tina-tyler-hall",
    title: "Calvin and Tina Tyler Hall",
    client: "Morgan State University",
    location: "Baltimore, Maryland",
    role: "Storm Water Management Certification",
    category: "civil-environmental-engineering",
    images: [img("calvin-and-tina-tyler-hall", 1, "Calvin and Tina Tyler Hall at Morgan State University")],
  },
  {
    slug: "camden-yards-warehouse-facade-restoration",
    title: "Camden Yards Warehouse Facade Restoration",
    location: "Baltimore, Maryland",
    role: "Structural Engineer of Record",
    category: "structural-engineering",
    featured: true,
    images: [img("camden-yards-warehouse-facade-restoration", 1, "Restored Camden Yards warehouse facade overlooking the ballpark in Baltimore, Maryland")],
  },
  {
    slug: "campus-utility-master-plan-morgan-state",
    title: "Campus Utility Master Plan",
    client: "Morgan State University",
    location: "Baltimore, Maryland",
    role: "Infrastructure Master Planning",
    category: "master-planning",
    featured: true,
    images: [img("campus-utility-master-plan-morgan-state", 1, "Campus utility master plan map for Morgan State University")],
  },
  {
    slug: "campus-utility-master-plan-umes",
    title: "Campus Utility Master Plan",
    client: "University of Maryland Eastern Shore",
    role: "Infrastructure Master Planning",
    category: "master-planning",
    images: [img("campus-utility-master-plan-umes", 1, "Campus environment survey for the University of Maryland Eastern Shore utility master plan")],
  },
  {
    slug: "drexel-university-dormitory",
    title: "Drexel University Dormitory",
    location: "Philadelphia, Pennsylvania",
    role: "Structural Consultation – Concrete Systems Installation",
    category: "structural-engineering",
    images: [img("drexel-university-dormitory", 1, "Drexel University dormitory construction in Philadelphia, Pennsylvania")],
  },
  {
    slug: "ebdi-parkview-at-ashland-senior-housing",
    title: "EBDI Parkview at Ashland Sr. Housing",
    location: "Baltimore, Maryland",
    role: "Structural Engineer of Record",
    category: "structural-engineering",
    images: [img("ebdi-parkview-at-ashland-senior-housing", 1, "EBDI Parkview at Ashland senior housing building in Baltimore, Maryland")],
  },
  {
    slug: "earl-graves-school-of-business",
    title: "Earl Graves School of Business",
    client: "Morgan State University",
    location: "Baltimore, Maryland",
    role: "Storm Water Management Certification",
    category: "civil-environmental-engineering",
    images: [img("earl-graves-school-of-business", 1, "Earl Graves School of Business at Morgan State University")],
  },
  {
    slug: "fine-arts-building-renovation",
    title: "Fine Arts Building Renovation",
    client: "University of Maryland Baltimore County",
    location: "Catonsville, Maryland",
    role: "Structural Engineer of Record, Renovation",
    category: "project-construction-management",
    images: [img("fine-arts-building-renovation", 1, "Fine Arts Building renovation at the University of Maryland Baltimore County in Catonsville, Maryland")],
  },
  {
    slug: "harlem-park-greening",
    title: "Harlem Park Greening",
    location: "Baltimore, Maryland",
    role: "Engineer of Record, Civil Site Design",
    category: "civil-environmental-engineering",
    featured: true,
    images: [img("harlem-park-greening", 1, "Aerial view of the Harlem Park greening project in Baltimore, Maryland")],
  },
  {
    slug: "historic-lexington-market-master-plan",
    title: "Historic Lexington Market Master Plan",
    location: "Baltimore, Maryland",
    role: "Technical Consultant for Market Renovation and Upgrade",
    category: "project-construction-management",
    images: [
      img("historic-lexington-market-master-plan", 1, "Historic Lexington Market renovation master plan in Baltimore, Maryland"),
      img("historic-lexington-market-master-plan", 2, "Historic Lexington Market upgrade planning in Baltimore, Maryland"),
    ],
  },
  {
    slug: "homer-gudelsky-inpatient-building",
    title: "Homer Gudelsky Inpatient Building",
    client: "University of Maryland Medical Center",
    location: "Baltimore, Maryland",
    role: "Structural Engineer of Record",
    category: "structural-engineering",
    images: [
      img("homer-gudelsky-inpatient-building", 1, "Homer Gudelsky Inpatient Building exterior at the University of Maryland Medical Center"),
      img("homer-gudelsky-inpatient-building", 2, "Homer Gudelsky Inpatient Building interior atrium at the University of Maryland Medical Center"),
      img("homer-gudelsky-inpatient-building", 3, "Homer Gudelsky Inpatient Building entrance canopy at the University of Maryland Medical Center"),
    ],
  },
  {
    slug: "montebello-elementary-middle-school",
    title: "Montebello Elementary/Middle School",
    location: "Baltimore, Maryland",
    role: "Storm Water Management Certification",
    category: "civil-environmental-engineering",
    images: [img("montebello-elementary-middle-school", 1, "Montebello Elementary/Middle School stormwater management site in Baltimore, Maryland")],
  },
  {
    slug: "neptune-regional-transmission-system",
    title: "Neptune 600 MW Regional Transmission System",
    client: "Long Island Power Authority (LIPA)",
    location: "New York",
    role: "Structural Engineer of Record",
    category: "structural-engineering",
    images: [img("neptune-regional-transmission-system", 1, "Neptune 600 MW regional transmission system for the Long Island Power Authority")],
  },
  {
    slug: "ppl-center-allentown",
    title: "PPL Center",
    location: "Allentown, Pennsylvania",
    role: "Structural Consultation – Concrete Systems Installation",
    category: "structural-engineering",
    images: [img("ppl-center-allentown", 1, "PPL Center arena construction in Allentown, Pennsylvania")],
  },
  {
    slug: "post-earthquake-assessment-belmead",
    title: "Post-Earthquake Assessment and Report",
    client: "Belmead on the James Mansion",
    location: "Powhatan, Virginia",
    role: "Structural Engineering Consultant",
    category: "structural-engineering",
    images: [img("post-earthquake-assessment-belmead", 1, "Post-earthquake structural assessment of the Belmead on the James Mansion in Powhatan, Virginia")],
  },
  {
    slug: "princeton-university-neuroscience-building",
    title: "Princeton University Neuroscience Building",
    client: "Princeton University",
    location: "Princeton, New Jersey",
    role: "Structural Consultation – Concrete Retaining Walls",
    category: "structural-engineering",
    images: [img("princeton-university-neuroscience-building", 1, "Concrete retaining wall construction for the Princeton University Neuroscience Building")],
  },
  {
    slug: "martin-building-federal-reserve-renovation",
    title: "Renovation of Martin Building – US Federal Reserve",
    location: "Washington, D.C.",
    role: "Structural Steel Fabrication Engineer, Renovation",
    category: "project-construction-management",
    featured: true,
    images: [
      img("martin-building-federal-reserve-renovation", 1, "Structural steel fabrication during the Martin Building renovation at the US Federal Reserve"),
      img("martin-building-federal-reserve-renovation", 2, "Martin Building exterior at the US Federal Reserve in Washington, D.C."),
    ],
  },
  {
    slug: "shannon-drive-recycling-plant",
    title: "Shannon Drive Recycling Plant",
    location: "Baltimore, Maryland",
    role: "Engineer of Record, Civil Site Design",
    category: "civil-environmental-engineering",
    images: [
      img("shannon-drive-recycling-plant", 1, "Shannon Drive recycling plant site in Baltimore, Maryland"),
      img("shannon-drive-recycling-plant", 2, "Shannon Drive recycling plant civil site design in Baltimore, Maryland"),
    ],
  },
];

export function projectMapQuery(project: Project): string | null {
  const text = project.location ?? project.client;
  if (!text) return null;
  return `${project.title}, ${text}`;
}

export function projectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export const featuredProjects: Project[] = projects.filter((p) => p.featured);
