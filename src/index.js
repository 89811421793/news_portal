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


const articlesData = [
    {
        title: "25 Songs That Tell Us Where Music Is Going",
        imgSrc: require('./resources/images/guitar.png'),
        url: "#"
    },
    {
        title: "These Ancient Assassins Eat Their Own Kind",
        imgSrc: require('./resources/images/butterfly.png'),
        url: "#"
    },
    {
        title: "How Do You Teach People to Love Difficult Music?",
        imgSrc: require('./resources/images/blackman.png'),
        url: "#"
    },
    {
        title: "International Soccer’s Man of Mystery",
        imgSrc: require('./resources/images/track.png'),
        url: "#"
    }
];


const recommendationsData = [
    { category: "FOOD", description: "For Chicken-Fried Steak, Too Much Is Just Enough", url: "#" },
    { category: "CARS", description: "Storm Has Car Dealers Doing Swift Business", url: "#" },
    { category: "MOVIES", description: "War Is Hell? In New Military Dramas, It’s One-Dimensional", url: "#" },
    { category: "NFL", description: "11 surprising stat rankings for active NFL players", url: "#" },
    { category: "TECH REVIEWS", description: "The bookcases you can buy online and assemble yourself", url: "#" }
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

Handlebars.registerHelper('borderColor', function(title) {
    switch (title) {
        case 'News':
            return 'border-success';
        case 'Arts':
            return 'border-brown'; 
        case 'Travel':
            return 'border-primary'; 
        case 'Sports':
            return 'border-olive'; 
        case 'Tech':
            return 'border-purple'; 
        case 'Moneys':
            return 'border-gold'; 
        default:
            return; 
    }
});


Handlebars.registerHelper('getColor', function(category) {
    switch (category) {
        case 'FOOD':
            return '#3BBDC4';
        case 'CARS':
            return '#6E99AE';
        case 'MOVIES':
            return '#AC8EE3';
        case 'NFL':
            return '#FFA34D';
        case 'TECH REVIEWS':
            return '#3DC47E';
            default:
                return; 
    }
});

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


const articleTemplate = `
    <a href="{{url}}" class="article-item col-3 d-flex align-items-start position-relative text-decoration-none pe-3">
        <span class="text-white" style="max-width:154px">{{title}}</span>
        <img src="{{imgSrc}}" alt="" class="ms-4" />
    </a>
`;


const recommendationTemplate = `
    <div class="p-3 border-top border-bottom" style="border-color: #D9DADB;">
        <h4>
            <a href="{{url}}" class="text-decoration-none" style="font-size:12px; color:{{getColor category}}">{{category}}</a>
        </h4>
        <p style='max-width:213px'>
            <a href='{{url}}' class="text-decoration-none desc-rec">{{description}}</a>
        </p>
    </div>
`;


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


const navCompiledTemplate = Handlebars.compile(navTemplate);
const navHTML = navCompiledTemplate(navData);
$('#nav').prepend(navHTML); 


const compiledRecommendationTemplate = Handlebars.compile(recommendationTemplate);
const recommendationsHTML = recommendationsData.map(rec => compiledRecommendationTemplate(rec)).join('');
$('#rightside').append(recommendationsHTML);


const categoryTemplate = Handlebars.compile(footerTemplate);
const footerHTML = categoryTemplate(newsCategoryData);
$('#categories').append(footerHTML);


const footerLinksCompiledTemplate = Handlebars.compile(footerLinksTemplate);
const footerLinksHTML = footerLinksCompiledTemplate(footerLinksData);
const logoImgSrc = require('./resources/images/logo_unv.png');
$('#unv').append(`<img src="${logoImgSrc}" alt="Logo" class="me-3"/>`);
$('#unv').append(footerLinksHTML);


const compiledArticleTemplate = Handlebars.compile(articleTemplate);
const articlesHTML = articlesData.map(article => compiledArticleTemplate(article)).join('');
$('#herorow').append(articlesHTML);


$(document).ready(function() {

    const burgerIcon = `
        <svg width="25" height="15" class="align-middle" style='cursor:pointer'>
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

  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    $('#currentDate').text(currentDate);

 
    const weatherIconSrc = `
        <svg width="20" height="16" class="align-middle">
            <use xlink:href="${require('./resources/images/icons-sprite.svg')}#sun"></use>
        </svg>
    `;

    $('.weatherInfo').prepend(weatherIconSrc);

   
    const arrowWhiteIcon = `
    <svg width="15" height="7">
        <use xlink:href="${require('./resources/images/icons-sprite.svg')}#arrowhite"></use>
    </svg>
    `;

    $('#readmore').append(arrowWhiteIcon);

    const avatarBenjImgSrc = require('./resources/images/Benjamin_avatar.png');
    $('#benjamin').attr('src', avatarBenjImgSrc);


    const avatarSarahImgSrc = require('./resources/images/Sarah_avatar.png');
    $('#sarah').attr('src', avatarSarahImgSrc);


    const playImgSrc = require('./resources/images/playwhite.png');
    const pauseImgSrc = require('./resources/images/pause.png');
    let playInterval;
    let isPlaying = false;
    let duration = 1080; // Примерная длительность в секундах (18 минут)

    $('.playbtn img').attr('src', playImgSrc);

    $('.playbtn').on('click', function() {
        if (isPlaying) {
            clearInterval(playInterval);
            $(this).find('img').attr('src', playImgSrc); // Изменяем на иконку "Play"
            isPlaying = false;
            $('#currentTime').text('00:00'); // Сброс времени
        } else {
            let currentTime = 0;
            $(this).find('img').attr('src', pauseImgSrc); // Изменяем на иконку "Pause"
            isPlaying = true;

            playInterval = setInterval(function() {
                if (currentTime < duration) {
                    currentTime++;
                    $('#currentTime').text(formatTime(currentTime));
                } else {
                    clearInterval(playInterval);
                    isPlaying = false;
                    $('.playbtn').find('img').attr('src', playImgSrc); // Возвращаем на иконку "Play"
                }
            }, 1000);
        }
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }


 function fetchWeather() {
    const city = 'Yuzhno-Sakhalinsk';
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=46.95&longitude=142.73&current_weather=true&timestamp=${Date.now()}`;

    console.log('Sending request to API...'); 

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'); 
            }
            return response.json(); 
        })
        .then(data => {
            const temperature = data.current_weather.temperature; 
            $('#temperature').text(`${temperature} °C`); 
            console.log('Temperature updated:', temperature); 
        })
        .catch(error => {
            console.error('Error fetching weather data:', error); 
            $('#temperature').text('Error fetching temperature'); 
        });
}

fetchWeather();

setInterval(fetchWeather, 60000);


    const guitarImgSrc = require('./resources/images/guitar.png'); 
    $('#guitarImage').attr('src', guitarImgSrc);

    const butterflyImgSrc = require('./resources/images/butterfly.png'); 
    $('#butterflyImage').attr('src', butterflyImgSrc);

    const blackmanImgSrc = require('./resources/images/blackman.png'); 
    $('#blackmanImage').attr('src', blackmanImgSrc);

    const trackImgSrc = require('./resources/images/track.png'); 
    $('#trackImage').attr('src', trackImgSrc);


    const carImgSrc = require('./resources/images/car.png'); 
    $('#carImage').attr('src', carImgSrc);


    const catImgSrc = require('./resources/images/cat_sphynx.png'); 
    $('#catImage').attr('src', catImgSrc);



    const commentIcon = `
        <svg width="14" height="14">
            <use xlink:href="${require('./resources/images/icons-sprite.svg')}#comment"></use>
        </svg>
    `;
    
    $('#comment').prepend(commentIcon);

});