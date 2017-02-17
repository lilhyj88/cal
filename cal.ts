import {Pad_string} from './pad_module';
import {Pad_number} from './pad_module';
import {value_save} from './pad_module';

let a:number;
let b:string;
var btn_div = document.querySelector("#button_div");
var btn_mul = document.querySelector("#button_mul");
var btn_add = document.querySelector("#button_add");
var btn_minus = document.querySelector("#button_min");
var btn_result = document.querySelector("#button_result");
var btn_ac = document.querySelector("#button_AC");
var btn_0 = document.querySelector("#button_0");
var btn_1 = document.querySelector("#button_1");
var btn_2 = document.querySelector("#button_2");
var btn_3 = document.querySelector("#button_3");
var btn_4 = document.querySelector("#button_4");
var btn_5 = document.querySelector("#button_5");
var btn_6 = document.querySelector("#button_6");
var btn_7 = document.querySelector("#button_7");
var btn_8 = document.querySelector("#button_8");
var btn_9 = document.querySelector("#button_9");

btn_add.addEventListener("click", function onclick(event) {
    b = "+";
    value_save(b);
});
btn_minus.addEventListener("click", function onclick(event) {
    b = "-";
    value_save(b);
});
btn_mul.addEventListener("click", function onclick(event) {
    b = "*";
    value_save(b);
});
btn_mul.addEventListener("click", function onclick(event) {
    b = "/";
    value_save(b);
});
btn_result.addEventListener("click", function onclick(event) {
    b = "=";
    value_save(b);
});
btn_ac.addEventListener("click", function onclick(event) {
    b = "AC";
    value_save(b);
});
btn_0.addEventListener("click", function onclick(event) {
    a = 0;
    value_save(a);
});
btn_1.addEventListener("click", function onclick(event) {
    a = 1;
    value_save(a);
});
btn_2.addEventListener("click", function onclick(event) {
    a = 2;
    value_save(a);
});
btn_3.addEventListener("click", function onclick(event) {
    a = 3;
    value_save(a);
});
btn_4.addEventListener("click", function onclick(event) {
    a = 4;
    value_save(a);
});
btn_5.addEventListener("click", function onclick(event) {
    a = 5;
    value_save(a);
});
btn_6.addEventListener("click", function onclick(event) {
    a = 6;
    value_save(a);
});
btn_7.addEventListener("click", function onclick(event) {
    a = 7;
    value_save(a);
});
btn_8.addEventListener("click", function onclick(event) {
    a = 8;
    value_save(a);
});
btn_9.addEventListener("click", function onclick(event) {
    a = 9;
    value_save(a);
});
