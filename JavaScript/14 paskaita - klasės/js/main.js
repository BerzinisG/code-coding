

class Car{
  #make; #model; #year; #color; #basePrice; #engineType; #photo;
  constructor({make, model, year, basePrice, engineType, photo}){
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#basePrice = basePrice;
    this.#engineType = engineType;
    this.#photo = photo;
    this.#color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;//rgb 0-255*3
  }
  getPhoto (){
    return this.#photo
  }
  setPhoto(newPhoto){
    this.#photo = newPhoto
  }
  getMake(){
    return this.#make
  }
  setMake(newMake){
    this.#make = newMake
  }
  getModel (){
    return this.#model
  }
  setModel(newModel){
    this.#model = newModel
  }
  getYear (){
    return this.#year
  }
  setYear(newYear){
    this.#year = newYear
  }
  getColor (){
    return this.#color
  }
  setColor(newColor){
    this.#color = newColor
  }
  getEngineType(){
  return this.#engineType
}
  setEngineType(newEngineType){
  this.#engineType = newEngineType
}
  getprice(){
  switch (this.#engineType) {
    case 'gas':
      return this.#basePrice+300
    case 'petrol':
      return this.#basePrice+600
    case 'electric':
      return this.#basePrice+2500
    default:
      return this.#basePrice
  }
}
  turnEngineOn(){
    return'vroom!!!'
  }
  getCarAge(){
    return new Date().getFullYear()-this.#year
  }
}

const carsData = [
({ 
  make:'Volksvagen', 
  model:'Passat', 
  year: 2005, 
  price: 520, 
  engine: 'gas',
  photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf02xCY9wM5HEYCoy9-ATkbStjSTmgP6gvXA&usqp=CAU'
}),
({ 
  make:'Audi', 
  model:'TT', 
  year: 2010, 
  price: 1200, 
  engine: 'petrol',
  photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/2005_Audi_TT_Quattro_3.2_Front.jpg'
}),
({ 
  make:'BMW', 
  model:'7', 
  year: 1995, 
  price: 3520, 
  engine: 'electric',
  photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/BMW_7_Series_E38_%286903852713%29.jpg/1200px-BMW_7_Series_E38_%286903852713%29.jpg'
}),
({ 
  make:'Fiat', 
  model:'Punto', 
  year: 2001, 
  price: 4000, 
  engine: 'petrol',
  photo: 'https://www.honestjohn.co.uk/media/_v6/7441876/Fiat%20Punto%20(2).jpg?width=1200&height=800&rmode=crop'
}),
];
const carsObjects = carsData.map(car => new Car (car));

console.log(carsObjects);
console.log(carsObjects[0].make);
// console.log(carsObjects[0].#make); // grąžina error, nes negalime krieptis į privačius
console.log(carsObjects[0].getMake());
// console.log(carsData[0].getMake()); // grąžina error, nes paprasti duomenys neturi metodų

carsObjects.forEach(car => {
  document.querySelector('#allCars').innerHTML += `
    <div class="car">
      <h1>${car.getMake()} ${car.getModel()}</h1>
      <img src="${car.getPhoto()}" alt="${car.getMake()} ${car.getModel()} photo">
      <div class="carSpecs">
        <div>
          <p>YoM: ${car.getYear()}</p>
          <p>Engine: ${car.getEngineType()}</p>
          <p>Color: <span style="background-color:${car.getColor()}"></span></p>
        </div>
        <div>
          <p>Price: ${car.getPrice()} &euro;</p>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('#newCars>form').addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);
  console.log(e.target.elements);
  let car = {
    make: e.target.elements.make.value,
    model: e.target.elements.model.value,
    year: e.target.elements.year.valueAsNumber,
    basePrice: e.target.elements.basePrice.valueAsNumber,
    engineType: e.target.elements.engineType.value,
    photo: e.target.elements.photo.value
  };
  console.log(car);
  const coolCar = new Car(car);
  console.log(coolCar);
  document.querySelector('#allCars').innerHTML += `
    <div class="car">
      <h1>${coolCar.getMake()} ${coolCar.getModel()}</h1>
      <img src="${coolCar.getPhoto()}" alt="${coolCar.getMake()} ${coolCar.getModel()} photo">
      <div class="carSpecs">
        <div>
          <p>YoM: ${coolCar.getYear()}</p>
          <p>Engine: ${coolCar.getEngineType()}</p>
          <p>Color: <span style="background-color:${coolCar.getColor()}"></span></p>
        </div>
        <div>
          <p>Price: ${coolCar.getPrice()} &euro;</p>
        </div>
      </div>
    </div>
  `;
})
const testZona = document.querySelector('allCars')
let divSuCar = document.createElement('div')
divSuCar = classList.add('car')
testZona.appendChild(divSuCar)
let heading = document.createElement('h1')
let tekstas = document.createTextNode(`${coolcar.getMake()} ${coolCar.getModel()}`)
heading.appendChild(tekstas)
let foto = document.createElement('img')
foto.setAttribute('src', '${coolCar.getPhoto()}')
foto.setAttribute('alt', '${coolCar.getMake()} ${coolCar.getModel()} photo')
divSuCar.appendChild(foto)
let divCarSpecs = document.createElement('div')
divCarSpecs = classList.add('carSpecs')
divSuCar.appendChild(divCarSpecs)
let carSpecs = document.createElement('div')

