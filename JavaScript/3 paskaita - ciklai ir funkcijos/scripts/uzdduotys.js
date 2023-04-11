// let gyvunuMasyvas = [
//   "šuniukas",
//   "katukas",
//   "begemotas",
//   "zirafa",
//   "dramblys",
//   "liūtas",
//   "pantera",
//   "stirna",
// ];
// console.groupCollapsed("gyvunai");
// console.log(gyvunuMasyvas);
// for (let i = 0; i < gyvunuMasyvas.lenght; i++) {
//   console.log(gyvunuMasyvas[i]);
// }
// console.groupEnd();
// for(let i = gyvunuMasyvas.lenght-1;i>=0 ; i-- ){
//     console.log(gyvunuMasyvas[i]);
// }

let auto = ['2','3','5','8','15','16','18','19','21','22','23','44','-9','-8','-7','-6','-4'];
console.log(auto);
// for (let i = 0; i <= auto.lenght; i++) {
//   console.log(auto[i]);
// }
// for (let i=0; i < auto.length; i+= 3){
//   console.log(auto[i]);
// }
// for (let i = auto.length-2; i >= 0; i-=2 ){
//   console.log(auto[i]);
// }
// for(i=0; i<auto.length; i++){
//    if (auto[i]>12){
//     console.log(auto[i]);
//   }
// }
// for (let i = 0; i < auto.length; i++) {
//   if (auto[i]%2==0) {
//     console.log(auto[i]);
//   }
// }
// for (let i = 0; i < auto.length; i++) {
//   if (auto[i]%2!==0) {
//     console.log(auto[i]);
//   }
// }
// const extra = [];
// for (let i = 0; i < 100; i++) {
//   auto.push(i);
// }
console.groupCollapsed('fizzbuzz');
for (let i = 0; i < 100; i++) {
  if ([i]%3===0 && [i] % 5===0){
    console.log('FizzBuzz');
  }else if( [i]%3===0){
    console.log('Fizz');
  }else if([i]%5===0){
    console.log('Buzz')
  }
}