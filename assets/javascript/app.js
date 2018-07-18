//need a start button
      var startBtn 

      var count =60
      

      var right;
      var wrong;
      var unanswered

        $('#startbutton').on("click",function(event){

          //hide the startbutton
          $("#startbutton").hide();

          //set timer
          timer=setInterval(function()
          {
            $("#counter").html("Time Left: "  +count--);

            //display result
                  if(count == 0)
              { 
                submitAnswer()
                
               

              }; 
            console.log(counter)
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

          clearInterval(timer)
          
          
          for( ; i < len; i++ ) 
          {
            if(radios[i].checked) 
                {
                  checked = true;
                  userAnswer = radios[i].value;
                };
               
          }
                 // if user click submit button without selecting any option, alert box should be say "please select choice answer".

                // display the results rights and wrongs
              right = $('input:checked[value=correct]').length
              wrong = $('input:checked[value=wrong]').length
              unanswered = 4-right-wrong
            
                

          
              $("#counter").addClass("hidden");
              $("#QnA").addClass("hidden");
              $("#result").html("Right Answers: "+right+ "<br>"+"Wrong Answers: " +wrong+"<br>"+ "Unanswered: "+unanswered)
        };
          