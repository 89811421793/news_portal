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
});

