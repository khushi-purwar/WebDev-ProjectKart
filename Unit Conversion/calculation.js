/*------------------------- length -------------------------*/
function lengthConversion() {
    var no = document.getElementById('from-length').value;
    var f_unit = document.getElementById('from-unit-length').value;
    var t_unit = document.getElementById('to-unit-length').value;

    var multiplicant;
    if (f_unit == 'mm') {
        multiplicant = 1;
    }
    else if (f_unit == 'cm') {
        multiplicant = 10;
    }
    else if (f_unit == 'm') {
        multiplicant = 1000;
    }
    else if (f_unit == 'km') {
        multiplicant = 1000000;
    }
    else if (f_unit == 'inch') {
        multiplicant = 25.4;
    }
    else if (f_unit == 'feet') {
        multiplicant = 304.8;
    }
    else if (f_unit == 'mile') {
        multiplicant = 1609344;
    }


    var divisor;
    if (t_unit == 'mm') {
        divisor = 1;
    }
    else if (t_unit == 'cm') {
        divisor = 10;
    }
    else if (t_unit == 'm') {
        divisor = 1000;
    }
    else if (t_unit == 'km') {
        divisor = 1000000;
    }
    else if (t_unit == 'inch') {
        divisor = 25.4;
    }
    else if (t_unit == 'feet') {
        divisor = 304.8;
    }
    else if (t_unit == 'mile') {
        divisor = 1609344;
    }

    var answer = no * multiplicant / divisor;

    document.getElementById('to-length').value = answer;
}


/*------------------------- area -------------------------*/
function areaConversion() {
    var no = document.getElementById('from-area').value;
    var f_unit = document.getElementById('from-unit-area').value;
    var t_unit = document.getElementById('to-unit-area').value;

    var multiplicant;
    if (f_unit == 'cmsq') {
        multiplicant = 100;
    }
    else if (f_unit == 'msq') {
        multiplicant = 1000000;
    }
    else if (f_unit == 'kmsq') {
        multiplicant = 1e+12;
    }
    else if (f_unit == 'inchsq') {
        multiplicant = 645.16;
    }
    else if (f_unit == 'feetsq') {
        multiplicant = 92903.04;
    }
    else if (f_unit == 'acre') {
        multiplicant = 4046856422.4;
    }
    else if (f_unit == 'hect') {
        multiplicant = 1e+10;
    }

    var divisor;
    if (t_unit == 'cmsq') {
        divisor = 100;
    }
    else if (t_unit == 'msq') {
        divisor = 1000000;
    }
    else if (t_unit == 'kmsq') {
        divisor = 1e+12;
    }
    else if (t_unit == 'inchsq') {
        divisor = 645.16;
    }
    else if (t_unit == 'feetsq') {
        divisor = 92903.04;
    }
    else if (t_unit == 'acre') {
        divisor = 4046856422.4;
    }
    else if (t_unit == 'hect') {
        divisor = 1e+10;
    }
    var answer = 0;
    answer = no * multiplicant / divisor;
    document.getElementById('to-area').value = answer;
}


/*------------------------- temperature -------------------------*/
function temperatureConversion() {
    var no = document.getElementById('from-temperature').value;
    var f_unit = document.getElementById('from-unit-temperature').value;
    var t_unit = document.getElementById('to-unit-temperature').value;

    var answer = 0;

    if (f_unit == t_unit) {
        answer = no;
    }
    else if (f_unit == 'celsius') {
        if (t_unit == 'fahrenheit') {
            answer = (no * 1.8) + 32;
        }
        else if (t_unit == 'kelvin') {
            answer = Number(no) + 273.15;
        }
    }
    else if (f_unit == 'fahrenheit') {
        if (t_unit == 'celsius') {
            answer = (no - 32) / 1.8;
        }
        else if (t_unit == 'kelvin') {
            answer = ((no - 32) / 1.8) + 273.15;
        }
    }
    else if (f_unit == 'kelvin') {
        if (t_unit == 'celsius') {
            answer = Number(no) - 273.15;
        }
        else if (t_unit == 'fahrenheit') {
            answer = (no - 273.15) * 1.8 + 32;
        }
    }

    document.getElementById('to-temperature').value = answer;
}


/*------------------------- volume -------------------------*/
function volumeConversion() {
    var no = document.getElementById('from-volume').value;
    var f_unit = document.getElementById('from-unit-volume').value;
    var t_unit = document.getElementById('to-unit-volume').value;
    var answer = 0;
    var multiplicant, divisor;

    if (f_unit == 'ml' || f_unit == 'cm3') {
        multiplicant = 1;
    }
    else if (f_unit == 'l') {
        multiplicant = 1000;
    }
    else if (f_unit == 'm3') {
        multiplicant = 1000000;
    }
    else if (f_unit == 'inch3') {
        multiplicant = 16.387064;
    }
    else if (f_unit == 'feet3') {
        multiplicant = 28316.846592;
    }

    if (t_unit == 'ml' || t_unit == 'cm3') {
        divisor = 1;
    }
    else if (t_unit == 'l') {
        divisor = 1000;
    }
    else if (t_unit == 'm3') {
        divisor = 1000000;
    }
    else if (t_unit == 'inch3') {
        divisor = 16.387064;
    }
    else if (t_unit == 'feet3') {
        divisor = 28316.846592;
    }

    answer = no * multiplicant / divisor;
    document.getElementById('to-volume').value = answer;
}


