// when you click the button | add an onclick event listener to the html. store it in a variable. 

//create the onclick function which grabs the number in the input. assign the number to a variable. 


function convertBtn() {
    let convertUnit = document.getElementById("input-field").value

    function convertLength() {
        // 1 meter = 3.281 feet
        let meters = convertUnit * 3.281
        let feet = convertUnit * .03048 * 10

        let lengthConverted = document.getElementById("length-converted");
    
        console.log(meters);
        console.log(feet);
        
    }
    convertLength() 
    
    function convertVolume() {
    
    }
    
    function convertMass() {
    
    }
    

    console.log(convertUnit);
}



//perform some sort of math with the number, store the math in a result.

//grab the elementbyid for each unit conversion and store it in a variable

//edit the p tag by adding the conversion from the return of the mathh. 