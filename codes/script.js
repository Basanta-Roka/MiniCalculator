
function calc() {
     firstNum = document.getElementById("firstNum").value;
     secondNum = document.getElementById("secondNum").value;
     op = document.getElementById("operators");

     if (op.value == '+') {
          z = parseFloat(firstNum) + parseFloat(secondNum);
     }
     else if (op.value == '-') {
          z = parseFloat(firstNum) - parseFloat(secondNum);
     }
     else if (op.value == '÷') {
          z = parseFloat(firstNum) / parseFloat(secondNum);
     }
     else if (op.value == '*') {
          z = parseFloat(firstNum) * parseFloat(secondNum);
     }
     else {
          alert("error!");
     }

     document.getElementById("result").value = z;

}

function clearFields() {
     let op = document.getElementsByClassName("operators");
     let z = document.getElementsByClassName("result");
     document.getElementById("firstNum").value = "";
     document.getElementById("secondNum").value = "";
     document.getElementById("operators").value = "+";
     document.getElementById("result").value = "";

     op = null;
     z = null;


}