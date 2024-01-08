console.log('asd');

function hide(domObj,elem) {
    let valtozo = domObj.id;
    console.log(valtozo);

    if(document.querySelector('.'+elem).classList.contains('hidden')){
        console.log('shown');
        document.querySelector('.'+elem).classList.remove('hidden')
        //document.querySelector('.resultbox').classList.remove('hidden')
        domObj.classList.add('balcimshown')
    } else{
        document.querySelector('.'+elem).classList.add('hidden')
        //document.querySelector('.resultbox').classList.add('hidden')
        if(domObj.classList.contains('balcimshown')) {
            domObj.classList.remove('balcimshown')
        }
        document.querySelector('.keretescim').innerHTML = 'Válassz ki egy tananyagot';
        document.querySelector('.resultbox').innerHTML = `<div class="col-md-12 contentp text-center baseheadtitle"><h1>Válassz ki egy tananyagot!</h1></div>`;
        console.log('hidden');

        document.querySelector('#info').classList.remove('hidden');
        document.querySelector('#pelda').classList.remove('hidden');
        document.querySelector('#feladat').classList.remove('hidden');
        document.querySelector('#megoldas').classList.remove('hidden');

        if(document.querySelector('.chosenalli') != null) {
            document.querySelector('.chosenalli').classList.remove('chosenalli')
        } 
    }

}

function valaszt(domObj){
    console.log('klikk');
    console.log(domObj.value);
    ertek = domObj.value;
    console.log('Érték:' + ertek);
    
    document.querySelector('#info').classList.remove('hidden');
    document.querySelector('#pelda').classList.remove('hidden');
    document.querySelector('#feladat').classList.remove('hidden');
    document.querySelector('#megoldas').classList.remove('hidden');

    document.querySelector('.keretescim').innerHTML = domObj.value;
    if(document.querySelector('.chosenalli') != null) {
        document.querySelector('.chosenalli').classList.remove('chosenalli')
    } 
    if(domObj.classList.contains('.chosenalli') != true) {
        domObj.classList.add('chosenalli')
    }

    switch (ertek) {
        case 'A Java-ról': console.log('asdasdasdsa');
        document.querySelector('#pelda').classList.add('hidden')
        document.querySelector('#feladat').classList.add('hidden');
        document.querySelector('#megoldas').classList.add('hidden');
        break
        case 'Hello Világ': console.log('asdasdasdsa');
        document.querySelector('#feladat').classList.add('hidden');
        document.querySelector('#megoldas').classList.add('hidden');
        break
        case 'Felépítése (szintaxisa)': console.log('asdasdasdsa');
        document.querySelector('#pelda').classList.add('hidden');
        document.querySelector('#feladat').classList.add('hidden');
        document.querySelector('#megoldas').classList.add('hidden');
        break
        case 'Változók és típusai': console.log('asdasdasdsa');
        document.querySelector('#pelda').classList.add('hidden')
        document.querySelector('#feladat').classList.add('hidden');
        document.querySelector('#megoldas').classList.add('hidden');
        break
        case 'Matematikai operátorok': console.log('asdasdasdsa');
        document.querySelector('#feladat').classList.add('hidden');
        document.querySelector('#megoldas').classList.add('hidden');
        break
        case 'Összehasonlító operátorok': console.log('asdasdasdsa');
        document.querySelector('#feladat').classList.add('hidden');
        document.querySelector('#megoldas').classList.add('hidden');
        break
        case 'Logikai operátorok': console.log('asdasdasdsa');
        document.querySelector('#megoldas').classList.add('hidden');
        break
        case 'Elágazások': console.log('Elágazások');
        document.querySelector('#feladat').classList.add('hidden')
        document.querySelector('#megoldas').classList.add('hidden')
        break
        case 'Sztringek (1. rész)': console.log('Sztringek (1. rész)');
        document.querySelector('#feladat').classList.add('hidden')
        document.querySelector('#megoldas').classList.add('hidden')
        break
        case 'Sztringek (2. rész)': console.log('Sztringek (2. rész)');
        document.querySelector('#feladat').classList.add('hidden')
        document.querySelector('#megoldas').classList.add('hidden')
        break
        case '"For" Ciklus': console.log('"For" Ciklus');
        document.querySelector('#feladat').classList.add('hidden')
        document.querySelector('#megoldas').classList.add('hidden')
        break
        case 'Tömbök': console.log('Tömbök');
        document.querySelector('#feladat').classList.add('hidden')
        document.querySelector('#megoldas').classList.add('hidden')
        break
        case 'Adatbekérés': console.log('Adatbekérés');
        document.querySelector('#feladat').classList.add('hidden')
        document.querySelector('#megoldas').classList.add('hidden')
        break
        case 'Fájlbeolvasás': console.log('Fájlbeolvasás');
        document.querySelector('#feladat').classList.add('hidden')
        document.querySelector('#megoldas').classList.add('hidden')
        break
        case 'Fájlbaírás': console.log('Fájlbaírás');
        document.querySelector('#feladat').classList.add('hidden')
        document.querySelector('#megoldas').classList.add('hidden')
        break
        
        
    }
}

