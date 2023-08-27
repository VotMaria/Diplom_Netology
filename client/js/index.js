document.addEventListener('DOMContentLoaded', () => {
  let dayToday = document.querySelector('.page-nav__day_today')
  let dayWeek = document.querySelectorAll('.page-nav__day-week');
  let dayNumber = document.querySelectorAll('.page-nav__day-number');
  let navDay = document.querySelectorAll('.page-nav__day');

  

  let today = new Date().getTime();

  for (let i = 0; i < navDay.length; i++) {
    let actuallyDate = new Date(today + 24 * 60 * 60 * 1000 * i);
    dayWeek[i].textContent = getDay(actuallyDate); 
    dayNumber[i].textContent = actuallyDate.getDate(); 

    if(getDay(actuallyDate) === "Вс" || getDay(actuallyDate) === "Сб"){
      
      dayWeek[i].classList.add('page-nav__day_weekend');
      dayNumber[i].classList.add('page-nav__day_weekend');
      
    } else {
      for (let element of navDay) {
      element.closest('.page-nav__day').classList.remove('page-nav__day_weekend');
      }
    }
  }  
      
  function getDay(actuallyDate) {
    let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    return days[actuallyDate.getDay()];
  }


  
  let dayChosen = document.querySelector('.page-nav__day_chosen');
  dayChosen.classList.remove('page-nav__day_chosen');
  dayToday.classList.add('page-nav__day_chosen');
  
  navDay.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    
    for (let element of navDay){
      element.classList.remove('page-nav__day_chosen');
    }     
  
      navDay[index].classList.add('page-nav__day_chosen');
  
      e.preventDefault(); 
    })
  })



  createRequest('event=update', function(data) {
    console.log(data);
    let films = data.films.result;
    let halls = data.halls.result;
    let seances = data.seances.result;

    let output = '';
    let outputSeances = '';
        
  for (let film of films) {
    let outputHalls = '';

    

     for(let hall of halls) {
      let hallOpen = hall.hall_open;
      if (hallOpen === '1') {
        
      

        for (let seance of seances) {
        actuallySeances = seance.seance_time;  
        if ((seance.seance_filmid === film.film_id) && (seance.seance_hallid === hall.hall_id)){
          outputHalls += `<div class="movie-seances__hall">
                        <h3 class="movie-seances__hall-title">${hall.hall_name}</h3>
                        <ul class="movie-seances__list">
                        <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">${actuallySeances}</a></li>
                          </ul>
                           </div>`
           
         }
        }
      }  
    }  
    output += `<section class="movie">
                 <div class="movie__info">
                   <div class="movie__poster">
                     <img class="movie__poster-image" alt='${film.film_name}' src='${film.film_poster}'>
                   </div>
                   <div class="movie__description">
                   <h2 class="movie__title">${film.film_name}</h2>
                   <p class="movie__synopsis">${film.film_description}.</p>
                   <p class="movie__data">
                     <span class="movie__data-duration">${film.film_duration} минут</span>
                     <span class="movie__data-origin">${film.film_origin}</span>
                    </p>
                   </div>
                </div>
     ${outputHalls}
    </section>` 
  }

     
  document.querySelector('main').innerHTML = output; 
  

  }) 
})  
  
  