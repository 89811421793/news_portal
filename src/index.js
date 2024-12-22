import './styles/main.css';
import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; 

$(document).ready(function() {

    
    const burgerIcon = `
     <span class="me-2 align-center">
        <svg width="24" height="24" class="align-middle">
            <use xlink:href="${require('./resources/images/icons-sprite.svg')}#burgermenu"></use>
        </svg>
    </span>
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

});
