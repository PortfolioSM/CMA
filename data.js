// ============================================================
//  ĆMA Barbershop — baza danych strony
//  Edytuj ten plik żeby zaktualizować opinie i statystyki.
//
//  JAK DODAĆ OPINIĘ:
//  1. Skopiuj blok { imie, plec, tresc, zrodlo } z Booksy
//  2. Wklej jako nowy element tablicy "opinie" poniżej
//  3. Zapisz plik i spushuj na GitHub — strona zaktualizuje się automatycznie
//
//  JAK ZAKTUALIZOWAĆ STATYSTYKI:
//  Zmień wartości w sekcji "stats" poniżej.
// ============================================================

const CMA_DATA = {

  stats: {
    booksy_count:   "300+",   // liczba opinii na Booksy (np. "317" albo "300+")
    booksy_rating:  "5,0",    // średnia ocena Booksy
    google_rating:  "4,9",    // średnia ocena Google
    instagram:      "500+",   // obserwujący na Instagramie
    barberzy:       "5"       // liczba barberów na fotelu
  },

  opinie: [
    {
      imie:    "Nikola",
      plec:    "K",           // "K" = klientka, "M" = klient
      tresc:   "Pełna profeska, luźna atmosfera i świetne strzyżenie za każdym razem. Wracam tu już ponad rok i nigdy się nie zawiodłem.",
      zrodlo:  "Booksy"
    },
    {
      imie:    "Jacek",
      plec:    "M",
      tresc:   "Świetna obsługa, dbałość o detale i super efekt końcowy. Klimat lokalu robi robotę — czuć, że to nie jest przypadkowe miejsce.",
      zrodlo:  "Booksy"
    },
    {
      imie:    "Jakub",
      plec:    "M",
      tresc:   "Byłem pierwszy raz i jestem bardzo zadowolony. Konsultacja przed cięciem zrobiła różnicę. Polecam każdemu, kto szuka konkretu.",
      zrodlo:  "Booksy"
    },
    {
      imie:    "Michał",
      plec:    "M",
      tresc:   "Rezerwacja w 30 sekund przez Booksy, na miejscu zero czekania. Fade dokładnie taki, o jaki prosiłem. Punkt na mapie barberów w Oświęcimiu.",
      zrodlo:  "Booksy"
    },
    {
      imie:    "Piotr",
      plec:    "M",
      tresc:   "Brodę miałem zaniedbaną od miesięcy. Wyszedłem jak nowo narodzony. Repigmentacja na siwe włosy — efekt naturalny, nie sztuczny.",
      zrodlo:  "Booksy"
    }
  ]

};
