export default class Members{
  constructor({name, image, occupation, birthday, age, height, devilFruit, bounty,berry}){
  this.name = name,
  this.image = image,
  this.occupation = occupation,
  this.birthday = birthday,
  this.age = age,
  this.height = height,
  this.devilFruit = devilFruit,
  this.bounty = bounty,
  this.berry = berry
    return this.render()
  }
  render(){
    this.membersDiv = document.createElement('div')
    this.membersDiv.classList.add('members')
    

    this.vardas = document.createElement('h1')
    this.vardasText = document.createTextNode(`${this.name}`)
    this.vardas.appendChild(this.vardasText)

    this.foto = document.createElement('img')
    this.foto.setAttribute('src', this.image)
    this.foto.setAttribute('alt', 'Charakters name')

    this.pareigos = document.createElement('h3')
    this.pareigosText = document.createTextNode(`${this.occupation}`)
    this.pareigos.appendChild(this.pareigosText)

    this.gimse = document.createElement('span')
    this.gimseText = document.createTextNode(`B-day: ${this.birthday}`)
    this.gimse.appendChild(this.gimseText)
    
    this.amzius = document.createElement('span')
    this.amziusText = document.createTextNode(`Age: ${this.age}`)
    this.amzius.appendChild(this.amziusText)
    
    this.ugis = document.createElement('span')
    this.ugisText = document.createTextNode(`Height: ${this.height}`)
    this.ugis.appendChild(this.ugisText)
    
    this.galios = document.createElement('span')
    this.galiosText = document.createTextNode(`${this.devilFruit}`)
    this.galios.appendChild(this.galiosText)
    
    this.dead = document.createElement('h2')
    this.iconberry = document.createElement('img')
    this.iconberry.setAttribute('src', this.berry)
    this.deadText = document.createTextNode(`bounty: ${this.bounty}`)
    this.dead.append(this.deadText, this.iconberry)

    this.deleteButton = document.createElement('button');
    this.icon = document.createElement('i')
    this.icon.classList.add('fass')
    this.icon.classList.add('xmark')
    this.deleteButton.appendChild(this.icon)
    this.delete();
    
    this.membersDiv.append(this.vardas, this.foto, this.pareigos, this.gimse, this.amzius, this.ugis, this.dead, this.deleteButton)

    return this.membersDiv
  }
  delete(){
    this.deleteButton.addEventListener('click', () => {
      this.divCard.remove();
      fetch(`http://localhost:3000/auto/${this.id}`, {
        method: "DELETE"
      })
    })
}}