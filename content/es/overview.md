# Documentación de X Linux

**X Linux** es una distribución minimalista basada en Arch, construida a partir de
los repositorios oficiales de Arch, con un instalador de texto guiado por scripts,
branding propio y una capa de aprovisionamiento.

Este sitio reúne la documentación de todos los repositorios de la organización
`xlnux` en inglés y español. Usa la barra lateral para navegar por componente, o
empieza por los temas de abajo.

## Qué vas a encontrar

- **X Linux** — la distribución: build del ISO, instalador y pruebas en VM.
- **X para WSL** — rootfs importable y configuración de WSL.
- **Scripts de WSL** — el setup de usuario amigable para WSL.
- **Scripts y CLI** — el payload de aprovisionamiento y el comando `x`.
- **xpm** — el gestor de paquetes en Rust.
- **xpkg** — el builder de paquetes en Rust.
- **x-repo** — el repositorio binario de paquetes y el portal de paquetes.
- **web** — este portal de documentación.

## Repositorios

| Repositorio | Rol |
|---|---|
| [`xlnux/x`](https://github.com/xlnux/x) | Distribución: perfil archiso, instalador de texto, build del ISO. |
| [`xlnux/wsl`](https://github.com/xlnux/wsl) | X Linux para WSL: rootfs importable y configuración. |
| [`xlnux/wsl-scripts`](https://github.com/xlnux/wsl-scripts) | Setup de usuario para WSL. |
| [`xlnux/scripts`](https://github.com/xlnux/scripts) | Payload de aprovisionamiento y CLI (`x`). |
| [`xlnux/xpm`](https://github.com/xlnux/xpm) | Gestor de paquetes nativo (formato ALPM). |
| [`xlnux/xpkg`](https://github.com/xlnux/xpkg) | Builder de paquetes nativo (recetas `XBUILD`). |
| [`xlnux/x-repo`](https://github.com/xlnux/x-repo) | Repositorio binario de paquetes (`[x]`) y portal de paquetes. |
| [`xlnux/wiki`](https://github.com/xlnux/wiki) | Fuentes de documentación de este sitio. |
| [`xlnux/web`](https://github.com/xlnux/web) | Este portal: landing y docs navegables. |

> La documentación se mantiene en [`xlnux/wiki`](https://github.com/xlnux/wiki) y se
> renderiza aquí. Cada página existe en inglés y español; usa el selector de idioma
> en la barra superior.
