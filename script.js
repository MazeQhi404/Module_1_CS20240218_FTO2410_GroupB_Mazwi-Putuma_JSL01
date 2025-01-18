function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
if (input.substr(0,4) == "pet_" && !isNaN(input.substr(4,4))  ){
    console.log("yes")

} else {
    console.log("no")

}

            document.getElementById('result').innerText = result;
}

validateSyntax()

