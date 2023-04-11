// 1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
//  2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).
const cars = ["BMW", "VW", "Audi"]

cars.forEach((element, i) => {
  console.log(i, element)
 })
//  3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").
const friends = ['Tadas', 'arTūras', 'mArius','arvYdas','Evaldas']

// console.log(friends.find)
//4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
let age = [35,41,28,7,16]
let elders = age.filter( (age) => {
  if( age >= 18){
    return age
  }
})
console.log(elders)
//5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
let cities = ['Klaipėda','Plungė','Telšiai','šiauliai','Kaunas', 'Kernavė']
let raide = 'K'
let miestasSuK=cities.find(citiesK =>citiesK.charAt(0) === raide)
console.log(miestasSuK)
// 6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
const lowerCC = ((cities) => cities.charAt(0) == cities.toLowerCase)
console.log(cities.some(lowerCC))
// let firstOfCities = cities[i].charAt(0)
// let startsWithLowercase = false

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i][0] === cities[i][0].toLowerCase()) {
//     startsWithLowercase = true
//     break;
//   }
// }

// if (startsWithLowercase) {
//   console.log("At least one city starts with a lowercase letter.")
// } else {
//   console.log("No city starts with a lowercase letter.")
// }
// 7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.

/*    Destrukturizavimas */
// 1) Naudodami destructuring priskirkite 2 kintamiesiems 2 masyvo reikšmes, iš kurių 1'oji būtų 3'oji masyvo reikšmė, o 2'oji būtų likusios masyvo reikšmės.
// let a1 = []
// let a2 = []
// [a1,a2] = [a1, , ...rest]

// 2) Naudodami destructuring priskirkite 4 kintamiesiems 4 objekto reikšmes, iš kurių 1'oji būtų pakeistu pavadinimu, 2'oji turėtų default reikšmę, 3'oji būtų iš viduje nestinto objekto, 4'oji būtų iš viduje nestinto objekto su pakeistu pavadinimu.

let keturiKintamieji = {
  vardas: 'Gintas',
  amzius: 36,
  miestas: 'Meskiai',
  car: {
    toyota: 'Avensis',
    volo : 'S40'
    }
  }

let {pavarde,amzius='default reikšmė',car:volvo,car:bmw} = keturiKintamieji


// 3) Naudodami destructuring priskirkite 1 kintamajam visas masyvo reikšmes išskyrus pirmas 3.
// let { ,,,...rest}

// 4) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.
// [b,c] = [c,b]
// console.log(b,c)


// 1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}])
const arrayMap = [
{id:0, pavadinimas:"Meat", inStock:true, primeCost:0.3, cost:1},
{id:1, pavadinimas:"Milk", inStock:false, primeCost:0.3, cost:1},
{id:2, pavadinimas:"Bread", inStock:true, primeCost:0.3, cost:1},
{id:3, pavadinimas:"Fish", inStock:true, primeCost:0.3, cost:1},
{id:4, pavadinimas:"Cheese", inStock:true, primeCost:0.3, cost:1},
{id:5, pavadinimas:"Tomatoes", inStock:true, primeCost:0.3, cost:1},
{id:6, pavadinimas:"Cocumber", inStock:true, primeCost:0.3, cost:1},
{id:7, pavadinimas:"Apple", inStock:true, primeCost:0.3, cost:1},
{id:8, pavadinimas:"Pear", inStock:false, primeCost:0.3, cost:1},
{id:9, pavadinimas:"Cream", inStock:true, primeCost:0.3, cost:1},
{id:10, pavadinimas:"Cherrys", inStock:false, primeCost:0.3, cost:1},
]
// 2) Naudojant forEach - išvesti masyvą į konsolę.
arrayMap.forEach(items => console.log(items))

// 3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.

arrayMap.forEach((items) => {console.log(items.pavadinimas, items.cost)})

// 4) Išfiltruoti  tuos masyvo elementus, kurie yra inStock ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje 
const outOfStock = arrayMap.filter(items => items.inStock === true)
console.log(outOfStock)



// 4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą, kuriame būtų name ir suskaičiuotas bei išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje
const profit = arrayMap.map(items => (items.cost - items.primeCost))
console.log(profit)

// 4.2) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai  ir jį atvaizduoti konsolėje 
const order = [
  {
    pavadinimas:'Tomateos',
    kiekis:2.70
  }
  
  {
    pavadinimas:'Cheese',
    kiekis:
  }

]
const vardaiSuKiekiais = array.map(items => (items.name+items.kiekiai))
console.log(vardaiSuKiekiais)

// 4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje(arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)
const pelnas = vardaiSuKiekiais.map()


// 4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje 
let cekis= order.map(())
let menuElement = arrayMap.findIndex(meniuItem =>{
  return menuElement.pavadinimas === meniuItem.pavadinimas
})
console.log(meniu[menuElement].kaina)
return { 
  pavadinimas:menuElement.pavadinimas,
  kiekis:menuElement.kiekis,
  kaina:menuElement.kiekie*menuElement[menuElement].kaina
}
cekis.bendra = cekis.reduce((bendras, dabar) =>)