const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button10 = document.getElementById("10");
const button11 = document.getElementById("11");
const button12 = document.getElementById("12");
const button13 = document.getElementById("13");
const button14 = document.getElementById("14");
const button15 = document.getElementById("15");
const button16 = document.getElementById("16");
const button17 = document.getElementById("17");
const button18 = document.getElementById("18");
const button19 = document.getElementById("19");
const button20 = document.getElementById("20");
const button21 = document.getElementById("21");

button1.addEventListener("click", function () {
  // Aplicamos la transformación y la transición
  button1.style.transition = "transform 0.1s ease";
  button1.style.transform = "scale(0.95)";

  // Después de un tiempo, volvemos al estado normal
  setTimeout(() => {
    button1.style.transform = "scale(1)";
  }, 100);
});
