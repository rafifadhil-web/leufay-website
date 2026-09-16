'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

const links = [['Home','/'],['About','/about/'],['Content','/content/'],['Projects','/projects/'],['Shoppe','/shop/'],['Contact','/contact/']];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return <header className="site-header"><nav className="nav shell" aria-label="Main navigation"><Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="Leufay Production home"><span className="logo-slot"><img src="/assets/logo/logo.png" alt="Leufay Production" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></span><span>LEUFAY<br/><i>PRODUCTION</i></span></Link><div className={`nav-links ${open ? 'is-open' : ''}`}>{links.map(([label, href]) => <Link href={href} key={label} onClick={() => setOpen(false)}>{label}</Link>)}<a className="follow" href={siteConfig.instagram || '#social'}>Follow us ↗</a></div><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span/><span/><span/></button></nav></header>;
}
