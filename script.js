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
        }
    ],
    Bart:
    [
        {
            text: '"Ay, caramba".'
        }
    ],
    Lisa:
    [
        {
            text: ''
        }
    ],
    Maggie:
    [
        {
            text: ''
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