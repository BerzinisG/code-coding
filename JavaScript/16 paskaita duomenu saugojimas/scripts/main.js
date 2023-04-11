// Cookies
// document.cookie = 'pavadinimas = reikšmė';
// document.cookie = `vardas=Gintas; expires=${new Date('2023 03 30 13.55')}`;

/// Sesion storage

// sessionStorage.setItem('raktinisZodis', 'reiksme');
// sessionStorage.setItem('Vardas', 'Gintas');
// sessionStorage.setItem('Pavarde', 'Beržinis');
// sessionStorage.removeItem('Pavarde');
// sessionStorage.clear();
// let sessionVardas = sessionStorage.getItem('vardas')
// console.log(sessionVardas);
// let sessionRaktas = sessionStorage.key(1);
// console.log(sessionRaktas);
// console.log(sessionStorage.lenght);

// localStorage.setItem('Tema', 'Runescape');
// localStorage.setItem('iTema', 'fase');
// localStorage.removeItem('iTema');
// // localStorage.clear();
// console.log(localStorage.getItem('iTema'));
// console.log(localStorage.key(0));
// console.log(localStorage.length);
// const duomenys = {
//   asmenys:[{
//     Vardas: 'Gintas',
//     pavarde: 'berzinis',
//     amzius: 38
//   },{
//     Vardas: 'petas',
//     pavarde: 'petraitis',
//     amzius: 30
//   }],
//   masinos:[{
//     Vardas: 'Bmw',
//     pavarde: '7.60',
//     amzius: 27
//   },{
//     Vardas: 'Mercedes-Benz',
//     pavarde: 'SL600',
//     amzius: 29
//   }]
// };
// window.localStorage.setItem('duomenys', JSON.stringify(duomenys));
// console.log(window.localStorage.getItem('duomenys'));

//// node elementai \\\\
const nodeSekcija = document.querySelector('#nodeElements');
let divas = document.createElement('div');
divas.classList.add('kortele', 'remeliai');
nodeSekcija.appendChild(divas);
let heading = document.createElement('h1');
divas.appendChild(heading);
let textPavadinimas = document.createTextNode('pavadinimas');
heading.appendChild(textPavadinimas);
console.dir(divas);
heading.addEventListener('click', () => {
  // divas.classList.toggle('redbg');
  if (heading.classList.contains('redBg')) {
    heading.classList.remove('redBg');
  }else if(!heading.classList.contains('redBg')) {
      heading.classList.add('redBg');

  }
});
let trinimoMygtukas = document.createElement('button');
divas.appendChild(trinimoMygtukas);
let trinimoMygtukasTekstas= document.createTextNode('Trinti');
trinimoMygtukas.appendChild(trinimoMygtukasTekstas);
trinimoMygtukas.addEventListener('click', (e) => {
  e.target.parentElement.remove();
  console.log('sunaikinau div koretele...');
})
