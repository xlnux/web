'use client';

import { XRepoCard } from '@xscriptor/xcomponents';
import { REPOS } from '@/lib/site';
import { UI, type Lang } from '@/lib/i18n';

export default function RepoGrid({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-x-text">{t.landing.reposTitle}</h2>
      <p className="mt-3 text-x-muted">{t.landing.reposSubtitle}</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REPOS.map((repo, index) => (
          <XRepoCard
            key={repo.name}
            title={repo.name}
            description={repo.description[lang]}
            href={repo.href}
            openInNewTab
            animationDelay={index * 0.05}
            colors={{
              background: 'var(--color-x-panel)',
              border: 'var(--color-x-border)',
              hoverBorder: 'var(--color-x-purple)',
              foreground: 'var(--color-x-text)',
              primary: 'var(--color-x-purple)',
              muted: 'var(--color-x-muted)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
