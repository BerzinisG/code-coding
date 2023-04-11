export default class Zmogus{
  /// sukuriamas konstruktorius kiekvienam korteles elementui \\\
  constructor({vardas, pavarde, amzius, vedes , lytis, profileImage, id}){
this.vardas = vardas;
this.pavarde = pavarde;
this.amzius = amzius;
this.vedes = vedes;
this.lytis = lytis;
this.profileImage = profileImage;
this.id = id;
return this.render();
  }
  render(){
    this.divCard = document.createElement('div');
    this.divCard.classList.add('card');

    this.heading = document.createElement('h1'); // susikuriam varda pavarde
    this.headingText = document.createTextNode(`${this.vardas} ${this.pavarde}`);
    this.heading.appendChild(this.headingText);
    
    this.image = document.createElement('img'); // susikuriam img
    this.image.setAttribute('src', this.profileImage);
    this.image.setAttribute('alt', 'profile photo');

    this.agePar = document.createElement('p');// susikuriam amziu
    this.ageParText = document.createTextNode(`Amžius:${this.amzius}`);  
    this.agePar.appendChild(this.ageParText);

    this.statusPar = document.createElement('p');
    this.statusParText = document.createTextNode(`Šeimyninis statusas: ${this.seimosStatusas()}`);
    this.statusPar.appendChild(this.statusParText);

    this.deleteButton = document.createElement('button');
    this.deleteButtonText = document.createTextNode('Delete this card');
    this.deleteButton.appendChild(this.deleteButtonText)


    this.divCard.append(this.heading, this.image, this.agePar, this.statusPar,this.deleteButton);

    return this.divCard;
    }
  /// seimos statuso kurimo ciklas \\\
    seimosStatusas(){
      if (this.lytis === 'vyras' && this.vedes) {
        return 'vedęs';
      }else if(this.lytis === 'vyras' && !this.vedes){
        return 'nevedęs';
      }else if ( this.lytis === 'moteris' && this.vedes){
        return 'ištekįjusi';
      }else if ( this.lytis === 'moteris' && !this.vedes){
        return 'netekėjusi';
      }
    }
    /// istrynimo funkcija \\\
    delete(){
      this.deleteButton.addEventListener('click', () => {
        this.divCard.remove();
        fetch(`http://localhost:3000/zmones/${this.id}`, {
          method: "DELETE"
        });
      });
    }
  }