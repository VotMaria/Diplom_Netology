[Ссылка на сайт](https://votmaria.github.io/Diplom_Netology/client/index.html)

# Дипломное задание по курсу «JavaScript-программирование для начинающих»
## Создание «информационной системы для предварительного бронирования билетов».

## Компоненты системы:

- Верстка
- Backend

## Задача

- Разработать сайт бронирования билетов онлайн

## Сущности

*Кинозал* - помещение, в котором демонстрируются фильмы. Режим работы определяется расписанием на день. 
Зал — прямоугольный, состоит из N*M различных зрительских мест.

*Зрительское место* - место в кинозале. Зрительские места могут быть VIP и обычные.

*Фильм* - информация о фильме заполняется администратором. Фильм связан с сеансом в кинозале.

*Сеанс* - сеанс. Это временной промежуток, в котором в кинозале будет показываться фильм. На сеанс могут быть забронированы билеты.

*Билет* -  QR-код c уникальным кодом бронирования, в котором обязательно указаны место, ряд, сеанс. Билет действителен строго на свой сеанс.

## Роли пользователей системы

- Гость — неавторизованный посетитель сайта
  
### Возможности гостя

- просмотр расписания
- просмотр информации о фильмах
- выбор места в кинозале
- бронирование билета

## Этапы разработки

1. Адаптация исходной верстки под планшетные и мобильные устройства. Верстка корректно отображаться на устройствах с шириной экрана **320px** и более. 
2. Разработка API для взаимодействия с Backend.
3. Программирование гостевой части.

В процессе работы над проектом были использованы HTML, CSS, JavaScript. Внесены необходимые изменения в HTML разметку, в CSS файл, а также полностью написанный с 0 код на JavaScript. 
В начале работы был сформирован запрос, который отправлялся на сервер и получал данные о сеансах, далее данные были распарсены и размещены на странице.
Далее с помощью запроса у сервера получала ответ о зале, который выбрал посетитель с информацией о наличии свободных мест, названии фильма, времени сеанса и номер зала. После выбора посетителем мест, отображалась информация о сеансе: название фильма, время и дата, ряд/место, стоимость билетов. Далее формировался QR-код со всей информацией о забронированных билетах.
Для описания диплома в файле README использовался язык Markdown.
