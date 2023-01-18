// Three Functions

// Get values from user
function getValues() {
    let fizzValue = parseInt(document.getElementById('fizzValue').value)
    let buzzValue = parseInt(document.getElementById('buzzValue').value)
    let stopValue = parseInt(document.getElementById('stopValue').value)

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {

        let numberArray = generateFizzBuzz(stopValue);

        displayFizzBuzz(numberArray, fizzValue, buzzValue);

    } else {
        // if not, tell our user
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed for FizzBuzz!'
            }
        )
    }

}



// Create array of values
function generateFizzBuzz(stop) {

    let numbers = [];

    for(let i = 1; i <= stop; i++) {
        numbers.push(i);
    }

    return numbers;
}



// Display Values
function displayFizzBuzz(array, fizz, buzz) {

    let tableBody = document.getElementById('results');
    let tableHTML = ""
    
   for (i = 0; i < array.length; i++) {

        let value = array[i];
        let className = ""

        if (value % fizz == 0 && value % buzz == 0) {
            // output FizzBuzz class
            value = 'FizzBuzz';
            className = 'fizzBuzz'

        } else if (value % fizz == 0) {
            // output Fizz class
            value = 'Fizz'
            className = 'fizz'

        } else if (value % buzz == 0) {
            // output Buzz class
            value = 'Buzz'
            className = 'buzz'

        } else {
            className = 'neither'
        }

        if (i % 5 == 0) {
            tableHTML += "<tr>"
        }
        
        let tableRow = `<td class="${className}">${value}</td>`; 
        tableHTML += tableRow; 
        
        if ((i + 1) % 5 == 0) {
            tableHTML += "</tr>" 
        } 
        

    }

    tableBody.innerHTML = tableHTML;
}

// Ternary Solution
function displayFizzBuzzTern(array, fizz, buzz) {

    let tableHTML = ""
    
    for (i = 0; i < array.length; i++) {

        let value = array[i];
        
        let className = 
        value % fizz == 0 && value % buzz == 0 ? value = 'FizzBuzz' :
        value % fizz == 0 ? value = 'Fizz' :
        value % buzz == 0 ? value = 'Buzz' : 
        value;

        i % 5 == 0 ? tableHTML += "<tr>" :
        value;
        
        tableHTML += `<td class="${className}">${value}</td>`;
        
        (i + 1) % 5 == 0 ? tableHTML += "</tr>" :
        value;
    }

    document.getElementById('results').innerHTML = tableHTML;
}
      



// / DRY solution

function displayFizzBuzzDry(array, fizz, buzz) {

    let tableHTML = "";

    for (i = 0; i < array.length; i++) {

        let value = array[i];
        let className = "";
        let isDivisiblebyBuzz = (value % buzz == 0);  
        let isDivisiblebyFizz = (value % fizz == 0);    

        if (isDivisiblebyFizz && isDivisiblebyBuzz) {
                value = 'FizzBuzz';
                className = 'fizzBuzzDry';
        } else if (isDivisiblebyFizz) {
                value ='Fizz'
                className = 'fizzDry';
        } else if (isDivisiblebyBuzz) {
                value = 'Buzz';
                className = 'buzzDry';            
        }   


        i % 5 == 0 ? tableHTML += "<tr>" :
        value;
        
        tableHTML += `<td class="${className}">${value}</td>`;
        
        (i + 1) % 5 == 0 ? tableHTML += "</tr>" :
        value;

    }

    document.getElementById('results').innerHTML = tableHTML;

}






function getValuesTern() {
    let fizzValue = parseInt(document.getElementById('fizzValue').value)
    let buzzValue = parseInt(document.getElementById('buzzValue').value)
    let stopValue = parseInt(document.getElementById('stopValue').value)

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {

        let numberArray = generateFizzBuzz(stopValue);

        displayFizzBuzzTern(numberArray, fizzValue, buzzValue);

    } else {
        // if not, tell our user
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed for FizzBuzz!'
            }
        )
    }

}

function getValuesDry() {
    let fizzValue = parseInt(document.getElementById('fizzValue').value)
    let buzzValue = parseInt(document.getElementById('buzzValue').value)
    let stopValue = parseInt(document.getElementById('stopValue').value)

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {

        let numberArray = generateFizzBuzz(stopValue);

        displayFizzBuzzDry(numberArray, fizzValue, buzzValue);

    } else {
        // if not, tell our user
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed for FizzBuzz!'
            }
        )
    }

}