function infok(domObj) {
    let ertek = document.querySelector('.keretescim').textContent
    console.log(ertek);
    console.log('infok');
    if(document.querySelector('#info').classList.contains('chosen')!= true) {
        document.querySelector('#info').classList.add('chosen')
        document.querySelector('#pelda').classList.remove('chosen')
        document.querySelector('#feladat').classList.remove('chosen')
        document.querySelector('#megoldas').classList.remove('chosen')
    }
    switch (ertek) {
        case 'A Java-ról' : console.log('xd');
        document.querySelector('.resultbox').innerHTML = `<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1>A Java programozási nyelv</h1></div></div><div class="row mt-2"><div class="col-md-8 contentp"><p>A <span style="font-weight: bold;">Java</span>  egy általános célú, objektumorientált programozási nyelv.</p></div><div class="col-md-4 text-center pb-3"><img class="img-fluid contentimg" src="src/javalogocontent.png" alt=""></div></div><div class="row"><div class="col-md-12 contentp"><p>A Java alkalmazásokat jellemzően bájtkód formátumra alakítják, de közvetlenül natív (gépi) kód is készíthető Java forráskódból. A bájtkód futtatása a Java virtuális géppel történik.</p></div></div><div class="row"><div class="col-md-12 contentp"><p><span style="font-weight: bold;">Négy</span> fontos szempontot tartottak szem előtt, amikor a <span style="font-weight: bold;">Javát</span> kifejlesztették:</p><ul><li><p>objektumorientáltság</p></li><li><p>függetlenség az operációs rendszertől, amelyen fut (többé-kevésbé)</p></li><li><p>olyan kódokat és könyvtárakat tartalmazzon, amelyek elősegítik a hálózati programozást;</p></li><li><p>távoli gépeken is képes legyen biztonságosan futni.</p></li></ul></div></div><div class="row"><div class="col-md-12 contentp"><p style="font-weight: bold;">Érdekesség:</p></div></div><div class="row"><div class="col-md-12 contentp"><p>A Java nyelvet kávézás közben találták ki, innen ered a kávéscsésze ikon.</p></div></div></div>`;
        break;
        case 'Java alapok': console.log('java alapok fasz');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>info java alapok</h1></div>'
        break;
        case 'Hello Világ': console.log('Hello Világ');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Hello Világ</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p> A Javában minden program (alkalmazás) egy osztálynévvel kezdődik, melynek meg kell egyeznie a fájl nevével.<p>Kezdésként hozzunk létre egy Java fájlt és nevezzük el Main<span style="font-weight: bold;">.java</span> néven (Bármi lehet a neve, de az osztálynévnek meg kell vele egyeznie).</p><p>A fájlba megírunk egy olyan parancsot, mely kíírja a konzolablakra, hogy Hello Világ. Ezt a következőképpen tehetjük meg: (lásd: Példák)</p></div></div></div>';
        break;
        case 'Felépítése (szintaxisa)' : console.log('Felépítése (szintaxisa)');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Felépítése (szintaxisa)</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p> Minden kódsor amit Javában írunk osztályban (class) kell hogy legyen. Egy osztály nevét, ha csak lehet, nagy kezdőbetűvel kell kezdeni.<p>A main() metódus minden programban szükséges, hiszen minden ami ebben helyezkedik el, le lesz futtatva a program által.</p><p> <p style="font-weight:bold;">A System.out.println()<p/> (hogy ne kelljen kiírni minden alkalommal, a legtöbb Java-t futtató alkalmazásban csak beírod, hogy "sout", majd nyomsz egy enter-t) a konzolablakra egy sornyi szöveget ír ki, majd tesz egy sortörést a végére, így a következő kiíratás automatikusan új sorba fog kerülni.</p></div></div></div>';
        break;
        case 'Kiíratás' : console.log('Kiíratás');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Kiíratás</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p> A kiíratáshoz leggyakrabban System.out.println() metódust használunk, de ha nem szeretnénk sortörést tenni a szöveg végére, akkor használjuk a System.out.print() metódust, s ha pedig formázni is szeretnénk a kiíratást akkor pedig használjuk a System.out.printf() metódust.<p>A kiíratást, mivel egy szöveg "" ilyen idézőjel közé tesszük. Ha 2 stringet (szöveget) szeretnénk összefűzni a kiíratásnál azt legegyszerűbben egy + jellel tehetjük meg.</p></div></div></div>';
        break
        case 'Változók és típusai' : console.log('Változók és típusai');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Változók és típusai</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><table><tr><td>Típus neve:</td><td>Mérete:</td><td>Jellemző:</td></tr><tr><td>byte</td><td>1 byte</td><td>Egész számokat tárol: -128-tól 127-ig</td></tr><tr><td>short</td><td>2 byte</td><td>Egész számokat tárol: -32,768-tól 32,767-ig</td></tr><tr><td>int</td><td>4 byte</td><td>Egész számokat tárol: kb. -2 milliárdtól-tól 2 milliárdig-ig</td></tr><tr><td>long</td><td>8 byte</td><td>Egész számokat tárol: -9*10¹⁸-tól 9*10¹⁸-ig</td></tr><tr><td>float</td><td>4 byte</td><td>Törtszámokat tárol: 6-7 tizedesjegy tárolásához megfelelő.</td></tr><tr><td>double</td><td>8 byte</td><td>Törtszámokat tárol: 15 tizedesjegy tárolásához megfelelő</td></tr><tr><td>boolean</td><td>1 bit</td><td>Egy értéket tárol el, ami vagy true (igaz), vagy false (hamis)</td></tr><tr><td>char</td><td>2 byte</td><td>Egyetlen karaktert tárol</td></tr><tr><td>string</td><td style="text-align:center">-</td><td>Szöveges adatot tárol</td></tr></table></div></div></div>';
        break
        case 'Változók deklarálása' : console.log('Változók deklarálása');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Kiíratás</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>Egy változó deklarálásához (létrehozásához) meg kell adnunk<ul><li>a változó típusát</li> <li>egy egyedi nevet (akár egy szó is, mely utal arra, hogy mire használjuk az adott változót)</li> <li>és végül az értékét kell megadnunk.</li></ul></p></div></div></div>';
        break
        case 'Matematikai operátorok' : console.log('Matematikai operátorok');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Matematikai operátorok</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>A matematikai operátorok arra használhatók, hogy műveleteket hajtsanak végre változókon és értékeken.<ul><li>összeadás: +</li> <li>kivonás: -</li> <li>szorzás: *</li><li>osztás: /</li><li>maradékos osztás (csak a maradékot adja vissza): %</li><li>inkrementálás (megnöveli az értéket egyel): ++</li><li>dekrementálás (csökkenti az értéket egyel): --</li></ul></p></div></div></div>';
        break
        case 'Összehasonlító operátorok' : console.log('Összehasonlító operátorok');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Összehasonlító operátorok</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p> Az összehasonlító operátorok arra használhatók, hogy két változót vagy értéket hasonlítson össze, vizsgáljon.<ul><li>egyenlő: ==</li> <li>nem egyenlő: !=</li> <li>nagyobb: ></li><li>kisebb: <</li><li>nagyobb vagy egyenlő: >=</li><li>kisebb vagy egyenlő: <=</li></ul></p></div></div></div>';
        break
        case 'Logikai operátorok' : console.log('Logikai operátorok');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Logikai operátorok</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>A logikai operátorokat arra használjuk, hogy meghatározzuk a logikai kapcsolatot változók vagy értékek között.<ul><li style="font-weight:bold;">ÉS: &&</li> <li style="font-weight:bold;">VAGY: ||</li> <li style="font-weight:bold;">NEM: !></ul></p></div></div></div>';
        break
        case 'Elágazások' : console.log('Elágazások');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Elágazások</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>Az <span style="font-weight: bold;">"if"</span> utasítást akkor használjuk, ha csak akkor szeretnénk lefuttatni egy adott utasítást, ha a feltétel visszatérítési értéke igaz (true). <br> Ha a feltétel visszatérítési értéke hamis lenne, abban az esetben az <span style="font-weight: bold;">"else"</span> ág fog végrehajtódni. <br> Ha az első feltételün hamis, de szeretnénk másik feltételt is tesztelni, akkor használjuk az <span style="font-weight: bold;">"else if"</span> utasítást. <br> Ha sok feltételt szeretnénk vizsgálni akkor érdemesebb használni a <span style="font-weight: bold;">"switch"</span> metódust, mellyel átláthatóbb, rövidebb lesz a kódunk.</p></div></div></div>';
        break
        case 'Sztringek (1. rész)' : console.log('Sztringek (1. rész)');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Sztringek (1. rész)</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>A sztring egy olyan objektum, melyet szövegek tárolására alkalmazunk. Ez tartalmaz metódusokat, amelyek különböző műveleteket tesznek lehetővé.<br>Először is a <span style="font-weight: bold;">"length()"</span>, metódus, mely visszaadja az adott sztring hosszát (lásd: Példák).<br>Ha nagybetűssé akarjuk tenni a sztringet, akkor a <span style="font-weight: bold;">"toUpperCase()"</span>, ha kisbetűssé akkor a <span style="font-weight: bold;">"toLowerCase()"</span> metódust használjuk (lásd: Példák).<br>Az <span style="font-weight: bold;">"indexOf()"</span> visszatéríti sztringek azon indexét, ahol a zárójelben megadott szöveg először előfordul (lásd: Példák).<br>Két sztring összefűzése történhet a <span style="font-weight: bold;">"+"</span> operátorral is, de gyorsabb, ha a <span style="font-weight: bold;">"concat()"</span> metódust alkalmazzuk.</p></div></div></div>';
        break
        case 'Sztringek (2. rész)' : console.log('Sztringek (2. rész)');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Sztringek (2. rész)</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>A <span style="font-weight: bold;">"charAt()"</span> metódus visszaadja a szövegben az adott indexen lévő karaktert (lásd: Példák).<br>Ha két sztringet szeretnénk összehasonlítani azt a <span style="font-weight: bold;"></span>"equals()" metódussal tehetjük meg.<br>A sztringünkben tudunk szöveget is cserélni, ilyenkor a <span style="font-weight: bold;">"replace()"</span> zárójelében megadjuk a keresett szöveget a sztringben, majd vesszővel elválasztva megadjuk, hogy mire szeretnénk azt cserélni (lásd: Példák).<br>Ha ellenőrizni szeretnénk, hogy a sztring egy megadott szöveggel kezdődik-e, akkor a <span style="font-weight: bold;">"startsWith()"</span> metódust használunk (lásd: Példák).<br>Ha egy sztringnek vissza szeretnénk téríteni két adott index közötti részét, azt a <span style="font-weight: bold;">"substring()"</span>alkalmazásával tesszük meg (lásd: Példák).</p></div></div></div>';
        break
        case 'StringBuilder' : console.log('StringBuilder');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">StringBuilder</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>Ha egy sztringen több módosítást is szeretnénk végrehajtani, akkor érdemes először <span style="font-weight: bold;">StringBuilder</span>-ré alakítani (lásd: Példák), hiszen így kevesebb erőforrást használ fel.<br>Hasonló metódusokkal működik, mint a sztring, ám van pár hasznos további is.<br>Az <span style="font-weight: bold;">"insert()"</span> hasznos, ha egy megadott helyre szeretnél beszúrni egy szöveget (lásd: Példák).<br>Van az <span style="font-weight: bold;">"append()"</span> is, mely automatikusan a sztring végére helyezi a szöveget.<br>A sztring <span style="font-weight: bold;">"replace()"</span> funkciójával ellentétben itt nem a kicserélendő szöveget kell megadni, hanem hogy melyik két index között lévő szöveget cserélje ki és mire (lásd: Példák).<br>Ha törölni szeretnénk egy adott részt, (két index közöttit) akkor alkalmazzuk a <span style="font-weight: bold;">"delete()"</span> metódust (lásd: Példák).</p></div></div></div>';
        break
        case '"For" Ciklus' : console.log('"For" Ckilus');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">"For" Ciklus</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>Ciklusokat használunk, amikor egy adott kódblokkot töbször is le szeretnénk futtatni.<br>Ilyen ciklus a <span style="font-weight: bold;"> "for"</span>, melyet akkor használunk, ha pontosan tudjuk, hogy hányszor szeretnénk azt lefuttatni, vagy ha egy listán szeretnénk végigmenni (a listákat csak későbbi fejezetben nézzük meg).<br> A Példák szekciónál megtekintheted, hogy hogyan alkalmazzuk helyesen ezt a ciklusmetódust.</p></div></div></div>';
        break
        case '"While" Ciklus' : console.log('"While" Ciklus');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">"While" Ciklus</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>Ha egy ciklust nem egy pontosan megadott értékszer szeretnénk lefuttatni, akkor a <span style="font-weight: bold;">"while"</span> metódust használunk, amely addig fut, amíg a zárójelben megadott kritérium teljesül, igaz. A Példák szekciónál megtekintheted, hogy hogyan alkalmazzuk helyesen ezt a ciklusmetódust.</p></div></div></div>';
        break
        case '"While" Ciklus' : console.log('"While" Ciklus');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">"While" Ciklus</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>Ha egy ciklust nem egy pontosan megadott értékszer szeretnénk lefuttatni, akkor a <span style="font-weight: bold;">"while"</span> metódust használunk, amely addig fut, amíg a zárójelben megadott kritérium teljesül, igaz. A Példák szekciónál megtekintheted, hogy hogyan alkalmazzuk helyesen ezt a ciklusmetódust.</p></div></div></div>';
        break
        case 'Tömbök' : console.log('Tömbök');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Tömbök</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>A <span style="font-weight: bold;">tömböket</span> arra használjuk, hogy több értéket tároljunk el egyetlen változóban, ahelyett, hogy külön változókat deklarálnánk (hoznánk létre) minden egyes értékhez.<br>A tömbnek meg kell adni a <span style="font-weight: bold;">típusát</span>, majd ezt egy szögletes zárójel követi, majd az egyedi neve a tömbnek, s ezt követően a tömbben lévő elemek kapcsos zárójel között (lásd: Példák). Ha a tömb valamelyik helyen lévő elemére vagyunk kíváncsiak, akkor annak az indexét a tömb nevét követően egy szögletes zárójelbe írjuk. Így akár módosíthatjuk is az adott elemet (lásd: Példák).<br>Ha a tömbön elemenként szeretnénk végigmenni azt egy <span style="font-weight: bold;">"for" ciklus</span> segítségével tudjuk megtenni (lásd: Példák).<br>Ha szükségünk lenne rá, a tömb hosszát a <span style="font-weight: bold;">"length()"</span> metódussal érjük el.</p></div></div></div>';
        break
        case 'Listák' : console.log('Listák');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Listák</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>A listák különlegessége a tömbökkel szemben az, hogy míg a tömböknél előre meg kell adni a nagyságát (vagy a tömb elemeit), a listákhoz az elemeket bármikor hozzá lehet adni vagy ki lehet törölni, így nem kell tudnunk előre, hogy hány értéket fogunk belepakolni.<br>A listák használatához először is be kell importálnunk a kódunk elejére ezt a csomagot: <span style="font-weight: bold;">"java.util.ArrayList"</span>, majd létrehozni a listánkat (lásd: Példák).<br>Ennek a csomagnak számos funkciója van. Például ha listához szeretnénk adni egy elemet csak használjuk az <span style="font-weight: bold;">"add()"</span> parancsot (lásd: Példák).<br>Ha a lista valamelyik indexen lévő elemére vagyunk kíváncsiak, akkor a <span style="font-weight: bold;">"get()"</span> metódust alkalmazzuk. A <span style="font-weight: bold;">"set()"</span> parancs egy adott indexen lévő elemet cserél ki egy új, általunk megadott értékre (lásd: Példák).<br>Ha egy adott indexű elemet szeretnénk törölni, akkor használjuk a <span style="font-weight: bold;">"remove()"</span> metódust.<br>Ha pedig le szeretnénk kérni a listánknak a hosszát, azt a <span style="font-weight: bold;">"size()"</span> parancs segítségével könnyedén megtehetjük (lásd: Példák).</p></div></div></div>';
        break
        case 'Adatbekérés' : console.log('Adatbekérés');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Adatbekérés</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>A Java nyelvben az adatok beolvasására a <span style="font-weight: bold;">Scanner osztályt</span> használjuk, amely lehetővé teszi a programok számára, hogy felhasználói bemenetet fogadjanak, és interaktívan kommunikáljanak a felhasználóval.Ennek a beimportálásához tekintsd meg a Példák fület.<br>Ezután létrehozunk egy <span style="font-weight: bold;">Scanner objektumot</span>, melyet később meg tudunk hívni, mikor adatot szeretnénk beolvasni (lásd: Példák). Majd deklarálunk egy változót, meghívjuk az egyedi névvel ellátott <span style="font-weight: bold;">Scanner objektumunkat</span> és a <span style="font-weight: bold;">"nextLine()"</span> metódust használjuk (ha sztringet szeretnénk beolvasni).</p></div></div></div>'; 
        break
        case 'Fájlbeolvasás' : console.log('Fájlbeolvasás');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Fájlbeolvasás</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>A fájlbeolvasás fontos része egy alaklmazásnak. Ha egy fájlból adatokat szeretnénk beolvasni, először importálnunk kell a hozzá szükséges csomagokat (lásd: Példák). Majd egy <span style="font-weight: bold;">"try", "catch" elágazást</span> kell használunk, hiszen ha valami hiba merülne fel a fájl beolvasása közben azt le kell kezelnünk.<br>A <span style="font-weight: bold;">"try"</span> ágban ezután a <span style="font-weight: bold;">"File"</span> csomagban megadott forma szerint meghívjuk a fájlt, majd a <span style="font-weight: bold;">"Scanner"</span> csomag segítségével beolvassuk (lásd: Példák).<br>Ha végig szeretnénk menni a fájl összes adatán azt egy <span style="font-weight: bold;">"while" ciklusban</span> tehetjük meg, mely addig fut, amíg a beolvasásnak van következő sora <span style="font-weight: bold;">(hasNextLine() metódus)</span>.<br>Ha a fájlban lévő adatok valmilyen jellel vannak elválasztva, akkor a <span style="font-weight: bold;">"split()"</span> metódust alkalmazva szétválaszthatjuk őket, s külön el tudjuk tárolni.<br>A Példák fül alatt láthatsz egy egyszerű fájlbeolvasást.</p></div></div></div>'; 
        break
        case 'Fájlbaírás' : console.log('Fájlbaírás');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"><h1 style="font-weight:bold;">Fájlbaírás</h1></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p>Ha adatot szeretnénk kiírni egy fájlba, akkor először is importálni kell a csomagokat (lásd: Példák).<br>Utána a beolvasáshoz is használatos <span style="font-weight: bold;">"try", "catch"</span> ágat kell csinálni.<br>Majd egy <span style="font-weight: bold;">"FileWriter"</span> objektumot kell létrehoznunk, melynek felépítése azonos a <span style="font-weight: bold;">"File" objektummal.</span><br>Ha nem szeretnénk felülírni a fájlunkat, csak <span style="font-weight: bold;">hozzáfűzni</span> akarunk, akkor a fájl elérési útja mellé odatesszük vesszővel elválasztva a <span style="font-weight: bold;">"true"</span> kifejezést (lásd: Példák).<br>Ezután meghívjuk a <span style="font-weight: bold;">"FileWriter"</span> objektum egyedi azonosítóját (nevét), s használjuk a <span style="font-weight: bold;">"write()"</span> metódust (lásd: Példák).<br>Végül még a <span style="font-weight: bold;">"try"</span> ágban mindenképp le kell zárnunk a kiíratásunkat. A Példák fül alatt láthatsz egy egyszerű fájlbaírást.</p></div></div></div>'; 
        break
        
    }
}

