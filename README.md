# CAELVM — Astronomische Kalenderwerke

Live: **https://abuelia81.github.io/caelum/**

## Seitenstruktur

| Datei | Rolle |
|-------|-------|
| `index.html` | Weiterleitung auf `caelum.html` |
| `caelum.html` | Hauptseite · Shop mit Warenkorb und Kasse · Venus im Fokus · Live-Demo |
| `werke.html` | Sammlung aller übrigen Werke · verlinkt in den Warenkorb der Hauptseite |
| `mond.html` | Mond-Kalender · die 28 arabischen Mondstationen, Phase, Ort und Livetracker |
| `inanna.html` | Der Mythos vom Gang in die Unterwelt, Tor für Tor gegen den Venuslauf gelesen · verlinkt aus der Torzeile der Venus-App |

## Die Apps der Hauptseite

Von `caelum.html` als Kacheln verlinkt, jede eine eigenständige Einzeldatei.

| Datei | App |
|-------|-----|
| `venus.html` | **Die Venus-App** · kompakt, installierbar, offline lauffähig |
| `mond.html` | Mond-Kalender · die 28 arabischen Mondstationen, Phase, Ort und Livetracker |
| `sphärenschach.html` | Sphärenschach · Alfons X. 1283 · gegen den Rechner spielbar |
| `shatranj-al-aflak.html` | Shatranj al-Aflak · acht Sphären mal acht Sektoren · gegen den Rechner spielbar |
| `ouranomachia.html` | Ouranomachia · Fulke 1572 · gegen den Rechner spielbar |
| `algol.html` | Algol-Kalender · Lichtkurve, nächste Finsternis, Kairo-Kalender der Glücks- und Unglückstage |
| `dekane.html` | Die 36 Dekane · Dekangötter nach dem Heiligen Buch des Hermes an Asklepios |
| `finsternistafel.html` | Finsternistafel · Sonnen- und Mondfinsternisse für den eigenen Ort, mit Drachenschlange und Deutungen |

Werke ohne eigene Bildtafel bekommen im Raster ein Zeichen statt eines Bildes
(`.werk-zeichen`) — dieselbe Fläche, damit die Kacheln auf einer Linie bleiben.

## Die drei Spiele

Alle drei laufen gegen den Rechner, keines braucht einen zweiten Menschen.

| Spiel | Der Gegner |
|-------|-----------|
| Sphärenschach | Aspekte übertragen Punkte; wer würfelt, darf einmal neu würfeln |
| Ouranomachia | Kampf aus Würde und Würfel, der Angreifer verliert das Unentschieden; der Hof der Sonne schützt sie, solange vier Hofplaneten stehen |
| Shatranj al-Aflak | Suche über zwei Halbzüge: für jeden eigenen Zug die beste Antwort von Weiß, davon der Zug mit dem besten schlechtesten Ausgang |

In Shatranj al-Aflak gleiten Rukh und Firzan **Feld um Feld**; ein Sprung über
besetzte Felder wäre ein Fehler, der die Anfangsstellung sofort zerfallen ließe.
Orbital läuft der Zug im Kreis (Sektor 7 grenzt an Sektor 0), radial nicht — die
Fixsternsphäre ist die Grenze. Wer nicht im Schach steht und keinen Zug hat, ist
patt; die Partie endet unentschieden.

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

## Wetter

Die Sichtbarkeitstafel nennt die Bewölkung im Sichtfenster und sagt in einem Satz, ob es
sich lohnt hinauszugehen. Die Daten kommen von [Open-Meteo](https://open-meteo.com) —
frei, ohne Schlüssel und ohne Anmeldung. Gemittelt wird über die Stunden, in denen Venus
überhaupt zu sehen wäre, nicht über den ganzen Tag; ist es überwiegend bewölkt, wird die
Stunde mit den wenigsten Wolken genannt.

Das ist die **einzige Stelle, an der die App das Netz braucht**. Misslingt der Abruf oder
ist kein Netz da, bleibt die Zeile mit einem Hinweis stehen und alles andere rechnet
unverändert weiter.

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
| `kircher-sciatericvm.html` | Sciatericvm Microcosmicvm · Kircher 1646 |

Alles Übrige ist auf die Hauptseite gewandert; `kircher-sciatericvm.html` soll dorthin
folgen, sobald das Werk ausgebaut ist.

## Offen

- `kircher-sciatericvm.html` — noch auf `werke.html`, soll ausgebaut und auf die
  Hauptseite gehoben werden
- Der PayPal-Anschluss des Unterstützen-Knopfes
- `venus-kalender_2.html` — der frühere, ausführliche Venus-Kalender; nicht mehr
  verlinkt, enthält aber die hellenistisch-arabischen und sumerisch-babylonischen
  Deutungen sowie die Sternbildsuche

## Veröffentlichen

GitHub Pages, Quelle `main` / Wurzel. Änderungen sind nach dem Push in ein bis zwei
Minuten live.
