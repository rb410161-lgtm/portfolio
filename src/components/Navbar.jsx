import React, { useState } from "react";

const links = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Education", "education"], ["Contact", "contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav-wrap" aria-label="Main navigation"><a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">VB<span>.</span></span><span className="brand-name">Vinay Barman<small>CYBERSECURITY PORTFOLIO</small></span></a><button className="menu-toggle" type="button" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span /><span /></button><div className={`nav-links ${open ? "nav-open" : ""}`}>{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-contact" href="mailto:vinaybarman36@gmail.com" onClick={() => setOpen(false)}>Let’s talk <span>↗</span></a></div></nav></header>;
}
