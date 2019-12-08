// const add = function (a,b) {
//     return a + b;
//
// }
// const subtract = function (a,b) {
//     return a - b;
//
// }
// const multiply = function (a,b) {
//     return a * b;
//
// }
// const divide = function (a,b) {
//     return a / b;
//
// }
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;
//
//
// console.log(add(10,5));
// console.log(subtract(10,5));
// console.log(multiply(10,5));
// console.log(divide(10,5));

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '../css/app.css';
// import '../scss/style.scss';
import '../css/fontawesome-all.css';
import 'animate.css';
import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2/dist/js/lightbox-plus-jquery.js'
import WOW from 'wow.js';
import {add, subtract, multiply, divide} from "./module/script";


console.log(add(10,5));
console.log(subtract(10,5));
console.log(multiply(10,5));
console.log(divide(10,5));


import {wow} from "./module/wowAnimate.js";

wow.init();