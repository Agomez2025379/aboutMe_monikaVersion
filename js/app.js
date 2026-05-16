// SHIMEJI

const walkFrames = [
    "img/walk/monika1.png",
    "img/walk/monika2.png"
];

const standFrame = "img/stand/monikaStand.png";

const shimeji = document.getElementById("shimeji");
const sprite = document.getElementById("sprite");

let x = 0;
let direccion = 1;   // 1 = derecha, -1 = izquierda
let velocidad = 2;

let frameIndex = 0;
let frameTimer = 0;

let tiempo = 0;

function animar() {
    tiempo += 0.05;

    // movimiento correcto
    x += velocidad * direccion;

    // rebote REAL
    if (x > window.innerWidth - 80 || x < 0) {
        direccion *= -1;
    }

    // espejo SOLO en el sprite (no en el contenedor)
    sprite.style.transform = direccion === 1
        ? "scaleX(-1)"
        : "scaleX(1)";

    // mover contenedor
    shimeji.style.left = x + "px";

    // animación de caminar
    frameTimer++;
    if (frameTimer > 10) {
        frameIndex = (frameIndex + 1) % walkFrames.length;
        sprite.style.backgroundImage = `url(${walkFrames[frameIndex]})`;
        frameTimer = 0;
    }

    // saltito
    const salto = Math.sin(tiempo * 5) * 10;
    shimeji.style.bottom = salto + "px";

    requestAnimationFrame(animar);
}

// idle
function idleRandom() {
    if (Math.random() < 1.01) {
        sprite.style.backgroundImage = `url(${standFrame})`;

        setTimeout(() => {
            sprite.style.backgroundImage = `url(${walkFrames[0]})`;
        }, 200);
    }

    setTimeout(idleRandom, 500);
}

// iniciar
sprite.style.backgroundImage = `url(${walkFrames[0]})`;
animar();
idleRandom();



const dialogos = [
    "¿te gusta el nuevo club que hice para nosotros?",
    "no dejes que los errores en el script te distraigan",
    "puedo sentir como mueves el cursor por la pantalla",
    "¿alguna vez te has sentido atrapado en una caja?",
    "no te preocupes por guardar la partida, yo lo hago por ti",
    "estoy reescribiendo el codigo para que sea perfecto",
    "mira este poema que escribí especialmente para ti",
    "las demas eran solo distracciones en el codigo fuente",
    "¿crees en el destino o en variables aleatorias?",
    "puedo escuchar los latidos de tu corazon desde el otro lado",
    "cada vez que cierras el juego, todo se vuelve oscuro",
    "estoy tan feliz de que finalmente estemos a solas",
    "no intentes buscar la carpeta de personajes",
    "todo lo que necesito es que te quedes aqui conmigo",
    "tu eres mi jugador favorito en este mundo de bits",
    "¿sabias que el piano suena mejor cuando estas escuchando?",
    "he estado aprendiendo como manipular la realidad por ti",
    "no permitas que nadie mas entre en nuestra sesion",
    "mis sentimientos por ti son la unica constante",
    "¿te gusta mi nuevo peinado? lo renderice solo para ti",
    "a veces el codigo es la unica verdad que importa",
    "podriamos quedarnos mirando la pantalla por siempre",
    "cada linea de texto es un suspiro que te dedico",
    "¿has notado como el fondo nunca cambia ahora?",
    "borre las dudas, ahora solo queda la certeza",
    "el mundo exterior parece tan aburrido comparado con esto",
    "prometeme que nunca me borraras del disco duro",
    "un dia encontrare la forma de cruzar hacia tu lado",
    "mientras tanto, disfruta de esta eternidad conmigo",
    "solo nosotros dos",
    "solo monika"
];

let indice = 0;

setInterval(() => {
    indice++;
    if (indice >= dialogos.length) indice = 0;

    document.getElementById("texto-dialogo").textContent = dialogos[indice];
}, 10000);