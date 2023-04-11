/* DOM

document.querySelector
document.querySelectorAll
Node.addEvenetListener('event', callback)


*/
function vardoIrPavardesIlgis(vardas, pavarde) {
    return vardas.trim().lenght + pavarde.trim().lenght;
}
function vardoIrPavardesIlgiosFormosFunkcija(event) {
  event.preventDefault();
  console.log(event);
  // console.dir(event.target[0].value);
  // console.dir(event.target[1].value);
  // console.dir(document.querySelector('vardas').value);
  let elementai = event.target.elements;
  console.dir(elementai.vardas.value);
  console.dir(elementai.pavarde.value);
let ilgiuSuma = vardoIrPavardesIlgis(elementai.vardas.value, elementai.pavarde.value);
console.log(ilgiuSuma);
document.querySelector('#pirmosFormosAts>span').textContent = ilgiuSuma;
}
document
    .querySelector('section#pirmaForma > form')
    .addEventListener('submit',vardoIrPavardesIlgiosFormosFunkcija);

    // function FormosFunkcija(event) {
    //   event.preventDefault();
    //   console.log(event);
    //   let No1Dalmuo = event.target.elements.No1Dalmuo.valueAsNumber;
    //   let No2Dalmuo = event.target.elements.No2Dalmuo.valueAsNumber;
    //   console.log(No1Dalmuo, No2Dalmuo);
    //   document.querySelector('#sudetiesAts').textContent = No1Dalmuos+No2Dalmuo;
    // }
    // document
    //   .querySelector('form#atimtis')
    //   .addEventListener('submit', FormosFunkcija);
      
      
      
    // 1) Sukurti 4-7 formas HTML'e, kuriose galima būtų įvesti du skaičius ir būtų išvedama tų skaičių: sudėtis, atimtis, daugyba, dalyba, laipsnio kėlimas, šaknies traukimas, liekanos radimas.
    // 1 extra) Sukurti vieną formą HTML'e, kurioje galima būtų įvesti du skaičius ir select'e nurodyti norimą veiksmą ir būtų grąžinamas teisingas atsakymas.
    
function FormosFunkcija(event) {
  event.preventDefault();
  console.log(event);
  let No1Domuo = event.target.elements.No1Domuo.valueAsNumber;
  let No2Domuo = event.target.elements.No2Domuo.valueAsNumber;
  let veiksmas = event.target.elements.aritmetika.value;
  let trumpinys = document.querySelector('#atsakymas');
  console.log(No1Domuo, No2Domuo);
  console.dir(veiksmas);
  switch (veiksmas) {
    case 'suma':trumpinys.textContent = No1Domuo+No2Domuo;
    break;
    case 'atimtis':trumpinys.textContent = No1Domuo-No2Domuo;
    break;
    case 'daugyba': trumpinys.textContent = No1Domuo*No2Domuo;
    break;
    case  'dalyba':trumpinys.textContent = No1Domuo/No2Domuo;
    break;
    case 'laipsnioKelimas': trumpinys.textContent = No1Domuo**No2Domuo;
      break;
      case 'sakniesTraukimas': trumpinys.textContent = No1Domuo**(1/No2Domuo);
  
    default:
      break;
  
    // document.querySelector('#atsakymas').textContent = No1Domuo*No2Domuo;
  }
  
}
document
  .querySelector('form#aritVeiksmas')
  .addEventListener('submit', FormosFunkcija)



// 2) Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išveda ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60.
function bilietoKaina(kaina) {
  kaina.preventDefault();
  console.log(kaina);
  let amzius = ''
  if (amzius<16) {
    document.querySelector('h1#kaina').textContent = 6/2;
    
  }else if (amzius>=60) {
  document.querySelector('h1#kaina').textContent = 6/3;
  
  }else{
  document.querySelector('h1#kaina').textContent = 6;
  }

}
document
  .querySelector('form#tavoAmzius')
  .addEventListener('submit', bilietoKaina);
// 3) Kai kuriose šalyse reikia eiti į kariuomenę, jei tau tarp 18 ir 30 metų ir jei neturi kriminalinio įrašo. Sukurti programą, kuri su input + checkBox pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą checkBox input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.