/*------------------------- mass -------------------------*/
function massConversion() {
    var no = document.getElementById('from-mass').value;
    var f_unit = document.getElementById('from-unit-mass').value;
    var t_unit = document.getElementById('to-unit-mass').value;
    var multiplicant, divisor;

    if (f_unit == 'ton') {
        multiplicant = 1000000;
    }
    else if (f_unit == 'lb') {
        multiplicant = 453.59237;
    }
    else if (f_unit == 'kg') {
        multiplicant = 1000;
    }
    else if (f_unit == 'g') {
        multiplicant = 1;
    }

    if (t_unit == 'ton') {
        divisor = 1000000;
    }
    else if (t_unit == 'lb') {
        divisor = 453.59237;
    }
    else if (t_unit == 'kg') {
        divisor = 1000;
    }
    else if (t_unit == 'g') {
        divisor = 1;
    }

    var answer = 0;
    answer = no * multiplicant / divisor;
    document.getElementById('to-mass').value = answer;
}


/*------------------------- speed -------------------------*/
function speedConversion() {
    var no = document.getElementById('from-speed').value;
    var f_unit = document.getElementById('from-unit-speed').value;
    var t_unit = document.getElementById('to-unit-speed').value;
    var multiplicant, divisor;

    if (f_unit == 'ms') {
        multiplicant = 1;
    }
    else if (f_unit == 'mh') {
        multiplicant = 0.0002777778;
    }
    else if (f_unit == 'kms') {
        multiplicant = 1000;
    }
    else if (f_unit == 'kmh') {
        multiplicant = 0.2777777778;
    }
    else if (f_unit == 'fts') {
        multiplicant = 0.3048;
    }
    else if (f_unit == 'fth') {
        multiplicant = 0.000084667;
    }
    else if (f_unit == 'miles') {
        multiplicant = 1609.344;
    }
    else if (f_unit == 'mileh') {
        multiplicant = 0.44704;
    }

    if (t_unit == 'ms') {
        divisor = 1;
    }
    else if (t_unit == 'mh') {
        divisor = 0.0002777778;
    }
    else if (t_unit == 'kms') {
        divisor = 1000;
    }
    else if (t_unit == 'kmh') {
        divisor = 0.2777777778;
    }
    else if (t_unit == 'fts') {
        divisor = 0.3048;
    }
    else if (t_unit == 'fth') {
        divisor = 0.000084667;
    }
    else if (t_unit == 'miles') {
        divisor = 1609.344;
    }
    else if (t_unit == 'mileh') {
        divisor = 0.44704;
    }

    var answer = 0;
    answer = no * multiplicant / divisor;
    document.getElementById('to-speed').value = answer;
}


/*------------------------- time -------------------------*/
function timeConversion(){
    var no = document.getElementById('from-time').value;
    var f_unit = document.getElementById('from-unit-time').value;
    var t_unit = document.getElementById('to-unit-time').value;
    var multiplicant, divisor;

    if (f_unit == 'ms') {
        multiplicant = 0.000016667;
    }
    else if (f_unit == 'sec') {
        multiplicant = 0.0166666667;
    }
    else if (f_unit == 'min') {
        multiplicant = 1;
    }
    else if (f_unit == 'hr') {
        multiplicant = 60;
    }
    else if (f_unit == 'day') {
        multiplicant = 1440;
    }
    else if (f_unit == 'week') {
        multiplicant = 10080;
    }

    if (t_unit == 'ms') {
        divisor = 0.000016667;
    }
    else if (t_unit == 'sec') {
        divisor = 0.0166666667;
    }
    else if (t_unit == 'min') {
        divisor = 1;
    }
    else if (t_unit == 'hr') {
        divisor = 60;
    }
    else if (t_unit == 'day') {
        divisor = 1440;
    }
    else if (t_unit == 'week') {
        divisor = 10060;
    }

    var answer = 0;
    var answer = no * multiplicant / divisor;
    document.getElementById('to-time').value = answer;
}


/*------------------------- data -------------------------*/
function dataConversion(){
    var no = document.getElementById('from-data').value;
    var f_unit = document.getElementById('from-unit-data').value;
    var t_unit = document.getElementById('to-unit-data').value;
    var multiplicant, divisor;

    if (f_unit == 'bit') {
        multiplicant = 1;
    }
    else if (f_unit == 'b') {
        multiplicant = 8;
    }
    else if (f_unit == 'kb') {
        multiplicant = 8192;
    }
    else if (f_unit == 'mb') {
        multiplicant = 8388608;
    }
    else if (f_unit == 'gb') {
        multiplicant = 8589934592;
    }
    else if (f_unit == 'tb') {
        multiplicant = 8796093022208;
    }

    if (t_unit == 'bit') {
        divisor = 1;
    }
    else if (t_unit == 'b') {
        divisor = 8;
    }
    else if (t_unit == 'kb') {
        divisor = 8192;
    }
    else if (t_unit == 'mb') {
        divisor = 8388608;
    }
    else if (t_unit == 'gb') {
        divisor = 8589934592;
    }
    else if (t_unit == 'tb') {
        divisor = 8796093022208;
    }

    var answer = no * multiplicant / divisor;
    document.getElementById('to-data').value = answer;
}