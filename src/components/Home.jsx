import React from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaShieldAlt, FaTerminal } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

const projects = [
  { number: "01", title: "Windows Log Analysis Using Splunk", description: "A personal cybersecurity project focused on analyzing Windows event logs, identifying failed login attempts and unusual account activity, developing searches and dashboards, and documenting findings for security monitoring.", tags: ["Splunk", "Windows Event Logs", "Security Monitoring"] },
  { number: "02", title: "Python TCP Port and Service Scanner", description: "A Python-based learning project that scans selected TCP ports and identifies commonly associated services.", tags: ["Python", "TCP/IP", "Networking"], note: "Use only on systems you own or have explicit permission to test." },
  { number: "03", title: "Cybersecurity Practical Labs", description: "Hands-on learning through TryHackMe topics covering SOC fundamentals, alert triage, junior security analyst skills, and introductory malware analysis.", tags: ["TryHackMe", "SOC Fundamentals", "Alert Triage"] },
];

const skillGroups = [
  { label: "Security tools", items: ["Nmap", "Burp Suite", "Metasploit", "Nessus", "Wireshark"] },
  { label: "Core foundations", items: ["Kali Linux", "Linux & Windows", "TCP/IP", "DNS", "HTTP/HTTPS", "OWASP Top 10"] },
  { label: "Analysis & scripting", items: ["Python scripting", "Splunk", "Windows event logs", "Security monitoring", "Basic SOC concepts"] },
];

const socials = [
  { label: "GitHub", href: "https://github.com/rb410161-lgtm", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/chanchal-barman-b35b07380/", icon: FaLinkedin },
  { label: "TryHackMe", href: "https://tryhackme.com/p/elsaa05", icon: SiTryhackme },
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function Home() {
  return <>
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="availability"><span /> Aspiring cybersecurity professional</div>
        <p className="hero-kicker">SECURITY &middot; ANALYSIS &middot; LEARNING</p>
        <h1>Vinay <span>Barman</span></h1>
        <p className="hero-role">Aspiring Cybersecurity Professional <i>/</i> Security Analyst <i>/</i> Ethical Hacking Enthusiast</p>
        <p className="hero-intro">I am passionate about security analysis, ethical hacking, vulnerability assessment, and defensive security. I learn through hands-on labs, security tools, Python scripting, and practical projects. My goal is to contribute to a security team while continuously improving my technical and analytical skills.</p>
        <div className="hero-actions"><a className="button button-primary" href="mailto:vinaybarman36@gmail.com">Get in touch <FaArrowRight /></a><a className="button button-secondary" href="#projects">Explore projects</a></div>
        <div className="hero-socials">{socials.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer">{label === "GitHub" ? <FaGithub /> : label === "LinkedIn" ? <FaLinkedin /> : <SiTryhackme />} {label}</a>)}</div>
      </div>
      <div className="hero-visual" aria-hidden="true"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-core"><FaShieldAlt /><span>DEFEND<br />&middot; ANALYZE &middot;</span></div><div className="visual-tag tag-top"><FaTerminal /> <span>security.log<br /><b>monitoring active</b></span></div><div className="visual-tag tag-bottom"><span className="status-dot" /> learning by doing</div></div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span>&darr;</span></a>
    </section>

    <section className="section about-section" id="about"><div className="section-wrap"><SectionHeading eyebrow="01 / ABOUT" title="Curious by nature.\nSecurity minded." /><div className="about-content"><p>I&apos;m an aspiring cybersecurity professional building practical skills across security analysis, defensive security, and ethical hacking. I enjoy understanding how systems behave, investigating signals in logs, and learning how to identify and reduce risk.</p><p>My learning combines structured study with hands-on labs and personal projects. I&apos;m working toward contributing to a security team and growing my technical and analytical abilities through real practice.</p><div className="education-card"><div className="education-icon">MSc</div><div><span className="eyebrow">EDUCATION &middot; COMPLETED MAY 2025</span><h3>MSc Computer Science</h3><p>Makhanlal Chaturvedi National University of Journalism and Communication</p><small>Bhopal, Madhya Pradesh</small></div></div></div></div></section>

    <section className="section skills-section" id="skills"><div className="section-wrap"><SectionHeading eyebrow="02 / TECHNICAL SKILLS" title="Tools for the work." text="A growing toolkit built through study and hands-on practice." /><div className="skill-groups">{skillGroups.map((group, i) => <article className="skill-card" key={group.label}><span className="skill-index">0{i + 1}</span><h3>{group.label}</h3><div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

    <section className="section projects-section" id="projects"><div className="section-wrap"><SectionHeading eyebrow="03 / SELECTED PROJECTS" title="Learning through practice." text="Personal projects and practical learning, documented as I build experience." /><div className="project-list">{projects.map(project => <article className="project-card" key={project.number}><span className="project-number">{project.number}</span><div className="project-body"><div className="project-meta"><span className="eyebrow">PERSONAL PROJECT</span><span className="project-mark"><FaShieldAlt /></span></div><h3>{project.title}</h3><p>{project.description}</p>{project.note && <p className="project-note"><b>Use responsibly:</b> {project.note}</p>}<div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>

    <section className="section credentials-section" id="education"><div className="section-wrap credentials-grid"><div><SectionHeading eyebrow="04 / CREDENTIALS" title="Education & certification." /></div><div className="credential-card"><span className="credential-icon">CEH</span><div><span className="eyebrow">CERTIFICATION</span><h3>Certified Ethical Hacker (CEH)</h3><p>Certification details as provided.</p></div></div><div className="credential-card"><span className="credential-icon">MSc</span><div><span className="eyebrow">COMPLETED &middot; MAY 2025</span><h3>MSc Computer Science</h3><p>Makhanlal Chaturvedi National University of Journalism and Communication<br />Bhopal, Madhya Pradesh</p></div></div></div></section>

    <section className="section contact-section" id="contact"><div className="section-wrap contact-wrap"><SectionHeading eyebrow="05 / CONTACT" title="Let&apos;s connect." text="Open to connecting with security professionals and teams. Reach out by email or WhatsApp." /><div className="contact-actions"><a className="button button-primary" href="mailto:vinaybarman36@gmail.com">Email Vinay <FaArrowRight /></a><a className="button button-secondary" href="https://wa.me/918602343403" target="_blank" rel="noreferrer">Message on WhatsApp</a></div><a className="email-line" href="mailto:vinaybarman36@gmail.com">vinaybarman36@gmail.com</a><div className="contact-socials">{socials.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer">{label === "GitHub" ? <FaGithub /> : label === "LinkedIn" ? <FaLinkedin /> : <SiTryhackme />} {label}</a>)}</div></div></section>
    <footer className="site-footer"><a href="#home" className="footer-brand">VB<span>.</span></a><span>&copy; {new Date().getFullYear()} Vinay Barman</span><span>Built with curiosity and care.</span></footer>
  </>;
}
