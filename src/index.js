import './styles/main.css';
import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; 
import Handlebars from 'handlebars';

// Данные для футера
const footerData = [
    {
        title: "News",
        links: [
            { name: "Nation", url: "#" },
            { name: "World", url: "#" },
            { name: "Politics", url: "#" },
            { name: "Solar Eclipse", url: "#" }
        ]
    },
    {
        title: "Arts",
        links: [
            { name: "Art & Design", url: "#" },
            { name: "Movies", url: "#" },
            { name: "People", url: "#" },
            { name: "Video: Arts", url: "#" },
            { name: "Theater", url: "#" }
        ]
    },
    {
        title: "Travel",
        links: [
            { name: "Destinations", url: "#" },
            { name: "Flights", url: "#" },
            { name: "Business Travel", url: "#" }
        ]
    },
    {
        title: "Sports",
        links: [
            { name: "Olympics", url: "#" },
            { name: "Motor Sports", url: "#" },
            { name: "Volleyball", url: "#" },
            { name: "MMA", url: "#" },
            { name: "Cycling", url: "#" }
        ]
    },
    {
        title: "Tech",
        links: [
            { name: "Tech", url: "#" },
            { name: "Tech Columnists", url: "#" },
            { name: "Tech Reviews", url: "#" },
            { name: "Talking Tech", url: "#" }
        ]
    },
    {
        title: "Moneys",
        links: [
            { name: "Markets", url: "#" },
            { name: "Business", url: "#" },
            { name: "Personal Finance", url: "#" },
            { name: "Retirement", url: "#" },
            { name: "Careers", url: "#" }
        ]
    }
];

// Шаблон Handlebars для футера
const footerTemplate = `
    <div class="d-flex mt-3">
        {{#each this}}
        <div class="col-2 d-flex flex-column border-top border-danger pt-4 text-start" style="min-width:195px;">
            <strong class="mb-4">{{title}}</strong>
            {{#each links}}
            <a href="{{url}}" class="text-black text-decoration-none mb-3">{{name}}</a>
            {{/each}}
        </div>
        {{/each}}
    </div>
`;

// Компиляция шаблона
const template = Handlebars.compile(footerTemplate);

// Генерация HTML и добавление в документ
const footerHTML = template(footerData);
$('#here').append(footerHTML);

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