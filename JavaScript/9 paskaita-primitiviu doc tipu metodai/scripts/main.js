// <!-- 1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas). -->
let x = 1.55555;
console.log(x.toFixed(2));
  if (Number.isInteger(x)) { 
    alert('uzteks ir euru' );
  }else{
    alert('reikia centu'); 
  }

// console.log('alert');

// <!-- 2) Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur). -->
// <!-- 3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trim skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur). -->

const degaluKaina = (event) => {
  event.preventDefault()
  const firstInput = event.target.elements.no1.valueAsNumber
  const secondInput = event.target.elements.no2.valueAsNumber

  const h3 = document.createElement('h3');
  const h3Content = document.createTextNode(`Degalų kaina ${firstInput*secondInput}.toFixed(2)`)
  h3.appendChild(h3Content)
document.querySelector('#task3').append(h3)
}
document.querySelector('#task3_form').addEventListener('sumbit', degaluKaina);
// 4) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
function printName(event) {
  EventTarget.preventDefault();
  let vardas = event.target.elements.value //uzbaigti/pasitikrinti

  let num = event.target.elements.valueAsNumber //uzbaigti/pasitikrinti
  
}
document.querySelector('task4_form').addEventListener(sumbit, printName)
// 5) Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.
// 6) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS ekrane atvaizduotų du h1 tag'us, viename - vardas, kitame - pavardė.
// 7) Pakoreguok šeštą pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.

