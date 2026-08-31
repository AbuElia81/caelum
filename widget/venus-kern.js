/* CAELVM · Rechenkern für das Widget
   ─────────────────────────────────────────────────────────────────
   Der Service Worker kann die Seite nicht befragen — er muss selbst
   rechnen. Diese Datei enthält deshalb denselben astronomischen Kern
   wie venus.html, auf das für die Widget-Karte Nötige gekürzt.

   Die Doppelung ist Absicht: venus.html soll eine eigenständige Datei
   ohne Abhängigkeiten bleiben, die per Doppelklick läuft. Wer an den
   Formeln etwas ändert, ändert es an beiden Stellen.                */

const RAD = Math.PI/180, DEG = 180/Math.PI;
const norm = d => ((d%360)+360)%360;
const sin = x => Math.sin(x*RAD), cos = x => Math.cos(x*RAD);
const jd = date => date.getTime()/86400000 + 2440587.5;
const jc = j => (j - 2451545.0)/36525;

function sonne(T){
  const L0 = norm(280.46646 + 36000.76983*T + 0.0003032*T*T);
  const M  = norm(357.52911 + 35999.05029*T - 0.0001537*T*T);
  const C  = (1.914602 - 0.004817*T - 0.000014*T*T)*sin(M)
           + (0.019993 - 0.000101*T)*sin(2*M)
           + 0.000289*sin(3*M);
  const e = 0.016708634 - 0.000042037*T, v = M + C;
  return { lon: norm(L0 + C), r: 1.000001018*(1 - e*e)/(1 + e*cos(v)) };
}

function venusHelio(T){
  const L = norm(181.979801 + 58517.8156760*T + 0.00000165*T*T);
  const M = norm(50.4161 + 58517.8038*T);
  const C = 0.7758*sin(M) + 0.0033*sin(2*M);
  const lWahr = norm(L + C), e = 0.006773, a = 0.723332, v = M + C;
  const r = a*(1 - e*e)/(1 + e*cos(v));
  const i = 3.39471, O = 76.67992, u = lWahr - O;
  return { r, lon: norm(O + Math.atan2(cos(i)*sin(u), cos(u))*DEG),
           lat: Math.asin(sin(i)*sin(u))*DEG };
}

function venusGeo(date){
  const T = jc(jd(date)), s = sonne(T), v = venusHelio(T);
  const x = v.r*cos(v.lat)*cos(v.lon) + s.r*cos(s.lon);
  const y = v.r*cos(v.lat)*sin(v.lon) + s.r*sin(s.lon);
  const z = v.r*sin(v.lat);
  const delta = Math.sqrt(x*x + y*y + z*z);
  const lon = norm(Math.atan2(y,x)*DEG), lat = Math.asin(z/delta)*DEG;
  const elong = Math.acos(Math.max(-1,Math.min(1, cos(lat)*cos(lon - s.lon))))*DEG;
  let diff = lon - s.lon; if(diff>180) diff-=360; if(diff<-180) diff+=360;
  const cph = (v.r*v.r + delta*delta - s.r*s.r)/(2*v.r*delta);
  const ph  = Math.acos(Math.max(-1,Math.min(1,cph)))*DEG;
  const k   = (1 + cos(ph))/2;
  const mag = -4.47 + 5*Math.log10(v.r*delta) + 0.0103*ph
            + 0.000057*ph*ph + 0.00000013*ph*ph*ph;
  const grad = 2*Math.atan(6051.8/(149597870.7*delta))*DEG*3600;
  return { delta, lon, lat, elong, ost: diff>0, k, mag, grad };
}

const komma = n => String(n).replace('.', ',');
const lichtflaeche = g => g.k * g.grad * g.grad;
let _maxLicht = 0;
function maxLichtflaeche(){
  if(_maxLicht) return _maxLicht;
  const t0 = Date.now();
  for(let i=0;i<600;i++)
    _maxLicht = Math.max(_maxLicht, lichtflaeche(venusGeo(new Date(t0 + i*86400000))));
  return _maxLicht;
}

