let parsedSeances = JSON.parse(localStorage.getItem('session'));
 console.log(JSON.parse(localStorage.getItem('session')));

let filmTitle = document.querySelector('.ticket__title');
filmTitle.textContent = parsedSeances.filmName;


let startSeance = document.querySelector('.ticket__start');
startSeance.textContent = parsedSeances.seanceTime;

let infoHall = document.querySelector('.ticket__hall');
infoHall.textContent = parsedSeances.hallName;

let ticketChair = document.querySelector('.ticket__chairs');
let text ='';
//let cost = 0;
let type = '';

for (let key in parsedSeances.selectedPlaces) {
    let row = parsedSeances.selectedPlaces[key].row;
    let place = parsedSeances.selectedPlaces[key].place;  
    type =  parsedSeances.selectedPlaces[key].type; 

   /* if(type === 'standart') {
        cost += Number(parsedSeances.priceStandart);
        console.log(cost);
    } else {
        cost += Number(parsedSeances.priceVip);
    }*/
     text += ` ${row}/${place},`;
}

ticketChair.textContent = text.slice(0, -1);

/*let ticketCost = document.querySelector('.ticket__cost');
console.log(parsedSeances.selectedPlaces);
ticketCost.textContent = cost;*/