# CAELVM — Astronomische Kalenderwerke

Live: **https://abuelia81.github.io/caelum/**

## Seitenstruktur

| Datei | Rolle |
|-------|-------|
| `index.html` | Weiterleitung auf `caelum.html` |
| `caelum.html` | Hauptseite · Shop mit Warenkorb und Kasse · Venus im Fokus · Live-Demo |
| `mond.html` | Mond-Kalender · die 28 arabischen Mondstationen, Phase, Ort und Livetracker |
| `inanna.html` | Der Mythos vom Gang in die Unterwelt, Tor für Tor gegen den Venuslauf gelesen · verlinkt aus der Torzeile der Venus-App |

## Die Apps der Hauptseite

Von `caelum.html` als Kacheln verlinkt, jede eine eigenständige Einzeldatei.

| Datei | App |
|-------|-----|
| `venus.html` | **Die Venus-App** · kompakt, installierbar, offline lauffähig |
| `mond.html` | Mond-Kalender · die 28 arabischen Mondstationen, Phase, Ort und Livetracker |
| `zeitpunkt.html` | Zum rechten Zeitpunkt · Wahlastrologie, eine Uhr im Zwölf-Minuten-Takt |
| `orakel.html` | Das Orakel der Stunde · Stundenastrologie, Ja-Nein-Frage, Figur des Augenblicks |
| `sternenwege.html` | Sternenwege · ein Weg auf der Erde als Sternenkette gemerkt, nach den Sternkarten der Euahlayi |
| `bauernkalender.html` | Bauern-Kalender 2025/26 · Heiligentage, Mondzeichen, Lostage, im Satz der frühen Druckerpressen |
| `sphärenschach.html` | Sphärenschach · Alfons X. 1283 · gegen den Rechner spielbar |
| `shatranj-al-aflak.html` | Shatranj al-Aflak · acht Sphären mal acht Sektoren · gegen den Rechner spielbar |
| `ouranomachia.html` | Ouranomachia · Fulke 1572 · gegen den Rechner spielbar |
| `kircher-sciatericvm.html` | Sciatericvm Microcosmicvm · Kircher 1646 · Sonnenuhr für die eigene Breite |
| `algol.html` | Algol-Kalender · Lichtkurve, nächste Finsternis, Kairo-Kalender der Glücks- und Unglückstage |
| `dekane.html` | Die 36 Dekane · Dekangötter nach dem Heiligen Buch des Hermes an Asklepios |
| `finsternistafel.html` | Finsternistafel · Sonnen- und Mondfinsternisse für den eigenen Ort, mit Drachenschlange und Deutungen |

Werke ohne eigene Bildtafel bekommen im Raster ein Zeichen statt eines Bildes
(`.werk-zeichen`) — dieselbe Fläche, damit die Kacheln auf einer Linie bleiben.

## Das Sciatericvm (`kircher-sciatericvm.html`)

Kirchers Schattenuhr des Mikrokosmos, gerechnet statt abgebildet.

- **Die Platte** ist eine waagerechte Sonnenuhr für die Breite des Betrachters.
  Die Stundenlinie zur Stunde H folgt tan θ = sin φ · tan H — die klassische
  Konstruktion. Weil der Stil auf den Himmelspol zeigt, gilt jede Linie das ganze
  Jahr; die Deklination fällt aus der Rechnung heraus. Auf der Südhalbkugel weist
  die Mittagslinie nach Süden, und die Richtung dreht mit: die Formel steht als
  `atan2(|sin φ|·sin H, sign(φ)·cos H)` da.
- **Der Schatten** wird dreidimensional gerechnet: die Spitze des Stils, von der
  Sonne auf die Platte geworfen. Gegengeprüft gegen die Stundenlinien stimmen
  beide auf 0,000° überein, für beide Halbkugeln und beide Vorzeichen der
  Deklination.
- **Die Tierkreislinien** sind die Bahn der Schattenspitze über den Tag: zur
  Tagundnachtgleiche eine Gerade, sonst ein Hyperbelast.
- **Der Ring der Planetenstunden** teilt den lichten Tag in zwölf ungleiche
  Stunden. Man sieht ihnen die Ungleichheit an: nahe dem Mittag gedrängt, gegen
  die Horizonte gespreizt.
