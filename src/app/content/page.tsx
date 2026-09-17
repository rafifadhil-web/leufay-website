'use client';

import { useMemo, useState } from 'react';
import { AssetPlaceholder } from '@/components/AssetPlaceholder';
import { SiteFrame } from '@/components/SiteFrame';
import { content } from '@/data/content';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function ContentPage() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const { language } = useLanguage();

  const categories = [
    'All',
    ...Array.from(
      new Set(content.map((item) => item.category[language]))
    ),
  ];

  const items = useMemo(
    () =>
      content.filter((item) => {
        const category = item.category[language];
        const title = item.title[language];

        return (
          (filter === 'All' || category === filter) &&
          title.toLowerCase().includes(query.toLowerCase())
        );
      }),
    [filter, query, language]
  );

  return (
    <SiteFrame>
      <section className="page-hero shell compact">
        <p className="eyebrow">
          {language === 'en' ? 'THE LEUFAY WORLD' : 'DUNIA LEUFAY'}
        </p>

        <h1>
          {language === 'en' ? (
            <>
              Stories worth<br />
              <em>getting lost in.</em>
            </>
          ) : (
            <>
              Cerita yang layak<br />
              <em>untuk dijelajahi.</em>
            </>
          )}
        </h1>

        <p>
          {language === 'en'
            ? 'Fresh pop-culture curiosities, watchlists, visual notes, and more.'
            : 'Temuan pop culture terbaru, watchlist, catatan visual, dan banyak lagi.'}
        </p>
      </section>

      <section className="shell content-controls">
        <label>
          <span className="sr-only">
            {language === 'en' ? 'Search content' : 'Cari konten'}
          </span>

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              language === 'en'
                ? 'Search the world...'
                : 'Cari di dunia Leufay...'
            }
          />
        </label>

        <div className="chips">
          {categories.map((category) => (
            <button
              onClick={() => setFilter(category)}
              className={filter === category ? 'active' : ''}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="shell content-grid">
        {items.map((item) => (
          <article className="story" key={item.id}>
            <AssetPlaceholder
              label={`CONTENT IMAGE / ${item.slug}`}
            />

            <div>
              <p className="tag">
                {item.category[language]}
              </p>

              <h2>
                {item.title[language]}
              </h2>

              <p>
                {item.excerpt[language]}
              </p>

              <small>
                {item.date} ·{' '}
                {language === 'en'
                  ? 'Read story →'
                  : 'Baca cerita →'}
              </small>
            </div>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
