/* Kintamieji
NaN, null, undefined - egzistuojantys, bet nelabai svarbūs

objektas- object - {}
    Grupuoti kintamuosius, kai nori, lad jie turėtų savo pavadinimus( raktinius žodžius); eiliškumas nesvarbus
masyvas - array- []
    grupuoti kintamuosius, bet eiliškumas yra svarbus, o kintamieji viduje neturi turėti pavadinimų(išvardinti, be jokio išskirtinumo)
    (tarsi sarašas)
    objektas ir masyvas yra konteineriniai kintamieji(jų viduje talpinami kiti kintamieji)
    */

let asmuo1  = {
    vardas: "Gintas", 
    pavarde: "Beržinis",
    amzius: 38,
    vedes: true};
let transportoPriemones = ['dviratis', 'mašina', 'lėktuvas','laivas', 'valtis'];

    console.groupCollapsed('simple');
    console.log(asmuo1.amzius);
    asmuo1.amzius += 1; 
    asmuo1.plaukuSpalva = 'ruda';
    console.log(asmuo1.amzius);
    console.groupEnd();

    console.groupCollapsed('jachta');
    console.log(transportoPriemones);
    console.log(transportoPriemones.length);
    transportoPriemones[1] = 'jachta';
    transportoPriemones.push('rieduciai');
    console.log(transportoPriemones);
    console.groupEnd();

let asmuo2  = {
    vardas: "Arminas", 
    pavarde: "Beržinis",
    amzius: 8,
    vedes: false};

let asmenys = [
    {
        vardas: "Gintas", 
        pavarde: "Beržinis",
        amzius: 38,
        vedes: true,
        pomegiai: ['sportas', 'zaidimai', 'filmai', 'keliones'],
        gyvenamojiVieta: {
            paneta: 'Žemė',
            zemynas: 'Europa',
            salis: 'Lietuva',
            miestas: 'Kaunas',
            gatve: 'Vytauto g.',
            pastatas: '68',
            butas: '12'
        }
    },{
        vardas: "Arminas", 
        pavarde: "Beržinis",
        amzius: 8,
        vedes: false
    }
]
console.groupCollapsed('sudetingas masyvas');
console.log(asmenys);
console.log(asmenys[0].vardas);
console.log(asmenys[0].amzius);
console.log(asmenys[0].gyvenamojiVieta.miestas);
console.log(asmenys[0].pomegiai[2]);
asmenys[0].gyvenamojiVieta.butas = 15;
console.log(asmenys[0]);
console.groupEnd();

console.groupCollapsed('masyvas');
let masyvasMasyve = ['labas', 5, true, 'haha',10, [5,1,'hihi',3,false], false];
console.log(masyvasMasyve);
console.log(masyvasMasyve[3]);
console.log(masyvasMasyve[5][2]);
console.groupEnd();

/* Sąlygos

Loginiai operatoriai:

NOT- ! - apverčia reikšmę
OR - || - arba, kad vienoje arba vienoje pusėje tiesa ar kitoje, 
kad gražintų tiesą
AND - && - ir vienoje ir kitoje pusėje gražintų tiesą

    Sąlygos:
    if; Else if; else;
    Pirmas visada ID, paskutinis visada else( nebūtinas),
    per vidurį kiek noresime else_if.
    kai sąlyga yra tiesa - vykdimas jos viduje vygdomos 
    switch;
    ternary;

     Truthy | Falsy gražins tiesa arba mela, kai bus idetos i salygu vidu
        Truthy          |       Falsy
    skaiciai apart 0    |       0
    netuscias string    |   tuscias string
    masyvas             |   null
    objektas            |   NaN
    functions           |   undefined


*/
console.groupCollapsed('loginiai operatoriai');
console.log(true||true); //true
console.log(true||false); //true
console.log(false||true); //true
console.log(false||false); //false

console.log(true&&true); //true
console.log(true&&false); //false
console.log(false&&true); //false
console.log(false&&false); //false
console.groupEnd();


