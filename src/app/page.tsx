'use client';

import Link from 'next/link'; import { AssetPlaceholder } from '@/components/AssetPlaceholder'; import { Reveal } from '@/components/Reveal'; import { SectionTitle } from '@/components/SectionTitle'; import { SiteFrame } from '@/components/SiteFrame'; import { content } from '@/data/content'; import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageProvider';
const create = [
  {
    num: '01',
    title: { en: 'Anime & Pop Culture', id: 'Anime & Pop Culture' },
    desc: {
      en: 'News, recommendations, stories, visuals, and discussions around anime and Japanese pop culture.',
      id: 'Berita, rekomendasi, cerita, visual, dan diskusi seputar anime dan budaya pop Jepang.'
    }
  },
  {
    num: '02',
    title: { en: 'Social Media Content', id: 'Konten Media Sosial' },
    desc: {
      en: 'Creative posts, reels, visual storytelling, and community-focused content.',
      id: 'Post kreatif, reels, storytelling visual, dan konten yang berfokus pada komunitas.'
    }
  },
  {
    num: '03',
    title: { en: 'Creative Digital Projects', id: 'Proyek Digital Kreatif' },
    desc: {
      en: 'Websites, digital concepts, interactive experiences, and experimental projects.',
      id: 'Website, konsep digital, pengalaman interaktif, dan proyek eksperimental.'
    }
  },
  {
    num: '04',
    title: { en: 'Product Discovery', id: 'Penemuan Produk' },
    desc: {
      en: 'Anime-inspired fashion, merchandise, accessories, fragrance, and lifestyle discoveries.',
      id: 'Fashion terinspirasi anime, merchandise, aksesori, parfum, dan berbagai penemuan lifestyle.'
    }
  },
  {
    num: '05',
    title: { en: 'Community & Engagement', id: 'Komunitas & Engagement' },
    desc: {
      en: 'Building spaces where fans can discover, share, and interact with content.',
      id: 'Membangun ruang tempat para penggemar dapat menemukan, berbagi, dan berinteraksi dengan konten.'
    }
  },
  {
    num: '06',
    title: { en: 'Future Experiments', id: 'Eksperimen Masa Depan' },
    desc: {
      en: 'New creative ideas, digital products, and projects currently being explored.',
      id: 'Ide kreatif baru, produk digital, dan proyek yang sedang kami eksplorasi.'
    }
  }
];

export default function Home() { const { language, t } = useLanguage(); return <SiteFrame><section className="hero shell"><div className="hero-copy"><p className="eyebrow">{t.home.eyebrow}</p><span className="hero-kicker">{t.home.kicker}</span><h1>{t.home.titleBefore} <i>{t.home.titleAnime}</i><br/><em>{t.home.titleGames}</em> &amp; <b>{t.home.titlePop}</b><br/>{t.home.titleAfter}</h1><p>{t.home.description}</p><div className="actions"><Link className="button orange" href="/about/">{t.home.explore} <span>→</span></Link><Link className="button line" href="/projects/">{t.home.projects}</Link></div><small className="scroll-note">{t.home.scroll}</small></div><div className="hero-art"><i className="sun-disc"/><i className="hero-star">✦</i><p className="floating-label label-one">{t.home.heroLabel}</p><p className="floating-label label-two">{t.home.heroSubLabel}</p><AssetPlaceholder label="HERO MASCOT / main pose" className="mascot-slot" src="/assets/mascot/mascot.png"/><p className="hero-stamp">{t.home.heroStamp}<br/>?</p></div></section><section className="welcome"><div className="shell split"><Reveal><div className="about-copy"><p className="eyebrow">{t.home.welcomeEyebrow}</p><h2 className="hover-lift">{t.home.welcomeTitle.replace("love.", "")}<em>{language === "en" ? "love." : "sukai."}</em></h2><p>{t.home.welcomeText1}</p><p>{t.home.welcomeText2}</p><Link href="/about/" className="text-link">{t.home.story} <span>→</span></Link></div></Reveal><Reveal className="mini-art">
  <AssetPlaceholder
    label="MASCOT / About pose"
    src="/assets/mascot/about-mascot.png"
  />
  <span>✦</span>
  <b className="about-pill pill-a">{t.home.mascotPillAnime}</b>
  <b className="about-pill pill-b">{t.home.mascotPillGames}</b>
  <b className="about-pill pill-c">{t.home.mascotPillCulture}</b>
  <b className="about-pill pill-d">{t.home.mascotPillCreativity}</b>
</Reveal></div></section><section className="shell section create-section"><SectionTitle eyebrow={t.home.createEyebrow} title={t.home.createTitle}/><div className="create-grid">{create.map((item)=><article className="create-card" key={item.num}><b>{item.num}</b><h3>{item.title[language]}</h3><p>{item.desc[language]}</p><i>✦</i><span aria-hidden>↗</span></article>)}</div></section><section className="content-band"><div className="shell"><SectionTitle eyebrow={t.home.worldEyebrow} title={t.home.worldTitle} text={t.home.worldText}/><div className="feature-grid">{content.slice(0,3).map((item,i)=><article className={`story story-${i}`} key={item.id}><AssetPlaceholder label={`CONTENT IMAGE / ${item.slug}`} /><div><p className="tag">{item.category[language]}</p><h3>{item.title[language]}</h3><p>{item.excerpt[language]}</p><small>{item.date} · <span>{t.home.readStory} →</span></small></div></article>)}</div><Link className="text-link" href="/content/">{t.home.browseContent} <span>→</span></Link></div></section><section className="shell section projects-home"><SectionTitle eyebrow={t.home.projectsEyebrow} title={t.home.projectsTitle}/><div className="project-rows">{projects.map((project,i)=><article className={`project-row project-${i}`} key={project.name.en}><AssetPlaceholder label={`PROJECT COVER / ${project.name[language]}`}/><div><p className="tag">{project.category[language]} · {project.status[language]}</p><h3>{project.name[language]}</h3><p>{project.description[language]}</p><Link href={project.href} className="text-link">{t.home.seeProject} <span>→</span></Link></div></article>)}</div></section><section className="shop-callout"><div className="shell split"><div><p className="eyebrow">{t.home.shoppeEyebrow}</p><h2>{t.home.shoppeTitle}</h2><p>{t.home.shoppeText}</p><Link href="/shop/" className="button navy">{t.home.visitShoppe} <span>→</span></Link></div><AssetPlaceholder label="SHOPPE MASCOT / shopping pose" className="shop-mascot" src="/assets/mascot/shoppe-mascot.png"/></div></section><section id="social" className="shell section social"><SectionTitle eyebrow={t.home.socialEyebrow} title={t.home.socialTitle} text={t.home.socialDescription}/><div className="social-grid">{['01','02','03','04'].map(n=><AssetPlaceholder key={n} label={`INSTAGRAM POST / ${n}`}/>)}</div><a className="button line" href="https://www.instagram.com/leufay.production?stkn=aWhrcnFrdzFpM21p" target="_blank" rel="noreferrer">{t.home.follow} ↗</a></section><section className="final-cta"><div className="shell split"><div><p className="eyebrow">{t.home.finalEyebrow}</p><h2>{t.home.finalTitle}<br/><em>{t.home.finalTitleEmphasis}</em></h2><p>{t.home.finalText}</p><div className="actions"><Link className="button orange" href="/contact/">Start a Conversation →</Link><Link className="button line" href="/projects/">{t.home.exploreProjects}</Link></div></div><AssetPlaceholder label="MASCOT / contact pose" className="cta-mascot" src="/assets/mascot/contact-mascot.png"/></div></section></SiteFrame>; }











