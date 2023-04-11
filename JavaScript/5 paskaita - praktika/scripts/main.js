// BanRokas 21 paskaita - Funkcijos
// Latest commit bc2cf83 Mar 14, 2023
// const numeriai = [1,21,31,33,45,68,454,569,6118,446];
// automobiliai = ['BMW', 'Mersas','Toyota','Audi', 'VW', 'Ford', 'Dodge', 'Chrysler', 'Chev','Honda', 'Subaru', 'Volvo'];
// 1) Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais (du parametrai). (4 funkcijos) (optional 7 funkcijos)
function aritmetika(sk1,sk2){
    return sk1*sk2;
}
function suma(sk1, sk2) {
    return sk1+sk2;
  }
console.log(aritmetika(3,7));
console.log(suma (4, 3));


// 2) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.
let automobiliai = ['BMW', 'Mersas','Toyota','Audi', 'VW', 'Ford', 'Dodge', 'Chrysler', 'Chev','Honda', 'Subaru', 'Volvo'];
function masyvas() {
    return(automobiliai);
}
console.log(automobiliai)


// 6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9)

function ivestiSkaicius(nuo,iki) {
    for( let i= nuo; i <= iki; i++) {
        console.log(i);
    }
}
ivestiSkaicius(5,10);

// 7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9)
console.groupCollapsed('intervalai');
function isvestiSuIntervalais(sk1, sk2, sk3) {
    for (let i=sk2; i<=sk3; i+=sk1) {
        console.log(i);
    }
}
    isvestiSuIntervalais(20,51,700);
    console.groupEnd();
// 8) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).
// function parametrai(vardas, pavarde) {
//     let pavardeVardas = vardas.lenght + pavarde.lenght;
//         return pavardeVardas;
// }
// console.log(parametrai('Petras', 'Petrauskas'));
// 9) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.

// let raides = ['a', 'b', 'c', 'd', 'e','f','g', 'h', 'j', 'i', 'y','k'];
// function skaiciusRaide(index) {
//     console.log(raides.sort((a,b) => a.localeCompare(b)));
//            return alphabet[index-1]
// }
// console.log( skaiciusRaide(5));
    

// 10) Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.
// function simpleMath(n1,n2,operator) {
// switch (operator.toLowerCase()) {
//     case 'atimtis':
//         return n1-n2;
//     case 'sudetis':
//         return n1+n2;
//     default:
//         break;
// }
// }
// 11) Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).
// Math.random()       => 0,000001 -> 0,999999
// Math.random()*10    => 0,00001 -> 9,99999
// Math.floor() - apvalina į mažesnijį skaic.
//math.round() - apvalina pagal apvalinimo taisykles
//Math.ceil(Math.random() *10) 0,0001 suapvalina iki 1 -> 10
// x,xxxxxx.tofixed(kazkoksSkaicius)// pvz: 9,454125.tofixed(2) => 9,45
function random(params) {
    return Math.ceil(Math.random() *10);
}
function kvadratu() {
    return random()**2;
}
console.log(kvadratu());
function kelimasKvadratu(sk) {
    return sk**2;    
}
console.log(kelimasKvadratu(random));
console.log(kelimasKvadratu(5));



// extra0) Sukurti funkciją, kuri į pirmojo parametro (masyvo) vidų sudėtų antrojo parametro (masyvo irgi) elementus toje vietoje, kokio ilgio yra antrasis parametras (tuo momentu) tol kol antrasis parametras liks tuščias. (a=[1,2,3,4,5,6,7]b=[a,b,c]; a=[1,2,3,a,4,5,6,7]b=[b,c]; a=[1,2,b,3,a,4,5,6,7]b=[c]; a=[1,c,2,b,3,a,4,5,6,7]b=[])
function joinArrys(arr1, arr2) {
    while (arr2.lenght); {
        arr1.splice(arr2.lenght,0, arr2.shift());   
    }
    return arr1;
}
console.log(joinArrys([1,2,3,4,5], ['a','b','c',]));
    


// extra1) Sukurti funkciją, kuri atlieka Fizz Buzz testą nuo-iki duotųjų parametrų.
/* FIZZ BUZZ */
function fizzBuzz(nuo,iki) {
    if(isNaN(nuo) || isNaN(iki)){
        return 'klaida';
    }
    const atsakymas = [];
    for (let i = nuo; i < iki; i++) {
        if (i === 0){
            atsakymas.push(i);            
        }else if( i%3 === 0 && i % 5 === 5){ 
            atsakymas.push('FizzBuzz');
        }else if(i % 3 === 0){
            atsakymas.push('Fizz');
        }else if( i % 5 === 0){
            atsakymas.push('Buzz');
        }else{
            atsakymas.push(i);
            }
        }
        return atsakymas;
    }
console.log(fizzBuzz(10,60));


// extra2) Sukurti funkciją, kuri randa visus pirminius skaičius iki nurodyto parametro.
/* Pirminių skaičių funkcija */
function pirminiaiSkaiciai(nuo, iki){
    // let functionStartTime = Date.now();
    console.time();
    let pirminiuSkaiciuMasyvas = [];
    for(let i = nuo; i <= iki; i++){
       
      let arPirminis = true; // prielaida, kad i'tasis yra pirminis skaičius
    //   for(let j = 2; j < i; j++){
        if(i<=7){
            for(let j=2; j<=Math.sqrt(i); j++){
                if(i % j === 0){
                  arPirminis = false;
                  break;
                }
              }
        }else {
            for(let j=0; j< pirminiuSkaiciuMasyvas.length; j++){
               if( i % pirminiuSkaiciuMasyvas[j] === 0){
                arPirminis = false;
                break;
               } 
            }
        }        
      if(arPirminis){
        // console.log(i, ' yra pirminis skaičius');
        pirminiuSkaiciuMasyvas.push(i);
      }
    }
    console.timeEnd();
    return pirminiuSkaiciuMasyvas;
    // let functionEndTime = Date.now();
    // console.log(functionEndTime - functionStartTime, 'miliseconds');
  }
  
  let pirminiuSkaiciuAtsakymas = pirminiaiSkaiciai(2,1000000);
  console.log(pirminiuSkaiciuAtsakymas);
