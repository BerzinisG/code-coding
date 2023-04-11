export default class Task{
  constructor(props){
  this.props = props;
  return this.render();
}
render(){
  this.listItem = document.createElement('li');
  this.heading = document.createElement('h3');
  this.headingText = document.createTextNode('this.props');
  this.heading.append(this.headingText);
  this.listItem.appendChild(this.heading);
  
  this.icon = document.createElement('i');
  this.delete();
  this.icon.classList.add('');
  this.listItem.appendChild(this.icon);
  this.delete();
  this.doUndo();
  return this.listItem;
}
  delete(){
    this.icon.addEventListener('click', () => {
      this.listItem.remove();      
    });
  }
  doUndo(){
    this.listItem.addEventListener('click', ()=>{
      if(this.listItem.classList.contains('done')){
        this.listItem.classList.remove('done')
      } else if(!this.listItem.classList.remove('done')){
        this.listItem.classList.add('done')        
      }
    })
  }}
