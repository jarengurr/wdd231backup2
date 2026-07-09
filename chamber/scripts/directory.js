// date on footer
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
//alert(document.lastModified);
// returns: Tuesday, December 16, 2017 11:09:42
//let oLastModif = new Date(document.lastModified)

let lmDate = document.lastModified
document.getElementById("lastModified").innerHTML = lmDate;

// menu
const navButton = document.querySelector("#menu1");
const navBar = document.querySelector("#nav-list");

navButton.addEventListener("click", () => {
 
  navBar.classList.toggle("show");
  navButton.classList.toggle("show");
});



// members list in json
const bfile = '/chamber/data/members.json';
const cards = document.querySelector('#cards');
const list = document.querySelector('#alist')

async function getBusinessData() {
    const response = await fetch(bfile);
   //const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // request
  const data = await response.json();
  //console.table(data.members); // temporary testing of data response
    displayMembers(data.members);
    
    console.log("yes");
}

getBusinessData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h3");
        let address = document.createElement('p');
        let phone = document.createElement('p')
        let website = document.createElement('p');
        let level = document.createElement('p')
        let image = document.createElement("img");

        
        companyName.textContent = ` ${member.companyName}`;
        address.innerHTML = ` ${member.address}`;
        phone.innerHTML = `${member.phone}`;
        website.innerHTML = `${member.website}`;
        level.innerHTML = `Membership Level is: ${member.membershipLevel}`;
       
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.companyName}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '50')
        image.setAttribute('height', 'auto')

        card.appendChild(image);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);
        

        cards.appendChild(card);
        //document.querySelector("#cards").appendChild(card);
    });
}



// picture and no picture list
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
