# ĆMA Barbershop — strona

Strona podzielona na trzy pliki + folder z grafikami/wideo:

```
CMA/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── logo-cma.jpg        (logo w nagłówku, stopce i favicon)
    ├── cma-neon-loop.mp4   (wideo neonu w sekcji hero)
    ├── neon-cma.jpg        (poster/klatka startowa wideo, zanim się załaduje)
    ├── fotel-gif.gif       (gif fotela w sekcji „O nas”)
    └── wnetrze-cma.jpg     (zdjęcie wnętrza w sekcji „Kursy barberskie”)
```

## Jak odpalić przez GitHub Pages

1. Wrzuć **całą zawartość** tego folderu (`index.html`, `style.css`, `script.js`, `assets/`) do głównej gałęzi repo `PortfolioSM/CMA`, do katalogu głównego (root) — zachowaj dokładnie te same nazwy plików, bo kod odwołuje się do nich po nazwie (np. `assets/logo-cma.jpg`).
2. W repo na GitHubie: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Wybierz branch `main` i folder `/ (root)`, zapisz.
4. Po chwili strona będzie dostępna pod: `https://portfoliosm.github.io/CMA/`

## Co jest podpięte

- **Logo** (`logo-cma.jpg`) — w nagłówku obok napisu „ĆMA Barbershop”, w stopce i jako favicon karty przeglądarki.
- **Neon loop** (`cma-neon-loop.mp4`) — odtwarza się automatycznie (wyciszony, w pętli) w sekcji hero, obok karty z oceną 5,0 / 317 opinii.
- **Fotel-gif** (`fotel-gif.gif`) — w sekcji „O nas” (Wpadasz na fotel, wychodzisz z klasą).
- **Wnętrze** (`wnetrze-cma.jpg`) — jako tło bloku w sekcji „Kursy barberskie”.
- **Mapa** — prawdziwa, wbudowana mapa Google (bez klucza API) wskazująca adres Marii Konopnickiej 5, 32-600 Oświęcim, w sekcji kontaktowej.

## Dane kontaktowe wpięte w stronę

- Telefon: 531 586 439
- Booksy: https://booksy.com/pl-pl/320725_cma-barbershop_barber-shop_10151_oswiecim#ba_s=seo
- Instagram: https://www.instagram.com/cmabarbershop/
- Facebook: https://www.facebook.com/cmabarbershop/

## Edycja treści

- Teksty, ceny, godziny, linki → `index.html` (szukaj po polskich frazach, np. „Strzyżenie włosów”, „531 586 439”).
- Kolory, typografia, odstępy, animacje → `style.css`.
- Zachowanie zakładek cennika, scroll-reveal, stan nagłówka przy scrollu → `script.js`.

## Uwaga o zespole

Sekcja „Zespół” używa własnoręcznie zaprojektowanych ikon-sylwetek (SVG) zamiast zdjęć — to celowe, nie podmieniaj ich na zdjęcia osób publicznych/polityków.
