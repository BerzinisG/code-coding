export default class Useris{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render(){
    this.postDiv = document.createElement('div');
    this.postDiv.classList.add('card')
    
    this.Vardas = document.createElement('h1');
    this.postVardasText = document.createTextNode(this.props.name.first);
    this.Vardas.appendChild(this.postVardasText);

    this.Pavarde = document.createElement('h1');
    this.postPavardeText = document.createTextNode(this.props.name.last);
    this.Pavarde.appendChild(this.postPavardeText);

    this.Amzius = document.createElement('span');
    this.postAmziusText = document.createTextNode(this.props.dob.age);
    this.Amzius.appendChild(this.postAmziusText);

    this.Gvta = document.createElement('span');
    this.postGvtaText = document.createTextNode(this.props.location.country);
    this.Gvta.appendChild(this.postGvtaText);

    this.Emailas = document.createElement('span');
    this.postEmailasText = document.createTextNode(this.props.email);
    this.Emailas.appendChild(this.postEmailasText);

    this.postImg = document.createElement('img');
    this.postImg.setAttribute('src', this.props.picture.medium);
    

    

    this.postDiv.append(this.Vardas, this.Pavarde, this.Amzius, this.Gvta, this.Emailas, this.postImg);

    return this.postDiv;
  }
  
}