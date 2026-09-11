import Link from 'next/link';
import { notFound } from 'next/navigation';
import DocsShell from '@/components/DocsShell';
import Markdown from '@/components/Markdown';
import { getOverview, getSections } from '@/lib/docs';
import { LANGS, UI, isLang } from '@/lib/i18n';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const title = lang === 'es' ? 'X Linux — Documentación' : 'X Linux — Documentation';
  return { title };
}

export default async function DocsHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const t = UI[lang];
  const sections = getSections(lang);
  const overview = getOverview(lang);

  return (
    <DocsShell lang={lang} path="/docs" sections={sections} activeSlug="">
      <Markdown markdown={overview} lang={lang} section="overview" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`/${lang}/docs/${section.pages[0].slug}`}
            className="rounded-2xl border border-x-border bg-x-panel p-6 transition-colors hover:border-x-purple"
          >
            <h3 className="font-bold text-x-text">{section.title[lang]}</h3>
            <p className="mt-2 text-sm text-x-muted">
              {section.pages.length} {t.docs.pages}
            </p>
          </Link>
        ))}
      </div>
    </DocsShell>
  );
}
