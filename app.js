const CML='https://www.centrodemedioslibres.org/wp-content/uploads/2014/10/';
const CARAS={'abel-garcia-hernandez.jpg':'GARCIA-HERNANDEZ-Abel1.jpg','abelardo-vazquez-peniten.jpg':'VAZQUEZ-PENITEN-Abelardo1.jpg','adan-abrajan-de-la-cruz.jpg':'ABRAJAN-DE-LA-CRUZ-Adan1.jpg','alexander-mora-venancio.jpg':'MORA-VALENCIO-Alexander1.jpg','antonio-santana-maestro.jpg':'SANTANA-MAESTRO-Antonio1.jpg','benjamin-ascencio-bautista.jpg':'ASCENCIO-BAUTISTA-Benjamin1.jpg','bernardo-flores-alcaraz.jpg':'FLOREZ-ALCARAZ-Bernardo1.jpg','carlos-ivan-ramirez-villarreal.jpg':'RAMIREZ-VILLAREAL-Carlos-Ivan2.jpg','carlos-lorenzo-hernandez-munoz.jpg':'HERNANDEZ-MU%C3%91OZ-Carlos-Lorenzo1.jpg','cesar-manuel-gonzalez-hernandez.jpg':'GONZALES-HERNANDEZ-Cesar-Manuel1.jpg','christian-alfonso-rodriguez-telumbre.jpg':'RODRIGUEZ-TELUMBRE-Christian-Alfonso1.jpg','christian-tomas-colon-garnica.jpg':'COLON-GARNICA-Christian-Tomas1.jpg','cutberto-ortiz-ramos.jpg':'ORTIZ-RAMOS-Cutberto1.jpg','dorian-gonzalez-parral.jpg':'GONZALEZ-PARRAL-Doriam1.jpg','emiliano-alen-gaspar-de-la-cruz.jpg':'GASPAR-DE-LA-CRUZ-Emiliano-Alen1.jpg','everardo-rodriguez-bello.jpg':'RODRIGUEZ-BELLO-Everardo1.jpg','felipe-arnulfo-rosa.jpg':'ARNULFO-ROSAS-Felipe1.jpg','giovanni-galindes-guerrero.jpg':'GALINDES-GUERRERO-Giovanni1.jpg','israel-caballero-sanchez.jpg':'CABALLERO-SANCHEZ-Israel1.jpg','israel-jacinto-lugardo.jpg':'JACINTO-LUGANO-Israel1.jpg','jesus-jovany-rodriguez-tlatempa.jpg':'RODRIGEZ-TLATEMPA-Jesus-Jovany1.jpg','jhosivani-guerrero-de-la-cruz.jpg':'GUERRERO-DE-LA-CRUZ-Joshivani1.jpg','jonas-trujillo-gonzalez.jpg':'TRUJILLO-GONZALEZ-Jonas1.jpg','jorge-alvarez-nava.jpg':'ALVAREZ-NAVA-Jorge1.jpg','jorge-anibal-cruz-mendoza.jpg':'CRUZ-MENDOZA-Jose-Anibal1.jpg','jorge-antonio-tizapa-legideno.jpg':'TIZAPA-LEGIDE%C3%91O-Jorge-Antonio1.jpg','jorge-luis-gonzalez-parral.jpg':'GONZALEZ-PARRAL-Jorge-Luis1.jpg','jose-angel-campos-cantor.jpg':'CAMPOS-CANTOR-Jose-Angel1.jpg','jose-angel-navarrete-gonzalez.jpg':'NAVARRETE-GONZALEZ-Jose-Angel1.jpg','jose-eduardo-bartolo-tlatempa.jpg':'BARTOLO-TLATEMPA-Jos%C3%A9-Eduardo1.jpg','jose-luis-luna-torres.jpg':'LUNA-TORRES-Jose-Luis1.jpg','julio-cesar-lopez-patolzin.jpg':'LOPEZ-PATOLZIN-Julio-Cesar1.jpg','leonel-castro-abarca.jpg':'CASTRO-ABARCA-Leonel1.jpg','luis-angel-abarca-carrillo.jpg':'ABARCA-CASTILLO-Luis-Angel1.jpg','luis-angel-francisco-arzola.jpg':'FRANCISCO-ARZOLA-Luis-Angel1.jpg','magdaleno-ruben-lauro-villegas.jpg':'LAURO-VILLEGAS-Magdaleno-Ruben1.jpg','marcial-pablo-baranda.jpg':'PABLO-BARANDA-Marcial1.jpg','marco-antonio-gomez-molina.jpg':'GOMEZ-MOLINA-Marco-Antonio1.jpg','martin-getsemani-sanchez-garcia.jpg':'SANCHEZ-GARCIA-Martin-Getsemani1.jpg','mauricio-ortega-valerio.jpg':'ORTEGA-VALERIO-Mauricio1.jpg','miguel-angel-hernandez-martinez.jpg':'HERNANDEZ-MARTINEZ-Miguel-Angel1.jpg','miguel-angel-mendoza-zacarias.jpg':'MENDOZA-ZACARIAS-Miguel-Angel1.jpg','saul-bruno-garcia.jpg':'BRUNO-GARCIA-Saul1.jpg'};
const ESTUDIANTES=[
{n:1,nombre:'Abel García Hernández',foto:'abel-garcia-hernandez.jpg',edad:'20 años',dato:'Tecoanapa, Guerrero. Ayudaba en la milpa familiar.'},
{n:2,nombre:'Abelardo Vázquez Peniten',foto:'abelardo-vazquez-peniten.jpg',edad:'19 años',dato:'Le decían El Abe. Leía y jugaba fútbol.'},
{n:3,nombre:'Adán Abraján de la Cruz',foto:'adan-abrajan-de-la-cruz.jpg',edad:'24 años',dato:'Barrio de El Fortín, Tixtla. Aficionado al fútbol.'},
{n:4,nombre:'Alexander Mora Venancio',foto:'alexander-mora-venancio.jpg',edad:'21 años',dato:'Restos identificados en 2014.',tag:'Identificado'},
{n:5,nombre:'Antonio Santana Maestro',foto:'antonio-santana-maestro.jpg',edad:'20 años',dato:'Normalista de primer ingreso.'},
{n:6,nombre:'Benjamín Ascencio Bautista',foto:'benjamin-ascencio-bautista.jpg',edad:'19 años',dato:'De Chilapa. Había sido educador comunitario del CONAFE.'},
{n:7,nombre:'Bernardo Flores Alcaraz',foto:'bernardo-flores-alcaraz.jpg',edad:'21 años',dato:'Coordinaba al grupo que buscaba autobuses.'},
{n:8,nombre:'Carlos Iván Ramírez Villarreal',foto:'carlos-ivan-ramirez-villarreal.jpg',edad:'20 años',dato:'Estudiante de la Normal Rural.'},
{n:9,nombre:'Carlos Lorenzo Hernández Muñoz',foto:'carlos-lorenzo-hernandez-munoz.jpg',edad:'19 años',dato:'Normalista de nuevo ingreso.'},
{n:10,nombre:'César Manuel González Hernández',foto:'cesar-manuel-gonzalez-hernandez.jpg',edad:'21 años',dato:'Originario de Huamantla, Tlaxcala.'},
{n:11,nombre:'Christian Alfonso Rodríguez Telumbre',foto:'christian-alfonso-rodriguez-telumbre.jpg',edad:'21 años',dato:'Restos identificados en 2020.',tag:'Identificado'},
{n:12,nombre:'Christian Tomás Colón Garnica',foto:'christian-tomas-colon-garnica.jpg',edad:'18 años',dato:'Uno de los más jóvenes del grupo.'},
{n:13,nombre:'Cutberto Ortiz Ramos',foto:'cutberto-ortiz-ramos.jpg',edad:'22 años',dato:'Estudiante de la Normal Rural.'},
{n:14,nombre:'Dorian González Parral',foto:'dorian-gonzalez-parral.jpg',edad:'19 años',dato:'Normalista de primer año.'},
{n:15,nombre:'Emiliano Alen Gaspar de la Cruz',foto:'emiliano-alen-gaspar-de-la-cruz.jpg',edad:'23 años',dato:'Compañero de generación de 2014.'},
{n:16,nombre:'Everardo Rodríguez Bello',foto:'everardo-rodriguez-bello.jpg',edad:'21 años',dato:'Le preocupaba la desigualdad. Apodado Shaggy.'},
{n:17,nombre:'Felipe Arnulfo Rosa',foto:'felipe-arnulfo-rosa.jpg',edad:'20 años',dato:'Familia campesina de Ayutla, Guerrero.'},
{n:18,nombre:'Giovanni Galindes Guerrero',foto:'giovanni-galindes-guerrero.jpg',edad:'20 años',dato:'Por su agilidad le decían Spider.'},
{n:19,nombre:'Israel Caballero Sánchez',foto:'israel-caballero-sanchez.jpg',edad:'21 años',dato:'De Atliaca, Tixtla. Quería ser maestro bilingüe.'},
{n:20,nombre:'Israel Jacinto Lugardo',foto:'israel-jacinto-lugardo.jpg',edad:'19 años',dato:'Originario de Atoyac. Le decían Chulyto.'},
{n:21,nombre:'Jesús Jovany Rodríguez Tlatempa',foto:'jesus-jovany-rodriguez-tlatempa.jpg',edad:'21 años',dato:'Apoyaba a su mamá. Le decían Churro.'},
{n:22,nombre:'Jhosivani Guerrero de la Cruz',foto:'jhosivani-guerrero-de-la-cruz.jpg',edad:'20 años',dato:'De Omeapa. Restos identificados en 2019.',tag:'Identificado'},
{n:23,nombre:'Jonás Trujillo González',foto:'jonas-trujillo-gonzalez.jpg',edad:'20 años',dato:'Estudiante de la Normal Rural.'},
{n:24,nombre:'Jorge Álvarez Nava',foto:'jorge-alvarez-nava.jpg',edad:'19 años',dato:'Normalista de nuevo ingreso.'},
{n:25,nombre:'Jorge Aníbal Cruz Mendoza',foto:'jorge-anibal-cruz-mendoza.jpg',edad:'19 años',dato:'Compañero de la generación 2014.'},
{n:26,nombre:'Jorge Antonio Tizapa Legideño',foto:'jorge-antonio-tizapa-legideno.jpg',edad:'20 años',dato:'Estudiante de Ayotzinapa.'},
{n:27,nombre:'Jorge Luis González Parral',foto:'jorge-luis-gonzalez-parral.jpg',edad:'21 años',dato:'Normalista de la Raúl Isidro Burgos.'},
{n:28,nombre:'José Ángel Campos Cantor',foto:'jose-angel-campos-cantor.jpg',edad:'Normalista',dato:'Su familia exige presentación con vida.'},
{n:29,nombre:'José Ángel Navarrete González',foto:'jose-angel-navarrete-gonzalez.jpg',edad:'Normalista',dato:'Desaparecido la noche de Iguala.'},
{n:30,nombre:'José Eduardo Bartolo Tlatempa',foto:'jose-eduardo-bartolo-tlatempa.jpg',edad:'Normalista',dato:'Estudiante de la Normal Rural.'},
{n:31,nombre:'José Luis Luna Torres',foto:'jose-luis-luna-torres.jpg',edad:'Normalista',dato:'Compañero de los 43.'},
{n:32,nombre:'Julio César López Patolzin',foto:'julio-cesar-lopez-patolzin.jpg',edad:'Normalista',dato:'Desaparecido el 26-27 de septiembre de 2014.'},
{n:33,nombre:'Leonel Castro Abarca',foto:'leonel-castro-abarca.jpg',edad:'19 años',dato:'De El Magueyito, Tecuanapa.'},
{n:34,nombre:'Luis Ángel Abarca Carrillo',foto:'luis-angel-abarca-carrillo.jpg',edad:'21 años',dato:'Costa Chica, Cuautepec. Le decían Amiltzingo.'},
{n:35,nombre:'Luis Ángel Francisco Arzola',foto:'luis-angel-francisco-arzola.jpg',edad:'Normalista',dato:'Estudiante de la Normal de Ayotzinapa.'},
{n:36,nombre:'Magdaleno Rubén Lauro Villegas',foto:'magdaleno-ruben-lauro-villegas.jpg',edad:'Normalista',dato:'Uno de los 43 desaparecidos.'},
{n:37,nombre:'Marcial Pablo Baranda',foto:'marcial-pablo-baranda.jpg',edad:'20 años',dato:'Le decían Magallón.'},
{n:38,nombre:'Marco Antonio Gómez Molina',foto:'marco-antonio-gomez-molina.jpg',edad:'Normalista',dato:'Desaparecido en Iguala.'},
{n:39,nombre:'Martín Getsemaní Sánchez García',foto:'martin-getsemani-sanchez-garcia.jpg',edad:'Normalista',dato:'Estudiante de la Raúl Isidro Burgos.'},
{n:40,nombre:'Mauricio Ortega Valerio',foto:'mauricio-ortega-valerio.jpg',edad:'Normalista',dato:'Su familia sigue buscando.'},
{n:41,nombre:'Miguel Ángel Hernández Martínez',foto:'miguel-angel-hernandez-martinez.jpg',edad:'Normalista',dato:'Desaparecido la noche del 26 de septiembre.'},
{n:42,nombre:'Miguel Ángel Mendoza Zacarías',foto:'miguel-angel-mendoza-zacarias.jpg',edad:'Normalista',dato:'Estudiante de la Normal Rural.'},
{n:43,nombre:'Saúl Bruno García',foto:'saul-bruno-garcia.jpg',edad:'Normalista',dato:'El último nombre de la lista de los 43.'}
];
(function(){
var grid=document.getElementById('fichas-grid');
if(!grid) return;
var conn=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
var save=!!(conn&&(conn.saveData||/2g/i.test(conn.effectiveType||'')));
function activate(img){
  if(!img||img.getAttribute('src')) return;
  img.src=img.getAttribute('data-src');
}
ESTUDIANTES.forEach(function(s){
  var d=document.createElement('article');
  d.className='ficha';
  var src=CML+(CARAS[s.foto]||'');
  d.innerHTML='<img alt="'+s.nombre+'" data-src="'+src+'" width="150" height="170" decoding="async" referrerpolicy="no-referrer" onerror="this.style.display=\'none\'"><div class="pad"><div class="n">43 · '+String(s.n).padStart(2,'0')+'</div><h3>'+s.nombre+'</h3><p>'+s.edad+'. '+s.dato+'</p>'+(s.tag?'<span class="tag">'+s.tag+'</span>':'')+'</div>';
  grid.appendChild(d);
});
var pending=[].slice.call(grid.querySelectorAll('img[data-src]'));
function observe(){
  if(!('IntersectionObserver' in window)){
    pending.forEach(activate);
    return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ activate(en.target); io.unobserve(en.target); }
    });
  },{rootMargin:'120px'});
  pending.forEach(function(img){ io.observe(img); });
}
var btn=document.getElementById('cargar-retratos');
if(save&&btn){
  btn.hidden=false;
  btn.onclick=function(){ btn.hidden=true; observe(); };
}else{
  if(btn) btn.hidden=true;
  observe();
}
})();