function peldak(domObj){
    let ertek = document.querySelector('.keretescim').textContent
    console.log(ertek);
    if(document.querySelector('#pelda').classList.contains('chosen')!= true) {
        document.querySelector('#pelda').classList.add('chosen')
        document.querySelector('#info').classList.remove('chosen')
        document.querySelector('#feladat').classList.remove('chosen')
        document.querySelector('#megoldas').classList.remove('chosen')
    }
    switch (ertek) {
        case 'Hello Világ': console.log('Hello Világ');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between;"><div class="col-md-7 resultborder contentp"><p>public class Main {<br>&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello Világ");<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>'
        break;
        case 'Kiíratás': console.log('Kiíratás');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder contentp"><p>public class Main {<br>&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String a = "Hello";<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String b = "Világ";<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(a + " " + b + "!");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.printf("%s %s!",a,b); <span class="perper">//itt a %s a String típust jelöli, majd az idézőjel után megadhatóak a változók</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</p><div>';
        break
        case 'Változók deklarálása' : console.log('Változók deklarálása');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between;"><div class="col-md-7 resultborder contentp"><p>int szam = 5;<br>float tortertek = 5.99f; //ha float-ot használunk, akkor a szám végére tenni kell egy "f" betűt<br>double nagytortertek = 6.254641;<br>char karakter = \'D\'; <span class="perper">//ha karaktert adunk meg azt \'\' ilyen idézőjel közé kell tenni</span><br>boolean eldontendo = true; <span class="perper">//igaz</span><br>String szoveg = "Hello"; <span class="perper">//ha szöveget adunk meg azt "" ilyen idézőjel közé kell tenni</span></p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break;
        case 'Matematikai operátorok' : console.log('Matematikai operátorok');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>int szam = 5;<br>byte b = 4;<br>int c = a + b;<br>int vegeredmeny = c % 2;  <span class="perper">//1 lesz a végeredmény</span></p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div><div class="row" style="justify-content:space-between;"><div class="col-md-7 resultborder contentp"><p>int szam = 10;<br>szam++;<br>szam += 9; <span class="perper">// így lehet rövidíteni a "szam = szam + 9"-at</span><br>int vegeredmeny = szam / 4;  <span class="perper">//5 lesz a végeredmény</span></p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break;
        case 'Összehasonlító operátorok' : console.log('Összehasonlító operátorok');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>int a = 8;<br>int b = 23;<br>boolean vegeredmeny = a == b; <span class="perper">//false</span><br>vegeredmeny = a <= b; <span class="perper">//true</span></p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break;
        case 'Logikai operátorok' : console.log('Logikai operátorok');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>int a = 10;<br>int b = 13;<br>boolean vegeredmeny = a < b && b%2==0; <span class="perper">//false (mert a második feltétel nem teljesül)</span><br>vegeredmeny = a < b || b%2==0; <span class="perper">//true (mert legalább az egyik feltétel teljesül)</span><br>vegeredmeny = !(a>b)<span class="perper"> //true (mert a ! operátor megfordítja az eredményt)</span></p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break;
        case 'Elágazások' : console.log('Elágazások');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p><span class="perper">//if; else if; else</span><br>int elso = 10;<br>int masodik = 15;<br>if (elso > masodik) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Az első szám nagyobb, mint a második.");<br>}<br>else if (elso < masodik) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Az második szám nagyobb, mint a első.");<br>}<br>else {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("A két szám egyenlő.");<br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div><div class="row" style="justify-content:space-between;"><div class="col-md-7 resultborder contentp"><p><span class="perper">//switch; case; default</span><br>int hanyadikhonap = 6;<br>switch (hanyadikhonap) {<br>&nbsp;&nbsp;&nbsp;&nbsp;case 1:System.out.println("Január");break;<span class="perper">//a legtöbb esetben minden "case" végére kell egy "break" utasítás is</span><br>&nbsp;&nbsp;&nbsp;&nbsp;case 2:System.out.println("Február");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 3:System.out.println("Március");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 4:System.out.println("Április");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 5:System.out.println("Május");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 6:System.out.println("Június");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 7:System.out.println("Július");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 8:System.out.println("Augusztus");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 9:System.out.println("Szeptember");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 10:System.out.println("Október");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 11:System.out.println("November");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 12:System.out.println("December");break;<br>&nbsp;&nbsp;&nbsp;&nbsp;default:System.out.println("Érvénytelen hónap");<span class="perper">//ez az ág fut le, ha egyik "case" sem teljesült</span><br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break;
        case 'Sztringek (1. rész)' : console.log('Sztringek (1. rész)');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>String szoveg = "Hello Világ";<br>System.out.println(szoveg.length());    <span class="perper">//11</span><br>System.out.println(szoveg.toUpperCase());   <span class="perper">//HELLO VILÁG</span><br>System.out.println(szoveg.toLowerCase());   <span class="perper">//hello világ</span><br>System.out.println(szoveg.indexOf("ell"));  <span class="perper">//1</span><br>System.out.println(szoveg.indexOf("vil"));  <span class="perper">//-1 (mert nem található meg a szövegben)</span></p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case 'Sztringek (2. rész)' : console.log('Sztringek (2. rész)');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>String szoveg = "Hello Világ";System.out.println(szoveg.charAt(6));    <span class="perper">//V</span><br>System.out.println(szoveg.replace("Hello","Szia"));   <span class="perper">//Szia Világ</span><br>System.out.println(szoveg.startsWith("hel"));   <span class="perper">//false (mert nem kis "h" betűvel kezdődik)</span><br>System.out.println(szoveg.substring(2,8));  <span class="perper">//llo Vi (mert az végindexet már nem számítja bele)</span></p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case 'StringBuilder' : console.log('StringBuilder');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>String szoveg = "Hello Világ";<br>StringBuilder ujszoveg = new StringBuilder(szoveg);<br>System.out.println(ujszoveg.insert(5, ", Szia")); <span class="perper">//Hello, Szia Világ</span><br>System.out.println(ujszoveg.replace(0, ujszoveg.indexOf(" "), "Szervusz,")); <span class="perper">//Szervusz, Szia Világ (mert az indexOf() megkeresi a szóköz helyét, de azt a végindexet már nem számítja bele a cserélésbe)</span><br>System.out.println(ujszoveg.delete(8, ujszoveg.length()));  <span class="perper">//Szervusz</span></p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case '"For" Ciklus' : console.log('"For" Ciklus');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>for (int szam = 0; szam <= 7; szam++) {<span class="perper">//szám deklarálása és értékadása (0); meddig menjen a ciklus (kritérium) (itt addig megy, amíg a "szam" kisebb vagy egyenlő 7-tel); minden ciklus végén mi történjen a változóval (itt megnöveli mindig eggyel az értékét)</span><br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(szam+" ");   <span class="perper">//0 1 2 3 4 5 6 7</span><br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case '"While" Ciklus' : console.log('"While" Ciklus');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>int szam = 0;<br> while (szam <= 7) {    <span class="perper">//folyamatosan növeljük a számot, s mikor már eléri a 8-at, akkor a ciklus visszatérítési értéke hamis lesz, így nem fut le többször</span><br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(szam+" ");   <span class="perper">//0 1 2 3 4 5 6 7</span><br>&nbsp;&nbsp;&nbsp;&nbsp;szam++;<br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case 'Tömbök' : console.log('Tömbök');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>String[] tomb = {"hétfő", "kedd", "szerda", "csütörtök", "kedd", "szombat", "vasárnap"};<br>System.out.println(tomb[2]);    <span class="perper">//szerda</span><br>tomb[4] = "péntek";<br>for (String i: tomb) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(i+" ");    <span class="perper">//hétfő kedd szerda csütörtök péntek szombat vasárnap</span><br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case 'Listák' : console.log('Listák');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>import java.util.ArrayList;<br>public class Main {<br>&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ArrayList<String> lista = new ArrayList<>();  <span class="perper">//A "<>" jelek között megadjuk a listába kerülő elemek típusát</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista.add("tavaly");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista.add("ma");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista.add("holnap");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista.set(0, "tegnap");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("A lista elemei: ");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (String i: lista) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(i+" ");    <span class="perper">//tegnap ma holnap</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("A lista hossza: "+lista.size());    <span class="perper">//3</span><br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case 'Adatbekérés' : console.log('Adatbekérés');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>import java.util.Scanner;   <span class="perper">//importálás</span><br>public class Main {<br>&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;Scanner beolvas = new Scanner(System.in);  <span class="perper">//létrehozunk egy Scanner objektumot</span><br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("Kérek egy nevet: ");<br>&nbsp;&nbsp;&nbsp;&nbsp;String nev = beolvas.nextLine();  <span class="perper">//Scanner objektum meghívása</span><br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("A megadott név: " + nev);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case 'Fájlbeolvasás' : console.log('Fájlbeolvasás');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>import java.io.File;<br>import java.util.ArrayList;<br>import java.util.Scanner;<br>public class Main {<br>&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ArrayList< String> lista = new ArrayList<>();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;File fajl = new File("C:/hello.txt");   <span class="perper">//Itt kell megadni a fájl elérési útját</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanner beolvasas = new Scanner(fajl);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (beolvasas.hasNextLine()) {   <span class="perper">//Addig fut, amíg vannak sorok a fájlban</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String[] tomb = beolvasas.nextLine().split(" ");    <span class="perper">//Most a példában a fájlunk soronként 3 elemű és szóközzel vannak elválasztva a szavak</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista.add(tomb[0]);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista.add(tomb[1]);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista.add(tomb[2]);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Sikerült a beolvasás!");  <span class="perper">//Opcionális, kapunk visszajelzést, ha végigfutott a "try" ág</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;beolvasas.close();  <span class="perper">//Lezárjuk a beolvasást</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;catch (Exception e){    <span class="perper">//Az "Exception e" bármilyen hiba esetén lefuttaja a catch ágat</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hiba a beolvasáskor!");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case 'Fájlbaírás' : console.log('Fájlbaírás');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-7 resultborder contentp"><p>import java.io.FileWriter;<br>public class Teszt {<br>&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FileWriter kiiras = new FileWriter("kiir.txt");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kiiras.write("Ez a szöveg fog a fájlba kerülni!");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kiiras.close();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Sikerült a fájlbaírás!");  <span class="perper">//Opcionális, kapunk visszajelzést, ha végigfutott a "try" ág</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}catch (Exception e) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hiba a fájlbaíráskor!");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
    }
}


