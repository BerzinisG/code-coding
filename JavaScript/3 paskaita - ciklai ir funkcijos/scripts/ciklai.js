// Ciklas - Loop\\
// besikartojantys veiksmai, vygdomi tol, kol atitinka nurodytą sąlygą.

// Ciklų tipai:

// for(){}
//     for of - masyvams
//     for in - objektams

// while
    // do{} while()
// iteraciniai metodai- turi tik masyvai\\
    // forEach(callback)
    // filter(callback)
    // map(callback)
    // reduce(callback)
    // flatmap(callback)
    // reduceRight(callback)
    // find(callback)
    // findlast(callback)
    // findIndex(callback)
    //  findLastIndex(callback)
    // some(callback)
    // every(callback)
//Operatoriai:
//i++ didinti kintamajį per vienetą po ciklo iteracijos
//++i didinti kintamajį per vienetą prieš ciklo iteracija
//i-- mažina kintamąjį per vienetą po ciklo iteracijos
//--i mažina kintamąjį per vienetą prieš ciklo iteraciją
// i-tai kintamasis

/* for */
// for(skaitliuko sukūrimas; sąlyga; skaitliukoKitimas){veiksmai...} 
// naudojame kai galime apskaičiuoti reikalingą iteracijų kiekį
// 
// for(1; 2; 3){}
console.groupCollapsed('for');
for (let i=1; i<=10; i++){
console.log('vykdom ciklą', i);
}
console.groupEnd();
console.groupCollapsed('while');
/* while*/
// naudojamas kai negalime apskaičiuoti iteracijų kiekio
let iteracija = 1;
while(iteracija <= 10){
    console.log('while ciklas');
    iteracija++;
}
console.groupEnd();
// do while
// do{veiksmai..}while(sąlyga)
// ciklo veiksmai būtų įvykddyti bent vieną kartą

console.groupCollapsed('dowhile');
do{
    console.log('ivykdo bent vieną kartą');
}while(false)
console.groupEnd();

console.groupCollapsed('forOF');
/* for of*/
/* for(value of array){veiksmai...}*/
// naudojamas norint iteruoti per iteruojama duomenį( dažniausiai, masyvas)
let masyvas = [5,6,7,8,2,4,5,6,3,0];
for(katinukas of masyvas){
    console.log(katinukas);
}
console.log(katinukas);
console.groupEnd();

/* for in*/
/* for(value of object){veiksmai...}*/
// objekto raktiniai žodžiai yra patalpinami kintamuosiuose ir tam, kad juos panaudotume, turime į objektą kreiptis nebe per tašką, bet per skliaustelius: objektas.raktas, bet objektas[raktas]
console.groupCollapsed('forIN');
let objektas = {primas: "haha", antras: 'hihi', trecias:':)'}
for(let raktas in objektas);{
console.log(raktas, objektas[raktas]);
}
console.groupEnd();

/* Variable scope */
/*
Kintamieji egzistuoja savo ribose, jos nurodomos - {} skliausteliais
*/
console.groupCollapsed('variable scope');
let katinelis = 'ryžas';
console.log(katinelis);
{
    console.log(katinelis);
    let suniukas = 'taksas';
    var suniukas2 = 'biglis';
    const suniukas3 = 'terjeras';
    console.log(suniukas);
}
// console.log(suniukas);
console.log(suniukas2);
// console.log(suniukas3);
console.groupEnd();
let gyvunuMasyvas = ['šuniukas', 'katukas', 'begemotas', 'zirafa','dramblys','liūtas','pantera','stirna'];
// for (let i=0; i<gyvunuMasyvas.lenght; i++){
// console.log(gyvunuMasyvas[i]);
// }

// for(let i = gyvunuMasyvas.lenght-1;i>=0 ; i-- ){
//     console.log(gyvunuMasyvas[i]);
// }