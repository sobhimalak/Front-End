//LAB 1. Sum 3 Numbers
function add3Num(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let num3 = Number(arr[2]);
  
    let sum = num1+num2+num3;
    console.log(sum)
    
  }
  var nums = [2,3,4];
  add3Num(nums);
////////////////////////////////////////////
function add3Numb(arr) {
    let num4 = Number(arr[0]);
    let num5 = Number(arr[1]);
    let num6 = Number(arr[2]);
  
    let sum = num4 + num5 + num6;
    console.log(sum);
  }
  var nums1 = [1.5,1.5,-1];
  add3Numb(nums1);
////////////////////////////////////////////
// LAB 2. Sum And VAT
  function percent(arr) {
    let sum = 0;
    for(let price of arr){
      sum+= Number(price);
    }
    console.log("sum: " , sum);
    console.log("Vat : " , sum * 0.2);
    console.log("Total : " , sum * 1.2);
  }
  
  var array = ['1.20', '2.60', '3.50'];
  percent(array);
////////////////////////////////////////////
function percent1(arr) {
    let sum = 0;
    for(let price of arr){
      sum+= Number(price);
    }
    console.log("sum: " , sum);
    console.log("Vat : " , sum * 0.2);
    console.log("Total : " , sum * 1.2);
  }
var array1 = ['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445'];
percent1(array1);
////////////////////////////////////////////
// LAB 3. Letter Occurrences In String
function counter(letter) {
    var count=0;
    letter = letter.split('');
    for(var i=0, len = letter.length; i < len; i++) {
        if(letter[i] == "l") {
            count++;
        }
    }
    return count;
}
var txt = "hello";
console.log("The letter Count is ", counter(txt));
////////////////////////////////////////////
// LAB 4. Filter By Age 
function filterByAge(arr){
    let minAge = Number(arr[0]);
    let person1 = {name: arr[1], age : arr[2]}
    let person2 = {name: arr[3], age : arr[4]}

    if(person1.age >= minAge){
      console.log(person1);
    }
    if(person2.age >= minAge){
      console.log(person2);
    }
  }

  var array = [20,"Sobhi",45,"Malin",8];
  filterByAge(array);
  ////////////////////////////////////////////
  //LAB 6.Figure Area
function figureArea(w, h, W, H) {
    var s1 = w * h;
    var s2 = W * H;
    var s3 = Math.min(w, W) * Math.min(h, H);
    console.log(s1 + s2 - s3);
}

figureArea(2,4,5,3); 
figureArea(13, 2, 5, 8);
////////////////////////////////////////////
//LAB 7.Next Day

function calcNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    console.log(nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate());
  }
  
  calcNextDay(2016, 9, 30);