'use client';

import Link from 'next/link';
import { XDecryptedText } from '@xscriptor/xcomponents';
import { UI, type Lang } from '@/lib/i18n';

export default function Hero({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(188,19,254,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold leading-none tracking-tight sm:text-7xl">
          <XDecryptedText
            text="X LINUX"
            speed={50}
            sequential
            revealDirection="start"
            animateOn="view"
            className="text-x-text"
            encryptedClassName="text-x-purple"
          />
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-x-muted">
          {t.hero.tagline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={`/${lang}/docs`}
            className="rounded-full bg-x-purple px-6 py-3 font-bold text-x-bg transition-colors hover:bg-x-cyan"
          >
            {t.hero.ctaDocs}
          </Link>
          <a
            href="https://github.com/xlnux"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-x-border px-6 py-3 font-bold text-x-text transition-colors hover:border-x-cyan hover:text-x-cyan"
          >
            {t.hero.ctaGithub}
          </a>
        </div>
      </div>
    </section>
  );
}
