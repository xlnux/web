import Link from 'next/link';
import { notFound } from 'next/navigation';
import DocsShell from '@/components/DocsShell';
import Markdown from '@/components/Markdown';
import {
  getPage,
  getSectionTitle,
  getSections,
  getStaticParams,
  getWikiSourceUrl,
} from '@/lib/docs';
import { UI, isLang } from '@/lib/i18n';

export function generateStaticParams() {
  return getStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) {
    return {};
  }
  const page = getPage(lang, slug);
  return { title: page ? `${page.title} · X Linux` : 'X Linux' };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();

  const page = getPage(lang, slug);
  if (!page) notFound();

  const t = UI[lang];
  const sections = getSections(lang);

  return (
    <DocsShell
      lang={lang}
      path={`/docs/${slug.join('/')}`}
      sections={sections}
      activeSlug={slug.join('/')}
    >
      <p className="mb-6 text-xs uppercase tracking-widest text-x-muted">
        <Link href={`/${lang}/docs`} className="hover:text-x-cyan">
          {t.docs.overview}
        </Link>
        {' / '}
        {getSectionTitle(page.section, lang)}
      </p>
      <Markdown markdown={page.markdown} lang={lang} section={page.section} />
      <p className="mt-12 border-t border-x-border pt-6 text-sm">
        <a
          href={getWikiSourceUrl(lang, page.section, page.file)}
          target="_blank"
          rel="noreferrer"
          className="text-x-muted transition-colors hover:text-x-cyan"
        >
          {t.docs.edit}
        </a>
      </p>
    </DocsShell>
  );
}
