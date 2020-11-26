// Add Numbers to field and returns sum value.
function calc() { 
    // TODO: sum = num1 + num2
    
     let num1 = Number(document.querySelector("#num1").value);
     let num2 = Number(document.querySelector("#num2").value);
     let sum = num1 + num2;
     document.getElementById("sum").value = sum;
 }
// show text by pressing 'Read more...'
 function showText() {
    // TODO
        document.getElementById("text").style.display = "block";
        document.getElementById("more").innerHTML = "";
    }

// extract text and moves down to the text area.      
  function extractText() {
          // TODO
    let items = document.querySelectorAll("#items li");
    let result = document.getElementById("result");
    
    
    for (let li of items) {
        result.value += li.textContent + "\n";
        
    }
}
//Add and delete items from list 
function addItem() { 
    let input = document.getElementById("newText");
    let text = input.value;
    let newLi = document.createElement("li");
    newLi.textContent = text + " ";
    let deleteLink = document.createElement("a");
    deleteLink.textContent = "[Delete]";
    deleteLink.href = "#";
    deleteLink.addEventListener("click", deleteItem);
    newLi.appendChild(deleteLink);

    document.getElementById("ListItems").appendChild(newLi);
    input.value = "";

    function deleteItem() {
        document.getElementById("ListItems").removeChild(newLi);
    }
    
}
  
// stopwatch where it starts when you press start & stops on stop
// and resets on start again.
window.onload = function() {
    stopwatch(); 
}

function stopwatch() {
    let time, intervalId;
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");

    startBtn.addEventListener("click", function () {
        time = -1;
        incrementTime();
        intervalId = setInterval(incrementTime, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    });

    stopBtn.addEventListener("click", function () {
        clearInterval(intervalId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });

    function incrementTime() {
        time++;
        document.getElementById("time").textContent =
                ("0" + Math.trunc(time / 60)).slice(-2) +
                ":" + ("0" + (time % 60)).slice(-2);
    }
}