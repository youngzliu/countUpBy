$(document).ready(function() {
  $("button#count").click(function(event) {
      event.preventDefault();

      var inputNumber = parseInt($("#inputOne").val());
      var countNumber = parseInt($("#inputTwo").val());
      var result = "";
      if(!inputNumber || !countNumber){
        result = "Please enter all the values necessary!"
      }
      else if(countNumber > inputNumber){
        result = "The counting interval is bigger that the number you want to count to!";
      }
      else{
        for(var i = countNumber; i <= inputNumber; i += countNumber){
          result += i + " ";
        }
      }
      $("#coded").text(result);
  });
});
