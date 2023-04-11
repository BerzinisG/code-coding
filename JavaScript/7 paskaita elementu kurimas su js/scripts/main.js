// 4) Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
//   Pvz: [16] => "Jūsų bonusas: 100 eurų".
// function bonusas(event) {
//     let bonusas = [50];
//     console.log(bonusas);
//     let isdirbta = event.target.elements.isdirbta.valueAsNumber;
//     if (isdirbta > 10) {
//         document.querySelector('#ATS').textContent = bonusas*2;
//     }else if (isdirbta > 20) {
//         document.querySelector('#ATS').textContent = bonusas*4;
//     }else {
//         document.querySelector('#ATS').textContent = bonusas;
//     }
    
// }
// document
//   .querySelector('form#bon')
//   .addEventListener('submit', bonusas);

// 5) Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.
// 6) Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

// 7) Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

// 8) Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)
// 9) Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
// Pvz:


function vardoKartojimas(event) {
    
    event.preventDefault();
// console.log(event);

let vardas = event.target.elements.vardas.value;
let kartojimas = event.target.elements.kartojimas.valueAsNumber;
let sarasas = document.querySelector('#ciakuriame');
// console.dir(sarasas);
// console.dir(sarasas.innerHTML);
sarasas.innerHTML = '';
for (let i=0; i<kartojimas; i++){
    sarasas.innerHTML+= `<li> ${vardas}</li>`
}
console.dir(sarasas.innerHTML);
}

document.querySelector('#task_8>form')
.addEventListener('submit', vardoKartojimas);



function kurtiTrikampy(event) {
    event.preventDefault();
    let trikampioDydis = event.target.elements.stacDydis.valueAsNumber;
    let trikampioDiv = document.querySelector('#trikampis');
    // console.dir(trikampioDiv);
    trikampioDiv.innerHTML = '';
    let zvaigzdes ='';
    for (let i = 0; i < trikampioDydis; i++) {
        zvaigzdes += '*';
        trikampioDiv.innerHTML += `<p>${zvaigzdes}</p>`;
        
    }
}

document
.querySelector('#task_9 > form')
.addEventListener('submit', kurtiTrikampy)