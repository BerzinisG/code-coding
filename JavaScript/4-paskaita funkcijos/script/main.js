/*Funkcijos

Funkcija - užvardintas kodas, kuris nevyksta, kol i jį nera kreipiamasi. 
Gali priimti duoemnis.
gali grąžinti duomenis.

Syntax:
function pavadinimas(){veiksmai...};
function pavadinimas(params){veiksmai...};


Kreipimais:
pavadinimas();
pavadinimas(params);




*/
// function sveikas(){
//     console.log(`Hello World ${Math.random}`);
// }
// sveikas();
// sveikas();
// sveikas();
// sveikas();
// function sveikas(vardas){
//     console.log(`Hello ${vardas}`);
// }
// sveikas('Gintas');
// sveikas('Ona');
// sveikas('Petrai');
// function dauginti(sk1,sk2) {
//     console.log( sk1*sk2);
//     console.log( sk1,sk2);    
// }
// dauginti(3, 2);




// PRAKTIKUOTIS ŠITAIP !!!
function dauginti(sk1,sk2){
    return sk1*sk2;
}
console.log(dauginti(3,7));



// let funkcijosAtsakymas = dauginti(5,4);
// function daugintiBeReturn(sk1,sk2){
//     console.log(sk1*sk2);
// }
// daugintiBeReturn(5,4);
// let funkcijosAtsakymasBeReturn = daugintiBeReturn(5,4);
// console.log(funkcijosAtsakymasBeReturn);

/*Kreipimasis i DOM*/

// DOM- document Object Model
// kreipimasis į dokumente esančisu tagus - document.querySelector
// Įvykio klausimasis dokumente esančio elemento- addEventListener

function keiciamDiva(){
let divas = document.querySelector('#cantGetMe');
console.dir(divas);
divas.style.fontSize = '50px';
divas.style.color = 'red';
divas.textContent += ',bet pakeistas :)';
}
document
    .querySelector('#pressMe')
    .addEventListener('click',keiciamDiva);
    
    /* Metodai - methods*/

// metodas yra funkcija, kuri priklauso kažkokiam objektui/elemnetui
// 
// MASYVŲ METODAI:
//  pop() - išima iš galo
//  shift() - išima iš pražios
//  push() - prideda prie galo
//  unshift() - prideda prie pradžios

// splice(1,2,3,4,5...) - 1 pozicijoj prideda 3,4,5... elementą/us ir išima 2 kiekį elementų esančių toliau  
// slice(1,2) - paima nuo 1 iki 2, bet masyvo nepakeičia  
// sort() - išrikiuoja abecelės tvarka.      Su skaičiais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant "function(a,b){return a-b}".      Su lietuviškai simboliais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant "function(a,b){return a.localeCompare(b)}".  reverse() - apsuka masyvą.  
// 1.concat(2,3,4...) - sujungia 1 su 2,3,4... masyvų/ais, bet jų nepakeičia.

let zemynai = ['Europa', 'Azija', 'Afrika', 'Š.Amerika', 'P.Amerika', 'Antarktida', 'Australija'];
console.groupCollapsed('metodai')
console.log(zemynai.pop());
console.log(zemynai.shift());
console.log(zemynai.push('Europa'));
console.log(zemynai.unshift('Australija'));

console.log(zemynai.reverse());

const lietuvybes = ['šalis', 'ąsotis', 'ėdalas', 'egle', 'silpnas', 'stiprus', 'šakotis', 'žirafa', 'zebras'];
const skaiciai = [13,1,51,1,55,53,8,1,841844,81,81,84,5843,185,44,124,];

console.log(skaiciai.sort((a, b) => a-b )); //rikiuoja 1->9
console.log(skaiciai.sort((a, b) => b-a )); //rikiuoja 9->1

// console.log(lietuvybes.sort( (a,b) => a.localeCompare(b)));
console.log(lietuvybes.slice (5, 9));// gražina masyvo elementus, bet nemutuoja pagrindinio masyvo
console.log(lietuvybes.splice (5, 3, 'naujas', 'senas')); //nuo pirmojo parametro, pradeda trinti antrajame parametre nurodytą elementų kiekį ir toje vietoje prided, naujus nurodytus parametrus, jeigu reikia.

console.log(lietuvybes.concat(zemynai)); // gražina sujungtus masyvus. Nemutuoja nei vieno iš masyvų.
console.groupEnd();
console.groupCollapsed('modi');
function spausdinuMasyvus(masyvas) {
    let nenorimeModifikuoti = masyvas.slice();
    while (nenorimeModifikuoti.lenght) {
        console.log(nenorimeModifikuoti.shift());        
    }
}
let skaiciuMasyvas = [6,54,32,8996,344,78,150,185];
spausdinuMasyvus(skaiciuMasyvas);
spausdinuMasyvus(lietuvybes);
spausdinuMasyvus(zemynai);
console.log(skaiciai)
spausdinuMasyvus(skaiciai);
console.log(skaiciai)
console.groupEnd();





