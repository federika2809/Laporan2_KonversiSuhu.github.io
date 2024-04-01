function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    switch (unit) {
        case 'celsius':
            result.textContent = temperature + " Celsius = " + celsiusToFahrenheit(temperature).toFixed(2) + " Fahrenheit and " + celsiusToKelvin(temperature).toFixed(2) + " Kelvin.";
            break;
        case 'fahrenheit':
            result.textContent = temperature + " Fahrenheit = " + fahrenheitToCelsius(temperature).toFixed(2) + " Celsius and " + fahrenheitToKelvin(temperature).toFixed(2) + " Kelvin.";
            break;
        case 'kelvin':
            result.textContent = temperature + " Kelvin = " + kelvinToCelsius(temperature).toFixed(2) + " Celsius and " + kelvinToFahrenheit(temperature).toFixed(2) + " Fahrenheit.";
            break;
        default:
            result.textContent = "Please select a valid unit.";
            break;
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
