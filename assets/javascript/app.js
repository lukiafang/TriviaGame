
//set timer countdown& timeout session 
var count =60,
timer = setInterval(function()
   {
       $("#counter").html("Time Left: "  +count--);
       console.log(counter)
       if(count == 0 ) clearInterval(timer);

   }, 1000 
);
// Set the date we're counting down to


//once timeup display result 


//
function submitAnswer() {
    var radios = document.getElementsByName("choice");
    var i = 0, len = radios.length;
    var checked = false;
    var userAnswer;
    
    for( ; i < len; i++ ) {
       if(radios[i].checked) {
         checked = true;
         userAnswer = radios[i].value;
       }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    // write a function for time up 
    // display the results rights and wrongs
    // restart the game
    if(!checked) {
      alert("please select choice answer");
      return;
    }
    // Correct answer
    if(userAnswer === "Scripting") {
       alert("Answer is correct!");
    }
    // incorrect answer
    else {
       alert("Answer is wrong!");
    }
    
  }