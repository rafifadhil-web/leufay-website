'use client';

import { AssetPlaceholder } from '@/components/AssetPlaceholder';
import { SectionTitle } from '@/components/SectionTitle';
import { SiteFrame } from '@/components/SiteFrame';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <SiteFrame>
      <section className="page-hero shell">
        <p className="eyebrow">{t.about.eyebrow}</p>

        <h1>
          {t.about.titleBefore}
          <br />
          <em>{t.about.titleAfter}</em>
        </h1>

        <p>{t.about.description}</p>

        <AssetPlaceholder
          label="ABOUT MASCOT / story pose"
          src="/assets/mascot/about-mascot.png"
        />
      </section>

      <section className="shell prose-section">
        <SectionTitle
          eyebrow={t.about.storyEyebrow}
          title={t.about.storyTitle}
        />

        <p>{t.about.storyText}</p>

        <div className="beliefs">
          <article>
            <b>{t.about.whyTitle}</b>
            <p>{t.about.whyText}</p>
          </article>

          <article>
            <b>{t.about.believeTitle}</b>
            <p>{t.about.believeText}</p>
          </article>

          <article>
            <b>{t.about.approachTitle}</b>
            <p>{t.about.approachText}</p>
          </article>
        </div>
      </section>

      <section className="timeline">
        <div className="shell">
          <SectionTitle
            eyebrow={t.about.roadEyebrow}
            title={t.about.roadTitle}
          />

          <ol>
            <li>
              <b>2026</b>
              <span>{t.about.year2026}</span>
            </li>

            <li>
              <b>2026+</b>
              <span>{t.about.year2026Plus}</span>
            </li>

            <li>
              <b>{language === 'en' ? 'Future' : 'Masa Depan'}</b>
              <span>{t.about.future}</span>
            </li>
          </ol>
        </div>
      </section>
    </SiteFrame>
  );
}