function feladatok(domObj){
    let ertek = document.querySelector('.keretescim').textContent
    console.log(ertek);
    console.log('feladat');
    if(document.querySelector('#feladat').classList.contains('chosen')!= true) {
        document.querySelector('#feladat').classList.add('chosen')
        document.querySelector('#pelda').classList.remove('chosen')
        document.querySelector('#info').classList.remove('chosen')
        document.querySelector('#megoldas').classList.remove('chosen')
    }

    switch (ertek) {
        case 'Kiíratás': console.log('Kiíratás');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row"><div class="col-md-12 text-center"></div></div><div class="row mt-2"><div class="col-md-12 contentp"><p> Hozz létre egy Java fájlt "Teszt" néven.<ul> <li> írass ki 3 szöveget a képernyőre</li><li>az első szöveg után legyen sortörés</li><li> a következő 2 szöveg egy sorba kerüljön (3 System.out...-tal oldd meg a feladatot).</ul></li></p></div></div></div>'; 
        break;
        case 'Változók deklarálása': console.log('Változók deklarálása');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row mt-2"><div class="col-md-12 contentp"><p>Döntsd el ezekről az adatokról, hogy milyen típusokhoz lenne a legmegfelelőbb sorolni őket, majd írasd ki a változókat egymás mellé vesszővel elválasztva: 2, Nap, -321, false, 65.87, T</p></div></div></div>'; 
        break;
        
        case 'Logikai operátorok': console.log('Logikai operátorok');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row mt-2"><div class="col-md-12 contentp"><p> <span style="font-weight: bold;">Mi lesz a következő feladatok végeredménye:</span><span class="checkspan"><button class="checkbtn ellBtn" onclick="ellenoriz()">Ellenőriz:</button></span> <br>&nbsp;&nbsp;&nbsp;&nbsp;int a = 30<br>&nbsp;&nbsp;&nbsp;&nbsp;int b = 24;<br><div class="row"><div class="col-md-6"> <ol><li>a != b</li><li>b > a || b <= 24</li><li>b / a <= 1 && b != (a-=6)</li><li>b != 24 || b % 2 == 1</li></ol></p></div><div class="col-md-6 valaszok hidden"><ul><li>True</li><li>True</li><li>False</li><li>False</li></ul></div></div></div></div></div>';
        break;
        case 'StringBuilder': console.log('StringBuilder');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between; margin-bottom:50px;"><div class="col-md-12 resultborder contentp"><p>Írj programot, amelyben egy sztringben eltárolsz egy mondatot, és ha névelővel (A, Az) kezdődik a mondat, azt eltávolítja a mondatból, majd így jeleníti azt meg.</p></div></div><div class="row" style="justify-content:space-between;"><div class="col-md-12 resultborder contentp"><p>Írj programot, amelyben egy sztringben eltárolsz egy olyan mondatot, amelyben szerepel a "hogy" szó egyszer (érdemes a sztringet StringBuilder-ré alakítani). A program vizsgálja meg, hogy a "hogy" előtti szó után szerepel-e "," karakter és ha nem, akkor helyezze el oda, majd a mondatot írja ki így.</p></div></div>';
        break;
        case '"While" Ciklus': console.log('"While" Ciklus');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row mt-2"><div class="col-md-12 contentp"><p>Írj programot, amelyben egy sztringben eltárolsz egy szót, majd menj végig rajta, s úgy írasd ki a képernyőre, hogy minden betű után teszel egy szóközt.</p></div></div></div>';
        break;
        case 'Listák': console.log('Listák');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 resultborder"><div class="row mt-2"><div class="col-md-12 contentp"><p>Készíts egy listát, melynek az elemei, a számok 1-től 10-ig (próbád a listát egy <span style="font-weight: bold;">"for" ciklus</span> segítségével feltölteni). Menj végig a listán és írasd ki a képernyőre azokat a számokat a listából melyek maradék nélkül oszthatóak 3-mal, s töröld is ki őket a listából. Írasd ki az így módosított listádnak a hosszát.</p></div></div></div>';
        break
    }
}

