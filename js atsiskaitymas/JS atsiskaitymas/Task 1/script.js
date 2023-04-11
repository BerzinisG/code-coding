/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector('form').addEventListener('submit', e =>{
  e.preventDefault();
  const skaicius = e.target.elements.valueAsNumber;
  const svarai = function(skaicius) {
    return skaicius * 2.2046
  };
  const gramai = function(skaicius) { 
    return skaicius / 0.001
  };
  const uncijos = skaicius =>{skaicius * 35.274};
  document.querySelector('#output').append(`svoris:${svarai},${gramai}, ${uncijos}`)
  
});
