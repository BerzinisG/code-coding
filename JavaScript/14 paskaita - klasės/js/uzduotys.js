class Rectangle {
  construktor(height, width){
    this.height = height,
    this.width = width,
    this.color = `#${Math.floor(math.random()*fff).toString(16)}`
  }
area(){
  return this.width * this.height;
}
peritmeter(){
  return this.width*2 + this.height*2;
}
}

class Point {
  constructor(x,y){
    this.x = x,
    this.y = y
  }
  coordinates(x,y){
    return `(${this.x}; ${this.y})`
  }
  static distance (x,y){
    const atsumas = a.x - b.x
    const atstumas2 = a.y - b.y
    return math.hypot(atstumas,atsumas2);
  }
}
const point1 = new Point (7,7);
const point2 = new Point (12,12);



class Rectangle_3D{
  constructor(x,y,z){
    this.x = x,
    this.y = y,
    this.z = z
  }
  volume(){
    return this.x*this.y*this.z
  }
  surfaceArea(){
    return this.x*this.y*2+this.x*this.z*2+this.y+this.z*2
  }
  peritmeter(){
    return this.x*4+this.y*4+this.z*4
  }
}
const rec1 = new Rectangle_3D(3,5,7);
console.log(rec1.volume());
console.log(rec1.surfaceArea());
console.log(rec1.perimeter());