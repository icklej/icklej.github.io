document.getElementById("Safe").addEventListener("click",passwordAsk);

function passwordAsk(){
    alert("This is a safe");
    var answer = prompt("What is the code");
    if (answer == "ilmtoma"){alert("YES")}else{alert("No")}
}
