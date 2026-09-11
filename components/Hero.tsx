import Link from 'next/link';
import { GITHUB_ORG } from '@/lib/site';
import { UI, type Lang } from '@/lib/i18n';

export default function Hero({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section className="px-6 pb-20 pt-24 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
          X Linux
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
          {t.hero.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/${lang}/docs`}
            className="inline-flex h-10 items-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {t.hero.ctaDocs}
          </Link>
          <a
            href={GITHUB_ORG}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center rounded-lg border border-zinc-200 px-4 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-50"
          >
            {t.hero.ctaGithub}
          </a>
        </div>
      </div>
    </section>
  );
}
