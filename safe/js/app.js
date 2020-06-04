document.getElementById("Safe").addEventListener("click",passwordAsk);

function passwordAsk(){
    alert("This is a safe");
    var answer = prompt("What is the code");
    if (answer == "123456"){alert("YES")}else{alert("No")}
}

