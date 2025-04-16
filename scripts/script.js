/*const button1 = document.getElementById("b1");
const button2 = document.getElementById("b2");
const button3 = document.getElementById("b3");
const button4 = document.getElementById("b4");
const button5 = document.getElementById("b5");
const button6 = document.getElementById("b6");
const button7 = document.getElementById("b7");
const button8 = document.getElementById("b8");
const button9 = document.getElementById("b9");
const button10 = document.getElementById("b10");
const button11 = document.getElementById("b11");
const button12 = document.getElementById("b12");
const button13 = document.getElementById("b13");
const button14 = document.getElementById("b14");
const button15 = document.getElementById("b15");
*/

const buttons = []

for (let i= 1; i <= 15; i++) {
  const button = document.getElementById(`b${i}`);
  buttons.push(button);
}
console.log(buttons)

const sounds = ["577693__joesh2__c2.wav", "577690__joesh2__d2.wav", "577694__joesh2__e2.wav", "577698__joesh2__f2.wav", "577702__joesh2__g2.wav", "577689__joesh2__a2.wav", "577687__joesh2__b2.wav", "577692__joesh2__c3.wav", "577695__joesh2__d3.wav", "577699__joesh2__e3.wav", "577700__joesh2__f3.wav", "577701__joesh2__g3.wav", "577688__joesh2__a3.wav", "577686__joesh2__b3.wav", "577691__joesh2__c4.wav"]

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    sounds[i].play();
  })
  console.log(buttons[i])
}

const sonidoMarimba1 = new Howl({
  src: ["../assets/sounds/577693__joesh2__c2.wav"], // Ruta del sonido
  volume: 1.0, // Puedes ajustar el volumen (0.0 a 1.0)
});

const sonidoMarimba2 = new Howl({
  src: ["../assets/sounds/577690__joesh2__d2.wav"],
  volume: 1.0,
});

const sonidoMarimba3 = new Howl({
  src: ["../assets/sounds/577694__joesh2__e2.wav"],
  volume: 1.0,
});

const sonidoMarimba4 = new Howl({
  src: ["../assets/sounds/577698__joesh2__f2.wav"],
  volume: 1.0,
});

const sonidoMarimba5 = new Howl({
  src: ["../assets/sounds/577702__joesh2__g2.wav"],
  volume: 1.0,
});

const sonidoMarimba6 = new Howl({
  src: ["../assets/sounds/577689__joesh2__a2.wav"],
  volume: 1.0,
});

const sonidoMarimba7 = new Howl({
  src: ["../assets/sounds/577687__joesh2__b2.wav"],
  volume: 1.0,
});

const sonidoMarimba8 = new Howl({
  src: ["../assets/sounds/577692__joesh2__c3.wav"],
  volume: 1.0,
});

const sonidoMarimba9 = new Howl({
  src: ["../assets/sounds/577695__joesh2__d3.wav"],
  volume: 1.0,
});

const sonidoMarimba10 = new Howl({
  src: ["../assets/sounds/577699__joesh2__e3.wav"],
  volume: 1.0,
});

const sonidoMarimba11 = new Howl({
  src: ["../assets/sounds/577700__joesh2__f3.wav"],
  volume: 1.0,
});

const sonidoMarimba12 = new Howl({
  src: ["../assets/sounds/577701__joesh2__g3.wav"],
  volume: 1.0,
});

const sonidoMarimba13 = new Howl({
  src: ["../assets/sounds/577688__joesh2__a3.wav"],
  volume: 1.0,
});

const sonidoMarimba14 = new Howl({
  src: ["../assets/sounds/577686__joesh2__b3.wav"],
  volume: 1.0,
});

const sonidoMarimba15 = new Howl({
  src: ["../assets/sounds/577691__joesh2__c4.wav"],
  volume: 1.0,
});

