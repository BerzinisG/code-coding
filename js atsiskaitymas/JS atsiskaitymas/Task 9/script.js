/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */
class Movie{
  constructor(title, director, budget,div){
  this.title = title
  this.director = director
  this.budget = budget
  this.newdiv = div
  return this.render
  }
  render(){
    this.newDiv = document.createElement('div')

    this.titleP = document.createElement('h1')
    this.titleText = document.createTextNode(`${this.title}`)
    this.titleP.appendChild(this.titleText)

    this.directorP = document.createElement('h2')
    this.directorText = document.createTextNode(`${this.director}`)
    this.directorP.appendChild(this.directorText)

    this.budgetP = document.createElement('p')
    this.budgetText = document.createTextNode(`${this.budget}`)
    this.budgetP.appendChild(this.directorText)

    this.newDiv.append(this.titleP, this.directorP,this.budgetP)
  }
}
  budget => {
    if (budget >= 1000000000) {
      console.log(true);
    } else
    console.log(false);
  }