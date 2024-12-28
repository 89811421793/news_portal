import './styles/main.css';
import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; 
import Handlebars from 'handlebars';


const navData = [
    { name: "News", url: "#" },
    { name: "Opinion", url: "#" },
    { name: "Science", url: "#" },
    { name: "Life", url: "#" },
    { name: "Travel", url: "#" },
    { name: "Money", url: "#" },
    { name: "Art & Design", url: "#" },
    { name: "Sports", url: "#" },
    { name: "People", url: "#" },
    { name: "Health", url: "#" },
    { name: "Education", url: "#" }
];


const newsCategoryData = [
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


const footerLinksData = [
    { name: "Contact Us", url: "#" },
    { name: "Work with Us", url: "#" },
    { name: "Advertise", url: "#" },
    { name: "Your Ad Choice", url: "#" }
];


const socialLinks = [
    { name: 'Facebook', id: 'facebook', url: '#' },
    { name: 'Twitter', id: 'twitter', url: '#' },
    { name: 'YouTube', id: 'youtube', url: '#' },
    { name: 'Instagram', id: 'instagram', url: '#' }
];


socialLinks.forEach(link => {
    const iconSrc = require('./resources/images/icons-sprite.svg');
    const socialIcon = `
        <a href="${link.url}" class="text-dark mx-2">
            <svg width="40" height="40" class="align-middle">
                <use xlink:href="${iconSrc}#${link.id}"></use>
            </svg>
        </a>
    `;
    $('#socials').append(socialIcon);
});

//Шаблон для навигационного меню
const navTemplate = `
    <div class="navblock text-white py-3">
        <nav class="container">
            <ul class="d-flex justify-content-between list-unstyled mb-0">
                {{#each this}}
                <li><a href="{{url}}" class="text-white text-uppercase text-decoration-none">{{name}}</a></li>
                {{/each}}
            </ul>
        </nav>
    </div>
`;

Handlebars.registerHelper('borderColor', function(title) {
    switch (title) {
        case 'News':
            return 'border-success'; // Зеленый
        case 'Arts':
            return 'border-brown'; // Коричневый
        case 'Travel':
            return 'border-primary'; // Синий
        case 'Sports':
            return 'border-olive'; // Оливковый
        case 'Tech':
            return 'border-purple'; // Фиолетовый
        case 'Moneys':
            return 'border-gold'; // Золотой
        default:
            return; 
    }
});


// Шаблон для рубрик/категорий
const footerTemplate = `
 
    <div class="d-flex mt-5">
       {{#each this}}
        <div class="col-2 d-flex flex-column  {{borderColor title}} pt-4 text-start" style="min-width:195px">
            <strong class="mb-4">{{title}}</strong>
            {{#each links}}
            <a href="{{url}}" class="text-black text-decoration-none mb-3">{{name}}</a>
            {{/each}}
        </div>
        {{/each}}
    </div>
    
`;


const footerLinksTemplate = `
    <div class="d-flex align-items-center text-uppercase me-3 fw-bold">
        {{#each this}}
            <a href="{{url}}" class="text-dark text-decoration-none mx-3">{{name}}</a>
        {{/each}}
    </div>
`;

// Компиляция шаблона
const navCompiledTemplate = Handlebars.compile(navTemplate);

// Генерация HTML и добавление в документ
const navHTML = navCompiledTemplate(navData);
$('#nav').prepend(navHTML); 



// Компиляция шаблона
const categoryTemplate = Handlebars.compile(footerTemplate);

// Генерация HTML и добавление в документ
const footerHTML = categoryTemplate(newsCategoryData);
$('#categories').append(footerHTML);


const footerLinksCompiledTemplate = Handlebars.compile(footerLinksTemplate);
const footerLinksHTML = footerLinksCompiledTemplate(footerLinksData);

const logoImgSrc = require('./resources/images/logo_unv.png');
$('#unv').append(`<img src="${logoImgSrc}" alt="Logo" class="me-3"/>`);

$('#unv').append(footerLinksHTML);




$(document).ready(function() {

    const burgerIcon = `
        <svg width="25" height="15" class="align-middle">
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


    const guitarImgSrc = require('./resources/images/guitar.png'); 
    $('#guitarImage').attr('src', guitarImgSrc);

    const butterflyImgSrc = require('./resources/images/butterfly.png'); 
    $('#butterflyImage').attr('src', butterflyImgSrc);

    const blackmanImgSrc = require('./resources/images/blackman.png'); 
    $('#blackmanImage').attr('src', blackmanImgSrc);

    const trackImgSrc = require('./resources/images/track.png'); 
    $('#trackImage').attr('src', trackImgSrc);


});