let amzius = 68;
console.groupCollapsed('if or else if')
if (amzius >= 18&& amzius <  65){
    console.log('darbingo amziaus');     
} else if(amzius >= 65){
    console.log('pensininkas');
} else if (amzius < 18 && amzius >= 0){
    console.log('nepilnametis');
    if(amzius>=7){
        console.log("mokyklinukas")
    }else{
        console.log('iki mokyklinioo amziauas')
    }

}else {
    console.log('klaida');
}
console.groupEnd();

let automobilis = [ 'sparnas', 'durys', 'bamperis', 'stiklas', 'kapotas', 'stogas'];
let modifikacija = {
    marke: 'BMW',
    modelis: 3.30,
    amzius: 21,
    modifikacija: 'sport',
    padangosZiemines: true,
    spalva: 'melyna',
    tiuningas: true
}

let masyvasMasyvas = ['vartai', 'irankiu Deze', 
'darbo stalas',['irankiai', 'suktukai', 'atsuktuvai', 'varstotas'],'kėdė'];
let masyvasObjektas = ['vartai', 'irankiu Deze', 'darbo stalas',
    {marke: 'BMW',
    modelis: 3.30,
    amzius: 21,
    modifikacija: 'sport',},'kėdė'];

let objektasMasyvas= {
    marke: 'BMW',
    modelis: 3.30,
    amzius: 21,
    spalva: ['melyna', 'raudona', 'žalia', 'juoda'],
    tiuningas: true
}
let objektasObjektas= {
    marke: 'BMW',
    modelis: {
        eko: 3.16,
        is: 3.18,
        diesel: 3.20,
        sport: 3.30
    },
    padangosZiemines: true,
    spalva: 'melyna',
    tiuningas: true
}
console.groupCollapsed('masina')
console.log(automobilis[1]);
console.log(automobilis[3]);

console.log(modifikacija.marke);
console.log(modifikacija.modifikacija);

console.log(masyvasMasyvas[1]);
console.log(masyvasMasyvas[0]);
console.log(masyvasMasyvas[3][3]);

console.log(masyvasObjektas[1]);
console.log(masyvasObjektas[2]);
console.log(masyvasObjektas[3].marke);

console.log(objektasMasyvas.modelis);
console.log(objektasMasyvas.amzius);
console.log(objektasMasyvas.spalva[0]);

console.log(objektasObjektas.tiuningas);
console.log(objektasObjektas.padangosZiemines);
console.log(objektasObjektas.modelis.is);
console.groupEnd();

// let teises = prompt('Turi teises?');
// let auto = prompt('Turi automobili?');
// if (teises === 'taip')
//     console.log('turi teises');
//     if (auto ==='taip' && teises === 'taip'){
//     console.log('Tu turi teises ir turi automobili');
// }   else if( auto !=='taip' || teises !== 'taip'){
//     console.log('negali vairuoti arba neturi teisiu');
// }


// let miestas = prompt('Labas, kokiame mieste gyveni?');

// if (miestas === 'vilnius'){
//     console.log('Sveikinu tu iš Lietuvos sostinės!')
// }else{
//     console.log('Tu ne iš sostinės :D')
// };

let as = {
    name: 'gintas',
    age: 38,
    sex: 'male',
    weight: 100
}
    let sex = prompt("Enter your sex");
    let weight = ('Enter Yours wight in kg:');
    if (sex === "male")
        console.log(weight)
        if (weight >= 100) {
                console.log('You are perfect');
        } else {
            console.log('Your wight is not big, but you SMELL like 1T of Shit :D:D')
        }




// const currentMonth = prompt('Koks dabar menuo?').toUpperCase
// switch (currentMonth){
//     case 'GRUODIS':
//     case 'SAUSIS':
//     case 'VASARIS':
//     console.log("dabar ziema")
//     break;
//     default:
//         console.log('tokio men nera');
// };    

