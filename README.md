# CAELVM — Astronomische Kalenderwerke

Live: **https://abuelia81.github.io/caelum/**

## Seitenstruktur

| Datei | Rolle |
|-------|-------|
| `index.html` | Weiterleitung auf `caelum.html` |
| `caelum.html` | Hauptseite · Shop mit Warenkorb und Kasse · Venus im Fokus · Live-Demo |
| `werke.html` | Sammlung aller übrigen Werke · verlinkt in den Warenkorb der Hauptseite |
| `inanna.html` | Der Mythos vom Gang in die Unterwelt, Tor für Tor gegen den Venuslauf gelesen · verlinkt aus der Torzeile der Venus-App |

## Die Apps der Hauptseite

Von `caelum.html` als Kacheln verlinkt, jede eine eigenständige Einzeldatei.

| Datei | App |
|-------|-----|
| `venus.html` | **Die Venus-App** · kompakt, installierbar, offline lauffähig |
| `algol.html` | Algol-Kalender · Lichtkurve, nächste Finsternis, Kairo-Kalender der Glücks- und Unglückstage |
| `dekane.html` | Die 36 Dekane · Dekangötter nach dem Heiligen Buch des Hermes an Asklepios |
| `finsternistafel.html` | Finsternistafel · Sonnen- und Mondfinsternisse für den eigenen Ort, mit Drachenschlange und Deutungen |

## Die Venus-App (`venus.html`)

Eigenständige Einzeldatei ohne externe Abhängigkeiten — funktioniert per Doppelklick
und offline.

- **Sichtbarkeit für den eigenen Standort** — Auf- und Untergang, Höhe über dem
  Horizont, Himmelsrichtung, Sichtbarkeitsfenster gegen die Dämmerung. Der Tag wird
  in 720 Schritten zu zwei Minuten abgetastet.
- **Phasenscheibe**, deren Größe mit der Annäherung wächst (9,7″ … 66″)
- **Kennzahlen** — Helligkeit, beleuchteter Anteil, Elongation, Scheibendurchmesser
- **Ereignisse** — größte Elongation, untere und obere Konjunktion sowie größte
  Helligkeit (die bei ≈ 39° Phasenwinkel eintritt, *nicht* bei größter Elongation)
- **Acht-Jahres-Zyklus** als Pentagramm-Rosette: fünf synodische Umläufe
  (5 × 583,92 d) gegen acht Erdenjahre
- **Kulturelle Ebene** — Inanna/Ischtar und die Venus-Tafel des Ammiṣaduqa,
  komprimiert auf eine Zeile mit Erläuterung im Infofeld

### Genauigkeit

Kepler-Näherung mit Bahnneigung (i = 3,39°, Ω = 76,68°), Umrechnung über
Äquatorialkoordinaten und Sternzeit auf Horizontkoordinaten. Geprüft gegen bekannte
Ereignisse:

| Prüfung | Ergebnis |
|---------|----------|
| Größte östliche Elongation 10.01.2025 | 47,2° bei 51 % Beleuchtung |
| Untere Konjunktion 23.03.2025 | 8,4° nördlich an der Sonne vorbei |
| Abstandsbereich über 8 Jahre | 0,266 … 1,735 AE |
| Sonnenhöhe Berlin zu den Sonnenwenden | 60,9° / 14,0° |

### Als App installieren

Auf der gehosteten Seite über das Browsermenü „Zum Startbildschirm hinzufügen".
`manifest.webmanifest` und `sw.js` machen die App installierbar und offline nutzbar.
Als einzeln heruntergeladene Datei entfällt das, die Berechnungen laufen trotzdem.

## Die Sternenkarte

Unter der Inanna-Zeile steht **Der Himmel über Ihnen**: ein Ausschnitt von 170°
Himmelsbreite um die Venus, von 8° unter dem Horizont bis 62° Höhe, mit Ekliptik,
Sternbildern, Mond, den vier übrigen Planeten und der Sonne. Der Grund färbt sich nach
dem Stand der Sonne, die Sterne treten mit der Dämmerung hervor. Ein Schieber verstellt
die Zeit um bis zu zwölf Stunden, *Jetzt* springt zurück und führt minütlich nach.

