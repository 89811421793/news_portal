import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; // если будем использовать и JS функциональность Bootstrap

$(document).ready(function() {
    alert('Hello'); 
    $('h1').addClass('text-danger'); 
    $('h2').attr('style', 'color: red;');
    $('h3').css('color', 'crimson'); 
});
