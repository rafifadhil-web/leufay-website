'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { useLanguage } from '@/i18n/LanguageProvider';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    [t.nav.home, '/'],
    [t.nav.about, '/about/'],
    [t.nav.content, '/content/'],
    [t.nav.projects, '/projects/'],
    [t.nav.shoppe, '/shop/'],
    [t.nav.contact, '/contact/'],
  ];

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <Link
          className="wordmark"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Leufay Production home"
        >
          <span className="logo-slot">
            <img
              src="/assets/logo/logo.png"
              alt="Leufay Production"
            />
          </span>

          <span>
            LEUFAY
            <br />
            <i>PRODUCTION</i>
          </span>
        </Link>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <Link
              href={href}
              key={label}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div
            className="language-switcher"
            aria-label="Language selector"
          >
            <button
              type="button"
              className={language === 'en' ? 'is-active' : ''}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>

            <span>/</span>

            <button
              type="button"
              className={language === 'id' ? 'is-active' : ''}
              onClick={() => setLanguage('id')}
              aria-pressed={language === 'id'}
            >
              ID
            </button>
          </div>

          <a
            className="follow"
            href={siteConfig.instagram || '#social'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.follow}
          </a>
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}