button1.addEventListener("click", function () {
  // Aplicamos la transformación y la transición

  button1.style.transition = "transform 0.1s ease";
  button1.style.transform = "scale(0.95)";

  // Después de un tiempo, volvemos al estado normal
  setTimeout(() => {
    button1.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba1.play();
});

button2.addEventListener("click", function () {
  button2.style.transition = "transform 0.1s ease";
  button2.style.transform = "scale(0.95)";

  setTimeout(() => {
    button2.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba2.play();
});

button3.addEventListener("click", function () {
  button3.style.transition = "transform 0.1s ease";
  button3.style.transform = "scale(0.95)";

  setTimeout(() => {
    button3.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba3.play();
});

button4.addEventListener("click", function () {
  button4.style.transition = "transform 0.1s ease";
  button4.style.transform = "scale(0.95)";

  setTimeout(() => {
    button4.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba4.play();
});

button5.addEventListener("click", function () {
  button5.style.transition = "transform 0.1s ease";
  button5.style.transform = "scale(0.95)";

  setTimeout(() => {
    button5.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba5.play();
});

button6.addEventListener("click", function () {
  button6.style.transition = "transform 0.1s ease";
  button6.style.transform = "scale(0.95)";

  setTimeout(() => {
    button6.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba6.play();
});

button7.addEventListener("click", function () {
  button7.style.transition = "transform 0.1s ease";
  button7.style.transform = "scale(0.95)";

  setTimeout(() => {
    button7.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba7.play();
});

button8.addEventListener("click", function () {
  button8.style.transition = "transform 0.1s ease";
  button8.style.transform = "scale(0.95)";

  setTimeout(() => {
    button8.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba8.play();
});

button9.addEventListener("click", function () {
  button9.style.transition = "transform 0.1s ease";
  button9.style.transform = "scale(0.95)";

  setTimeout(() => {
    button9.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba9.play();
});

button10.addEventListener("click", function () {
  button10.style.transition = "transform 0.1s ease";
  button10.style.transform = "scale(0.95)";

  setTimeout(() => {
    button10.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba10.play();
});

button11.addEventListener("click", function () {
  button11.style.transition = "transform 0.1s ease";
  button11.style.transform = "scale(0.95)";

  setTimeout(() => {
    button11.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba11.play();
});

button12.addEventListener("click", function () {
  button12.style.transition = "transform 0.1s ease";
  button12.style.transform = "scale(0.95)";

  setTimeout(() => {
    button12.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba12.play();
});

button13.addEventListener("click", function () {
  button13.style.transition = "transform 0.1s ease";
  button13.style.transform = "scale(0.95)";

  setTimeout(() => {
    button13.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba13.play();
});

button14.addEventListener("click", function () {
  button14.style.transition = "transform 0.1s ease";
  button14.style.transform = "scale(0.95)";

  setTimeout(() => {
    button14.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba14.play();
});

button15.addEventListener("click", function () {
  button15.style.transition = "transform 0.1s ease";
  button15.style.transform = "scale(0.95)";

  setTimeout(() => {
    button15.style.transform = "scale(1)";
  }, 100);

  sonidoMarimba15.play();
});

document.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      sonidoMarimba1.play();
      button1.style.transition = "transform 0.1s ease";
      button1.style.transform = "scale(0.95)";
      setTimeout(() => {
        button1.style.transform = "scale(1)";
      }, 100);
      break;
    case "s":
      sonidoMarimba2.play();
      button2.style.transition = "transform 0.1s ease";
      button2.style.transform = "scale(0.95)";
      setTimeout(() => {
        button2.style.transform = "scale(1)";
      }, 100);
      break;
    case "d":
      sonidoMarimba3.play();
      button3.style.transition = "transform 0.1s ease";
      button3.style.transform = "scale(0.95)";
      setTimeout(() => {
        button3.style.transform = "scale(1)";
      }, 100);
      break;
    case "f":
      sonidoMarimba4.play();
      button4.style.transition = "transform 0.1s ease";
      button4.style.transform = "scale(0.95)";
      setTimeout(() => {
        button4.style.transform = "scale(1)";
      }, 100);
      break;
    case "g":
      sonidoMarimba5.play();
      button5.style.transition = "transform 0.1s ease";
      button5.style.transform = "scale(0.95)";
      setTimeout(() => {
        button5.style.transform = "scale(1)";
      }, 100);
      break;
    case "h":
      sonidoMarimba6.play();
      button6.style.transition = "transform 0.1s ease";
      button6.style.transform = "scale(0.95)";
      setTimeout(() => {
        button6.style.transform = "scale(1)";
      }, 100);
      break;
    case "j":
      sonidoMarimba7.play();
      button7.style.transition = "transform 0.1s ease";
      button7.style.transform = "scale(0.95)";
      setTimeout(() => {
        button7.style.transform = "scale(1)";
      }, 100);
      break;
    case "k":
      sonidoMarimba8.play();
      button8.style.transition = "transform 0.1s ease";
      button8.style.transform = "scale(0.95)";
      setTimeout(() => {
        button8.style.transform = "scale(1)";
      }, 100);
      break;
    case "l":
      sonidoMarimba9.play();
      button9.style.transition = "transform 0.1s ease";
      button9.style.transform = "scale(0.95)";
      setTimeout(() => {
        button9.style.transform = "scale(1)";
      }, 100);
      break;
    case "q":
      sonidoMarimba10.play();
      button10.style.transition = "transform 0.1s ease";
      button10.style.transform = "scale(0.95)";
      setTimeout(() => {
        button10.style.transform = "scale(1)";
      }, 100);
      break;
    case "w":
      sonidoMarimba11.play();
      button11.style.transition = "transform 0.1s ease";
      button11.style.transform = "scale(0.95)";
      setTimeout(() => {
        button11.style.transform = "scale(1)";
      }, 100);
      break;
    case "e":
      sonidoMarimba12.play();
      button12.style.transition = "transform 0.1s ease";
      button12.style.transform = "scale(0.95)";
      setTimeout(() => {
        button12.style.transform = "scale(1)";
      }, 100);
      break;
    case "r":
      sonidoMarimba13.play();
      button13.style.transition = "transform 0.1s ease";
      button13.style.transform = "scale(0.95)";
      setTimeout(() => {
        button13.style.transform = "scale(1)";
      }, 100);
      break;
    case "t":
      sonidoMarimba14.play();
      button14.style.transition = "transform 0.1s ease";
      button14.style.transform = "scale(0.95)";
      setTimeout(() => {
        button14.style.transform = "scale(1)";
      }, 100);
      break;
    case "y":
      sonidoMarimba15.play();
      button15.style.transition = "transform 0.1s ease";
      button15.style.transform = "scale(0.95)";
      setTimeout(() => {
        button15.style.transform = "scale(1)";
      }, 100);
      break;
  }
});
