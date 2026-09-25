# Ayotzinapa 43 · Ecos de México

Sitio escolar de memoria sobre la desaparición forzada de los 43 estudiantes de la Escuela Normal Rural Raúl Isidro Burgos (Iguala, Guerrero, 26–27 de septiembre de 2014).

Página única: `index.html`.

## Archivos para GitHub

Sube **toda esta carpeta** a la raíz del repositorio (no dentro de otra carpeta):

```
index.html
sw.js
README.md
.gitignore
imgs/marchas/   (9 fotos de memoriales)
imgs/fichas/    (43 retratos de búsqueda)
```

## Publicar en GitHub Pages

1. Crea un repo **público** (por ejemplo `ayotzinapa-43`).
2. Sube los archivos a la rama `main`, en la raíz.
3. Settings → Pages → Source: `Deploy from a branch`.
4. Branch: `main` / folder: `/ (root)` → Save.
5. La URL queda: `https://TU-USUARIO.github.io/ayotzinapa-43/`

Si usas el repo `history-game` de Ecos de México, deja `index.html` como portada o cambia el nombre de este archivo a `ayotzinapa-43.html` y enlázalo desde tu portada.

## Datos móviles

El HTML pesa poco (no lleva las fotos pegadas en base64).

- Primero carga el texto y 2 fotos de la galería.
- El resto de marchas y las 43 fichas se piden con `loading="lazy"` solo cuando bajas la página.
- El service worker guarda lo ya visto; la segunda visita gasta menos datos.

Peso aproximado:

| Parte | Peso |
|--------|------|
| `index.html` | ~30 KB |
| 9 marchas | ~0.7 MB |
| 43 fichas | ~0.4 MB |
| **Total si ves todo** | **~1.1 MB** |

## Contenido

- Línea de tiempo (Normal, noche del 26–27, búsqueda, verdad, memoria).
- 43 fichas con los retratos de los carteles de búsqueda.
- Referencias al final de la página.
- No hay escenas de violencia.

## Fuentes (resumen)

GIEI / CIDH, COVAJ 2022, Amnistía Internacional, EAAF, AP, New York Times, Centro de Medios Libres (retratos 2014), Wikimedia Commons. La lista completa está en la sección **Referencias bibliográficas y fuentes** de `index.html`.

26 de septiembre no se olvida.
