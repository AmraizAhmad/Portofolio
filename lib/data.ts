export const profile = {
  name: "Amraiz Ahmad",
  initials: "AA",
  title: "BS Cyber Security Student",
  subtitle: "Aspiring Penetration Tester & Red Teamer",
  tagline:
    "Passionate about Ethical Hacking, Penetration Testing, Red Teaming, Linux, Network Security, and Web Application Security.",
  bio: "I am a BS Cyber Security student passionate about Ethical Hacking, Penetration Testing, Red Teaming, Linux, Network Security, and Web Application Security. I continuously improve my skills through hands-on labs, cybersecurity projects, Capture The Flag (CTF) challenges, and industry-recognized certifications. My goal is to become a highly skilled Red Team Operator and Penetration Tester who helps organizations strengthen their security through ethical and responsible security assessments.",
  email: "iamamraiz.ahmad@gmail.com",
  phone: "+92 343 8666435",
  github: "https://github.com/AmraizAhmad",
  githubUser: "AmraizAhmad",
  linkedin: "https://www.linkedin.com/in/amraiz-ahmad-45599241b",
  location: "Faisalabad, Pakistan",
  university: "Superior University",
  degree: "BS Cyber Security",
  expectedGraduation: "2028",
  resumeFile: "/resume-amraiz-ahmad.pdf",
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export const terminalLines = [
  { prompt: "whoami", output: ["Amraiz Ahmad"] },
  { prompt: "role", output: ["BS Cyber Security Student"] },
  {
    prompt: "specialization",
    output: [
      "Ethical Hacking",
      "Penetration Testing",
      "Red Teaming",
      "Linux",
      "Web Security",
    ],
  },
  { prompt: "status", output: ["Always Learning..."] },
];

export const highlights = [
  {
    title: "Continuous Learning",
    description:
      "Constantly leveling up through labs, CTFs, and self-directed research into emerging attack techniques.",
  },
  {
    title: "Problem Solving",
    description:
      "Breaking down complex systems to think like an attacker — then closing the gaps like a defender.",
  },
  {
    title: "Responsible Security",
    description:
      "Committed to ethical, authorized, and disclosure-conscious security testing at every step.",
  },
  {
    title: "Hands-on Practice",
    description:
      "Learning by doing — building labs, automating recon, and documenting every finding.",
  },
];

export const timeline = [
  {
    year: "2023",
    title: "Started BS Cyber Security at Superior University",
    description:
      "Began formal study of security fundamentals, networking, and systems administration, on track to graduate in 2028.",
  },
  {
    year: "2024",
    title: "Went hands-on with offensive security",
    description:
      "Started practicing on TryHackMe and Hack The Box, building a home lab for enumeration and exploitation practice.",
  },
  {
    year: "2025",
    title: "Completed structured cybersecurity training",
    description:
      "Completed Google's Foundations of Cybersecurity certificate and a hands-on Cyber Security training program at Corvit Systems.",
  },
  {
    year: "Now",
    title: "Preparing for the field",
    description:
      "Pursuing further certifications and refining red team methodology ahead of internships and entry-level penetration testing roles.",
  },
];

export type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Operating Systems",
    icon: "Terminal",
    skills: ["Linux", "Kali Linux"],
  },
  {
    category: "Networking",
    icon: "Network",
    skills: ["TCP/IP", "DNS", "HTTP/HTTPS", "Network Security"],
  },
  {
    category: "Programming",
    icon: "Code2",
    skills: ["Python", "Bash"],
  },
  {
    category: "Security",
    icon: "ShieldCheck",
    skills: [
      "Ethical Hacking",
      "Penetration Testing",
      "Red Teaming",
      "Web Application Security",
      "OWASP Top 10",
      "Vulnerability Assessment",
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: ["Nmap", "Burp Suite", "Wireshark", "Gobuster", "Git", "GitHub"],
  },
  {
    category: "Future Learning",
    icon: "Rocket",
    skills: ["Metasploit", "Splunk", "Active Directory"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  status: "Live" | "In Progress" | "Planned";
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "This site — a performance-first portfolio built to present my security work the way a hiring manager actually reads it.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/AmraizAhmad/portfolio",
    demo: "/",
    status: "Live",
  },
  {
    title: "Python Port Scanner",
    description:
      "A multithreaded TCP port scanner with service detection and clean CLI output, built to understand scanning internals beyond Nmap.",
    tech: ["Python", "Sockets", "Threading"],
    github: "https://github.com/AmraizAhmad/python-port-scanner",
    status: "In Progress",
  },
  {
    title: "Network Scanner",
    description:
      "A local network discovery tool that maps live hosts, open ports, and basic OS fingerprints across a subnet.",
    tech: ["Python", "Scapy", "ARP"],
    github: "https://github.com/AmraizAhmad/network-scanner",
    status: "In Progress",
  },
  {
    title: "Linux Notes",
    description:
      "A structured, growing knowledge base of Linux internals, hardening checklists, and command references for day-to-day security work.",
    tech: ["Markdown", "Linux", "Bash"],
    github: "https://github.com/AmraizAhmad/linux-notes",
    status: "Live",
  },
  {
    title: "Password Strength Checker",
    description:
      "A tool that scores password strength against entropy, common patterns, and breach-list exposure to teach better password hygiene.",
    tech: ["Python", "Regex", "HaveIBeenPwned API"],
    github: "https://github.com/AmraizAhmad/password-strength-checker",
    status: "Planned",
  },
  {
    title: "Web Security Labs",
    description:
      "A personal collection of write-ups and PoCs from OWASP Top 10 style labs — SQLi, XSS, IDOR, auth bypass, and more.",
    tech: ["Burp Suite", "OWASP", "DVWA"],
    github: "https://github.com/AmraizAhmad/web-security-labs",
    status: "In Progress",
  },
  {
    title: "Nmap Automation",
    description:
      "A Bash/Python wrapper that chains Nmap scan profiles and auto-generates a readable recon report per target.",
    tech: ["Bash", "Python", "Nmap"],
    github: "https://github.com/AmraizAhmad/nmap-automation",
    status: "Planned",
  },
  {
    title: "Log Analyzer",
    description:
      "A log parsing utility that flags suspicious authentication attempts and common attack signatures from server logs.",
    tech: ["Python", "Pandas", "Regex"],
    github: "https://github.com/AmraizAhmad/log-analyzer",
    status: "Planned",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  issuerLogo?: "google" | "coursera" | "corvit";
  status: "Completed" | "In Progress" | "Coming Soon";
  date?: string;
  image?: string;
  verifyUrl?: string;
};

// Certifications already earned, shown with full detail (logo, image, verify link).
export const certifications: Certification[] = [
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google via Coursera",
    issuerLogo: "google",
    status: "Completed",
    date: "December 2025",
    image: "/certificates/google-cybersecurity.jpg",
    verifyUrl: "https://coursera.org/verify/RFWMWELC1Q1S",
  },
  {
    title: "Cyber Security Training",
    issuer: "Corvit Systems",
    issuerLogo: "corvit",
    status: "Completed",
    date: "September 2025 – November 2025",
    image: "/certificates/corvit-cybersecurity.jpg",
  },
];

// Certifications planned/in progress, shown as lightweight placeholder cards.
export const futureCertifications: { title: string; issuer: string }[] = [
  { title: "Security+", issuer: "CompTIA" },
  { title: "Certified CyberOps Associate", issuer: "Cisco" },
  { title: "Cybersecurity Professional Certificate", issuer: "Google" },
  { title: "Security Fundamentals", issuer: "TryHackMe" },
  { title: "CTF & Lab Practice", issuer: "Hack The Box" },
  { title: "Certified Ethical Hacker (CEH)", issuer: "EC-Council" },
];

