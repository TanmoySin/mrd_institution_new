import rajesh from "../assets/rajesh.png";
import apurba from "../assets/apurba.png";
import nikita from "../assets/nikita.png";
import sashanka from "../assets/sashanka.png";

export const lastUpdated = "2026-05-25";

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  // mapEmbedUrl: string;
  mapShareUrl: string;
  foundedYear: number;
  socialLinks: { platform: string; url: string; icon: string }[];
}

export interface TopperCard {
  name: string;
  score: string;
  class: string;
  board: string;
}

export interface HeroContent {
  headline: string;
  highlightWord: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  nextBatchDate: string;
  topperResults: TopperCard[];
}

export type CategoryStatus = "active" | "coming-soon";

export interface ExamCategory {
  id: string;
  name: string;
  icon: string;
  status: CategoryStatus;
  badge: string;
  title: string;
  description: string;
  features: string[];
  link: string;
}

export interface SubjectItem {
  name: string;
  icon: string;
  desc: string;
}

export interface ScienceTrack {
  name: "Physics" | "Chemistry" | "Biology";
  icon: string;
  colorClass: string;
  bgClass: string;
  description: string;
}

export interface StreamCard {
  name: string;
  icon: string;
  color: string;
  subjects: SubjectItem[];
}

export interface ClassPanel {
  group: string;
  label: string;
  tagline: string;
  description: string;
  subjects?: SubjectItem[];
  scienceTracks?: ScienceTrack[];
  streams?: StreamCard[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface FacultyMember {
  name: string;
  title: string;
  credentials: string[];
  experience: string;
  bio: string;
  initials: string;
  avatarBg?: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  board: string;
  initials: string;
}

export interface BatchInfo {
  name: string;
  classGroup: string;
  startDate: string;
  timing: string;
  days: string;
  seatsTotal: number;
  seatsLeft: number;
}

export type FAQCategory =
  | "All"
  | "Admissions"
  | "Fees"
  | "Batches"
  | "Curriculum"
  | "Infrastructure"
  | "Results";

export interface FAQItem {
  question: string;
  answer: string;
  category: FAQCategory;
}

export interface SiteData {
  siteConfig: SiteConfig;
  hero: HeroContent;
  examCategories: ExamCategory[];
  classPanels: ClassPanel[];
  stats: StatItem[];
  faculty: FacultyMember[];
  testimonials: Testimonial[];
  batches: BatchInfo[];
  faqs: FAQItem[];
}

export const siteData: SiteData = {
  siteConfig: {
    name: "MRD Institutions",
    tagline: "Foundation for Life",
    description:
      "Agartala's premier educational ecosystem delivering elite academic coaching and competitive administrative preparation frameworks.",
    phone: "+917085792233",
    whatsapp: "917085792233",
    email: "mrdinstitutions@gmail.com",
    address: "Hari Ganga Basak Road, Near City Centre",
    city: "Agartala",
    state: "Tripura",
    pincode: "799001",
    // mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14600.283828768488!2d91.2785408!3d23.8160757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1780214371292!5m2!1sen!2sin",
    mapShareUrl: "https://maps.app.goo.gl/Bnt1DVBxC3swFgbY7",
    foundedYear: 2018,
    socialLinks: [
      { platform: "Instagram", url: "#", icon: "Instagram" },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/people/MRD-Institutions/61577661725580/#",
        icon: "Facebook",
      },
      { platform: "YouTube", url: "#", icon: "Youtube" },
    ],
  },

  hero: {
    headline: "Architecting Academic Excellence &",
    highlightWord: "Civil Services",
    subheadline:
      "Tripura's most rigorously structured educational ecosystem. We don't just complete the syllabus; we engineer toppers through data-driven mentorship and elite faculty.",
    ctaPrimary: { label: "Explore Curriculum", href: "#categories" },
    ctaSecondary: { label: "Request Syllabus", href: "#admissions" },
    nextBatchDate: new Date(Date.now() + 12 * 86400000).toISOString(),
    topperResults: [
      { name: "Amit Roy", score: "98.2%", class: "Class 10", board: "CBSE" },
      {
        name: "Priya Debbarma",
        score: "96.4%",
        class: "Class 12",
        board: "TBSE",
      },
      { name: "Sumon Das", score: "97.8%", class: "Class 10", board: "TBSE" },
      { name: "Rima Chakma", score: "95.6%", class: "Class 12", board: "CBSE" },
    ],
  },

  examCategories: [
    {
      id: "school-boards",
      name: "School Boards (6-12)",
      icon: "BookOpen",
      status: "active",
      badge: "Admissions Open",
      title: "Master Your Board Exams",
      description:
        "Build an unbreakable academic foundation. Specialized faculty for CBSE & TBSE with stream-specific coaching.",
      features: [
        "NCERT aligned curriculum",
        "Weekly OMR & subjective tests",
        "Dedicated doubt engines",
        "Physics, Chemistry, Bio split from Class 9",
      ],
      link: "/school-boards",
    },
    {
      id: "upsc",
      name: "UPSC Civil Services",
      icon: "Compass",
      status: "coming-soon",
      badge: "Launching 2026",
      title: "Elite IAS/IPS Foundation",
      description:
        "Directed by UPSC Prelims qualifiers. A comprehensive General Studies architecture designed specifically for Agartala's top aspirants.",
      features: [
        "Mains answer writing practice",
        "The Hindu editorial analysis",
        "CSAT precision training",
        "Delhi-standard mock series",
      ],
      link: "#",
    },
    {
      id: "tpsc",
      name: "State PSC (TCS/TPS)",
      icon: "Award",
      status: "coming-soon",
      badge: "Upcoming",
      title: "Tripura Civil Services",
      description:
        "Targeted preparation for TCS/TPS Executive grades. Deep integration of Tripura's regional history, geography, and socio-economic frameworks.",
      features: [
        "Tripura specific GK modules",
        "Previous year paper analytics",
        "Interview panel simulations",
        "State-level ranking metrics",
      ],
      link: "#",
    },
    {
      id: "cuet",
      name: "CUET Entrance",
      icon: "GraduationCap",
      status: "coming-soon",
      badge: "Upcoming",
      title: "Central University Access",
      description:
        "Transition smoothly from Board exams to India's top Central Universities with our high-speed aptitude and domain-specific training.",
      features: [
        "Computer-based test (CBT) UI",
        "Domain subject mastery",
        "General aptitude tricks",
        "Time-management workshops",
      ],
      link: "#",
    },
    {
      id: "govt-exams",
      name: "Government Job Exams",
      icon: "Briefcase",
      status: "coming-soon",
      badge: "Upcoming",
      title: "Banking, SSC & Railways",
      description:
        "Quantitative aptitude and logical reasoning frameworks designed to crack high-competition central and state recruitment examinations.",
      features: [
        "Short-cut calculation techniques",
        "Banking awareness updates",
        "SSC tier-wise strategy",
        "Speed-test laboratories",
      ],
      link: "#",
    },
  ],

  classPanels: [
    {
      group: "6-8",
      label: "Classes 6, 7 & 8",
      tagline: "The Core Foundation",
      description:
        "The transition from primary to middle school is critical. We focus on building raw cognitive ability, reading comprehension, and numerical logic before the pressure of board exams begins.",
      subjects: [
        {
          name: "Mathematics",
          icon: "Binary",
          desc: "Building absolute clarity in algebra, geometry, and arithmetic logic.",
        },
        {
          name: "Science",
          icon: "Atom",
          desc: "Interactive understanding of natural phenomena and basic physical laws.",
        },
        {
          name: "Social Science",
          icon: "Globe",
          desc: "Connecting history and geography to real-world current events.",
        },
        {
          name: "English",
          icon: "FileText",
          desc: "Advanced grammar frameworks and structured creative writing.",
        },
        {
          name: "Bengali",
          icon: "BookOpen",
          desc: "Deep dive into regional literature and linguistic precision.",
        },
        {
          name: "Hindi",
          icon: "Book",
          desc: "Comprehensive national language structuring and vocabulary.",
        },
      ],
    },
    {
      group: "9-10",
      label: "Classes 9 & 10",
      tagline: "The Board Matrix",
      description:
        "This is where general studies end and specialization begins. We split Science into pure disciplines to ensure students are preemptively prepared for the rigors of Class 11 and competitive entrances.",
      subjects: [
        {
          name: "Mathematics",
          icon: "Calculator",
          desc: "High-level theorems, trigonometry, and complex problem-solving.",
        },
        {
          name: "Social Science",
          icon: "Map",
          desc: "In-depth historical timelines and socio-political frameworks.",
        },
        {
          name: "English",
          icon: "FileText",
          desc: "Board-specific literature analysis and advanced comprehension.",
        },
        {
          name: "Bengali",
          icon: "BookOpen",
          desc: "Higher-order regional literature and grammatical syntax.",
        },
        {
          name: "Hindi",
          icon: "Book",
          desc: "Advanced literary studies and structured essay writing.",
        },
      ],
      scienceTracks: [
        {
          name: "Physics",
          icon: "Zap",
          colorClass: "text-info",
          bgClass: "bg-info/10",
          description:
            "Mechanics, Optics, and Electricity frameworks modeled for early engineering entrance baselines.",
        },
        {
          name: "Chemistry",
          icon: "FlaskConical",
          colorClass: "text-warning",
          bgClass: "bg-warning/10",
          description:
            "Chemical formulas, valence balances, and advanced organic reaction structures.",
        },
        {
          name: "Biology",
          icon: "Dna",
          colorClass: "text-success",
          bgClass: "bg-success/10",
          description:
            "Anatomical systems, plant physiology, and cellular blueprint modeling for pre-medical tracks.",
        },
      ],
    },
    {
      group: "11-12",
      label: "Classes 11 & 12",
      tagline: "Stream Specialization",
      description:
        "The ultimate proving ground. Our faculty delivers university-level depth mapped precisely to CBSE and TBSE blueprints, ensuring maximum scores and competitive readiness.",
      streams: [
        {
          name: "Science Core",
          icon: "Activity",
          color: "border-accent-cyan/20",
          subjects: [
            {
              name: "Physics",
              icon: "Zap",
              desc: "Calculus-based mechanics, electromagnetism, and modern physics.",
            },
            {
              name: "Chemistry",
              icon: "FlaskConical",
              desc: "Physical, Organic, and Inorganic chemistry deep-dives.",
            },
            {
              name: "Mathematics",
              icon: "Calculator",
              desc: "Advanced calculus, algebra, and 3D geometry systems.",
            },
            {
              name: "Biology",
              icon: "Dna",
              desc: "Genetics, evolution, and comprehensive human physiology.",
            },
            {
              name: "English",
              icon: "FileText",
              desc: "Core language, debate, and advanced literary interpretation.",
            },
            {
              name: "Bengali",
              icon: "BookOpen",
              desc: "Elective regional literature mastery.",
            },
            {
              name: "Physical Education",
              icon: "Dumbbell",
              desc: "Anatomy in sports, kinesiology, and physical training theory.",
            },
          ],
        },
        {
          name: "Humanities & Arts",
          icon: "BookMarked",
          color: "border-brand-500/20",
          subjects: [
            {
              name: "Geography",
              icon: "Map",
              desc: "Physical geography, human landscapes, and cartography.",
            },
            {
              name: "History",
              icon: "Hourglass",
              desc: "Ancient, medieval, and modern historical continuity.",
            },
            {
              name: "Political Science",
              icon: "Landmark",
              desc: "Constitutional frameworks and global political theory.",
            },
            {
              name: "Psychology",
              icon: "Brain",
              desc: "Cognitive behavior, human development, and clinical basics.",
            },
            {
              name: "English",
              icon: "FileText",
              desc: "Core language, debate, and advanced literary interpretation.",
            },
            {
              name: "Bengali",
              icon: "BookOpen",
              desc: "Elective regional literature mastery.",
            },
            {
              name: "Physical Education",
              icon: "Dumbbell",
              desc: "Sports psychology and physiological mechanics.",
            },
          ],
        },
      ],
    },
  ],

  stats: [
    {
      value: 12,
      suffix: "+",
      label: "Years of Academic Excellence",
      icon: "Calendar",
    },
    {
      value: 350,
      suffix: "+",
      label: "Government Board Selections",
      icon: "CheckSquare",
    },
    {
      value: 92,
      suffix: "%",
      label: "First Division Success Rate",
      icon: "LineChart",
    },
    {
      value: 1200,
      suffix: "+",
      label: "Total Students Mentored",
      icon: "Users",
    },
  ],

  faculty: [
    {
      name: "Rajesh Das",
      title: "Founder, CEO & Educator",
      credentials: [
        "MA in English",
        "B.Ed & B.P.Ed",
        "3x UPSC Prelims, 2x Mains, 1x Interview",
      ],
      experience: "5+ Years Experience",
      bio: "Architect of the MRD institutional framework. Specializes in mapping high-level administrative competitive patterns down to foundational curricula.",
      initials: "RD",
      image: rajesh,
    },
    {
      name: "Apurba Datta",
      title: "Educator & Psychology Expert",
      credentials: [
        "M.A Clinical Psychology",
        "B.Sc Psychology Honors",
        "B.Ed",
      ],
      experience: "Subject Expert",
      bio: "Drives the foundational and specialized frameworks for behavioral sciences, integrating clinical insights with academic excellence.",
      initials: "AD",
      image: apurba,
    },
    {
      name: "Nikita Debnath",
      title: "Educator & Biology Lead",
      credentials: ["B.Sc Human Physiology (Gold Medalist)", "B.Ed"],
      experience: "Subject Expert",
      bio: "Brings gold-standard expertise in biological sciences, specializing in simplifying complex physiological mechanisms for competitive exams.",
      initials: "ND",
      image: nikita,
    },
    {
      name: "Sashanka Banik",
      title: "Educator & Physics Expert",
      credentials: ["B.Sc Physics", "B.Ed", "CTET & T-TET Qualified"],
      experience: "5+ Years Experience",
      bio: "A highly qualified physics expert dedicated to breaking down mechanics and electromagnetism into intuitive, scorable concepts.",
      initials: "SB",
      image: sashanka,
    },
  ],

  testimonials: [
    {
      quote:
        "The structural breakdown of Science in Class 9 completely changed my daughter's trajectory. The specialized attention in Physics and Chemistry is unmatched in Agartala.",
      name: "Subrata Roy",
      role: "Parent",
      rating: 5,
      board: "CBSE",
      initials: "SR",
    },
    {
      quote:
        "MRD didn't just teach the syllabus; they taught me how to study. The rigorous mock test schedule prepared me perfectly for the actual board environment.",
      name: "Priya Das",
      role: "Class 12 Alumnus",
      rating: 5,
      board: "TBSE",
      initials: "PD",
    },
  ],

  batches: [
    {
      name: "Morning Pioneers",
      classGroup: "Classes 9-10",
      startDate: "15th June 2026",
      timing: "07:00 AM – 09:00 AM",
      days: "Mon · Wed · Fri",
      seatsTotal: 30,
      seatsLeft: 4,
    },
    {
      name: "Evening Achievers",
      classGroup: "Classes 11-12",
      startDate: "1st July 2026",
      timing: "04:30 PM – 06:30 PM",
      days: "Tue · Thu · Sat",
      seatsTotal: 25,
      seatsLeft: 7,
    },
  ],

  faqs: [
    {
      question: "Where is MRD Institutions located?",
      answer:
        "Our centralized, fully air-conditioned campus is located at Hari Ganga Basak Road, Near City Centre, Agartala, Tripura.",
      category: "Infrastructure",
    },
    {
      question: "Does the institute strictly separate CBSE and TBSE batches?",
      answer:
        "Yes. While core concepts overlap, we maintain strictly separate batch timings and study materials for CBSE and TBSE students to ensure perfect alignment.",
      category: "Curriculum",
    },
    {
      question: "What is the fee structure and payment mode?",
      answer:
        "Fees vary based on the class and stream selected. We offer flexible monthly, quarterly, and annual payment plans without hidden charges.",
      category: "Fees",
    },
    {
      question: "How do you track and report student progress?",
      answer:
        "We conduct bi-weekly OMR-based and subjective mock tests. Detailed performance analytics are shared directly with parents via WhatsApp.",
      category: "Results",
    },
  ],
};
