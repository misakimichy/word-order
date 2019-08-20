$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let result = [];
        let userInputs = $("#userInput").val().split(' ');
        let counts = [];
        userInputs.forEach(i => [counts[i] = (counts[i] || 0) + 1]);
        console.log(counts);
        $("#result").show();
    });
});