// Aplikacijoje reikia turėti galimybes:
//   Sukurti naują task'ą.
//   Pažymėti task'ą kaip atliktą.
//   Atžymėti task'ą kaip neatliktą.
//   Ištrinti task'ą.

// 1) Sukurti aplikaciją nenaudojant Klasių, nei duomenų, nei duomenų saugojimo vartotojo dalyje.
// 2) Patobulinti aplikaciją, kad nauji elementai būtų kuriami su Klasės pagalba. Toje pačioje klasėje būtų aprašyti ir funkcionalumai kaip metodai, kurie būtų kviečiami nuspaudus atitinkamą vietą elemente.
// 3) Patobulinti aplikaciją taip, kad elementai būtų sukuriami iš duomenų kintamojo.
// 4) Patobulinti aplikaciją taip, kad duomenys keistųsi, priklausomai nuo vartotojo atliekamų veiksmų vartotojo sąsajoje. Kai sukuriamas naujas elementas - pasipildytų duomenys; kai ištrinamas esantis elementas - jis būtų išimamas iš duomenų; kai pažymimas kaip atliktas arba neatlikas - duomenyse pasikeistų jo atlikimo statusas.
// 5) Patobulinti aplikaciją taip, kad duomenys būtų saugojami, trinami arba redaguojami localStorage'e.
// const toDoForma = document.querySelector('.toDo'); //selektinam input forma
// const ivestis = document.querySelector('.toDoInput'); // selektinam inputa
// const SarasoItems = document.querySelector('.toDoItems');// selektinam ul
// toDoForma.addEventListener('submit', // klausomes submit mygtuko
// function (event) {
//   event.preventDefault(); //neleidziam persikrauti puslapiui, kai įvedama reikšme
// addtoDoIntput()
  
// })
import Task from './Task.js';
document.querySelector('#sukuriameForma>form').addEventListener('submit' ,e =>{
  e.preventDefault();
  const value = e.target.elements.task.value;
const newTas= new Task({title:value});
});
  document.querySelector('#tasks > ul').appendChild(sukuriameForma);
  e.target.reset();
