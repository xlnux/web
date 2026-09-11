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
    <nav className="space-y-7 text-sm">
      <Link
        href={`/${lang}/docs`}
        className={
          activeSlug === ''
            ? 'block font-medium text-zinc-900 dark:text-zinc-50'
            : 'block text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }
      >
        {t.docs.overview}
      </Link>
      {sections.map((section) => (
        <div key={section.id}>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
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
                        ? 'font-medium text-zinc-900 dark:text-zinc-50'
                        : 'text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
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
      <div className="mx-auto flex w-full max-w-5xl flex-1 items-start gap-12 px-6 py-12">
        <aside className="sticky top-20 hidden w-52 shrink-0 lg:block">{nav}</aside>
        <div className="min-w-0 flex-1">
          <details className="mb-8 rounded-xl border border-zinc-200 px-4 py-3 lg:hidden dark:border-zinc-800">
            <summary className="cursor-pointer text-sm font-medium text-zinc-900 dark:text-zinc-50">
              {t.docs.menu}
            </summary>
            <div className="pt-5">{nav}</div>
          </details>
          <article className="docs-prose max-w-2xl">{children}</article>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
