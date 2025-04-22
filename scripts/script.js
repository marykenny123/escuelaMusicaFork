const buttons = [];

const sounds = [
  "577693__joesh2__c2.wav",
  "577690__joesh2__d2.wav",
  "577694__joesh2__e2.wav",
  "577698__joesh2__f2.wav",
  "577702__joesh2__g2.wav",
  "577689__joesh2__a2.wav",
  "577687__joesh2__b2.wav",
  "577692__joesh2__c3.wav",
  "577695__joesh2__d3.wav",
  "577699__joesh2__e3.wav",
  "577700__joesh2__f3.wav",
  "577701__joesh2__g3.wav",
  "577688__joesh2__a3.wav",
  "577686__joesh2__b3.wav",
  "577691__joesh2__c4.wav",
];

const keyboard = [
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
];

// CREAR UN ARRAY DE BOTONES CAPTURADOS DEL HTML MEDIANTE DOM
for (let i = 1; i <= 15; i++) {
  //CAPTURAR BOTON DOM
  const button = document.getElementById(`b${i}`);

  //METER BOTON CAPTURADO EN ARRAY
  buttons.push(button);
}

//AÑADE UN ESCUCHADOR/LISTENER A CADA UNO DE LOS BOTONES Y LES DA INTRUCCIONES PARA CUANDO SUCEDE EL EVENTO CLICK QUE TIENE NUSESTRO ESCUCHADOR
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const sonidoMarimba = new Howl({
      src: [`../assets/sounds/${sounds[i]}`], // Ruta del sonido
      volume: 1.0, // Puedes ajustar el volumen (0.0 a 1.0)
    });
    sonidoMarimba.play();
    buttons[i].classList.add("activo");
    setTimeout(() => {
      buttons[i].classList.remove("activo");
    }, 100);
  });
}

document.addEventListener("keydown", function (event) {
  for (let j = 0; j < keyboard.length; j++) {
    if (event.key.toLowerCase() === keyboard[j]) {
      const sonidoMarimba = new Howl({
        src: [`../assets/sounds/${sounds[j]}`], // Ruta del sonido
        volume: 1.0, // Puedes ajustar el volumen (0.0 a 1.0)
      });
      sonidoMarimba.play();

      buttons[j].classList.add("activo");
      setTimeout(() => {
        buttons[j].classList.remove("activo");
      }, 100);
      break;
    }
  }
});
