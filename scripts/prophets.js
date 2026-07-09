const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets); // temporary testing of data response
  displayProphets(data.prophets);
    console.log("yes");
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p')
        let portrait = document.createElement("img");

        
        fullName.textContent = ` ${prophet.name} ${prophet.lastname}`;
        birthDate.innerHTML = `Date of birth: ${prophet.birthdate}`;
        birthPlace.innerHTML = `Place of birth: ${prophet.birthplace}`;
       
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300')
        portrait.setAttribute('height', 'auto')

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        

        cards.appendChild(card);
        //document.querySelector("#cards").appendChild(card);
    });
}

    


