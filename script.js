// --- Get References to HTML Elements ---

// Length
const kmInput = document.getElementById('km');
const mInput = document.getElementById('m');
const milesInput = document.getElementById('miles');

// Weight
const kgInput = document.getElementById('kg');
const gInput = document.getElementById('g');
const poundsInput = document.getElementById('pounds');

// Temperature
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

// Number System
const numberInput = document.getElementById('number');
const lakhsOutput = document.getElementById('lakhs');
const croresOutput = document.getElementById('crores');

// --- Conversion Functions ---

function kmToM(km) { return km * 1000; }
function mToKm(m) { return m / 1000; }
function kmToMiles(km) { return km * 0.621371; }
function milesToKm(miles) { return miles / 0.621371; } // Inverse needed if miles input drives km

function kgToG(kg) { return kg * 1000; }
function gToKg(g) { return g / 1000; }
function kgToPounds(kg) { return kg * 2.20462; }
function poundsToKg(pounds) { return pounds / 2.20462; } // Inverse needed if pounds input drives kg

function celsiusToFahrenheit(celsius) { return (celsius * 9/5) + 32; }
function fahrenheitToCelsius(fahrenheit) { return (fahrenheit - 32) * 5/9; }

function numberToLakhs(num) { return num / 100000; }
function numberToCrores(num) { return num / 10000000; }

// --- Helper to Format Numbers ---
function formatNumber(num) {
    // Avoid showing NaN or Infinity; show empty or 0 for invalid inputs
    if (!isFinite(num)) return '';
    // Limit decimal places for display
    return parseFloat(num.toFixed(4)); // Adjust decimal places as needed
}

// --- Add Event Listeners ---

// Length Listeners
kmInput.addEventListener('input', () => {
    const km = parseFloat(kmInput.value);
    if (!isNaN(km)) {
        mInput.value = formatNumber(kmToM(km));
        milesInput.value = formatNumber(kmToMiles(km));
    } else {
        mInput.value = '';
        milesInput.value = '';
    }
});

mInput.addEventListener('input', () => {
    const m = parseFloat(mInput.value);
    if (!isNaN(m)) {
        const km = mToKm(m);
        kmInput.value = formatNumber(km);
        milesInput.value = formatNumber(kmToMiles(km));
    } else {
        kmInput.value = '';
        milesInput.value = '';
    }
});

milesInput.addEventListener('input', () => {
    const miles = parseFloat(milesInput.value);
     if (!isNaN(miles)) {
        const km = milesToKm(miles);
        kmInput.value = formatNumber(km);
        mInput.value = formatNumber(kmToM(km));
    } else {
        kmInput.value = '';
        mInput.value = '';
    }
});


// Weight Listeners
kgInput.addEventListener('input', () => {
    const kg = parseFloat(kgInput.value);
    if (!isNaN(kg)) {
        gInput.value = formatNumber(kgToG(kg));
        poundsInput.value = formatNumber(kgToPounds(kg));
    } else {
        gInput.value = '';
        poundsInput.value = '';
    }
});

gInput.addEventListener('input', () => {
    const g = parseFloat(gInput.value);
     if (!isNaN(g)) {
        const kg = gToKg(g);
        kgInput.value = formatNumber(kg);
        poundsInput.value = formatNumber(kgToPounds(kg));
    } else {
        kgInput.value = '';
        poundsInput.value = '';
    }
});

poundsInput.addEventListener('input', () => {
    const pounds = parseFloat(poundsInput.value);
    if (!isNaN(pounds)) {
        const kg = poundsToKg(pounds);
        kgInput.value = formatNumber(kg);
        gInput.value = formatNumber(kgToG(kg));
    } else {
        kgInput.value = '';
        gInput.value = '';
    }
});

// Temperature Listeners
celsiusInput.addEventListener('input', () => {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        fahrenheitInput.value = formatNumber(celsiusToFahrenheit(celsius));
    } else {
        fahrenheitInput.value = '';
    }
});

fahrenheitInput.addEventListener('input', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        celsiusInput.value = formatNumber(fahrenheitToCelsius(fahrenheit));
    } else {
        celsiusInput.value = '';
    }
});

// Number System Listener
numberInput.addEventListener('input', () => {
    const num = parseFloat(numberInput.value);
    if (!isNaN(num)) {
        lakhsOutput.textContent = formatNumber(numberToLakhs(num));
        croresOutput.textContent = formatNumber(numberToCrores(num));
    } else {
        lakhsOutput.textContent = '0';
        croresOutput.textContent = '0';
    }
});