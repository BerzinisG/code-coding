export default class Img{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render (){
    
    this.onePieceImage = document.createElement('img');
    this.onePieceImage.setAttribute('src', this.props.src);
    this.onePieceImage.setAttribute('alt', this.props.alt);
    return this.onePieceImage;
  }
}

