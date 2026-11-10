# Hello PWA

Najprostsza instalowalna PWA — licznik zapisywany lokalnie na urządzeniu. Eksperyment sprawdzający instalację na tablecie z Androidem i trwałość danych.

Adres: https://gerappa92.github.io/hello-pwa/

## Co pokazuje

- Instalację PWA z Chrome (osobne okno, ikona na ekranie głównym).
- Zapis stanu w `localStorage` — dane żyją **per adres**, więc zmiana URL-a je kasuje.
- Działanie offline dzięki service workerowi.

## Instalacja na tablecie

1. Otwórz adres w Chrome.
2. Menu ⋮ → **Zainstaluj aplikację** (lub „Dodaj do ekranu głównego").
3. Uruchom z ekranu głównego, kliknij licznik, zamknij aplikację i otwórz ponownie — wartość powinna zostać.

## Struktura

| Plik | Rola |
|---|---|
| `index.html` | ekran z licznikiem |
| `app.js` | logika licznika i zapis lokalny |
| `styles.css` | wygląd mobilny |
| `manifest.webmanifest` | metadane PWA (nazwa, ikony, `standalone`) |
| `sw.js` | cache aplikacji i tryb offline |
| `icons/` | ikony 192/512 px, w tym maskowalne |

Bez build stepu — czyste pliki statyczne. Publikacja przez GitHub Pages (gałąź `main`, katalog główny).

## Poza zakresem

OpenRouter, pamięć w Markdown, IndexedDB, jakakolwiek logika lekcji.