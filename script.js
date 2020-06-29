//declare variables

var results = document.querySelector('results');
var nums = [48, 57];
var uppercase = [65, 90];
var lowercase = [97, 122];
var syms = [33, 47];

//add event listener to generate button
document.querySelector('#generate').addEventListener('click', () => {
  
    //declare settings
    var range = document.getElementById('length').value;
    var upper = document.getElementById('uppercase').checked;
    var lower = document.getElementById('lowercase').checked;
    var symbols = document.getElementById('symbols').checked;
    var numbers = document.getElementById('numbers').checked;

    //arrays for charcode
    var randomSelector = [];
    var password = [];
    
    //execution

    if (upper === true) {
        for (var i = uppercase[0]; i <= uppercase[1]; i++){
            randomSelector.push(i);
        }
    }

    if (lower === true) {
        for (var i = lowercase[0]; i <= lowercase[1]; i++){
            randomSelector.push(i);
        }
    }

    if (numbers === true) {
        for (var i = nums[0]; i <= nums[1]; i++){
            randomSelector.push(i);
        }
    }

    if (symbols === true) {
        for (var i = syms[0]; i <= syms[1]; i++){
            randomSelector.push(i);
        }
    }

   for(var i = 0; i < range; i++){
       password.push(String.fromCharCode(randomSelector[Math.floor(Math.random() * randomSelector.range)]))
   }

   
   console.log(randomSelector);
 
   console.log(password);

})


//Havent figured out how translate char code into console.

