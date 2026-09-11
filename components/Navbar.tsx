import Link from 'next/link';
import { GITHUB_ORG } from '@/lib/site';
import { UI, type Lang } from '@/lib/i18n';

export default function Navbar({ lang, path }: { lang: Lang; path: string }) {
  const t = UI[lang];
  const other: Lang = lang === 'en' ? 'es' : 'en';

  return (
    <header className="sticky top-0 z-50 border-b border-x-border bg-x-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href={`/${lang}`} className="text-lg font-bold tracking-tight">
          <span className="text-x-purple">X</span>
          <span className="text-x-text">Linux</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link
            href={`/${lang}`}
            className="text-x-muted transition-colors hover:text-x-cyan"
          >
            {t.nav.home}
          </Link>
          <Link
            href={`/${lang}/docs`}
            className="text-x-muted transition-colors hover:text-x-cyan"
          >
            {t.nav.docs}
          </Link>
          <a
            href={GITHUB_ORG}
            target="_blank"
            rel="noreferrer"
            className="text-x-muted transition-colors hover:text-x-cyan"
          >
            {t.nav.github}
          </a>
          <Link
            href={`/${other}${path}`}
            aria-label={t.nav.language}
            className="rounded-full border border-x-border px-3 py-1 text-xs font-bold text-x-text transition-colors hover:border-x-cyan hover:text-x-cyan"
          >
            {other.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
