export const site = {
  name: "Sachin Gautam",
  role: "Cybersecurity Student & Associate SOC Analyst",
  tagline:
    "Defending networks through real-time detection, threat hunting, and incident response.",
  email: "sachingautam0b@gmail.com",
  location: "Kalanki, Kathmandu, Nepal",
  domain: "sachin01.com.np",
  url: "https://sachin01.com.np",
  summary:
    "Final-year BScIT student and Associate SOC Analyst with real-world experience in security monitoring, incident response, and threat detection. Hands-on with SIEM platforms in live SOC environments, with a track record of improving detection quality and supporting security operations across multiple client environments. Passionate about cybersecurity, continuous learning, and making security operations more effective.",
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
      "Monitored and triaged security alerts across multiple client environments using SIEM platforms on a 24/7 basis.",
      "Built and tuned detection rules, alerts, and dashboards to improve the quality and accuracy of security event detection.",
      "Validated log ingestion and coverage from systems, applications, and endpoints to ensure complete visibility.",
      "Investigated security incidents, collected evidence, and coordinated containment and remediation with relevant teams.",
      "Conducted proactive threat hunting using the MITRE ATT&CK framework to identify threats before they caused impact.",
      "Documented investigation findings and contributed to improving SOC playbooks and workflows.",
      "Delivered knowledge transfer sessions to new analysts to standardise team processes and improve overall capacity.",
      "Prepared clear security reports for stakeholders, translating technical findings into practical recommendations.",
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
      "Performed log correlation and incident triage to identify and help neutralise potential threats.",
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
      "A local-first OSINT aggregator that builds a digital footprint from a username, email, phone number, or photo - enumerating 75 platforms, checking breach/registration signals, resolving phone carrier data, and pulling image EXIF metadata into one correlation graph with local scan history.",
    tags: ["Python", "FastAPI", "OSINT", "Threat Intel"],
    link: "https://github.com/Sachin0091/osint-digital-footprint-tracker",
  },
  {
    name: "Phishing Website Detector",
    description:
      "A CLI tool that fetches a webpage and scans its content and structure for phishing indicators: brand impersonation, credential-harvesting forms that submit off-domain, hidden iframes, obfuscated JavaScript, and IP-hosted sites.",
    tags: ["Python", "Web Scraping", "Phishing Analysis"],
    link: "https://github.com/Sachin0091/phishing-website-detector",
  },
  {
    name: "Malicious IP Analyzer",
    description:
      "A web application that checks multiple IP addresses for malicious activity using the AbuseIPDB API, with WHOIS lookup for additional context. Built to speed up the IP investigation process during alert triage.",
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
      "A CLI tool that encrypts and decrypts files using Fernet (AES-128-CBC with HMAC authentication), deriving the key from a passphrase via PBKDF2-HMAC-SHA256 with a random per-file salt.",
    tags: ["Python", "Cryptography", "PBKDF2"],
    link: "https://github.com/Sachin0091/file-encryption-decryption-tool",
  },
  {
    name: "Login Authentication System",
    description:
      "A CLI demo of a secure username/password auth flow: PBKDF2-HMAC-SHA256 password hashing with per-user salt, account lockout after repeated failed attempts, and generic error messages that don't leak whether a username exists.",
    tags: ["Python", "PBKDF2", "Auth"],
    link: "https://github.com/Sachin0091/login-authentication-system",
  },
  {
    name: "Network Port Scanner",
    description:
      "A fast, multi-threaded TCP port scanner for auditing hosts on your own network - accepts a port range or explicit list and identifies likely services (SSH, HTTP, HTTPS, MySQL, RDP) with configurable timeout.",
    tags: ["Python", "Networking", "Multi-threading"],
    link: "https://github.com/Sachin0091/network-port-scanner",
  },
  {
    name: "URL Safety Checker",
    description:
      "A CLI tool that analyzes a URL's structure for phishing/scam red flags - IP-hosted links, punycode lookalikes, shorteners, excessive subdomains, @ tricks - and produces a risk rating, with an optional live TLS/redirect check.",
    tags: ["Python", "Phishing Analysis"],
    link: "https://github.com/Sachin0091/url-safety-checker",
  },
  {
    name: "IP Address Information Finder",
    description:
      "A CLI tool that looks up geolocation and network info - country, ISP, ASN, timezone, coordinates - for any IP address, or your own public IP if none is given.",
    tags: ["Python", "OSINT", "Networking"],
    link: "https://github.com/Sachin0091/ip-address-info-finder",
  },
  {
    name: "Password Strength Checker",
    description:
      "A CLI tool that scores password strength from Very Weak to Very Strong based on length, character variety, common-password lists, and predictable patterns, with actionable improvement suggestions.",
    tags: ["Python", "Security"],
    link: "https://github.com/Sachin0091/password-strength-checker",
  },
  {
    name: "Password Generator",
    description:
      "A CLI tool that generates cryptographically secure random passwords using Python's secrets module, with configurable character sets and an unbiased Fisher-Yates shuffle.",
    tags: ["Python", "Cryptography"],
    link: "https://github.com/Sachin0091/password-generator",
  },
  {
    name: "Caesar Cipher Text Encryptor",
    description:
      "A CLI implementation of the classic Caesar shift cipher with a brute-force crack mode that tries all 26 shifts and ranks candidates by letter-frequency scoring.",
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
    degree: "BScIT - Bachelor of Science in Information Technology",
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
