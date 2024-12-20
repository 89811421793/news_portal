import './styles/main.css';
import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; // если будем использовать и JS функциональность Bootstrap

$(document).ready(function() {
   
    $('h1').addClass('text-danger'); 
    $('h2').addClass('text-warning'); 
});
