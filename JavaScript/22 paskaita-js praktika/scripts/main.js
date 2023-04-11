import M from "./Members.js"
fetch('http://localhost:3000/Straw_hats')
.then(res => res.json())
.then(members => { 
  console.log(members)
  const allCrew = document.querySelector('#allCrew');
  members.forEach(straws => {
    const membersNewDiv = new M(straws); 
    allCrew.appendChild(membersNewDiv);
  });
});
