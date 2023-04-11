/// Kintamieji \\\
let zodis = 'Žodinis kintamasis'
let skaicius = 7861
let loginis = false
let mmasyvas = ['tekstas',65,true]
let objektas = { 
  raktinisZodis : 'reiksme',
  rytas : true,
  valanda: 9
}

/// Aritmetika \\\

/// Sąlygos \\\
console.groupCollapsed('NOT OR AND')
console.log(5 == '5');//true
console.log(5 === '5');//false
console.log(!true);//false
console.log(false && true);// false
console.log(true && true); // true
console.log(false||true );// false
console.log(true||true );true
console.groupEnd
// if(true){}else if(true){}else{}
// switch (salygosReiksme) {
//   case value(salyga):
    
//     break;

//   default:
//     break;
// }
// salyga ? tiesa : melas;
// salyga ? tiesa : kitaSalyga? tiesa : melas;
// salyga && tiesa;

// Ciklai \\
// for (let iteracija = 0; salygaSuIteracija; iteracija++){
//   //veiksmai\\
// }
// while(tiesa){}
// for( const elementas of masyvas){}
// for (const raktinisZodis in objektas){}
// do {} while(tiesa)

// Funkcijos \\

// function nameofFunction(par1, par2, par3) {
//   // veiksmai su par
// }
// nameOfFunction(arg1, arg2, arg3)

// const arrowFuntion = (par1,par2) => {
//   // veiksmai su par
// }

/// NODE \\\

// selektinimas
// const rastasElementas = document.querySelector('selektorius')
// const rastasElementai = document.querySelectorAll('selektorius')

// eventai
// document.addEventListener('click', e=>{
// })

// Kūrimas

// const divas = document.createElement('div')
// divas.setAttribute('id','idName')
// divas.classList.add('klasesName')
// document.append(divas)

/// Nuskaitymas iš formų \\\

// document.querySelector('formosSelector'isSecureContext)
// .addEventListener('submit', e() => {
//   e.preventDefault()
//   const formosIvestis ={
//   event.target.elements.inputName.value(AsNumber)
//   }
// })

/// Metodai \\\

// masyvas.forEach(masyvoElementas => {
//   console.log(masyvoElementas);
// })

/// Destrūktūrizavimas \\\

// function ageAfter({amzius}){
// //veiksmai 
// return amzius+10
// }
// console.log(fname({ vardas: 'Gintas', pavarde: 'Berzinis', amzius:26}))

/// moduliai\\

// export default funtion vardas (){}
// import vardasKaipNori from "./kazkur.js";
// export { data1, data2, data3}
// import { data1, data2, data3 as smthelse} from "./kazkur.js"

/// klasės \\\

// class KlasesVardas{
//   constructor(props){
//     this.names = names
//     this.props = props
//     return this.render(kazka)
//   }
//   render(){
//     this.names
//   }
// }

/// Data Storage \\\
// duomenų saugojimas domain'e
// document.cookie = ""
// window.sessionStorage.metodas()
// window.sessionStorage.metodas()
// Duomenų saugojimas ataskirame faile - JSON

/          Fetch
//    GET
fetch('URL')
  .then(res => res.json())
  .then(data => {
    // veiksmai su data
  });
//    POST
fetch('URL', {
  method: "POST",
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify(objektas)
})
  .then(res => res.json())
  .then(data => {
    // data yra išsiūstas objektas, kažkaip galbūt pakeistas API, sugrąžintas
  });
//    DELETE
fetch('URL/ID',{
  method: "DELETE"
})
  .then(res => res.json())
  .then(data => {
    // data gali būti kažkoks atsakymas iš serverio ar pavyko ar nepavyko trinti nudorytą įrašą
  })
//    PUT
fetch('URL/ID', {
  method: "PUT",
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify({ rytmetis: false })
})
  .then(res => res.json())
  .then(data => {
    // data gali būti pakitęs duomuo, pagal pateiktą informaciją
    /*
      { 
        rytmetis: false,
        id: 1
      }
    */
  });
//    PATCH
fetch('URL/ID', {
  method: "PATCH",
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify({ rytmetis0: false })
})
  .then(res => res.json())
  .then(data => {
    // data gali būti pakitęs duomuo, pagal pateiktą informaciją
    /*
      { 
        raktinisZodis: 'reikšmė',
        rytmetis: true,
        rytmetis0: false,
        valanda: 9,
        id: 1
      }
    */
  });



  /*
    let data_API_Viduje = { 
      raktinisZodis: 'reikšmė',
      rytmetis: true,
      valanda: 9,
      id: 1
    };
  */