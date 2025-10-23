const input = document.querySelector("input");

function fillTheVal(e) {
  input.value = input.value+e;
}

function removeAllVal() {
  input.value = "";
}

function del() {
  input.value = input.value.slice(0,input.value.length-1);
}

function eq() {

  
    input.value = eval(input.value);

  
}