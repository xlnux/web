'use client';

import { useEffect, useState } from 'react';
import { UI, type Lang } from '@/lib/i18n';

interface Asset {
  name: string;
  browser_download_url: string;
  size: number;
}

const RELEASES_URL = 'https://github.com/xlnux/x/releases';
const WSL_FALLBACK =
  'https://github.com/xlnux/x/releases/download/x/x-2026.01.31.tar.zst';

function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return '';
  }
  const gb = bytes / 1024 ** 3;
  if (gb >= 1) {
    return `${gb.toFixed(2)} GB`;
  }
  return `${Math.round(bytes / 1024 ** 2)} MB`;
}

export default function Downloads({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    let cancelled = false;

    fetch('https://api.github.com/repos/xlnux/x/releases?per_page=20', {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error(String(res.status)))
      )
      .then((releases: { assets: Asset[] }[]) => {
        if (!cancelled) {
          setAssets(releases.flatMap((release) => release.assets));
        }
      })
      .catch(() => {
        // keep the fallback links
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const iso = assets.find((asset) => asset.name.toLowerCase().endsWith('.iso'));
  const wsl = assets.find((asset) => /\.(tar\.zst|tar\.gz)$/i.test(asset.name));

  const items = [
    {
      key: 'iso',
      label: t.downloads.iso,
      href: iso?.browser_download_url ?? RELEASES_URL,
      meta: iso ? `${iso.name} · ${formatSize(iso.size)}` : t.downloads.isoDetail,
    },
    {
      key: 'wsl',
      label: t.downloads.wsl,
      href: wsl?.browser_download_url ?? WSL_FALLBACK,
      meta: wsl ? `${wsl.name} · ${formatSize(wsl.size)}` : t.downloads.wslDetail,
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
        {t.downloads.title}
      </p>
      <div className="mx-auto mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">
        {items.map((item, index) => {
          const primary = index === 0;
          return (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={
                primary
                  ? 'group flex items-center justify-between gap-4 rounded-xl border border-zinc-900 bg-zinc-900 p-4 text-white transition-colors hover:bg-zinc-700 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200'
                  : 'group flex items-center justify-between gap-4 rounded-xl border border-zinc-200 p-4 text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/40'
              }
            >
              <span className="min-w-0">
                <span className="block text-sm font-medium">{item.label}</span>
                <span
                  className={
                    primary
                      ? 'mt-0.5 block truncate font-mono text-[11px] text-zinc-300 dark:text-zinc-600'
                      : 'mt-0.5 block truncate font-mono text-[11px] text-zinc-500 dark:text-zinc-400'
                  }
                >
                  {item.meta}
                </span>
              </span>
              <svg
                className={
                  primary
                    ? 'h-4 w-4 shrink-0 transition-transform group-hover:translate-y-0.5'
                    : 'h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:translate-y-0.5 dark:text-zinc-500'
                }
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
              </svg>
            </a>
          );
        })}
      </div>
    </section>
  );
}
