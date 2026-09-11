import { notFound } from 'next/navigation';
import Landing from '@/components/Landing';
import { LANGS, isLang } from '@/lib/i18n';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return {
    title:
      lang === 'es' ? 'X Linux — Documentación' : 'X Linux — Documentation',
  };
}

export default async function LangHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return <Landing lang={lang} />;
}