/* ── Begegnungen: Mond, Fixsterne, Planeten ───────────────────────── */
function mondLon(date){
  const d = jd(date) - 2451545.0;
  const L = 218.316 + 13.176396*d, M = 134.963 + 13.064993*d;
  const Ms= 357.529 +  0.98560028*d, D = 297.850 + 12.190749*d;
  const F =  93.272 + 13.229350*d;
  return norm( L + 6.289*sin(M) - 1.274*sin(M-2*D) + 0.658*sin(2*D)
             + 0.214*sin(2*M) - 0.186*sin(Ms)      - 0.114*sin(2*F)
             + 0.059*sin(2*M-2*D) + 0.057*sin(M-2*D+Ms) );
}
function mondLat(date){
  const d = jd(date) - 2451545.0;
  const M = 134.963 + 13.064993*d, D = 297.850 + 12.190749*d, F = 93.272 + 13.229350*d;
  return 5.128*sin(F) + 0.281*sin(M+F) - 0.278*sin(M-F) - 0.173*sin(2*D-F);
}
function aeq2ekl(ra,dec){
  const eps=23.4393;
  return { lat: Math.asin(Math.max(-1,Math.min(1,
             sin(dec)*cos(eps)-cos(dec)*sin(eps)*sin(ra))))*DEG,
           lon: norm(Math.atan2(sin(ra)*cos(eps)+Math.tan(dec*RAD)*sin(eps),cos(ra))*DEG) };
}
function winkelAbstand(l1,b1,l2,b2){
  return Math.acos(Math.max(-1,Math.min(1,
    sin(b1)*sin(b2) + cos(b1)*cos(b2)*cos(l1-l2))))*DEG;
}
const PLANETEN = [
  { n:'Merkur',  L0:252.250906, L1:149472.6746358, pi:77.456119,  a:0.387098, e:0.205635, i:7.004986, O:48.330893  },
  { n:'Mars',    L0:355.433,    L1: 19141.6964471, pi:336.060234, a:1.523679, e:0.093401, i:1.849726, O:49.558093  },
  { n:'Jupiter', L0: 34.351519, L1:  3036.3027748, pi:14.331309,  a:5.202603, e:0.048498, i:1.303267, O:100.464441 },
  { n:'Saturn',  L0: 50.077444, L1:  1223.5110686, pi:93.056787,  a:9.554909, e:0.055548, i:2.488878, O:113.665524 }
];
function planetGeo(P,T){
  const L=norm(P.L0+P.L1*T), M=norm(L-P.pi), e=P.e;
  const C=((2*e - e*e*e/4)*sin(M) + 1.25*e*e*sin(2*M) + (13/12)*e*e*e*sin(3*M))*DEG;
  const lWahr=norm(L+C), r=P.a*(1-e*e)/(1+e*cos(M+C)), u=lWahr-P.O;
  const hLon=norm(P.O+Math.atan2(cos(P.i)*sin(u),cos(u))*DEG), hLat=Math.asin(sin(P.i)*sin(u))*DEG;
  const so=sonne(T);
  const x=r*cos(hLat)*cos(hLon)+so.r*cos(so.lon);
  const y=r*cos(hLat)*sin(hLon)+so.r*sin(so.lon);
  const z=r*sin(hLat), d=Math.sqrt(x*x+y*y+z*z);
  return { lon:norm(Math.atan2(y,x)*DEG), lat:Math.asin(z/d)*DEG };
}
const FIXSTERNE = [
  { n:'den Plejaden',  ra: 56.871, dec: 24.105 },
  { n:'Aldebaran',     ra: 68.980, dec: 16.509 },
  { n:'Pollux',        ra:116.329, dec: 28.026 },
  { n:'der Krippe',    ra:130.100, dec: 19.667 },
  { n:'Regulus',       ra:152.093, dec: 11.967 },
  { n:'Spica',         ra:201.298, dec:-11.161 },
  { n:'Zubenelgenubi', ra:222.720, dec:-16.042 },
  { n:'Antares',       ra:247.352, dec:-26.432 },
  { n:'Nunki',         ra:283.816, dec:-26.297 }
];

/* Das nächste Ereignis überhaupt — dieselben Rubriken wie in der App,
   nur tageweise gesucht und nicht stündlich nachgeschärft. Für eine
   Zeile auf der Karte genügt das. */
