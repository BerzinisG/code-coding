// let fillMasyvas = Array(10). fill(null);
// let fillMasyvas1 =[1,2,3].fill(null,0,2)
// let fillMasyvas2 =Array.from(array(10).keys());
// console.log(fillMsyvas);

// function f_vardas(par1,par2) {
//   return par1+par2
// }
// console.log(f_vardas())


// // arrow function event

// document.querySelector('button')
// .addEventListener('click', event => {
//   console.log(event);
//   event.target.innerHTML = 'paspausti';
// })








// 1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.
console.groupCollapsed('task1');
const masyvas1 = ['a','zzs','x','fr','we','bdf','t','r','gs','s'];
console.log(masyvas1.toString());
console.groupEnd;

// 2+) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)



// 3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)
console.groupCollapsed('task3');
const masyvas3 = [1,2,3,4,5,6,7,8,9];
const atvirksciai = masyvas3.sort((a,b) => b-a); 
console.log(atvirksciai);
console.groupEnd;
// 4+) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).
console.groupCollapsed('task4');
const masyvas=[1,4,5,6,4,8,4,5];
masyvas.slice(4,6,8)
console.groupEnd;

// 5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.

console.groupCollapsed('task5');
const nrMasyvas = [4,5,6,4,8,4,54,5,6,4,8,4,5];
nrMasyvas
  // .sort((a,b)=>a-b);
  // .slice(1,-2);
console.log(first,last);
console.groupEnd;

// 6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę)
const array2 = [4,5,6,4,8,4,54,5,6,4,8,4,5];
const array1 = [1,4,5,6,4,8,4,5];
for (let i = 0; i < array2.length; i++) {
   array2.includes(array1)
}

// 7+) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])

// 8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.

// 9+) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.

// 10) Parašykite funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).