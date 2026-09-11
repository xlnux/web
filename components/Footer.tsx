import { GITHUB_ORG } from '@/lib/site';
import { UI, type Lang } from '@/lib/i18n';

export default function Footer({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <footer className="border-t border-x-border px-6 py-8 text-center text-sm text-x-muted">
      <p>{t.footer.tagline}</p>
      <p className="mt-2">
        <a
          href={GITHUB_ORG}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-x-cyan"
        >
          {GITHUB_ORG.replace('https://', '')}
        </a>
        {' · '}
        {t.footer.license}
      </p>
    </footer>
  );
}