function megoldasok(domObj) {
    let ertek = document.querySelector('.keretescim').textContent
    console.log(ertek);
    console.log('megoldas');
    if(document.querySelector('#megoldas').classList.contains('chosen')!= true) {
        document.querySelector('#megoldas').classList.add('chosen')
        document.querySelector('#pelda').classList.remove('chosen')
        document.querySelector('#info').classList.remove('chosen')
        document.querySelector('#feladat').classList.remove('chosen')
    }

    switch (ertek) {
        case 'Kiíratás': console.log('Kiíratás');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between;"><div class="col-md-7 resultborder contentp"><p>public class Teszt { <br>&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello Világ");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("Itt a két szöveg között ");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("nem lesz sortörés.");<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break
        case 'Változók deklarálása' : console.log('Változók deklarálása');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between;"><div class="col-md-7 resultborder contentp"><p>byte a = 2;<br>String b = "Nap";<br>short c = -321;<br>boolean d = false;<br>float e = 65.87f;<br>char f = \'T\';<br>System.out.print(a+", "+b+", "+c+", "+d+", "+e+", "+f);</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break;
        case 'StringBuilder' : console.log('StringBuilder');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between;"><div class="col-md-7 resultborder contentp"><p>String szoveg = "A mai napon süt a nap.";<br>StringBuilder ujszoveg = new StringBuilder(szoveg);<br>if (ujszoveg.substring(0,2).equals("A ") || ujszoveg.substring(0,3).equals("Az ")) {<br>&nbsp;&nbsp;&nbsp;&nbsp;ujszoveg.delete(0, ujszoveg.indexOf(" ")+1);<br>}<br>System.out.println((ujszoveg.substring(0,1).toUpperCase())+ujszoveg.substring(1));</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div><div class="row" style="justify-content:space-between;"><div class="col-md-7 resultborder contentp"><p>String szoveg = "Azt szeretném hogy kisüssön a nap.";<br>StringBuilder ujszoveg = new StringBuilder(szoveg);<br>int hol = ujszoveg.indexOf(" hogy");<br>if(ujszoveg.charAt(hol - 1) != \'\,\') {<br>&nbsp;&nbsp;&nbsp;&nbsp;ujszoveg.insert(hol, ",");<br>}<br>System.out.println(ujszoveg);</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break;
        case '"While" Ciklus' : console.log('"While" Ciklus');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between;"><div class="col-md-5 resultborder contentp"><p><span class="perper">//for</span><br>String szo = "Világ";<br>for (int i = 0; i < szo.length(); i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(szo.charAt(i)+" ");<br>}</p></div><div class="col-md-5 resultborder contentp"><p><span class="perper">//while</span><br>String szo = "Világ";<br>int i = 0;<br>while (i < szo.length()) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(szo.charAt(i)+" ");<br>&nbsp;&nbsp;&nbsp;&nbsp;i++;<br>}</p></div><div class="row" style="justify-content:center;"><div class="col-md-6 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break;
        case 'Listák' : console.log('Listák');
        document.querySelector('.resultbox').innerHTML = '<div class="row" style="justify-content:space-between;"><div class="col-md-7 resultborder contentp"><p>ArrayList< Integer> lista = new ArrayList<>();  <span class="perper">//A "<>" jelek között megadjuk a listába kerülő elemek típusát</span><br>for (int i = 1; i<=10; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>lista.add(i);<br>}<br>System.out.print("A 3-mal osztható számok: ");<br>for (int i = lista.get(0); i < lista.size(); i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (lista.get(i) % 3 == 0) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(lista.get(i)+" ");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista.remove(i);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br>System.out.println();<br>System.out.println("A módosított lista hossza: "+lista.size());</p></div><div class="col-md-4 resultborder kozep"><p class="contentp">A konzolablak ezt fogja megjeleníteni:</p><img class="img-fluid" src="src/hellovilag.png" alt=""></div></div>';
        break;
        case 'teszt5' : console.log('teszt5');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>testasdasdttdrttrzhr</h1></div>';
        break;
    }
}

function ellenoriz() {
    console.log('klikk');
    if(document.querySelector('.valaszok').classList.contains('hidden')) {
        document.querySelector('.valaszok').classList.remove('hidden')
        document.querySelector('.ellBtn').innerHTML='Elrejtés'
        document.querySelector('.ellBtn').classList.remove('checkbtn')
        document.querySelector('.ellBtn').classList.add('checkedbtn')
        console.log('valaszok shown');
    } else {
        document.querySelector('.valaszok').classList.add('hidden')
        document.querySelector('.ellBtn').innerHTML='Ellenőriz'
        document.querySelector('.ellBtn').classList.add('checkbtn')
        document.querySelector('.ellBtn').classList.remove('checkedbtn')
        console.log('valaszok hidden');
    }
}