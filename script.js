const display = document.getElementById("display");

function appendToDisplay(i) {
  display.value += i;
}

function deletDisplay(i) {
  display.value = display.value.slice(0, -1);
}

function calculator() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
