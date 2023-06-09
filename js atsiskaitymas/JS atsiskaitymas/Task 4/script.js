/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch('http://localhost:3000/cars')
.then(res => res.json())
.then(card => { 
  console.log(card);
  const allCars = document.querySelector('#output');
  card.forEach(cars => {
    const carsDiv = new E(cars); 
    allCars.appendChild(carsDiv);
  });
});