- **Homo Signorum** — der Tierkreis vom Haupt zu den Füßen, gezeichnet, nicht
  abgebildet. Hervorgehoben ist das Zeichen des **Mondes**, nicht das der Sonne:
  die Regel des Aderlassmännchens ging nach dem Mond.
- Die Uhr nennt **wahre Ortszeit** neben der Zeigerzeit — eine Sonnenuhr kennt
  weder Zeitzone noch Sommerzeit. Liegt der eingestellte Ort weit vom Meridian
  der Geräteuhr, wird das gesagt.
- Vorgabe ist München; das GPS läuft erst auf Knopfdruck. Kein Netz, keine
  Rückwärtssuche des Ortsnamens.

Geprüft gegen bekannte Zeiten:

| Prüfung | Ergebnis |
|---------|----------|
| München 21.06.2026 | 05:13 – 21:17, Tageslänge 16,07 h |
| München 21.12.2026 | 08:01 – 16:22, Tageslänge 8,35 h |
| München 20.03.2026 | 06:16 – 18:25, Mittag 12:21 |
| Rom 21.06.2026 | 05:34 – 20:48 |
| Tromsø 21.06. / 21.12. | Mitternachtssonne / Polarnacht |
| Wahrer Mittag München | 13:14 MESZ — (30° − 11,575°)/15 = 74 min nach 12 Uhr |

## Zum rechten Zeitpunkt (`zeitpunkt.html`)

Wahlastrologie: nicht was wird, sondern wann man anfangen soll. Drei Uhren übereinander,
jede langsamer als die vorige — der Wochentag mit seinem Herrn, die ungleiche
Planetenstunde, und darunter die **Grenze des aufsteigenden Grades**, die ägyptischen
*termini*.

Daher der Takt: der Himmel dreht sich in vier Minuten um ein Grad, eine Grenze ist im
Mittel sechs Grad breit — **etwa alle zwölf Minuten übernimmt ein anderer Planet die
Herrschaft über den aufsteigenden Grad**. Das ist die feinste Zeiteinteilung der
Tradition, und die Uhr schlägt in ihrem Takt.

Bewertet werden neun Sachen — Arbeit, Geld, Liebe, Familie, Reise, Heilung, Lernen,
Saat, Beenden —, jede mit ihrer alten Fassung daneben (der Bittgang zum Fürsten ist das
Gehaltsgespräch, das neue Kleid der erste Arbeitstag). Geprüft werden Stundenherr,
Tagesherr, Grenzherr, Zeichen und Lauf des Mondes, sein leerer Lauf, Merkur rückläufig,
die Übeltäter an den Winkeln und der Herr des Sachhauses. Jedes Zeugnis steht offen da.

Dazu ein Fenstersucher: die nächsten 48 Stunden im Zwölf-Minuten-Takt abgetastet, die
zusammenhängenden guten Strecken aufgelistet.

