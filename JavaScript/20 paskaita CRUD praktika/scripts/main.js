import A from "./auto.js";
fetch('http://localhost:3000/auto')
.then(res => res.json())
.then(card => { 
  console.log(card);
  const allCars = document.querySelector('#allCars');
  card.forEach(cars => {
    const carsDiv = new A(cars); 
    allCars.appendChild(carsDiv);
  });
});
document.querySelector('#newCar > form').addEventListener('submit', e=>{
  e.preventDefault();
  const car = e.target.elements;
  console.log(car);
  const auto ={
    make: car.make.value,
    series: car.series.value,
    bodyType: car.bodyType.value,
    year: car.year.valueAsNumber,
    modelNo: car.modelNo.value,
    power: car.power.value,
    image: car.image.value,
    id: Date.now()
  }
  const divCard = new A(auto);
  console.log(divCard);
  document.querySelector("#allCars").appendChild(divCard);

fetch('http://localhost:3000/auto', {
    method: "Post",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(auto)
      })
      e.target.reset();
  });