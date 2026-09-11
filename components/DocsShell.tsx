import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { UI, type Lang } from '@/lib/i18n';
import type { DocSection } from '@/lib/docs';

export default function DocsShell({
  lang,
  path,
  sections,
  activeSlug,
  children,
}: {
  lang: Lang;
  path: string;
  sections: DocSection[];
  activeSlug: string;
  children: React.ReactNode;
}) {
  const t = UI[lang];

  const nav = (
    <nav className="space-y-6 text-sm">
      <Link
        href={`/${lang}/docs`}
        className={
          activeSlug === ''
            ? 'font-bold text-x-cyan'
            : 'text-x-muted transition-colors hover:text-x-cyan'
        }
      >
        {t.docs.overview}
      </Link>
      {sections.map((section) => (
        <div key={section.id}>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-x-muted">
            {section.title[lang]}
          </p>
          <ul className="space-y-1.5">
            {section.pages.map((page) => {
              const active = page.slug === activeSlug;
              return (
                <li key={page.slug}>
                  <Link
                    href={`/${lang}/docs/${page.slug}`}
                    className={
                      active
                        ? 'font-bold text-x-cyan'
                        : 'text-x-muted transition-colors hover:text-x-text'
                    }
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      <Navbar lang={lang} path={path} />
      <div className="mx-auto flex w-full max-w-6xl flex-1 items-start gap-10 px-6 py-10">
        <aside className="sticky top-20 hidden w-64 shrink-0 lg:block">{nav}</aside>
        <div className="min-w-0 flex-1">
          <details className="mb-6 rounded-xl border border-x-border bg-x-panel px-4 py-3 lg:hidden">
            <summary className="cursor-pointer text-sm font-bold text-x-text">
              {t.docs.menu}
            </summary>
            <div className="pt-4">{nav}</div>
          </details>
          <article className="docs-prose">{children}</article>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
