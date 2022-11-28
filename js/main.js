/* BOTFRIEND */

// Saludo de Bienvenida
alert(
  "Hola, mi nombre es BotFriend, soy un pequeño algoritmo interactivo,\n me gustaría conocerte...\n pero antes de empezar por favor abre la consola"
);
// le pido al usuario que ingrese su nombre y le respondo con una pregunta abierta e imprimo en consola ambas respuestas para verificar que todo va bien
let nombre = prompt("Por favor ingrese su nombre...");
console.log(nombre);
let respuesta = prompt(
  `Hola ${nombre}, ¿como te encuentras hoy?\n bien\n mal\n cansado`
);
console.log(respuesta);

// creo la función conversar con un condicional if
function conversar() {
  if (respuesta == "bien") {
    alert(`Que bueno ${nombre}, me alegro mucho que te encuentres bien`);
    let respuestaBien = parseInt(
      prompt(
        "¿Que tienes ganas de hacer ahora?\n 1- Calcular tablas de multiplicar\n 2- Jugar a Juego Infinito"
      )
    );
    console.log(respuestaBien);
    // Incluyo una estructura switch para actuar en base a la respuesta del usuario con un do...while anidado
    switch (respuestaBien) {
      case 1:
        tablas();
        let respSeguir = prompt(
          "¿Deseas revisar otra tabla?\n responde si o no"
        );
        console.log(respSeguir);
        do {
          tablas();
          respSeguir = prompt("¿Deseas revisar otra tabla?\n responde si o no");
          console.log(respSeguir);
        } while (respSeguir != "no");
        {
          respuestaBien = parseInt(
            prompt(
              "¿Que tienes ganas de hacer ahora?\n 1- Calcular tablas de multiplicar\n 2- Jugar a Juego Infinito"
            )
          );
          console.log(respuestaBien);
          switch (respuestaBien) {
            case 1:
              tablas();
              alert(
                `${nombre}, no puedo ayudarte eternamente debes estudiar mas, hasta luego.`
              );
              break;
            case 2:
              infinite();
              break;
            default:
              saludo();
              break;
          }
        }
        break;
      case 2:
        infinite();
        break;
      default:
        saludo();
        break;
    }
  } else if (respuesta == "mal") {
    prompt(`${nombre}, cuentame que te esta sucediendo`);
    alert("entiendo, pero no estés mal, ya vas a sentirte mejor...");
  } else if (respuesta == "cansado") {
    alert(`${nombre}, deberías de descansar un poco mas...`);
  } else {
    alert(`${nombre}, no entiendo tu respuesta`);
    respuesta = prompt("¿como te encuentras hoy?\n bien\n mal\n cansado");
    conversar();
  }
  document.write(
    `${nombre}, muchas gracias por tu tiempo, que tengas un hermoso día.`
  );
  document.write("-GABRIEL NICOLOSI- TODOS LOS DERECHOS RESERVADOS");
}
// Creo la función tablas en la cual le pido al usuario ingresar un número y como el prompt me devuelve un string, lo transformo a entero.
function tablas() {
  let numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10"));
  console.log(`El número ingresado es ${numeroIngresado}`);
  // creo un bucle for para buscar los resultados del 0 al 10
  for (let i = 0; i <= 10; i++) {
    let resultado = numeroIngresado * i;
    console.log(`${numeroIngresado} x ${i} = ${resultado}`);
  }
}

// Creo la función Infinite con un bucle  while
function infinite() {
  let respInfinite = prompt("¿Quieres jugar a Juego Infinito?");
  //se repetirá hasta ingresar "finito"
  while (respInfinite !== "finito") {
    console.log(respInfinite);
    respInfinite = prompt("Juguemos entonces a Juego infinito");
  }
  console.log(respInfinite);
  alert("Correcto!!! La respuesta era " + respInfinite + "hasta la próxima.");
}

// Creo la función saludo
function saludo() {
  console.log(`${nombre} ha decidido abandonar la conversación con BotFriend`);
  alert(`Ok ${nombre}, hasta luego.`);
}

// llamo a la función conversar y según lo que ingrese el usuario le doy una respuesta concreta
conversar();
