/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function sum(par1,par2) {
  let suma = par1+par2;
  return suma;  
}
console.log(sum(10,20));

function subt(par1,par2) {
  let subtraction = par1-par2;
  return subtraction;  
}
console.log(subt(50,20));

function mult(par1,par2) {
  let multiplication = par1*par2;
  return multiplication;  
}
console.log(mult(13,14));

function divis(par1,par2) {
  let division = par1/par2;
  return division;  
}
console.log(divis(121,11));