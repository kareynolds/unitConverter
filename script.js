// when you click the button | add an onclick event listener to the html. store it in a variable. 

//create the onclick function which grabs the number in the input. assign the number to a variable. 


function convertBtn() {
    let convertUnit = document.getElementById("input-field").value

    function convertLength() {
        // 1 meter = 3.281 feet
        let meters = convertUnit * 3.281
        let feet = convertUnit * .03048 * 10

        let lengthConverted = document.getElementById("length-converted");

        lengthConverted.innerHTML = `
        
        ${convertUnit} meters = ${ Number(feet).toFixed(2)} feet | ${convertUnit} feet = ${ Number(meters).toFixed(2)} meters

        `
    
        console.log(meters);
        console.log(feet);
        
    }
    convertLength() 


    
    function convertVolume() {
        // 1 liter = .264 gallon
        let liters = convertUnit * 4.546
        let gallons = convertUnit * .264

        let volumeConverted = document.getElementById("volume-converted")

        volumeConverted.innerHTML = `
        
        ${convertUnit} liters = ${ Number(gallons).toFixed(2)} Gallons  |  ${convertUnit} Gallons = ${ Number(liters).toFixed(2)} Liters
        
        `

        console.log(liters)
        console.log(gallons)

    
    }
    convertVolume();

    
    function convertMass() {
        // 1 kilogram = 2.204 pounds

        let pounds = convertUnit / 2.205
        let kilograms = convertUnit * 2.204

        let massConverted = document.getElementById("mass-converted")

        massConverted.innerHTML = `
        
        ${convertUnit} Pounds = ${ Number(pounds).toFixed(2)} Kilograms | ${convertUnit} Kilograms = ${ Number(kilograms).toFixed(2)} Pounds
        
        `
    
    }
    convertMass()
    

    console.log(convertUnit);
}



//perform some sort of math with the number, store the math in a result.

//grab the elementbyid for each unit conversion and store it in a variable

//edit the p tag by adding the conversion from the return of the mathh. 