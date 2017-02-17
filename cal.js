System.register(["./pad_module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pad_module_1, a, b, btn_div, btn_mul, btn_add, btn_minus, btn_result, btn_ac, btn_0, btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9;
    return {
        setters: [
            function (pad_module_1_1) {
                pad_module_1 = pad_module_1_1;
            }
        ],
        execute: function () {
            btn_div = document.querySelector("#button_div");
            btn_mul = document.querySelector("#button_mul");
            btn_add = document.querySelector("#button_add");
            btn_minus = document.querySelector("#button_min");
            btn_result = document.querySelector("#button_result");
            btn_ac = document.querySelector("#button_AC");
            btn_0 = document.querySelector("#button_0");
            btn_1 = document.querySelector("#button_1");
            btn_2 = document.querySelector("#button_2");
            btn_3 = document.querySelector("#button_3");
            btn_4 = document.querySelector("#button_4");
            btn_5 = document.querySelector("#button_5");
            btn_6 = document.querySelector("#button_6");
            btn_7 = document.querySelector("#button_7");
            btn_8 = document.querySelector("#button_8");
            btn_9 = document.querySelector("#button_9");
            btn_add.addEventListener("click", function onclick(event) {
                b = "+";
                pad_module_1.value_save(b);
            });
            btn_minus.addEventListener("click", function onclick(event) {
                b = "-";
                pad_module_1.value_save(b);
            });
            btn_mul.addEventListener("click", function onclick(event) {
                b = "*";
                pad_module_1.value_save(b);
            });
            btn_mul.addEventListener("click", function onclick(event) {
                b = "/";
                pad_module_1.value_save(b);
            });
            btn_result.addEventListener("click", function onclick(event) {
                b = "=";
                pad_module_1.value_save(b);
            });
            btn_ac.addEventListener("click", function onclick(event) {
                b = "AC";
                pad_module_1.value_save(b);
            });
            btn_0.addEventListener("click", function onclick(event) {
                a = 0;
                pad_module_1.value_save(a);
            });
            btn_1.addEventListener("click", function onclick(event) {
                a = 1;
                pad_module_1.value_save(a);
            });
            btn_2.addEventListener("click", function onclick(event) {
                a = 2;
                pad_module_1.value_save(a);
            });
            btn_3.addEventListener("click", function onclick(event) {
                a = 3;
                pad_module_1.value_save(a);
            });
            btn_4.addEventListener("click", function onclick(event) {
                a = 4;
                pad_module_1.value_save(a);
            });
            btn_5.addEventListener("click", function onclick(event) {
                a = 5;
                pad_module_1.value_save(a);
            });
            btn_6.addEventListener("click", function onclick(event) {
                a = 6;
                pad_module_1.value_save(a);
            });
            btn_7.addEventListener("click", function onclick(event) {
                a = 7;
                pad_module_1.value_save(a);
            });
            btn_8.addEventListener("click", function onclick(event) {
                a = 8;
                pad_module_1.value_save(a);
            });
            btn_9.addEventListener("click", function onclick(event) {
                a = 9;
                pad_module_1.value_save(a);
            });
            // function value_save(x: number | string) {
            //    let value = <HTMLInputElement>document.getElementById("view");
            //    if(typeof x === 'number') {
            //        if(first_input_try) {
            //            /* 처음숫자입력 */
            //            number = Pad_number(x, undefined);
            //            first_input_try = false;
            //        } else {
            //            number = Pad_number(number, x);
            //        }
            //    } else if(x == '=') {
            //        /* 해당 특수문자 이전의 특수문자를 계산함 */
            //        let result:number;
            //         if(real_cal_list[1] == '+') {
            //             result = <number>real_cal_list[0] + number;
            //         } else if(real_cal_list[1] == '-') {
            //             result = <number>real_cal_list[0] - number;          
            //         } else if(real_cal_list[1] == '*') {
            //             result = <number>real_cal_list[0] * number;
            //         } else if(real_cal_list[1] == '/') {
            //             result = <number>real_cal_list[0] / number;
            //         } 
            //         value.value = String(result);
            //    } else if(x == 'AC') {
            //        value.value = null;
            //        number = 0;
            //        first_input_try = true;
            //        first_cal_try = true;
            //    } else { /*문자*/
            //        let result:number;
            //        if(real_cal_list[1] == '+') {
            //            result = <number>real_cal_list[0] + number;
            //            real_cal_list[0] = result;
            //            real_cal_list[1] = x;
            //            first_input_try = true; 
            //        } else if(real_cal_list[1] == '-') {
            //            result = <number>real_cal_list[0] - number;
            //            real_cal_list[0] = result;
            //            real_cal_list[1] = x;
            //            first_input_try = true;
            //        } else if(real_cal_list[1] == '*') {
            //            result = <number>real_cal_list[0] * number;
            //            real_cal_list[0] = result;
            //            real_cal_list[1] = x;
            //            first_input_try = true;
            //        } else if(real_cal_list[1] == '/') {
            //            result = <number>real_cal_list[0] / number;
            //            real_cal_list[0] = result;
            //            real_cal_list[1] = x;
            //            first_input_try = true;
            //         }
            //        if(first_cal_try) {
            //            real_cal_list[0] = number;
            //            real_cal_list[1] = x;
            //            first_cal_try = false;
            //            first_input_try = true;
            //        } else {
            //            real_cal_list[1] = x;
            //        }
            //    }
            //    if(x != '=' && x != "AC") { 
            //        value.value = Pad_string(value.value, x);    
            //    }
            // }
        }
    };
});
// function value_save(x: number | string) {
//    let value = <HTMLInputElement>document.getElementById("view");
//    if(typeof x === 'number') {
//        if(first_input_try) {
//            /* 처음숫자입력 */
//            number = Pad_number(x, undefined);
//            first_input_try = false;
//        } else {
//            number = Pad_number(number, x);
//        }
//    } else if(x == '=') {
//        /* 해당 특수문자 이전의 특수문자를 계산함 */
//        let result:number;
//         if(real_cal_list[1] == '+') {
//             result = <number>real_cal_list[0] + number;
//         } else if(real_cal_list[1] == '-') {
//             result = <number>real_cal_list[0] - number;          
//         } else if(real_cal_list[1] == '*') {
//             result = <number>real_cal_list[0] * number;
//         } else if(real_cal_list[1] == '/') {
//             result = <number>real_cal_list[0] / number;
//         } 
//         value.value = String(result);
//    } else if(x == 'AC') {
//        value.value = null;
//        number = 0;
//        first_input_try = true;
//        first_cal_try = true;
//    } else { /*문자*/
//        let result:number;
//        if(real_cal_list[1] == '+') {
//            result = <number>real_cal_list[0] + number;
//            real_cal_list[0] = result;
//            real_cal_list[1] = x;
//            first_input_try = true; 
//        } else if(real_cal_list[1] == '-') {
//            result = <number>real_cal_list[0] - number;
//            real_cal_list[0] = result;
//            real_cal_list[1] = x;
//            first_input_try = true;
//        } else if(real_cal_list[1] == '*') {
//            result = <number>real_cal_list[0] * number;
//            real_cal_list[0] = result;
//            real_cal_list[1] = x;
//            first_input_try = true;
//        } else if(real_cal_list[1] == '/') {
//            result = <number>real_cal_list[0] / number;
//            real_cal_list[0] = result;
//            real_cal_list[1] = x;
//            first_input_try = true;
//         }
//        if(first_cal_try) {
//            real_cal_list[0] = number;
//            real_cal_list[1] = x;
//            first_cal_try = false;
//            first_input_try = true;
//        } else {
//            real_cal_list[1] = x;
//        }
//    }
//    if(x != '=' && x != "AC") { 
//        value.value = Pad_string(value.value, x);    
//    }
// }
