document.getElementById("Safe").addEventListener("click",passwordAsk);

function passwordAsk(){
    alert("This is a  big safe");
    var answer = prompt("What is the code");
    if (answer == "ilmtoma"){alert("WINNER - SAY BANOFFEE IN CHAT TO CLAIM")}else{alert("No")}
}

