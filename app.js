
// const h1 = document.querySelector('#abc');
// // h1.innerHTML = 'changed through <br/> javascript'

// function greetUser (){
//     if(h1.innerHTML === 'changed through javascript'){
//         h1.innerHTML = 'hello world'
//     }else{
//         h1.innerHTML = 'changed through javascript'
//     }
//     console.log('hello world');
// }

function calculateSum() {
    // Prompt se values lekar parseFloat se numbers mein convert karein
    let p1 = Number(prompt("Enter value for p1:"));
    let p2 = Number(prompt("Enter value for p2:"));

    // Check karein ki inputs numbers mein hain ya nahi
    if (p1 && p2) {
        // Calculate sum
        let sum = p1 + p2;

        // Result ko update karein specific format mein
        document.querySelector('#result').innerHTML = 'First value = ' + p1 + '<br>Second value = ' + p2 + '<br>result = ' + sum;
    } else {
        // Agar inputs numbers nahi hain, toh error message show karein
        document.querySelector('#result').innerHTML = 'Invalid input. Please enter numbers.';
    }
}







// create two prompts  p1 and p2 and manipulatate dom like this p1 + p2 value = p1+p2