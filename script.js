
function convertBtn() {
    let convertUnit = document.getElementById("input-field").value

    function convertLength() {
        let meters = convertUnit * 3.281
        let feet = convertUnit * .03048 * 10
        let lengthConverted = document.getElementById("length-converted");
        lengthConverted.innerHTML = `
        ${convertUnit} meters = ${ Number(feet).toFixed(2)} feet | ${convertUnit} feet = ${ Number(meters).toFixed(2)} meters
        `
    }
    convertLength() 

    function convertVolume() {
        let liters = convertUnit * 4.546
        let gallons = convertUnit * .264
        let volumeConverted = document.getElementById("volume-converted")
        volumeConverted.innerHTML = `
        ${convertUnit} liters = ${ Number(gallons).toFixed(2)} Gallons  |  ${convertUnit} Gallons = ${ Number(liters).toFixed(2)} Liters
        `
    }
    convertVolume();

    function convertMass() {
        let pounds = convertUnit / 2.205
        let kilograms = convertUnit * 2.204
        let massConverted = document.getElementById("mass-converted")
        massConverted.innerHTML = `
        ${convertUnit} Pounds = ${ Number(pounds).toFixed(2)} Kilograms | ${convertUnit} Kilograms = ${ Number(kilograms).toFixed(2)} Pounds
        `
    
    }
    convertMass()
}
