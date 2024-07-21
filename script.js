const losSimpsons = document.querySelectorAll('div > img');
const cuadro = document.getElementById('text_block');
let currentAudio;
const frases = {
    Homero:
    [
        {
            text: '"A la grande le puse Cuca".',
            audio: new Audio('./frases/homero/cuca.mp3')
        },
        {
            text: '"Estupido y sensual Flanders".',
            audio: new Audio('./frases/homero/flanders.mp3')
        },
        {
            text: '"Hable mas fuerte, que tengo una toalla".',
            audio: new Audio('./frases/homero/toalla.mp3')
        },
        {
            text: '"Pequeno demonio".',
            audio: new Audio('./frases/homero/demonio.mp3')
        },
        {
            text: '-"Tiene todo el dinero del mundo, pero hay algo que no puede comprar". -"Que?" -"Hmm, un dinosaurio".',
            audio: new Audio('./frases/homero/dinosaurio.mp3')
        },
        {
            text: '"La puerca esta en la pocilga".',
            audio: new Audio('./frases/homero/puerca.mp3')
        },
        {
            text: '"En esta casa obecedemos las leyes de la termodinamica".',
            audio: new Audio('./frases/homero/termodinamica.mp3')
        },
        {
            text: '"Y si era tan listo por que se murio?".',
            audio: new Audio('./frases/homero/listo.mp3')
        }
    ],
    Marge:
    [
        {
            text: '"Hmmm".',
            audio: new Audio('./frases/marge/hmmm.mp3')
        },
        {
            text: '"En un momento asi, solo se puede reir...".',
            audio: new Audio('./frases/marge/reir.mp3')
        },
        {
            text: '-"Marge, quieres la ultima chuleta de puerco?" -"He sonado con el dia que dirias eso. Ohh, hmm, tu consideracion es tan deliciosa y las lagrimas son la salsa mas dulce". -"Anda la osa, empiezas a asustarme".',
            audio: new Audio('./frases/marge/chuleta.mp3')
        },
        {
            text: '"La punta de plastico de la agujeta de Bart... Una madre las reconoce".',
            audio: new Audio('./frases/marge/agujeta.mp3')
        },
        {
            text: '-"Yo voy al comedor a hacer una conversacion. El que quiera ir conmigo es bienvenido... Que tal, Marge? Como esta la familia? Que te importa. No quiero hablar de eso". -"Ya callate, Marge".',
            audio: new Audio('./frases/marge/callate.mp3')
        }
    ],
    Bart:
    [
        {
            text: '"Ay, caramba".',
            audio: new Audio('./frases/bart/caramba.mp3')
        },
        {
            text: '"Yo no fui".',
            audio: new Audio('./frases/bart/fui.mp3') 
        },
        {
            text: '"Que te paso, viejo? Antes eras chevere".',
            audio: new Audio('./frases/bart/chevere.mp3')
        },
        {
            text: '"Nino rata? Eso ofende, viejo".',
            audio: new Audio('./frases/bart/rata.mp3')
        },
        {
            text: '"Soy el ojon, vengo de urano".',
            audio: new Audio('./frases/bart/urano.mp3')
        },
        {
            text: '"Solo hay una cosa que hacer en un momento asi... Caminar".',
            audio: new Audio('./frases/bart/caminar.mp3')
        },
        {
            text: '"No vives de ensalada. No vives de ensalada. No vives de ensalada. No vives de ensalada".',
            audio: new Audio('./frases/bart/ensalada.mp3')
        }
    ],
    Lisa:
    [
        {
            text: '-"Un momento. Los rinocerontes no nacen en huevos". -"Que acabas de ver, Lisa?", -"Pues si, pero..." -"Que acabas de ver?".',
            audio: new Audio('./frases/lisa/rinocerontes.mp3')
        },
        {
            text: '"No es cierto. Usted esta mal. Todo este maldito sistema esta mal".',
            audio: new Audio('./frases/lisa/sistema.mp3')
        },
        {
            text: '-"Adios, Lisa preciosa. Estaras bien. Solo lee la nota". -"Tu eres Lisa Simpson".',
            audio: new Audio('./frases/lisa/maestro.mp3')
        },
        {
            text: '-"Por favor, Baby. Espere toda mi vida para oirte hablar. No tienes algo importante que decir?". -"No me preguntes. Solo soy una chica".',
            audio: new Audio('./frases/lisa/stacy.mp3')
        }
    ],
    Maggie:
    [
        {
            text: '"Papi".',
            audio: new Audio('./frases/maggie/papi.mp3')
        },
        {
            text: 'Sonido de chupete',
            audio: new Audio('./frases/maggie/chupete.mp3')
        }
    ]
}

losSimpsons.forEach((personaje) => {
    personaje.addEventListener('click', function (e) {
        const personaje = e.target.name;
        const frase = obtenerFraseRandom(frases[personaje])
        cuadro.innerHTML = `<h1>${personaje}</h1><h3>${frase.text}</h3>`;
        if(frase.audio) {
            frase.audio.play();
            currentAudio = frase.audio;
        }
        cuadro.style.display = 'flex';
    })
})

cuadro.addEventListener('click', function () {
    cuadro.style.display = 'none';
    if(currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
})

function obtenerFraseRandom(frases) {
    const numAleatorio = Math.floor(Math.random() * frases.length);
    const fraseAleatoria = frases[numAleatorio];
    return fraseAleatoria;
}