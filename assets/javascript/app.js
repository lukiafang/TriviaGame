//need a start button
      var startBtn 

      var count =60
      

      var right=0;
      var wrong=0;
      var unanswered=0;

        $('#startbutton').on("click",function(event){

          //hide the startbutton
          $("#startbutton").hide();

          //set timer
          setInterval(function()
          {
            $("#counter").html("Time Left: "  +count--);

            //display result
                  if(count == 0)
              { 
                submitAnswer()
               

              }; 
            //console.log(counter)
          },1000);




          //display the QnA
          $("#QnA").removeClass("hidden");
          
         


         
      }, 
    )
        
          



     
      

         
           



      //once timeup display result 

      //count the right answers and wrongs
        function submitAnswer() 
        {
          var radios = document.getElementsByName("choice");
          var i = 0, len = radios.length;
          var checked = false;
          var userAnswer;
          
          for( ; i < len; i++ ) 
          {
            if(radios[i].checked) 
                {
                  checked = true;
                  userAnswer = radios[i].value;
                };
          
          }       // if user click submit button without selecting any option, alert box should be say "please select choice answer".

                // display the results rights and wrongs



          
            if(!checked) 
              {
              unanswered++;
              }
            // Correct answer
            if(userAnswer === "Scripting") 
              {
                right++;
                console.log(right)
              }
            // incorrect answer
            else 
              {
                wrong++;
                console.log(wrong)
              }
              
              $("#counter").addClass("hidden");
              $("#QnA").addClass("hidden");
              $("#result").html("Right Answers: "+right+ "<br>"+"Wrong Answers: " +wrong+"<br>"+ "Unanswered: "+unanswered)
        };
          