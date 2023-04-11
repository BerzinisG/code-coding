// import { sum as sudetis, division } from './matematika.js';
// import mumboJumbo, { kita } from './randomColor.js';
import P from './paragraph.js';
import H from './heading.js';
import Card from './card.js';
import I from './img.js';
import List from './list.js';


// console.groupCollapsed('moduliai');
// // kita();kita();kita();kita();kita();
// // console.log(sudetis('spalva:',mumboJumbo()));
// console.log(division(80000, 3));
// console.groupEnd();

const testSection = document.querySelector('#test');
const paragrafas0 = new P({
  text:'Sukūrėme paragrafą :)',
  class: ['raudonasTekstas', 'centruotasTekstas']
});
const paragrafas1 = new P({text:'Saulė šviet, varom pabėgiot!!!'});
const heading0 = new H({
  text: 'Aš esu antraštė',
  size: 1,
  class: ['raudonasTekstas', 'centruotasTekstas', 'didelisTekstas']
});
const heading1 = new H({
  text: 'Aš esu mažiukas antraščiukas',
  size: 5
});

const card0 = new Card({
  class: [],
  image: {
    src: 'https://assets2.cbsnewsstatic.com/hub/i/r/2012/02/06/1feb5e95-a644-11e2-a3f0-029118418759/thumbnail/1200x630/64a9aba33675cad48043257194ebc838/breading-cats-q013.jpg',
    alt: 'cat ale bread'
  },
  heading: {
    text: 'Cat in da bread',
    size: 1
  },
  paragraph: {
    text: 'Cat is very happy while living inside the bread :)'
  }
});


// const img0 = new I({
//   src:'https://wallpaperaccess.com/full/17350.jpg',
//   alt:'One piece'
// });
// console.log(img0);

// let sectionUzduotis = document.querySelector('#uzduotis');
// sectionUzduotis.appendChild(img0);

const sarasas0 = new List({
  listType: 'ul',
  listClass: ['vienaKlase', 'kitaKlase'],
  listItemsClass:['liKlase'],
  listItems: [
  {
    text:"1111"

  },{
    text:"2222"

  },{
    text:"3333",
    class:['unikaliKlase']

  },{
    text:"4444",
    class:['unikaliKlase']

  },{
    text:"5555"

  }
]
});
testSection.append(sarasas0, heading0, paragrafas0, paragrafas1, heading1, card0);