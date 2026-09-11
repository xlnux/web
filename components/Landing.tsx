import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import RepoGrid from './RepoGrid';
import { UI, type Lang } from '@/lib/i18n';

export default function Landing({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <>
      <Navbar lang={lang} path="" />
      <main className="flex-1">
        <Hero lang={lang} />
        <RepoGrid lang={lang} />

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-x-text">{t.landing.pathsTitle}</h2>
          <p className="mt-3 text-x-muted">{t.landing.pathsSubtitle}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-x-border bg-x-panel p-8">
              <h3 className="text-xl font-bold text-x-cyan">{t.landing.pacmanTitle}</h3>
              <p className="mt-3 leading-relaxed text-x-muted">
                {t.landing.pacmanDescription}
              </p>
              <pre className="mt-5 overflow-x-auto rounded-xl border border-x-border bg-black/50 p-4 text-xs text-x-green">
                <code>{`[x]\nServer = https://xlnux.github.io/x-repo/repo/x86_64`}</code>
              </pre>
            </article>
            <article className="rounded-2xl border border-x-border bg-x-panel p-8">
              <h3 className="text-xl font-bold text-x-purple">{t.landing.nativeTitle}</h3>
              <p className="mt-3 leading-relaxed text-x-muted">
                {t.landing.nativeDescription}
              </p>
              <pre className="mt-5 overflow-x-auto rounded-xl border border-x-border bg-black/50 p-4 text-xs text-x-green">
                <code>{`[[repo]]\nserver = ["https://xlnux.github.io/x-repo/x/$arch"]`}</code>
              </pre>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-x-border bg-gradient-to-br from-x-purple/15 via-x-panel to-x-cyan/10 p-10 text-center">
            <h2 className="text-3xl font-bold text-x-text">{t.landing.docsTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-x-muted">
              {t.landing.docsDescription}
            </p>
            <Link
              href={`/${lang}/docs`}
              className="mt-8 inline-block rounded-full bg-x-cyan px-6 py-3 font-bold text-x-bg transition-colors hover:bg-x-purple"
            >
              {t.landing.docsCta}
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
