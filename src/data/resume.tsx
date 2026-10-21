import { Icons } from "@/components/icons";
import { House, Briefcase, FileText, Library } from "lucide-react";

export const DATA = {
  name: "Apurba Rath",
  initials: "AR",
  url: "https://apurba-portfolio-drab.vercel.app",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad,+Telangana,+India",
  description:
    "Content marketing leader with 8+ years of experience across CMS platforms, SEO-driven go-to-market strategy, and brand scaling.",
  summary:
    "Content marketing leader with 8+ years of experience in CMS platforms (WordPress, Webflow, HubSpot, Contentful, Elementor) and SEO-driven strategy. Skilled in building and leading marketing functions, developing positioning, messaging, editorial strategy, and go-to-market assets across SaaS and tech ecosystems. Strong background in content governance, metadata, and accessibility, delivering scalable digital experiences that drive pipeline and organic growth.",
  avatarUrl: "",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Featured Work",
      heading: "Case Studies & Marketing Highlights",
      text: "A selection of strategic content initiatives, product marketing launches, and GTM frameworks driving measurable pipeline and brand engagement.",
    },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "Hackathons",
      text: "",
    },
    photos: {
      order: 6,
      enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Interested in discussing content strategy, product marketing, or growth initiatives? Feel free to reach out via LinkedIn or email.",
    },
  },
  photos: [],
  skills: [
    { name: "Content Strategy" },
    { name: "Product Marketing" },
    { name: "SEO & Organic Growth" },
    { name: "WordPress" },
    { name: "Webflow" },
    { name: "HubSpot CMS" },
    { name: "Contentful" },
    { name: "Elementor" },
    { name: "Google Analytics (GA4)" },
    { name: "SEMrush" },
    { name: "Ahrefs" },
    { name: "Screaming Frog" },
    { name: "Figma" },
    { name: "Adobe Creative Suite" },
    { name: "Content Governance & WCAG" },
    { name: "Demand Generation" },
    { name: "Marketing Automation" },
    { name: "ClickUp & Workfront" },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Insights" },
    { href: "#work", icon: Briefcase, label: "Experience" },
    { href: "https://pitch.com/v/ar-portfolio-kpvkyc", icon: FileText, label: "Deck" },
  ],
  contact: {
    email: "krishnapurba67@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/apurbar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      PitchDeck: {
        name: "Portfolio Deck",
        url: "https://pitch.com/v/ar-portfolio-kpvkyc",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:krishnapurba67@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Uniblox",
      href: "https://uniblox.com",
      badges: ["Founding Hire"],
      location: "Remote",
      title: "Founding Marketing Manager",
      logoUrl: "https://www.google.com/s2/favicons?domain=uniblox.com&sz=128",
      start: "2026",
      end: undefined,
      description:
        "Built and scaled the content and product marketing function as Uniblox's first marketing hire, developing positioning, messaging, editorial strategy, and go-to-market assets across benefits enrollment, group underwriting, and producer onboarding products. Led end-to-end creation of sales enablement and product marketing collateral for insurance carriers, brokers, and benefits tech partners. Established a repeatable content operating system connecting SEO, thought leadership, product launches, and sales priorities.",
    },
    {
      company: "Phenom People",
      href: "https://phenom.com",
      badges: [],
      location: "Hyderabad, India",
      title: "Content Marketing Manager",
      logoUrl: "https://www.google.com/s2/favicons?domain=phenom.com&sz=128",
      start: "2025",
      end: "2025",
      description:
        "Planned and executed global content initiatives across eBooks, blogs, case studies, and integrated campaigns supporting demand generation and brand awareness. Developed an eBook that drove 29 downloads and 1-4 SQLs in the first month. Authored blogs that rank as top-performing content in public sector recruitment, boosting organic visibility in a regulated, competitive sector. Applied AI tools and automation to editorial workflows, improving delivery speed and consistency.",
    },
    {
      company: "Saras Analytics",
      href: "https://sarasanalytics.com",
      badges: ["Promoted"],
      location: "Hyderabad, India",
      title: "Associate Marketing Manager & Senior SEO Content Writer",
      logoUrl: "https://www.google.com/s2/favicons?domain=sarasanalytics.com&sz=128",
      start: "2022",
      end: "2024",
      description:
        "Directed a comprehensive content review building a repository of 50+ assets (decks, case studies, eBooks, blogs, landing pages). Lifted collateral and landing page engagement by 15.3%. Launched a LinkedIn newsletter campaign increasing subscribers by 157.3%, and raised LinkedIn followers by 68% with 12.1% engagement. Managed and mentored a 5-member content team, boosting efficiency by 75%.",
    },
    {
      company: "Green Turtle Gaming Technologies",
      href: "https://greenturtlegaming.com",
      badges: [],
      location: "Hyderabad, India",
      title: "Content Marketing Specialist",
      logoUrl: "https://avatar.vercel.sh/green-turtle-gaming?size=40",
      start: "2021",
      end: "2022",
      description:
        "Designed content calendars, writing guidelines, and content structures across gaming websites. Produced blogs and web content to drive backlinks and rankings, improving discoverability. Wrote UX/UI-driven copy for apps and sites, elevating customer experience by 25%. Partnered with developers to streamline product marketing and technical SEO workflows.",
    },
    {
      company: "K12 Techno Services",
      href: "https://k12technoservices.com",
      badges: [],
      location: "Bangalore, India",
      title: "Web Content Writer & SEO Analyst",
      logoUrl: "https://avatar.vercel.sh/k12-techno?size=40",
      start: "2020",
      end: "2021",
      description:
        "Executed multi-channel content and SEO campaigns, increasing brand voice by 17% and website traffic by 37%. Secured 5+ featured snippets and People Also Ask results over 2 months. Managed SEO for 35+ branches of Orchid International School, scaling visibility across diverse sites.",
    },
    {
      company: "WirSay Technologies Pvt Ltd",
      href: "https://wirsay.com",
      badges: ["Co-founder"],
      location: "Bhubaneswar, India",
      title: "Cofounder & Marketing Head",
      logoUrl: "https://avatar.vercel.sh/wirsay?size=40",
      start: "2018",
      end: "2020",
      description:
        "Drove campaign efficiency through research on emerging digital trends, informing new products and services. Initiated operational improvements using lean methodologies to reduce costs and improve efficiency. Designed integrated strategies aligning campaigns with brand and revenue goals. Ran targeted social media and paid campaigns, boosting engagement and brand reach.",
    },
    {
      company: "CultureTute",
      href: "https://culturetute.com",
      badges: [],
      location: "Hyderabad, India (Remote)",
      title: "Digital Marketing Manager",
      logoUrl: "https://avatar.vercel.sh/culturetute?size=40",
      start: "2018",
      end: "2018",
      description:
        "Improved page content, keyword relevancy, and branding to achieve search engine optimization goals. Optimized social media strategies for short- and long-term campaigns delivering 35% growth. Drove digital collaboration across functional teams, focusing on delivery and continuous process improvement.",
    },
  ],

  education: [
    {
      school: "Veer Surendra Sai University of Technology (VSSUT)",
      href: "https://vssut.ac.in",
      degree: "Bachelor of Technology, Chemical Engineering (CGPA: 6.65)",
      logoUrl: "https://www.google.com/s2/favicons?domain=vssut.ac.in&sz=128",
      start: "2014",
      end: "2018",
    },
    {
      school: "Professional Certifications",
      href: "https://www.linkedin.com/in/apurbar/",
      degree: "HubSpot Content Marketing, SEMrush Metrics, Google Project Management, Meta Social Media Management",
      logoUrl: "https://avatar.vercel.sh/certifications?size=40",
      start: "2018",
      end: "2025",
    },
  ],

  projects: [
    {
      title: "Executive Content & Marketing Portfolio",
      href: "https://pitch.com/v/ar-portfolio-kpvkyc",
      dates: "2024 - 2026",
      active: true,
      description:
        "Comprehensive portfolio presentation deck showcasing case studies, content strategies, B2B product marketing narratives, and demand generation frameworks.",
      technologies: [
        "Content Strategy",
        "Product Marketing",
        "B2B SaaS",
        "GTM",
        "Pitch Deck",
      ],
      links: [
        {
          type: "Portfolio Deck",
          href: "https://pitch.com/v/ar-portfolio-kpvkyc",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Uniblox GTM & Product Enablement",
      href: "https://uniblox.com",
      dates: "2026",
      active: true,
      description:
        "Full GTM collateral suite and product positioning across benefits enrollment, group underwriting, and producer onboarding. Established the core Content OS connecting SEO with sales priorities.",
      technologies: [
        "Product Marketing",
        "Sales Enablement",
        "Positioning",
        "SEO Strategy",
        "HubSpot CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://uniblox.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Phenom Global Content & Demand Generation",
      href: "https://phenom.com",
      dates: "2025",
      active: true,
      description:
        "Global demand initiatives including high-converting eBooks driving early SQLs, top-ranking public sector recruitment articles, and AI-accelerated editorial workflows.",
      technologies: [
        "Demand Gen",
        "eBook Strategy",
        "Public Sector SEO",
        "Editorial AI",
        "ClickUp",
      ],
      links: [
        {
          type: "Website",
          href: "https://phenom.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Saras Analytics Content Asset Repository & Newsletter",
      href: "https://sarasanalytics.com",
      dates: "2022 - 2024",
      active: true,
      description:
        "Built a 50+ asset marketing repository, redesigned landing page messaging (+15.3% engagement), launched LinkedIn newsletter (+157.3% subscribers), and led a 5-member content team.",
      technologies: [
        "Content Operations",
        "Team Leadership",
        "Webflow",
        "HubSpot CMS",
        "Email Marketing",
      ],
      links: [
        {
          type: "Website",
          href: "https://sarasanalytics.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
};
