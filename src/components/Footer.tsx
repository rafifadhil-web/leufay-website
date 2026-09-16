import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div><Link className="wordmark" href="/"><span className="logo-slot"><img src="/assets/logo/logo.png" alt="Leufay Production" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></span><span>LEUFAY<br/><i>PRODUCTION</i></span></Link><p>Creative media, anime, games &amp; pop culture.</p></div><div><b>Explore</b><Link href="/about/">About</Link><Link href="/content/">Content</Link><Link href="/projects/">Projects</Link></div><div><b>Connect</b><Link href="/shop/">Link Shoppe</Link><Link href="/contact/">Contact</Link><a href={siteConfig.instagram || '#social'}>Instagram</a></div></div><div className="shell footer-bottom">© 2026 Leufay Production. All rights reserved.<Link href="/privacy/">Privacy</Link></div></footer>;
}
