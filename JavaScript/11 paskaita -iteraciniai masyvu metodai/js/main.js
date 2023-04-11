const array = ['a','b','c','d', 'a', 'c', 'e'];
// paprastas for
console.groupCollapsed('paprastas');
for (let i = 0; i < array.length; i++) {
  console.log(i, array[i]);  
}
console.groupEnd();
/* forEach*/
console.groupCollapsed('forEach');
 array.forEach((element, i) => {
  console.log(i, element)
 })
console.groupEnd();

// duomenų filtravimas us paprastu FOR
console.groupCollapsed('forFilter');
let arrayBeAFor=[]
for (let i = 0; i < array.length; i++) {
  if ( array[i] !=='a'){}
  arrayBeAFor.push(array[i])
}
console.log(arrayBeAFor)
// FIlter

let arrayBeAFilter = array.filter( (element) => {
  if( element !== 'a'){
    return element
  }
})
console.log(arrayBeAFilter)
console.groupEnd();
console.groupCollapsed('map');
let mutuotasSuFor=[]
for (let i = 0; i < array.length; i++) {
  mutuotasSuFor.push(':)' + array[i])
}
console.log(mutuotasSuFor)

// MAP

let mutuotasSuMap = array.map( (elementas) => {
  return ':) '+elementas
})
console.log(mutuotasSuMap)
console.groupEnd();

console.groupCollapsed('reduce');

//for reduce be initial

let reduceForBe =[];
for (let i = 0; i < array.length; i++) {
  reduceForBe += array[i]  
}
console.log(reduceForBe)


// for reduce su initial

let reduceForSu ='pradinė reikšmė';
for (let i = 0; i < array.length; i++) {
  reduceForSu += array[i]  
}
console.log(reduceForSu)

// reduse be initial
let reduceBe = array.reduce((acc,curr) => {
  return acc+curr
})
console.log(reduceBe)

// reduse su initial

let reduceSu = array.reduce((acc,curr) => {
  return acc+curr
}, 'pradine reikšmė:')
console.log(reduceSu)
console.groupEnd();
// some
console.groupCollapsed('some');
let someAts = array.some((letter) => {
  return letter === letter.toLocaleUpperCase()
})
console.log('ar bent vinea raidė didžioji', someAts);
console.groupEnd();
// console.groupCollapsed('every');
// let everyAts = array.every ((letter) => {
//   return letter === letter.toLowerCase()
// })
// console.log('visos mazosios raides',averyAts);
// console.groupEnd;
// let array2 = [1,5,4,8,9,6,9,6,3]
console.groupCollapsed('Conditions');
//Conditions
let age = 38
// IF
if (age >=18) {
    console.log('esi pilnametis')
}else{ 
  console.log('nesi pilnametis')
}

//Ternary
age >= 18 ? console.log('esi pilnametis') : console.log('nesi plinametis')

// ternary chaining
age <18 
?console.log('nesi plinametis')
: age >= 65
? console.log('esi pensininkas')
:console.log('esi plinametis')

//Logkical AND
age >= 18 && console.log('esi pilnametis')
console.groupEnd();

console.groupCollapsed('DKT');
// destruktūrizavimas
///masyvas be DKT-mo

let masyvasDes=['labas','ate', 'miegot', undefined,5,6,7,8,9,2]
let el0=masyvasDes[0];
let el1=masyvasDes[1];
let el2=masyvasDes[2] ? masyvasDes[2] : 'default reikšmė';
let elMas = masyvasDes.slice(3);

console.log(el0, el1, el2, elMas);
/// Masyvo DKT-mas
// jei nori kazkurio elemento neišrašyti, tai riekia išrašyti tuščia vieta su kableliu
let [ em0, ,em1, em2 ='default reikšmė', ...emMas] = masyvasDes;
console.log(em0,  em2, emMas);
console.groupEnd();

console.groupCollapsed('DKT->objekto');

// Objekto DKT-mas

let objektoDes = {
  vardas: 'gintas',
  amzius: 26,
  gyvenamojiVieta:{
    miestas: 'Šiauliai',
    salis: 'Lietuva'
  },
  plaukuSpalva: 'ruda',
  vedes: false,
  dirbantis:true
}
console.log(objektoDes)
// objekto be DKT-mo
let vardasBe = objektoDes.vardas;
let amziusBe = objektoDes.amzius;
let salisBe  = objektoDes.gyvenamojiVieta.salis;
console.log(vardasBe, amziusBe,salisBe);

// objekto  DKT-mas
let {vardas, amzius:metai, miestas, gyvenamojiVieta:{salis}, vairuotojoTeises='Neturi',...rest} = objektoDes;
console.log(vardas, metai,salis,vairuotojoTeises, rest );
//f-jos DKT-mas
function sudetis(sk1,sk2,...moreNumbers) {
  return sk1+sk2+moreNumbers.reduce((acc,curr) => acc= curr, 0);
}
console.log(sudetis(2,3))
console.groupEnd();
// apkeisti reiksmes vietomis
let a = 'labas';
let b = 'labanaktis';
console.log(a,b);
// let laikinas = a;
// a = b;
// b = laikinas;
[a,b] = [b,a];
console.log(a,b);