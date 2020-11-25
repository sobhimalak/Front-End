//LAB 1. Multiply Numbers
function multiplyNumbers(input){
    let a = Number(input[0]);
    let b = Number(input[1]);

    let sum = a * b;
    console.log(sum);
}

var input = ['2','3'];
multiplyNumbers(input);


////////////////////////////////////////////
//LAB 2. Boxes and Bottles
function bottleBoxes(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    
  
    let sum = Math.ceil(Number(num1) / Number(num2));
    console.log(sum)
    
  }
  var input = ["20","5"];
  bottleBoxes(input); 
////////////////////////////////////////////
//LAB 3. Leap Year
function leapYear(input) {
    let year = input;
    let answer;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer = "Yes";
    } else {
        answer = "No";
    }
    console.log(answer);
}
 
leapYear(1999);

////////////////////////////////////////////
//LAB 4. Odd / Even
function oddOrEven(input){
  let result = (number % 2  === 0) ?  "even" : "odd";
  console.log(`This number is ${result}.`);
}
                                  // missing (invalid function) //
var number = [5];
oddOrEven(number);
var number = [8];
oddOrEven(number);
var number = ['1.5'];
oddOrEven(number);
////////////////////////////////////////////
//LAB 5. Fruit or Vegetable
function checkFruitVeg(input) {
    switch (input) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            console.log("Fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
              console.log("Vegetables");
              break;
    default:
      console.log("unknown");
      break;
    } 
  }         checkFruitVeg("garlic");