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
    let outputHalls = '';
    let movieTitle = '';
    let duration = '';
    let description = '';
    let origin = '';
    let poster = '';
    let seanceTime = '';
    /*let actuallySeances = '';*/
    let actuallyHall = '';

  
for(let key in halls) {
    let hallTitle = halls[key].hall_name;
    let hallOpen = halls[key].hall_open;
        
    if (hallOpen === '1') {
      outputHalls +=   `<div class="movie-seances__hall">
                        <h3 class="movie-seances__hall-title">${hallTitle}</h3>
                          <ul class="movie-seances__list">
                            <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html"></a></li>
                            <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html"></a></li>
                            <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html"></a></li>
                            <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html"></a></li>
                          </ul>
                        </div>`
    }
  } 

  for (let key in films) {
    movieTitle = films[key].film_name;
    duration = films[key].film_duration;
    description = films[key].film_description;
    origin = films[key].film_origin;
    poster = films[key].film_poster;

    output += `<section class="movie">
                 <div class="movie__info">
                   <div class="movie__poster">
                     <img class="movie__poster-image" alt='${movieTitle}' src='${poster}'>
                   </div>
                   <div class="movie__description">
                     <h2 class="movie__title">${movieTitle}</h2>
                     <p class="movie__synopsis">${description}.</p>
                     <p class="movie__data">
                       <span class="movie__data-duration">${duration} минут</span>
                       <span class="movie__data-origin">${origin}</span>
                      </p>
                    </div>
                  </div>
                  ${outputHalls}
               </section>`          
  }

    
  document.querySelector('main').innerHTML = output; 
  

  }) 
})  
  
  