Gezeichnet wird aus den Örtern, die der Kalender ohnehin rechnet — `venusGeo` für Venus,
`ekl2aeq` für Mond und Planeten, `FIGUREN` für die Sternbilder, `horizont()` für die
Umrechnung auf Höhe und Himmelsrichtung. Damit braucht die Karte **keinen fremden
Kachelserver und keine fremde Lizenz** und läuft offline. Eingebundene Karten hätten
beides mitgebracht: Stellarium Web steht unter AGPL und lädt aus dem Netz, Aladin Lite
verlangt Logo und Verweis und bezieht seine Kacheln von den Servern des CDS.

## Druckausgabe

Der Knopf **Rad als Druckdatei** unter dem Rad erzeugt ein Blatt in Druckauflösung.
`radDruckBild(format, dpi)` legt eine Leinwand in Blattgröße an und lässt dasselbe
`zeichneRosette()` darauf laufen — über `druckZiel` bekommt es Leinwand, Maßstab und
Versatz. Weil alle Maße im Zeichenprogramm mit dem Faktor mitwachsen, entstehen Linien
und Schrift in voller Auflösung; nichts wird hochgerechnet.

| Format | Blatt | mit 3 mm Anschnitt bei 300 dpi | Datei |
|--------|-------|-------------------------------|-------|
| A3 | 297 × 420 mm | 3579 × 5031 Punkte | ~9 MB |
| A2 | 420 × 594 mm | 5031 × 7087 Punkte | ~17 MB |

Beim Druck bleiben die Textfelder der Seite unberührt (`amSchirm`), und das Rad zeichnet
seinen eigenen Grund nicht — den trägt das Blatt, sonst stünde das Quadrat als sichtbarer
Kasten darin. Gedruckt wird der Stand des angezeigten Tages.

## Das Windows-Widget

Eine installierte PWA darf sich in die Windows-11-Widget-Leiste eintragen. Der Eintrag
steht im `widgets`-Feld von `manifest.webmanifest`; dargestellt wird er als Adaptive
Card.

| Datei | Rolle |
|-------|-------|
| `widget/venus-karte.json` | Adaptive-Card-Vorlage der Karte |
| `widget/venus-daten.json` | Startwerte, bis der Service Worker gerechnet hat |
| `widget/venus-kern.js` | Astronomischer Kern für den Service Worker |
| `widget/vorschau.png` | Vorschaubild für die Widget-Auswahl (600×400, Pflicht) |

`sw.js` lädt den Kern per `importScripts`, rechnet die Werte selbst und schiebt sie mit
`widgets.updateByTag` in die Karte — beim Einrichten, beim Aktivieren des Workers und
stündlich über Periodic Background Sync. Ein Klick auf die Karte öffnet `venus.html`.

`widget/venus-kern.js` doppelt den astronomischen Kern aus `venus.html`. Das ist Absicht:
`venus.html` soll eine eigenständige Datei ohne Abhängigkeiten bleiben. Wer an den
Formeln etwas ändert, muss es an beiden Stellen tun.

Für den Microsoft Store lässt sich das Ganze mit [PWABuilder](https://www.pwabuilder.com)
paketieren, ohne eine Zeile C++ oder C#.

## Werke der Sammlung (`werke.html`)

| Datei | Werk |
|-------|------|
| `schattentafel-2050.html` | Gnomische Schattentafel · Analemma 2022–2050 |
| `venus-traumfaenger.html` | Venus-Traumfänger · fünf Zyklen 2024–2032 |
| `kircher-sciatericvm.html` | Sciatericvm Microcosmicvm · Kircher 1646 |
| `sphärenschach.html` | Sphärenschach · Alfons X. 1283 |
| `shatranj-al-aflak.html` | Shatranj al-Aflak · شطرنج الأفلاك |
| `ouranomachia.html` | Ouranomachia · Fulke 1572 |

## Offen

- `duerer-planeten-weltkarte.html` (Dürer & Stabius 1515) — Datei fehlt; im Shop
  deshalb als „in Arbeit" ohne Kaufmöglichkeit ausgewiesen
- `venus-kalender_2.html` — der frühere, ausführliche Venus-Kalender; nicht mehr
  verlinkt, enthält aber die hellenistisch-arabischen und sumerisch-babylonischen
  Deutungen sowie die Sternbildsuche

## Veröffentlichen

GitHub Pages, Quelle `main` / Wurzel. Änderungen sind nach dem Push in ein bis zwei
Minuten live.
