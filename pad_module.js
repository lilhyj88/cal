System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Pad_string(x, y) {
        var pad_string;
        if (y == undefined) {
            pad_string = String(x);
        }
        else {
            pad_string = String(x) + String(y);
        }
        return pad_string;
    }
    exports_1("Pad_string", Pad_string);
    function Pad_number(x, y) {
        var pad_number;
        var pad_string;
        if (y == undefined) {
            pad_string = String(x);
        }
        else {
            pad_string = String(x) + String(y);
        }
        pad_number = Number(pad_string);
        return pad_number;
    }
    exports_1("Pad_number", Pad_number);
    function value_save(x) {
        var value = document.getElementById("view");
        if (typeof x === 'number') {
            if (first_input_try) {
                /* 처음숫자입력 */
                number = Pad_number(x, undefined);
                first_input_try = false;
            }
            else {
                number = Pad_number(number, x);
            }
        }
        else if (x == '=') {
            /* 해당 특수문자 이전의 특수문자를 계산함 */
            var result = void 0;
            if (real_cal_list[1] == '+') {
                result = real_cal_list[0] + number;
            }
            else if (real_cal_list[1] == '-') {
                result = real_cal_list[0] - number;
            }
            else if (real_cal_list[1] == '*') {
                result = real_cal_list[0] * number;
            }
            else if (real_cal_list[1] == '/') {
                result = real_cal_list[0] / number;
            }
            value.value = String(result);
        }
        else if (x == 'AC') {
            value.value = null;
            number = 0;
            first_input_try = true;
            first_cal_try = true;
        }
        else {
            var result = void 0;
            if (real_cal_list[1] == '+') {
                result = real_cal_list[0] + number;
                real_cal_list[0] = result;
                real_cal_list[1] = x;
                first_input_try = true;
            }
            else if (real_cal_list[1] == '-') {
                result = real_cal_list[0] - number;
                real_cal_list[0] = result;
                real_cal_list[1] = x;
                first_input_try = true;
            }
            else if (real_cal_list[1] == '*') {
                result = real_cal_list[0] * number;
                real_cal_list[0] = result;
                real_cal_list[1] = x;
                first_input_try = true;
            }
            else if (real_cal_list[1] == '/') {
                result = real_cal_list[0] / number;
                real_cal_list[0] = result;
                real_cal_list[1] = x;
                first_input_try = true;
            }
            if (first_cal_try) {
                real_cal_list[0] = number;
                real_cal_list[1] = x;
                first_cal_try = false;
                first_input_try = true;
            }
            else {
                real_cal_list[1] = x;
            }
        }
        if (x != '=' && x != "AC") {
            value.value = Pad_string(value.value, x);
        }
    }
    exports_1("value_save", value_save);
    var number, first_input_try, first_cal_try, real_cal_list;
    return {
        setters: [],
        execute: function () {
            number = 0;
            first_input_try = true;
            first_cal_try = true;
            // num1 + num2 sum
            real_cal_list = [];
        }
    };
});
