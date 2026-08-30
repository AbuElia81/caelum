# CAELVM — Astronomische Kalenderwerke

Live: **https://abuelia81.github.io/caelum/**

## Seitenstruktur

| Datei | Rolle |
|-------|-------|
| `index.html` | Weiterleitung auf `caelum.html` |
| `caelum.html` | Hauptseite · Shop mit Warenkorb und Kasse · Venus im Fokus · Live-Demo |
| `werke.html` | Sammlung aller übrigen Werke · verlinkt in den Warenkorb der Hauptseite |

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
