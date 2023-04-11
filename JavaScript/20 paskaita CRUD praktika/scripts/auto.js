export default class Auto{
  /// sukuriamas konstruktorius kiekvienam korteles elementui \\\
  constructor({make, model, bodyType, fuelType , yearOfProduction, modelNo,power,image, id}){
this.make = make;
this.model = model;
this.bodyType = bodyType;
this.fuelType = fuelType;
this.yearOfProduction = yearOfProduction;
this.modelNo = modelNo;
this.power = power;
this.image = image;
this.id = id;
return this.render();
  }
  render(){
    this.divCard = document.createElement('div');
    this.divCard.classList.add('card');

    this.carImage = document.createElement('img'); // susikuriam img
    this.carImage.setAttribute('src', this.image);
    this.carImage.setAttribute('alt', 'Car photo');
    
    this.heading = document.createElement('h1'); // susikuriam varda pavarde
    this.headingText = document.createTextNode(`${this.make} ${this.model} ${this.bodyType}`);
    this.heading.appendChild(this.headingText);
    
    this.year = document.createElement('p');// susikuriam amziu
    this.yearText = document.createTextNode(`Production:${this.yearOfProduction}`);  
    this.year.appendChild(this.yearText);

    this.status = document.createElement('p');
    this.statusText = document.createTextNode(`Model NO & Power: ${this.modelNo} ${this.power}`);
    this.status.appendChild(this.statusText);

    this.deleteButton = document.createElement('button');
    this.deleteButtonText = document.createTextNode('Delete this car');
    this.deleteButton.appendChild(this.deleteButtonText)
    this.delete();

    this.divCard.append(this.heading, this.carImage, this.year, this.status,this.deleteButton);

    return this.divCard;
    }
    delete(){
      this.deleteButton.addEventListener('click', () => {
        this.divCard.remove();
        fetch(`http://localhost:3000/auto/${this.id}`, {
          method: "DELETE"
        });
      });
    }
  }