import './styles/main.css';
import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; 

$(document).ready(function() {

    const burgerIcon = `
        <svg width="24" height="24" class="align-middle">
            <use xlink:href="${require('./resources/images/icons-sprite.svg')}#burgermenu"></use>
        </svg>
    `;
    
    $('.menu-icon').prepend(burgerIcon);

    const imgSrc = require('./resources/images/subscr_left.png');
    $('#dynamicImg').attr('src', imgSrc);

   
    const authorizeIcon = `
        <svg width="20" height="16" class="align-middle">
            <use xlink:href="${require('./resources/images/icons-sprite.svg')}#authorize"></use>
        </svg>
    `;
    
    $('.authorization').prepend(authorizeIcon);


    const statueImgSrc = require('./resources/images/Statue.png');
    $('#dynamicStatue').attr('src', statueImgSrc);

    // Установка текущей даты
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    $('#currentDate').text(currentDate);

 
    const weatherIconSrc = `
        <svg width="20" height="16" class="align-middle">
            <use xlink:href="${require('./resources/images/icons-sprite.svg')}#sun"></use>
        </svg>
    `;

    $('.weatherInfo').prepend(weatherIconSrc);

 // Получение данных о погоде для моего города (асинхронная операция с промисами)
 function fetchWeather() {
    const city = 'Yuzhno-Sakhalinsk';
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=46.95&longitude=142.73&current_weather=true&timestamp=${Date.now()}`;

    console.log('Sending request to API...'); // Логирование отправки запроса

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Обработка ошибки сети
            }
            return response.json(); // Преобразование ответа в JSON
        })
        .then(data => {
            const temperature = data.current_weather.temperature; // Извлечение температуры
            $('#temperature').text(`${temperature} °C`); // Обновление на странице
            console.log('Temperature updated:', temperature); // Логирование обновленной температуры
        })
        .catch(error => {
            console.error('Error fetching weather data:', error); // Логирование ошибки
            $('#temperature').text('Error fetching temperature'); // Сообщение об ошибке
        });
}

// Первоначальный вызов функции
fetchWeather();

// Обновление температуры каждые 60 секунд (1 мин)
setInterval(fetchWeather, 60000);
});
