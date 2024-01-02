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
        document.querySelector('.resultbox').innerHTML = `<div class="col-md-12 contentp text-center"><h1>Válassz ki egy tananyagot!</h1></div>`;
        console.log('hidden');
        if(document.querySelector('.chosenalli') != null) {
            document.querySelector('.chosenalli').classList.remove('chosenalli')
        } 
    }

}

function valaszt(domObj){
    console.log('klikk');
    console.log(domObj.value);
    document.querySelector('.keretescim').innerHTML = domObj.value;
    if(document.querySelector('.chosenalli') != null) {
        document.querySelector('.chosenalli').classList.remove('chosenalli')
    } 
    if(domObj.classList.contains('.chosenalli') != true) {
        domObj.classList.add('chosenalli')
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
        document.querySelector('.resultbox').innerHTML = `<div class="col-md-12"><div class="row"><div class="col-md-12 text-center"><h1>A Java programozási nyelv</h1></div></div><div class="row mt-2"><div class="col-md-8 contentp"><p>A <span style="font-weight: bold;">Java</span>  egy általános célú, objektumorientált programozási nyelv.</p></div><div class="col-md-4 text-center pb-3"><img class="img-fluid contentimg" src="src/javalogocontent.png" alt=""></div></div><div class="row"><div class="col-md-12 contentp"><p>A Java alkalmazásokat jellemzően bájtkód formátumra alakítják, de közvetlenül natív (gépi) kód is készíthető Java forráskódból. A bájtkód futtatása a Java virtuális géppel történik.</p></div></div><div class="row"><div class="col-md-12 contentp"><p><span style="font-weight: bold;">Négy</span> fontos szempontot tartottak szem előtt, amikor a <span style="font-weight: bold;">Javát</span> kifejlesztették:</p><ul><li><p>objektumorientáltság</p></li><li><p>függetlenség az operációs rendszertől, amelyen fut (többé-kevésbé)</p></li><li><p>olyan kódokat és könyvtárakat tartalmazzon, amelyek elősegítik a hálózati programozást;</p></li><li><p>távoli gépeken is képes legyen biztonságosan futni.</p></li></ul></div></div><div class="row"><div class="col-md-12 contentp"><p style="font-weight: bold;">Érdekesség:</p></div></div><div class="row"><div class="col-md-12 contentp"><p>A Java nyelvet kávézás közben találták ki, innen ered a kávéscsésze ikon.</p></div></div></div>`;
        break;
        case 'Java alapok': console.log('java alapok fasz');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>info java alapok</h1></div>'
        break;
        case 'teszt' : console.log('teszt');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>info test</h1></div>';
        break;
        case 'asd': console.log('asd');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>info asdasd</h1></div>'
        break;
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
        case 'A Java-ról' : console.log('xd');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 contentp text-center"><h1>Ehhez az anyaghoz sajnos nem tartozik példa :(</h1></div>';
        break;
        case 'Java alapok': console.log('java alapok fasz');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>java alapok</h1></div>'
        break;
        case 'teszt' : console.log('teszt');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>test</h1></div>';
        break;
        case 'asd': console.log('asd');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>asdasd</h1></div>'
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
        case 'A Java-ról' : console.log('xd');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 contentp text-center"><h1>Ehhez az anyaghoz sajnos nem tartozik feladat :(</h1></div>';
        break;
        case 'Java alapok': console.log('java alapok fasz');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>java alapok</h1></div>'
        break;
        case 'teszt' : console.log('teszt');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>test</h1></div>';
        break;
        case 'asd': console.log('asd');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>asdasd</h1></div>'
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
        case 'A Java-ról' : console.log('xd');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12 contentp text-center"><h1>Ehhez az anyaghoz sajnos nem tartozik megoldás :(</h1></div>';
        break;
        case 'Java alapok': console.log('java alapok fasz');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>java alapok</h1></div>'
        break;
        case 'teszt' : console.log('teszt');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>test</h1></div>';
        break;
        case 'asd': console.log('asd');
        document.querySelector('.resultbox').innerHTML = '<div class="col-md-12"><h1>asdasd</h1></div>'
    }
}