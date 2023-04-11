let zodinis = `tekstinio tipo kintamasis rasomas kabutese ir vadinamas string'u`;
let skaicius = 5; //paprastas skaičius arba matematinė išraiška
let loginis = true; //true arba false
let masyvas = []; //vardinami duomenys
let objektas = {}; //užvadinami duomenys

let vardas = 'Gintas';
let miestas = 'Šiauliai';
console.groupCollapsed(`back tik'o pvz`);
console.log("Labas"+vardas+". Esi iš "+miestas+" miesto. Tai yra labai grasžus miestas. "+"Kaunas - antras pagal dydi miestas");

console.log(`Labas ${vardas}. Esi iš ${miestas} miesto. Tai yra labai grasžus miestas. Kaunas - antras pagal dydi miestas
    Labas ${vardas}. Esi iš ${miestas} miesto. Tai yra labai grasžus miestas. Kaunas - antras pagal dydi miestas
    Labas ${vardas}. Esi iš ${miestas} miesto. Tai yra labai grasžus miestas. Kaunas - antras pagal dydi miestas
    Labas ${vardas}. Esi iš ${miestas} miesto. Tai yra labai grasžus miestas. Kaunas - antras pagal dydi miestas
    Labas ${vardas}. Esi iš ${miestas} miesto. Tai yra labai grasžus miestas. Kaunas - antras pagal dydi miestas
    Labas ${vardas}. Esi iš ${miestas} miesto. Tai yra labai grasžus miestas. Kaunas - antras pagal dydi miestas`);
console.log(`mano vardas yra ${vardas}`);
console.groupEnd();

// salygos
// let salygosSkaicius = 10;
// if(5 > salygosSkaicius){
//     console.log('vyksta');
//     console.log("veiksmas;");
//     console.log('jeigu');
//     console.log('ifas');
//     console.log('tiesa');
// }   else if ( 5 < salygosSkaicius){
//     console.log('vyksta');
//     console.log('veiksmas');
//     console.log('jeigu');
//     console.log();
//     console.log();
//     console.log();
//     console.log();
//     console.log();
//     console.log();
//     console.log();
//     }

// let didelisSkaicius = 500;
// if(salygosSkaicius > 100){
//     console.log('skaicius tikrai didelis');
// } else if (didelisSkaicius<100){
//     console.log('skaicius nedidelis');
// } else{
//     console.log('ne skaicius');}

let didelisSkaicius = 49;
if(didelisSkaicius >= 100){
    console.log('skaicius tikrai didelis');
    if (didelisSkaicius >=1000){
        console.log( 'labai didelis');
    }else{
        console.log('nesiekia 1000');
    }
} else if (didelisSkaicius < 100 && didelisSkaicius % 2 === 0)
    console.log('skaicius nedidelis, bet bent jau lyginis');
    else if ( didelisSkaicius < 100 && didelisSkaicius % 2 !== 0)
    console.log('ne diddelis ir nelyginis');
  else{
    console.log('ne skaicius');}
 
 
    // CIKLAI \\

    