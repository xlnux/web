export type Lang = 'en' | 'es';

export const LANGS: Lang[] = ['en', 'es'];

export function isLang(value: string): value is Lang {
  return value === 'en' || value === 'es';
}

export interface UIStrings {
  nav: {
    home: string;
    docs: string;
    github: string;
    language: string;
  };
  hero: {
    tagline: string;
    ctaDocs: string;
    ctaGithub: string;
  };
  landing: {
    reposTitle: string;
    reposSubtitle: string;
    pathsTitle: string;
    pathsSubtitle: string;
    pacmanTitle: string;
    pacmanDescription: string;
    nativeTitle: string;
    nativeDescription: string;
    docsTitle: string;
    docsDescription: string;
    docsCta: string;
  };
  docs: {
    title: string;
    subtitle: string;
    overview: string;
    pages: string;
    edit: string;
    menu: string;
  };
  footer: {
    tagline: string;
    license: string;
  };
}

export const UI: Record<Lang, UIStrings> = {
  en: {
    nav: {
      home: 'Home',
      docs: 'Docs',
      github: 'GitHub',
      language: 'Language',
    },
    hero: {
      tagline:
        'A minimal Arch-based distribution, its tooling and its documentation — all in one place.',
      ctaDocs: 'Read the docs',
      ctaGithub: 'GitHub',
    },
    landing: {
      reposTitle: 'Repositories',
      reposSubtitle:
        'Every component of the X Linux project lives in the xlnux organization.',
      pathsTitle: 'Two packaging paths',
      pathsSubtitle:
        'X uses Arch-compatible packages for pacman and its own native format for xpm.',
      pacmanTitle: 'pacman · [x] repository',
      pacmanDescription:
        'Arch-compatible .pkg.tar.zst packages served from x-repo. Add the [x] repository to pacman.conf and install with pacman -S.',
      nativeTitle: 'xpm · native .xp',
      nativeDescription:
        'Native packages built by xpkg from XBUILD recipes and installed with xpm. The endpoint lives under x-repo/x/x86_64.',
      docsTitle: 'Documentation',
      docsDescription:
        'Guides for the distro, WSL, provisioning, packaging and the package repository — in English and Spanish.',
      docsCta: 'Browse documentation',
    },
    docs: {
      title: 'Documentation',
      subtitle: 'Guides for every repository of the X Linux project.',
      overview: 'Overview',
      pages: 'pages',
      edit: 'Edit this page on GitHub',
      menu: 'Documentation menu',
    },
    footer: {
      tagline: 'X Linux — minimal, powerful, yours.',
      license: 'GPL-3.0 · Built with Next.js',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      docs: 'Docs',
      github: 'GitHub',
      language: 'Idioma',
    },
    hero: {
      tagline:
        'Una distribución minimalista basada en Arch, su tooling y su documentación — todo en un solo lugar.',
      ctaDocs: 'Leer la documentación',
      ctaGithub: 'GitHub',
    },
    landing: {
      reposTitle: 'Repositorios',
      reposSubtitle:
        'Cada componente del proyecto X Linux vive en la organización xlnux.',
      pathsTitle: 'Dos vías de empaquetado',
      pathsSubtitle:
        'X usa paquetes compatibles con Arch para pacman y su propio formato nativo para xpm.',
      pacmanTitle: 'pacman · repositorio [x]',
      pacmanDescription:
        'Paquetes .pkg.tar.zst compatibles con Arch servidos desde x-repo. Agrega el repositorio [x] a pacman.conf e instala con pacman -S.',
      nativeTitle: 'xpm · .xp nativo',
      nativeDescription:
        'Paquetes nativos construidos por xpkg desde recetas XBUILD e instalados con xpm. El endpoint vive en x-repo/x/x86_64.',
      docsTitle: 'Documentación',
      docsDescription:
        'Guías de la distro, WSL, aprovisionamiento, empaquetado y el repositorio de paquetes — en inglés y español.',
      docsCta: 'Ver documentación',
    },
    docs: {
      title: 'Documentación',
      subtitle: 'Guías de todos los repositorios del proyecto X Linux.',
      overview: 'Resumen',
      pages: 'páginas',
      edit: 'Editar esta página en GitHub',
      menu: 'Menú de documentación',
    },
    footer: {
      tagline: 'X Linux — minimal, powerful, yours.',
      license: 'GPL-3.0 · Hecho con Next.js',
    },
  },
};
