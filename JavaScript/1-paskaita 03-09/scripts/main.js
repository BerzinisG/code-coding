/*
kintamieji - variables
aritmetika - arithmetic
sąlygos - conditions
ciklai - loops
funkcijos - functions
*/

/* teorija apie kintamuosius*/
var pavadinimas = 'reikšmė'
/*
var|let|const - kintamojo startas
var - senasis užrašymo būdas, kurio ribos didesnės.
let - naujas užrašymo būdas, ribos mažesnės.
const - naujas užrašymo būdas, kuris negali būti keičiamas.

susigalbotasKintamojoPavadinimas - pavadintas kintamasis turi būti vienas žodis, unikalus, prasmingas.
naudoti tik lotyniškus simbolius.

'string' - rašomas kabutėse, tai yra žodinė reikšmė. (var menesis = kovas)
number - skaičius, užrašomas kaip skaičius arba matematinė išraiška.
boolean - true|flase - tik dvi galimos reikšmės;

*/
let grazusSkaicius = 66.6*6/66-6+6.6;
let arDabarVasara = false;
let ardabarvasara = true;
let noriMiego = true;
const PI = 3.14;

/* Informacijos atvaiazdavimas naršyklėje

console.log() - išveda duomenis i konsolę (esančią drv tools'uose)
console.groupCollapsed() / console.groupend() - sugrupuoja console.log()
window.alert() - išveda duomenis i pranšimo langą/lentelę
window.prompt() - ekrane atvaizduoja praneššmo lentelę su informacijos įvedimo laukeliu. 

*/
console.log(arDabarVasara);
console.log(ardabarvasara);
/*window.alert('laikas pertraukai!!!');
let vartotojoReiksme = window.prompt('Ar veluojame į pertrauką?');*/

/*ARITMETIKA*/
/*
Veiksmai su duomenimis( pagr. kintamaisiais)
[+] - sum (suma)
[-] - subtrackt (atimtis)
[*] - multiplication (daugyba)
[/] - division (dalyba)
[**]- power (kėlimas laipsniu)
[**(1/x)] - root (šaknies traukimas, x šaknies laipsnis)
[%] - remainder (liekanos radimas)
visi aritmetiniai veiksmai dažniausiai atliekami su skaitmenimis.
string + number = string

*/
let sk1 = 5;
let sk2 = 9;
let neSkaicius = '5';
let zodis = 'hello';
let tiesa = true
console.groupCollapsed('pirma dalis');
console.log('5+9 =',sk1+sk2)
console.log('5-9 =',sk1-sk2)
console.log('5*9 =',sk1*sk2)
console.log('5/9 =',sk1/sk2)
console.log('5**9 =',sk1**sk2)
console.log('5**(1/9) =',sk1**(1/sk2))
console.log('5%9 =',sk1%sk2)
console.log('hello + 9 =', zodis + sk2)
console.log('hello + 9 =', zodis * sk2) //(not a number = NAN)
console.log('"5" + 9 =', neSkaicius + sk2) 
console.log('"5" * 9 =', neSkaicius * sk2)
console.groupEnd()

/* prilyginimas ir palyginimas

    Prilyginimas

    naujos reikšmės prilyginimas
    let kintamasis = 'labas vakaras'
    kintamasis = 50;
 PALYGINIMAI:
 > daugiau
 < maziau
 >= daugiau arba lygu
 <= maziau arba lygu
 == ar lygu (ar lygios reikšmės)
 === ar lygu ( ar lygios reikšmės ir tipai)
 != ar nelygu (ar nelygios reikšmės)
 !==  ar nelygios reikšmės ir duomenų tipai
 */
console.groupCollapsed('prilyginimas');
let kintamasis = 'labas vakaras';
console.log(kintamasis);
kintamasis =50;
console.log(kintamasis)
kintamasis = kintamasis+1
console.log(kintamasis)
kintamasis +=100;
console.log(kintamasis)
console.groupEnd()
console.group('palyginimas');

//
let mango = 'vaisius';
let apple = 'medis';
let zole = 'pieva'



let age = 30;
let height = 190;
let adress = 17;

let isApproved = false;
let firstName = true;
let selectedColor = true;
//