function naechstesEreignis(ab){
  const ms = 86400000, p = [], gefunden = [];
  for(let i=0;i<=620;i++){
    const d = new Date(ab.getTime()+i*ms), g = venusGeo(d), T = jc(jd(d));
    p.push({ d, g, T, e:g.ost?g.elong:-g.elong, ae:g.elong, mag:g.mag, delta:g.delta });
  }
  for(let i=1;i<p.length-1;i++){
    const a=p[i-1], b=p[i], c=p[i+1];
    if(b.ae<a.ae && b.ae<c.ae){
      gefunden.push({ d:b.d, n: b.delta<0.8 ? 'Unsichtbar: untere Konjunktion'
                                            : 'Unsichtbar: obere Konjunktion' }); break; }
    if(b.e>0 && b.e>a.e && b.e>c.e){
      gefunden.push({ d:b.d, n:'Größter Abstand als Abendstern' }); break; }
    if(b.e<0 && b.e<a.e && b.e<c.e){
      gefunden.push({ d:b.d, n:'Größter Abstand als Morgenstern' }); break; }
    if(b.mag<a.mag && b.mag<c.mag && b.ae>15){
      gefunden.push({ d:b.d, n:'Größte Helligkeit' }); break; }
  }
  const naeheste=(reihe, grenze, sichtbarNoetig, benennen)=>{
    for(let i=1;i<p.length-1;i++){
      if(!(reihe[i]<reihe[i-1] && reihe[i]<=reihe[i+1] && reihe[i]<grenze)) continue;
      if(sichtbarNoetig && p[i].ae<12) continue;
      gefunden.push({ d:p[i].d, n:benennen(reihe[i]) }); return;
    }
  };
  naeheste(p.map(q=>winkelAbstand(q.g.lon,q.g.lat, mondLon(q.d), mondLat(q.d))), 12, false,
           w=>`Venus trifft den Mond · ${komma(w.toFixed(1))}°`);
  FIXSTERNE.forEach(f=>{
    const e=aeq2ekl(f.ra,f.dec);
    naeheste(p.map(q=>winkelAbstand(q.g.lon,q.g.lat,e.lon,e.lat)), 5, true,
             w=>`Venus bei ${f.n} · ${komma(w.toFixed(1))}°`);
  });
  PLANETEN.forEach(P=>{
    naeheste(p.map(q=>{ const o=planetGeo(P,q.T);
      return winkelAbstand(q.g.lon,q.g.lat,o.lon,o.lat); }), 5, true,
             w=>`Venus trifft ${P.n} · ${komma(w.toFixed(1))}°`);
  });
  gefunden.sort((a,b)=>a.d-b.d);
  return gefunden[0] || null;
}

/* Alles, was die Karte anzeigt — als flaches Objekt für die Vorlage. */
function venusKarte(jetzt = new Date()){
  const g = venusGeo(jetzt);
  const rolle = g.elong < 8
    ? (g.delta < 0.8 ? 'Unsichtbar · vor der Sonne' : 'Unsichtbar · hinter der Sonne')
    : (g.ost ? 'Abendstern' : 'Morgenstern');
  const zeit = g.elong < 10 ? 'Transformationszeit'
             : (g.ost ? 'Beziehungszeit' : 'Aktivzeit');
  const ev = naechstesEreignis(jetzt);
  const tage = ev ? Math.round((ev.d - jetzt)/86400000) : null;
  return {
    rolle, zeit,
    datum: jetzt.toLocaleDateString('de-DE',{day:'numeric',month:'long',year:'numeric'}),
    licht: (lichtflaeche(g)/maxLichtflaeche()*100).toFixed(0) + ' %',
    abstand: komma(g.elong.toFixed(1)) + '° ' + (g.ost ? 'O' : 'W'),
    helligkeit: komma(g.mag.toFixed(1)).replace('-','−') + ' mag',
    ereignis: ev ? ev.n : '—',
    ereignisWann: tage === null ? ''
                : tage === 0 ? 'heute'
                : tage === 1 ? 'morgen'
                : 'in ' + tage + ' Tagen'
  };
}
