export const site = {
  name: "Sachin Gautam",
  role: "Cybersecurity Analyst | SOC Operations & Threat Hunting",
  tagline:
    "Defending networks through real-time detection, threat hunting, and incident response.",
  email: "sachingautam0b@gmail.com",
  location: "Kathmandu, Nepal",
  domain: "sachin01.com.np",
  url: "https://sachin01.com.np",
  summary:
    "Cybersecurity analyst and final-year BScIT student in Kathmandu. Experience in SIEM monitoring, incident investigation and threat hunting at Cryptogen Nepal. Builds practical security tools with Python.",
  social: {
    github: "https://github.com/sachin0091",
    linkedin: "https://www.linkedin.com/in/sachingautam01",
    tryhackme: "https://tryhackme.com/p/sachin01",
  },
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    title: "Associate SOC Analyst",
    company: "Cryptogen Nepal Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    start: "Aug 2025",
    end: "Mar 2026",
    points: [
      "Monitored and triaged security alerts for multiple clients in a 24/7 SOC.",
      "Built and tuned SIEM detection rules and dashboards.",
      "Checked log collection across systems, applications and endpoints.",
      "Investigated incidents, gathered evidence and coordinated containment with other teams.",
      "Hunted for suspicious activity using MITRE ATT&CK.",
      "Documented investigation findings and contributed to improving SOC playbooks and workflows.",
      "Trained new analysts on team processes.",
      "Wrote security reports with clear findings and recommendations.",
    ],
  },
  {
    title: "SOC Analyst Intern",
    company: "Cryptogen Nepal Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    start: "Jun 2025",
    end: "Jul 2025",
    points: [
      "Supported real-time SIEM monitoring and alert analysis across multiple client environments.",
      "Investigated phishing campaigns, suspicious domains, and IP addresses using threat intelligence tools.",
      "Connected related log events and helped assess security incidents.",
      "Contributed to threat hunting and digital forensic investigations as part of the SOC team.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company: "Hack Secure",
    location: "Remote, India",
    start: "Apr 2025",
    end: "May 2025",
    points: [
      "Conducted vulnerability scanning across lab network environments using Nmap and Metasploit.",
      "Participated in simulated penetration testing exercises to identify gaps in security controls.",
      "Wrote technical reports summarising vulnerabilities, their potential impact, and remediation steps.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "OSINT Digital Footprint Tracker",
    description:
      "Checks usernames across 75 platforms and brings together breach signals, phone details and photo metadata. Built to make digital footprint investigations easier to review.",
    tags: ["Python", "FastAPI", "OSINT", "Threat Intel"],
    link: "https://github.com/Sachin0091/osint-digital-footprint-tracker",
  },
  {
    name: "Phishing Website Detector",
    description:
      "Scans webpages for fake login forms, brand impersonation and other signs of phishing. Flags suspicious page elements for further investigation.",
    tags: ["Python", "Web Scraping", "Phishing Analysis"],
    link: "https://github.com/Sachin0091/phishing-website-detector",
  },
  {
    name: "Malicious IP Analyzer",
    description:
      "Checks IP reputation with AbuseIPDB and adds WHOIS information. Puts the details needed for alert triage in one place.",
    tags: ["Python", "AbuseIPDB API", "WHOIS", "Threat Intel"],
    link: "https://github.com/Sachin0091/MaliciousIPAnalyser",
  },
  {
    name: "Rato Daku",
    description:
      "A collaborative Android security testing tool that uses ADB to identify mobile vulnerabilities and security misconfigurations in Android devices.",
    tags: ["Android", "ADB", "Mobile Security"],
    link: "https://github.com/pbscybsec/Rato_Daku",
  },
  {
    name: "File Encryption & Decryption Tool",
    description:
      "Encrypts and decrypts files using a passphrase. Uses Fernet encryption and PBKDF2 key derivation with a separate random salt for each file.",
    tags: ["Python", "Cryptography", "PBKDF2"],
    link: "https://github.com/Sachin0091/file-encryption-decryption-tool",
  },
  {
    name: "Login Authentication System",
    description:
      "A login demo with salted password hashing and account lockout after repeated failed attempts. Uses generic errors to avoid exposing account details.",
    tags: ["Python", "PBKDF2", "Auth"],
    link: "https://github.com/Sachin0091/login-authentication-system",
  },
  {
    name: "Network Port Scanner",
    description:
      "Checks multiple TCP ports at once and identifies common services such as SSH, HTTP and RDP. Supports custom port ranges and timeouts.",
    tags: ["Python", "Networking", "Multi-threading"],
    link: "https://github.com/Sachin0091/network-port-scanner",
  },
  {
    name: "URL Safety Checker",
    description:
      "Checks links for suspicious domains, misleading characters and other phishing indicators. Includes optional TLS and redirect checks.",
    tags: ["Python", "Phishing Analysis"],
    link: "https://github.com/Sachin0091/url-safety-checker",
  },
  {
    name: "IP Address Information Finder",
    description:
      "Looks up the location, internet provider and network details of an IP address.",
    tags: ["Python", "OSINT", "Networking"],
    link: "https://github.com/Sachin0091/ip-address-info-finder",
  },
  {
    name: "Password Strength Checker",
    description:
      "Checks password length, common patterns and character variety. Explains weaknesses and suggests improvements.",
    tags: ["Python", "Security"],
    link: "https://github.com/Sachin0091/password-strength-checker",
  },
  {
    name: "Password Generator",
    description:
      "Generates random passwords using Python's secrets module with configurable character sets.",
    tags: ["Python", "Cryptography"],
    link: "https://github.com/Sachin0091/password-generator",
  },
  {
    name: "Caesar Cipher Text Encryptor",
    description:
      "A learning project that encrypts text with a Caesar cipher and tries all 26 shifts to decode it.",
    tags: ["Python", "Cryptography"],
    link: "https://github.com/Sachin0091/caesar-cipher-text-encryptor",
  },
];

export const achievements: string[] = [
  "Identified and reported security vulnerabilities in a local web platform including unauthorised access and enumeration issues, with recommended fixes.",
  "Reported a fraudulent online scam to the Cyber Bureau, contributing to the apprehension of the individual responsible.",
  "Active contributor to a cybersecurity club focused on dark web monitoring, reporting data leaks, and identifying malicious online activity.",
  "Consistent participant in CTF competitions on TryHackMe and Blue Team Labs Online with top-tier rankings.",
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  { name: "Fortinet Certified Fundamentals Cybersecurity", issuer: "Fortinet", date: "Jul 2025" },
  { name: "Getting Started in Cybersecurity 3.0", issuer: "Fortinet", date: "Jul 2025" },
  { name: "Introduction to the Threat Landscape 3.0", issuer: "Fortinet", date: "Jul 2025" },
  { name: "Python Essentials 1", issuer: "Cisco Networking Academy", date: "Mar 2025" },
  { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services", date: "Feb 2025" },
  { name: "Ethical Hacker", issuer: "Cisco Networking Academy", date: "Sep 2024" },
  { name: "Cyber Threat Management", issuer: "Cisco Networking Academy", date: "Sep 2024" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "Nov 2024" },
  { name: "AWS Academy: Cloud Web Application Builder", issuer: "Amazon Web Services", date: "Sep 2024" },
  { name: "ISO/IEC 27001:2022 Information Security Associate", issuer: "SkillFront", date: "2024" },
  { name: "Introduction to Critical Infrastructure Protection", issuer: "OPSWAT Academy", date: "2024" },
  { name: "Introduction to Networking", issuer: "HTB Academy", date: "2024" },
];

export type EducationItem = {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
};

export const education: EducationItem[] = [
  {
    degree: "BScIT (Bachelor of Science in Information Technology)",
    school: "Presidential Graduate School",
    location: "Baneshwor, Kathmandu",
    start: "Jul 2022",
    end: "Present",
  },
  {
    degree: "+2 Science (Computer Science)",
    school: "Little Angels College",
    location: "Hattiban, Lalitpur",
    start: "2020",
    end: "2022",
  },
  {
    degree: "Secondary Education Examination (SEE)",
    school: "Bardiya Academy and Polytechnic Research Centre",
    location: "Bardiya",
    start: "2010",
    end: "2020",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "SIEM Platforms", items: ["LogPoint", "FortiSIEM", "LogRhythm"] },
  {
    category: "Security Operations",
    items: ["Alert Triage", "Incident Response", "Threat Hunting", "Log Correlation", "Detection Tuning"],
  },
  { category: "Frameworks", items: ["MITRE ATT&CK", "Cyber Kill Chain"] },
  {
    category: "Tools",
    items: ["Kali Linux", "Wireshark", "Nmap", "Metasploit", "OSINT Tools", "Digital Forensics", "Active Directory"],
  },
  { category: "Networking", items: ["TCP/IP", "DNS", "HTTP", "Packet Analysis"] },
  { category: "Programming", items: ["Python", "Bash", "JavaScript"] },
  { category: "Cloud", items: ["AWS Cloud Practitioner", "AWS Web Application Builder"] },
  { category: "Languages", items: ["Nepali (Native)", "Hindi (Fluent)", "English (Professional)"] },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