Quellen: Sahl ibn Bishr, *De electionibus*; Bonatti, *Liber Astronomiae* Tr. 7 (beide in
Benjamin Dykes' Übersetzungen); zur Rolle des leerlaufenden Mondes die Arbeiten zu Sahl
und Abū Maʿshar.

## Das Orakel der Stunde (`orakel.html`)

Stundenastrologie: eine Figur des Himmels für den Augenblick, in dem eine Frage
gestellt wird, und daraus ein Ja oder Nein.

- **Eingabe:** die Frage muss eine Entscheidungsfrage sein — W-Fragen werden
  zurückgewiesen, weil sie keinen Ja-Nein-Ausgang haben. Das Haus der Sache wird aus
  dem Wortlaut geraten und kann umgesetzt werden.
- **Rechnung:** Planetenörter aus mittleren Bahnelementen (Standish), Mond aus der
  üblichen Reihe, Aszendent und Himmelsmitte aus der Sternzeit. Ganzzeichenhäuser.
- **Würden:** eigenes Haus, Erhöhung, Triplizität nach Dorotheus, ägyptische Grenzen,
  Gesichter in chaldäischer Folge; Exil und Fall dagegen.
- **Urteil:** Bedenken vor dem Urteil (Aszendent unter 3° / über 27°, Via combusta,
  Saturn im 1. oder 7.), dann Perfektion oder Verweigerung — laufender Aspekt der
  Zeichner, Aufnahme, Lichtübertragung, Lichtsammlung gegen Verhinderung,
  Zurückweichen, leeren Lauf des Mondes und Verbrennung. **Jedes Zeugnis steht mit
  seiner Quelle offen da**; der Spruch ist ihre Summe, kein Orakel aus dem Dunkeln.
- **Figur:** das Rad mit Tierkreis, Häusern, Planeten und den Aspekten als Sehnen; der
  Aspekt der beiden Zeichner ist hervorgehoben.

Quellen: Chris Brennan, *The Origins of Horary Astrology* (Astrology Podcast 145) und
*Hellenistic Astrology* (2017); Sahl ibn Bishr und Māshāʾallāh in Benjamin Dykes'
Übersetzungen; Bonatti, *Liber Astronomiae*; Lilly, *Christian Astrology* (1647).

## Sternenwege (`sternenwege.html`)

Zwei Tafeln nebeneinander: links der Weg auf der Erde, rechts derselbe Weg als Kette
heller Sterne. Die Anwendung tut dabei zwei getrennte Dinge.

**Das Wegbild — eine Merkhilfe.** Aus dem Ortsverzeichnis werden die Wegpunkte einer
Strecke bestimmt (Orte nahe dem Großkreis, nach Bedeutung und Abstand gewichtet, auf
3–6 Abschnitte verteilt). Dann wird eine Sternenkette gesucht, deren *Gestalt* der
Gestalt des Weges gleicht: für jedes Paar heller Sterne legt eine
Ähnlichkeitsabbildung Maßstab und Drehung fest (Anfang auf den einen, Ende auf den
anderen), und zu jedem Zwischenpunkt wird der nächstliegende freie Stern gesucht.
Geprüft werden beide Seitenlagen, weil wir die Erdkarte von außen und den Himmel von
innen sehen. Etwa 65 ms je Strecke.

München → Wien ergibt: **Aldebaran (München) → Alnitak (Burghausen) → Sirius (Linz) →
Wezen (St. Pölten) → Aludra (Wien)** — 96 % Übereinstimmung. Der alte Weg dem Inn und
der Donau nach ist am Himmel die Linie vom Auge des Stiers über den Gürtel des Orion
zum Hundsstern.

**Der Steuerstern — wirkliche Richtung.** Ein Stern geht immer an derselben Stelle des
Horizonts auf; sein Azimut folgt aus cos A = sin δ / cos φ. Aus dem Kurs lässt sich
also ausrechnen, welche Sterne genau dort aufgehen — der mikronesische Sternenkompass.
Diese Angabe stimmt aufs Grad; das Wegbild ist ausdrücklich keine Navigationshilfe,
wie schon die Quelle betont.

Grundlage ist R.S. Fuller, M. Trudgett, R.P. Norris & M.G. Anderson, *Star Maps and
Travelling to Ceremonies: The Euahlayi People and Their Use of the Night Sky* (JAHH 17,
2014). Dazu im Werk: Songlines und Lynne Kellys *Memory Code*, die Spiegelung der Black
Hills im Himmel nach Ronald Goodmans *Lakota Star Knowledge*, und der Sternenkompass.
Das Werk gibt **kein überliefertes Wissen wieder** — es baut das Verfahren nach und
sagt das auch.

## Der Bauern-Kalender (`bauernkalender.html`)

Nachgebaut nach dem gedruckten Einblatt- oder *Mandlkalender* des 16. Jahrhunderts.
Zwei Farben wie in der Presse — Schwarz und Rubrikrot auf Büttenpapier —, Fraktur
für die Überschriften, EB Garamond für den Satz.

- **Das Kalendarium** nennt für jeden Tag den Heiligen, die Mondphase, das Zeichen,
  worin der Mond steht, die Tagesart und den Sonnenauf- und -untergang. Schwarze
  Dreiecke zählen die Werktage, rote die Sonntage — so stand es auf den Bögen.
- **Lostage** stehen rot, mit ihrer Regel darunter; rund sechzig durchs Jahr.
- **Die Zahlen des Jahres** — Goldene Zahl, Epakte, Sonntagsbuchstabe — standen am
  Kopf jedes gedruckten Kalenders. Dazu die beweglichen Feste aus dem Computus.
- **Das Planetenjahr** nach dem *Hundertjährigen Kalender* des Abtes Mauritius Knauer
  (1652): 2025 ist ein Venusjahr, 2026 ein Merkurjahr.
- **Zwölf Monatsbilder**, gezeichnet im Holzschnittstil: die Arbeit des Monats, wie
  sie seit der Spätantike über den Kalendern stand.
- **Das Tagesblatt** zu jedem angetippten Tag: was nach der Überlieferung zu tun und
  zu lassen war, und welches Glied das Mondzeichen regiert.

Der Tierkreis ist **tropisch** gezählt — so rechneten die gedruckten Kalender. Der
Mond-Kalender dieser Sammlung zählt **siderisch**, weil die arabischen Mondstationen
es tun; die beiden stehen darum rund 24° auseinander.

Geprüft: die Neumonde 2025 (29.01., 28.02., 29.03., 27.04., 27.05., 25.06., 24.07.,
23.08., 21.09., 21.10., 20.11., 20.12.) und die Vollmonde stimmen mit den Ephemeriden
überein; Ostern 2025 auf den 20. April, 2026 auf den 5. April; Sonntagsbuchstabe E
und D.

### Das Wetterbuch

Im Tagesblatt jedes Tages steht ein Notizblock: das **Wetter** (Höchst- und Tiefstwert,
Niederschlag, Bewölkung, Wind, Wetterwort) und die **drei Nachrichten des Tages**, dazu
eine freie Notiz. Alles bleibt in `localStorage`; nichts wird verschickt.

Der Zweck ist der Vergleich: die Tafel *Das Wetterbuch* listet die verzeichneten Tage
mit dem Mondzeichen, der Tagesart und dem Mondlicht daneben und mittelt, sobald drei
Tage beisammen sind, Höchstwert und Niederschlag nach Tagesart, Element und Mondphase —
mit dem ausdrücklichen Hinweis, dass das bei so wenigen Tagen noch nichts sagt. Ausgabe
als CSV und JSON.

Zwei Netzquellen, beide frei und ohne Schlüssel: **Open-Meteo** für das Wetter und
**»In den Nachrichten«** der deutschen Wikipedia für die Schlagzeilenvorschläge. Ohne
Netz schreibt man von Hand hinein; alles andere rechnet weiter.

## Die drei Spiele

Alle drei laufen gegen den Rechner, keines braucht einen zweiten Menschen.

| Spiel | Der Gegner |
|-------|-----------|
| Sphärenschach | Aspekte übertragen Punkte; wer würfelt, darf einmal neu würfeln |
| Ouranomachia | Kampf aus Würde und Würfel, der Angreifer verliert das Unentschieden; der Hof der Sonne schützt sie, solange vier Hofplaneten stehen |
| Shatranj al-Aflak | Suche über zwei Halbzüge: für jeden eigenen Zug die beste Antwort von Weiß, davon der Zug mit dem besten schlechtesten Ausgang |

Das Sphärenschach trägt zusätzlich ein Blatt **Die Philosophie dahinter**: die feste
Bahn jedes Planeten als *ananke* (die Spindel der Notwendigkeit aus dem Mythos des Er),
der Würfel als *moira*, der Zug als die Wahl, für die nach Platon niemand außer dem
Wählenden haftet — dazu Chrysipps *heimarmene* als Ursachenkette, die sieben Sphären
der hermetischen Überlieferung und Boethius' Unterscheidung von providentia und fatum.

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

## Werke der Sammlung

Es gibt sie nicht mehr. Alle Werke stehen auf der Hauptseite; `werke.html` ist
entfallen, und die Verweise darauf sind entfernt.

## Offen

- Der PayPal-Anschluss des Unterstützen-Knopfes
- `schattentafel-2050.html` und `venus-traumfaenger.html` liegen noch im Verzeichnis,
  sind aber nirgends mehr verlinkt
- `venus-kalender_2.html` — der frühere, ausführliche Venus-Kalender; nicht mehr
  verlinkt, enthält aber die hellenistisch-arabischen und sumerisch-babylonischen
  Deutungen sowie die Sternbildsuche

## Veröffentlichen

GitHub Pages, Quelle `main` / Wurzel. Änderungen sind nach dem Push in ein bis zwei
Minuten live.
