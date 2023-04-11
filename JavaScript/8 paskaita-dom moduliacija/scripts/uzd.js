const task1 = document.querySelector('#task1');
let divas = document.createElement('div');
let naujaAntraste = document.createElement('h1');
let AntrastesTekstas = document.createTextNode('Labas Pasauli');
naujaAntraste.appendChild(AntrastesTekstas);
let naujasP = document.createElement('p');
let pTekstas = document.createTextNode('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi neque deleniti magni quibusdam amet corrupti.');
naujasP.appendChild(pTekstas);
let piksas = document.createElement('img');
piksas.setAttribute('src','https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/One_Piece_Logo.svg/1200px-One_Piece_Logo.svg.png');
piksas.setAttribute('style','width:300px', 'height:auto');
divas.classList.add('kortele1');
piksas.setAttribute('alt', 'anime: One Piece');
divas.append(naujaAntraste, naujasP, piksas);
task1.appendChild(divas);
console.log(divas);
/* task2*/

const task2 =document.querySelector('#task2');
let hedas = document.createElement('h1');
hedas.classList.add('didelisTekstas');
let vienasP = document.createTextNode(data[1].title);
let divaz = document.createElement('div');
divaz.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-2');
for (let i = 0; i < data[1].images.length; i++) {
    let fotoDivas = document.createElement('div');
    fotoDivas.classList.add('kortele1');
    let leonardoImage = document.createElement('img');
    leonardoImage.setAttribute('src', data[1].images[i]);
    fotoDivas.append( leonardoImage);
    divaz.appendChild(fotoDivas);
  }
hedas.appendChild(vienasP);
task2.append(hedas,divaz);


// 3) Naudodamiesi data[2] duomenimis atlikite šiuos veiksmus:
// 	3.1) JS'u sekcijoje sukurkite antraštę.
// 	3.2) JS'u sekciją papildykite div'ais, kuriuose bus pavadinimai, paveiksliukai ir antraštės.
// 	3.3 optional) JS'u sekciją stilizuokite priskirdami klases.
// 	3.4 optional) Papildyti duomenų failą dar ~10 menininkų darbais.
const task3 = document.querySelector('#task3');
let hedas1 = document.createElement('h1');
    hedas1.classList.add('didelisTekstas');
let uzrasas = document.createTextNode(data[2].title);
let greatest = document.createElement('div');
    greatest.classList.add('spoiler');
for (let i = 0; i < data[2].works[i].length; i++) {
  let divai = document.createElement('div');
  let hedasThree = document.createElement('h3');
  hedasThree.document.createTextNode(data[2].works[i].title);
  divai.append(hedasThree);
  greatest.appendChild(divai);
  
}
hedas1.appendChild(uzrasas);
task3.append(hedas1,greatest);

