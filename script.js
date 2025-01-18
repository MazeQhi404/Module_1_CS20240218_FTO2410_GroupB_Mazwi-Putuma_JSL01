

function validateSyntax() {

    input = document.getElementById('petInput').value;

    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
if (input.substr(0,4) == "pet_" && !isNaN(input.substr(4,4)) && input.substr(4,2) == 20 && input.substr(6,2) <= 25 && isNaN(input.substr(5)) && input.length > 8  ) {
    
    result = "Valid Syntax 🟢"

} else if (input == "") { 
    result = ''
    
} else {
    result = "Invalid Syntax 🔴"
}

    document.getElementById('result').innerText = result;
    
}

validateSyntax()

/* Questions to ask couch on Monday: 
1. is there a way to access a span tag in js that does not contain text, just styling. incoporating whatever style you added in the stylesheet into your javascript file.
*/
