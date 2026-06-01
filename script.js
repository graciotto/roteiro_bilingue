/* =========================
   FIREBASE
========================= */
import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


/* CONFIG */

const firebaseConfig = {

    apiKey: "AIzaSyD1klD2pIp9OVFKKT9P0rKx6QnCUA1chQQ",

    authDomain: "roteiro-bilingue.firebaseapp.com",

    projectId: "roteiro-bilingue",

    storageBucket: "roteiro-bilingue.firebasestorage.app",

    messagingSenderId: "791175942403",

    appId: "1:791175942403:web:973de41f38fd91761c5936"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


/* =========================
   NAVEGAÇÃO
========================= */

function mostrarSecao(id) {

    const secoes = document.querySelectorAll('.secao');

    secoes.forEach(secao => {
        secao.classList.remove('ativa');
    });

    document.getElementById(id).classList.add('ativa');
}

/* =========================
   HELLO SONGS VIDEO
========================= */

function abrirVideo(videoId) {

    const grid =
        document.getElementById('helloGrid');

    const playerContainer =
        document.getElementById('playerContainer');

    const player =
        document.getElementById('youtubePlayer');

    grid.classList.add('hidden');

    playerContainer.classList.remove('hidden');

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    if (player.requestFullscreen) {
        player.requestFullscreen();
    }

    document.onfullscreenchange = () => {

        if (!document.fullscreenElement) {

            grid.classList.remove('hidden');

            playerContainer.classList.add('hidden');

            player.src = "";
        }
    };
}

function fecharVideo() {

    const grid =
        document.getElementById('helloGrid');

    const playerContainer =
        document.getElementById('playerContainer');

    const player =
        document.getElementById('youtubePlayer');

    grid.classList.remove('hidden');

    playerContainer.classList.add('hidden');

    player.src = "";
}

/* =========================
   SUNNY EFFECT
========================= */

const sunnyCard = document.querySelector('.sunny');

const sunOverlay = document.getElementById('sunOverlay');

sunnyCard.addEventListener('mouseenter', () => {

    sunOverlay.classList.add('active');

});

sunnyCard.addEventListener('mouseleave', () => {

    sunOverlay.classList.remove('active');

});

/* =========================
   RAIN EFFECT
========================= */

const rainyCard = document.querySelector('.rainy');

const rainOverlay = document.getElementById('rainOverlay');

/* CRIAR GOTAS */

for (let i = 0; i < 120; i++) {

    const drop = document.createElement('div');

    drop.classList.add('raindrop');

    drop.style.left = Math.random() * 100 + 'vw';

    drop.style.animationDuration =
        (0.6 + Math.random() * 0.6) + 's';

    drop.style.opacity =
        0.3 + Math.random();

    drop.style.height =
        40 + Math.random() * 80 + 'px';

    rainOverlay.appendChild(drop);
}

rainyCard.addEventListener('mouseenter', () => {

    rainOverlay.classList.add('active');

});

rainyCard.addEventListener('mouseleave', () => {

    rainOverlay.classList.remove('active');

});

/* =========================
   CLOUDY EFFECT
========================= */

const cloudyCard = document.querySelector('.cloudy');

const cloudOverlay = document.getElementById('cloudOverlay');

cloudyCard.addEventListener('mouseenter', () => {

    cloudOverlay.classList.add('active');

});

cloudyCard.addEventListener('mouseleave', () => {

    cloudOverlay.classList.remove('active');

});

/* =========================
   BACKGROUND EFFECTS
========================= */

const body = document.body;

const ALL_BG_CLASSES = [
    'bg-sunny', 'bg-cloudy', 'bg-rainy', 'bg-partly',
    'bg-hot', 'bg-warm', 'bg-cool', 'bg-cold'
];

function setBodyBg(cls) {
    body.style.background = '';
    ALL_BG_CLASSES.forEach(c => body.classList.remove(c));
    if (cls) body.classList.add(cls);
}

/* SUNNY */

sunnyCard.addEventListener('mouseenter', () => {
    setBodyBg('bg-sunny');
});

sunnyCard.addEventListener('mouseleave', () => {
    setBodyBg(null);
});

/* CLOUDY */

cloudyCard.addEventListener('mouseenter', () => {
    setBodyBg('bg-cloudy');
});

cloudyCard.addEventListener('mouseleave', () => {
    setBodyBg(null);
});

/* RAINY */

rainyCard.addEventListener('mouseenter', () => {
    setBodyBg('bg-rainy');
});

rainyCard.addEventListener('mouseleave', () => {
    setBodyBg(null);
});

/* =========================
   PARTLY CLOUDY
========================= */

const partlyCard = document.querySelector('.partly');

const partlyOverlay =
    document.getElementById('partlyOverlay');

partlyCard.addEventListener('mouseenter', () => {

    partlyOverlay.classList.add('active');

    setBodyBg('bg-partly');
});

partlyCard.addEventListener('mouseleave', () => {

    partlyOverlay.classList.remove('active');

    setBodyBg(null);
});

/* =========================
   TEMPERATURE EFFECTS
========================= */

const fireOverlay  = document.getElementById('fireOverlay');
const warmOverlay  = document.getElementById('warmOverlay');
const coolOverlay  = document.getElementById('coolOverlay');
const coldOverlay  = document.getElementById('coldOverlay');

/* CHAMAS CSS (HOT) */

const flamesContainer =
    document.getElementById('flamesContainer');

/* Labareda: wide base, tip rises and fades */

for (let i = 0; i < 24; i++) {

    const flame = document.createElement('div');
    flame.classList.add('css-flame');

    flame.style.left =
        (i * 4.4 + Math.random() * 3 - 1.5) + 'vw';

    const w = 70 + Math.random() * 90;
    flame.style.width  = w + 'px';
    flame.style.height = (120 + Math.random() * 160) + 'px';

    flame.style.animationDuration =
        (1.2 + Math.random() * 1.6) + 's';
    flame.style.animationDelay =
        (-Math.random() * 2.5) + 's';

    flamesContainer.appendChild(flame);
}

/* WARM ORBS */

for (let i = 0; i < 18; i++) {

    const orb = document.createElement('div');
    orb.classList.add('warm-orb');

    orb.style.left = (5 + Math.random() * 90) + 'vw';
    orb.style.top  = (5 + Math.random() * 90) + 'vh';

    const size = 40 + Math.random() * 120;
    orb.style.width  = size + 'px';
    orb.style.height = size + 'px';

    orb.style.animationDuration =
        (4 + Math.random() * 6) + 's';
    orb.style.animationDelay =
        (-Math.random() * 6) + 's';

    warmOverlay.appendChild(orb);
}

/* FOLHAS (COOL) */

const leafEmojis = ['🍃', '🌿', '🍀', '🍂'];

for (let i = 0; i < 28; i++) {

    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    leaf.innerHTML =
        leafEmojis[Math.floor(Math.random() * leafEmojis.length)];

    leaf.style.top      = (5 + Math.random() * 88) + 'vh';
    leaf.style.left     = '110vw';
    leaf.style.fontSize = (18 + Math.random() * 28) + 'px';

    leaf.style.animationDuration =
        (6 + Math.random() * 8) + 's';
    leaf.style.animationDelay =
        (-Math.random() * 8) + 's';

    leaf.style.setProperty(
        '--bob1',
        (Math.random() * 120 - 60) + 'px'
    );
    leaf.style.setProperty(
        '--bob2',
        (Math.random() * 150 - 75) + 'px'
    );
    leaf.style.setProperty(
        '--rot-s',
        Math.floor(Math.random() * 360) + 'deg'
    );

    coolOverlay.appendChild(leaf);
}

/* SNOWFLAKES (COLD) */

const snowChars = ['❄', '❅', '❆', '·', '•'];

for (let i = 0; i < 70; i++) {

    const flake = document.createElement('div');
    flake.classList.add('snowflake');

    flake.innerHTML =
        snowChars[Math.floor(Math.random() * snowChars.length)];

    flake.style.left    = Math.random() * 100 + 'vw';
    flake.style.top     = '-30px';
    flake.style.fontSize =
        (12 + Math.random() * 24) + 'px';

    flake.style.animationDuration =
        (3 + Math.random() * 5) + 's';
    flake.style.animationDelay =
        (-Math.random() * 5) + 's';

    flake.style.setProperty(
        '--drift',
        (Math.random() - 0.5) * 150 + 'px'
    );

    coldOverlay.appendChild(flake);
}

/* =========================
   AUDIO — HOT
========================= */

function playHotSound() {

    try {

        const ctx =
            new (window.AudioContext ||
                 window.webkitAudioContext)();

        /* SIBILÂNCIA ASCENDENTE */

        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(
            900, ctx.currentTime + 0.35
        );

        gain.gain.setValueAtTime(0.35, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001, ctx.currentTime + 0.5
        );

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);

        /* ACORDE CÔMICO */

        setTimeout(() => {

            const ctx2 = new AudioContext();

            [330, 415, 523].forEach(freq => {

                const o = ctx2.createOscillator();
                const g = ctx2.createGain();

                o.connect(g);
                g.connect(ctx2.destination);

                o.type = 'triangle';
                o.frequency.value = freq;

                g.gain.setValueAtTime(0.18, ctx2.currentTime);
                g.gain.exponentialRampToValueAtTime(
                    0.001, ctx2.currentTime + 0.9
                );

                o.start(ctx2.currentTime);
                o.stop(ctx2.currentTime + 0.9);
            });

        }, 400);

    } catch(e) {}
}

/* =========================
   AUDIO — COLD
========================= */

function playColdSound() {

    try {

        const ctx =
            new (window.AudioContext ||
                 window.webkitAudioContext)();

        const osc      = ctx.createOscillator();
        const lfo      = ctx.createOscillator();
        const lfoGain  = ctx.createGain();
        const mainGain = ctx.createGain();

        /* TREMULAÇÃO (BRR) */

        lfo.type            = 'sine';
        lfo.frequency.value = 14;
        lfoGain.gain.value  = 90;

        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        /* TOM DESCENDENTE */

        osc.type = 'square';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(
            160, ctx.currentTime + 2
        );

        osc.connect(mainGain);
        mainGain.connect(ctx.destination);

        mainGain.gain.setValueAtTime(0.22, ctx.currentTime);
        mainGain.gain.exponentialRampToValueAtTime(
            0.001, ctx.currentTime + 2
        );

        lfo.start(ctx.currentTime);
        osc.start(ctx.currentTime);
        lfo.stop(ctx.currentTime + 2);
        osc.stop(ctx.currentTime + 2);

    } catch(e) {}
}

/* =========================
   HOT CARD
========================= */

const hotCard = document.querySelector('.hot');

hotCard.addEventListener('mouseenter', () => {

    fireOverlay.classList.add('active');

    setBodyBg('bg-hot');

    playHotSound();
});

hotCard.addEventListener('mouseleave', () => {

    fireOverlay.classList.remove('active');

    setBodyBg(null);
});

/* =========================
   WARM CARD
========================= */

const warmCard = document.querySelector('.warm');

warmCard.addEventListener('mouseenter', () => {

    warmOverlay.classList.add('active');

    setBodyBg('bg-warm');
});

warmCard.addEventListener('mouseleave', () => {

    warmOverlay.classList.remove('active');

    setBodyBg(null);
});

/* =========================
   COOL CARD
========================= */

const coolCard = document.querySelector('.cool');

coolCard.addEventListener('mouseenter', () => {

    coolOverlay.classList.add('active');

    setBodyBg('bg-cool');
});

coolCard.addEventListener('mouseleave', () => {

    coolOverlay.classList.remove('active');

    setBodyBg(null);
});

/* =========================
   COLD CARD
========================= */

const coldCard = document.querySelector('.cold');

coldCard.addEventListener('mouseenter', () => {

    coldOverlay.classList.add('active');

    setBodyBg('bg-cold');

    playColdSound();
});

coldCard.addEventListener('mouseleave', () => {

    coldOverlay.classList.remove('active');

    setBodyBg(null);
});

/* =========================
   AUTO CALENDAR
========================= */

const now = new Date();

const currentDay = now.getDate();

const currentMonth = now.getMonth();

const currentYear = now.getFullYear();

const currentWeekDay = now.getDay();

/* NOMES */

const months = [

    "JANUARY", "FEBRUARY", "MARCH",
    "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER",
    "OCTOBER", "NOVEMBER", "DECEMBER"
];

const calendarMonth =
    document.getElementById('calendarMonth');

calendarMonth.innerHTML =
    `${months[currentMonth]} ${currentYear}`;

/* ESTAÇÃO POR DATA EXATA (Hemisfério Sul) */

function getSeasonClass(day, month) {

    /* Verão: 21/Dez – 19/Mar */
    if (month === 11 && day >= 21) return 'season-summer';
    if (month === 0 || month === 1)  return 'season-summer';
    if (month === 2 && day <= 19)    return 'season-summer';

    /* Outono: 20/Mar – 20/Jun */
    if (month === 2 && day >= 20)    return 'season-autumn';
    if (month === 3 || month === 4)  return 'season-autumn';
    if (month === 5 && day <= 20)    return 'season-autumn';

    /* Inverno: 21/Jun – 22/Set */
    if (month === 5 && day >= 21)    return 'season-winter';
    if (month === 6 || month === 7)  return 'season-winter';
    if (month === 8 && day <= 22)    return 'season-winter';

    /* Primavera: 23/Set – 20/Dez */
    return 'season-spring';
}

/* CALENDÁRIO */

const calendarGrid =
    document.getElementById('calendarGrid');

const daysInMonth =
    new Date(currentYear, currentMonth + 1, 0).getDate();

const firstWeekDay =
    new Date(currentYear, currentMonth, 1).getDay();

/* CABEÇALHO DE DIAS DA SEMANA */

const dayNames =
    ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

dayNames.forEach(name => {

    const header = document.createElement('div');
    header.textContent = name;
    header.classList.add('calendar-day-header');
    calendarGrid.appendChild(header);
});

/* CÉLULAS VAZIAS PARA OFFSET */

for (let i = 0; i < firstWeekDay; i++) {

    const empty = document.createElement('div');
    empty.classList.add('calendar-day-empty');
    calendarGrid.appendChild(empty);
}

/* DIAS DO MÊS */

for (let i = 1; i <= daysInMonth; i++) {

    const day = document.createElement('div');

    day.innerText = i;

    day.classList.add(getSeasonClass(i, currentMonth));

    if (i === currentDay) {

        day.classList.add('current-day');
    }

    calendarGrid.appendChild(day);
}

/* DIA DA SEMANA */

const weekDays =
    document.querySelectorAll('.day-name');

weekDays[currentWeekDay]
    .classList.add('current-day');

/* MÊS ATUAL */

const monthCards =
    document.querySelectorAll('.month-name');

monthCards[currentMonth]
    .classList.add('current-month');

/* ESTAÇÃO ATUAL */

function activateSeason(cardClass) {

    document
        .querySelector(`.${cardClass}`)
        .classList.add('active-season');
}

const seasonCardMap = {
    'season-summer': 'summer-card',
    'season-autumn': 'autumn-card',
    'season-winter': 'winter-card',
    'season-spring': 'spring-card'
};

activateSeason(
    seasonCardMap[getSeasonClass(currentDay, currentMonth)]
);

/* =========================
   WEATHER VIDEOS
========================= */

function abrirWeatherVideo(videoId) {

    const player =
        document.getElementById(
            'weatherYoutubePlayer'
        );

    const container =
        document.getElementById(
            'weatherPlayerContainer'
        );

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    container.classList.remove('hidden');

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    document.onfullscreenchange = () => {

        if (!document.fullscreenElement) {

            container.classList.add('hidden');

            player.src = "";
        }
    };
}

/* =========================
   WHEEL SYSTEM
========================= */

/* BANCO */

let classrooms = {};

/* TURMA ATUAL */

let currentClassroom = null;

/* ELEMENTOS */

const classroomSelect =
    document.getElementById(
        'classroomSelect'
    );

const availableStudents =
    document.getElementById(
        'availableStudents'
    );

const wheelStudentsList =
    document.getElementById(
        'wheelStudentsList'
    );

/* =========================
   SALVAR
========================= */

async function saveData() {

    await setDoc(

        doc(
            db,
            "wheel",
            "classrooms"
        ),

        {
            data: classrooms
        }
    );
}

async function loadData() {

    try {

        const snap =
            await getDoc(
                doc(
                    db,
                    "wheel",
                    "classrooms"
                )
            );

        if (snap.exists()) {

            classrooms =
                snap.data().data || {};
        }

        updateClassroomSelect();

        drawWheel();

    }

    catch(error) {

        console.error(error);
    }
}

/* =========================
   ATUALIZAR SELECT
========================= */

function updateClassroomSelect() {

    classroomSelect.innerHTML = '';

    Object.keys(classrooms)
        .forEach(classroom => {

        const option =
            document.createElement('option');

        option.value = classroom;

        option.textContent = classroom;

        classroomSelect.appendChild(option);
    });

    if (
        Object.keys(classrooms).length > 0
    ) {

        currentClassroom =
            Object.keys(classrooms)[0];

        classroomSelect.value =
            currentClassroom;

        loadClassroom();
    }
}

/* =========================
   CRIAR TURMA
========================= */

async function createClassroom() {

    const input =
        document.getElementById(
            'classroomInput'
        );

    const name =
        input.value.trim();

    if (!name) return;

    if (classrooms[name]) {

        alert('Classroom already exists.');

        return;
    }

    classrooms[name] = {

        students: [],

        wheel: []
    };

    saveData();

    updateClassroomSelect();

    classroomSelect.value = name;

    currentClassroom = name;

    loadClassroom();

    input.value = '';
}

/* =========================
   CARREGAR TURMA
========================= */

function loadClassroom() {

    currentClassroom =
        classroomSelect.value;

    drawWheel();

    renderStudents();
}

/* =========================
   RENDERIZAR
========================= */

function renderStudents() {

    availableStudents.innerHTML = '';

    wheelStudentsList.innerHTML = '';

    if (!currentClassroom) return;

    const classroom =
        classrooms[currentClassroom];

    /* DISPONÍVEIS */

    classroom.students.forEach(
        student => {

        const exists =
            classroom.wheel.includes(
                student
            );

        const item =
            document.createElement('div');

        item.className =
            'student-item';

        item.innerHTML = `

    <span>${student}</span>

    <div class="student-buttons">

        <button
            onclick="addToWheel('${student}')"
            ${exists ? 'disabled' : ''}>

            +

        </button>

        <button
            class="delete-student"
            onclick="deleteStudent('${student}')">

            🗑

        </button>

    </div>
`;

        availableStudents
            .appendChild(item);
    });

    /* ROLETA */

    classroom.wheel.forEach(
        student => {

        const item =
            document.createElement('div');

        item.className =
            'student-item';

        item.innerHTML = `

            <span>${student}</span>

            <button
                onclick="removeFromWheel('${student}')">

                X

            </button>
        `;

        wheelStudentsList
            .appendChild(item);
    });

    drawWheel();
}

/* =========================
   ADICIONAR À ROLETA
========================= */

function addToWheel(student) {

    const classroom =
        classrooms[currentClassroom];

    if (
        !classroom.wheel.includes(
            student
        )
    ) {

        classroom.wheel.push(student);

        saveData();

        renderStudents();
    }
}

/* =========================
   REMOVER DA ROLETA
========================= */

function removeFromWheel(student) {

    const classroom =
        classrooms[currentClassroom];

    classroom.wheel =
        classroom.wheel.filter(
            s => s !== student
        );

    saveData();

    renderStudents();
}

/* =========================
   ADICIONAR TODOS
========================= */

function addAllToWheel() {

    const classroom =
        classrooms[currentClassroom];

    classroom.wheel =
        [...classroom.students];

    saveData();

    renderStudents();
}

/* =========================
   ADICIONAR ALUNO
========================= */

function addStudent() {

    if (!currentClassroom) {

        alert('Create a classroom first.');

        return;
    }

    const input =
        document.getElementById(
            'studentInput'
        );

    const name =
        input.value.trim();

    if (!name) return;

    const classroom =
        classrooms[currentClassroom];

    classroom.students.push(name);

    classroom.wheel.push(name);

    saveData();

    renderStudents();

    input.value = '';
}

/* =========================
   REMOVER ALUNO
========================= */

function removeStudent(student) {

    const classroom =
        classrooms[currentClassroom];

    classroom.students =
        classroom.students.filter(
            s => s !== student
        );

    classroom.wheel =
        classroom.wheel.filter(
            s => s !== student
        );

    saveData();

    renderStudents();
}

/* =========================
   RESETAR ROLETA
========================= */

function resetWheel() {

    if (!currentClassroom) return;

    const classroom =
        classrooms[currentClassroom];

    classroom.wheel =
        [...classroom.students];

    saveData();

    renderStudents();

    alert('Wheel reset!');
}

/* =========================
   EXPORTAR JSON
========================= */

function exportData() {

    const data =
        JSON.stringify(
            classrooms,
            null,
            2
        );

    const blob =
        new Blob(
            [data],
            {
                type: 'application/json'
            }
        );

    const url =
        URL.createObjectURL(blob);

    const a =
        document.createElement('a');

    a.href = url;

    a.download =
        'classrooms.json';

    a.click();

    URL.revokeObjectURL(url);
}

/* =========================
   IMPORTAR JSON
========================= */

document
    .getElementById('importInput')
    .addEventListener(
        'change',
        function(event) {

    const file =
        event.target.files[0];

    if (!file) return;

    const reader =
        new FileReader();

    reader.onload = function(e) {

        classrooms =
            JSON.parse(e.target.result);

        saveData();

        updateClassroomSelect();

        alert('Imported successfully!');
    };

    reader.readAsText(file);
});

/* =========================
   ROLETA
========================= */

let canvas;
let ctx;

window.onload = async () => {

    canvas =
        document.getElementById(
            'wheelCanvas'
        );

    ctx =
        canvas.getContext('2d');

    await loadData();
};

let wheelRotation = 0;

let spinning = false;

/* CORES */

const wheelColors = [

    '#ff6b6b',
    '#ffd43b',
    '#69db7c',
    '#74c0fc',
    '#b197fc',
    '#ffa94d',
    '#f783ac'
];

/* =========================
   DESENHAR ROLETA
========================= */

function drawWheel() {

    if (!canvas || !ctx) return;

    if (!currentClassroom) {

        const keys = Object.keys(classrooms);

        if (keys.length === 0) return;

        currentClassroom = keys[0];
    }

    const students =
        classrooms[currentClassroom].wheel;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    /* ROLETA VAZIA */

    if (students.length === 0) {

        ctx.beginPath();

        ctx.arc(
            250,
            250,
            240,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = '#eeeeee';

        ctx.fill();

        ctx.fillStyle = '#555';

        ctx.font = 'bold 30px Arial';

        ctx.textAlign = 'center';

        ctx.textBaseline = 'middle';

        ctx.fillText(
            'EMPTY',
            250,
            250
        );

        return;
    }

    /* ÂNGULO */

    const sliceAngle =
        (Math.PI * 2) /
        students.length;

    /* DESENHAR FATIAS */

    students.forEach(
        (student, index) => {

        const startAngle =
            (index * sliceAngle) +
            wheelRotation;

        const endAngle =
            startAngle + sliceAngle;

        ctx.beginPath();

        ctx.moveTo(250, 250);

        ctx.arc(
            250,
            250,
            240,
            startAngle,
            endAngle
        );

        ctx.closePath();

        ctx.fillStyle =
            wheelColors[
                index %
                wheelColors.length
            ];

        ctx.fill();

        /* TEXTO */

        ctx.save();

        ctx.translate(250, 250);

        ctx.rotate(
            startAngle +
            sliceAngle / 2
        );

        ctx.fillStyle = 'white';

        ctx.font = 'bold 20px Arial';

        ctx.textAlign = 'right';

        ctx.textBaseline = 'middle';

        ctx.fillText(
            student,
            210,
            0
        );

        ctx.restore();
    });

    /* CENTRO */

    ctx.beginPath();

    ctx.arc(
        250,
        250,
        45,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = 'white';

    ctx.fill();

    /* SETA */

    ctx.beginPath();

    ctx.moveTo(250, 15);

    ctx.lineTo(220, 70);

    ctx.lineTo(280, 70);

    ctx.closePath();

    ctx.fillStyle = '#ff4d6d';

    ctx.fill();
}

/* =========================
   GIRAR ROLETA
========================= */

function spinWheel() {

    if (!currentClassroom) {

        alert(
            'Create a classroom first.'
        );

        return;
    }

    const students =
        classrooms[currentClassroom]
        .wheel;

    if (students.length === 0) {

        alert(
            'Wheel is empty.'
        );

        return;
    }

    if (spinning) return;

    spinning = true;

    const extraRotation =
        Math.PI * 10 +
        Math.random() *
        Math.PI * 4;

    const start =
        wheelRotation;

    const end =
        wheelRotation +
        extraRotation;

    const duration = 5000;

    const startTime =
        performance.now();

    function animate(now) {

        const elapsed =
            now - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );

        const ease =
            1 -
            Math.pow(
                1 - progress,
                3
            );

        wheelRotation =
            start +
            (end - start) * ease;

        drawWheel();

        if (progress < 1) {

            requestAnimationFrame(
                animate
            );
        }

        else {

            spinning = false;

            selectWinner();
        }
    }

    requestAnimationFrame(
        animate
    );
}

/* =========================
   VENCEDOR
========================= */

let currentWinner = null;

function selectWinner() {

    const students =
        classrooms[currentClassroom]
        .wheel;

    const angle =
        (Math.PI * 2) /
        students.length;

    const normalized =
        (
            (Math.PI * 1.5) -
            wheelRotation
        ) %
        (Math.PI * 2);

    let index =
        Math.floor(
            (
                normalized +
                Math.PI * 2
            ) / angle
        ) % students.length;

    const winner =
        students[index];

    currentWinner = winner;

    setTimeout(() => {

        document
            .getElementById('winnerName')
            .innerText = winner;

        document
            .getElementById('winnerPopup')
            .classList.remove('hidden');

    }, 500);
}

/* =========================
   EXCLUIR ALUNO
========================= */

function deleteStudent(student) {

    const confirmDelete =
        confirm(
            `Delete ${student}?`
        );

    if (!confirmDelete) return;

    const classroom =
        classrooms[currentClassroom];

    classroom.students =
        classroom.students.filter(
            s => s !== student
        );

    classroom.wheel =
        classroom.wheel.filter(
            s => s !== student
        );

    saveData();

    renderStudents();
}

/* =========================
   EXCLUIR TURMA
========================= */

function deleteClassroom() {

    if (!currentClassroom) return;

    const confirmDelete =
        confirm(
            `Delete classroom "${currentClassroom}"?`
        );

    if (!confirmDelete) return;

    delete classrooms[currentClassroom];

    saveData();

    currentClassroom = null;

    updateClassroomSelect();

    renderStudents();

    drawWheel();
}

/* =========================
   WINNER POPUP
========================= */

function closeWinnerPopup() {

    document
        .getElementById('winnerPopup')
        .classList.add('hidden');
}

function removeWinner() {

    classrooms[currentClassroom]
        .wheel =
        classrooms[currentClassroom]
        .wheel.filter(
            s => s !== currentWinner
        );

    saveData();

    renderStudents();

    closeWinnerPopup();
}

/* =========================
   GAMES VIDEOS
========================= */

function abrirGameVideo(videoId) {

    const grid =
        document.getElementById(
            'gamesGrid'
        );

    const playerContainer =
        document.getElementById(
            'gamesPlayerContainer'
        );

    const player =
        document.getElementById(
            'gamesYoutubePlayer'
        );

    grid.classList.add('hidden');

    playerContainer.classList.remove(
        'hidden'
    );

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    document.onfullscreenchange = () => {

        if (!document.fullscreenElement) {

            grid.classList.remove('hidden');

            playerContainer.classList.add('hidden');

            player.src = "";
        }
    };
}

/* =========================
   CIRCLE TIME VIDEO
========================= */

function abrirCircleVideo(videoId) {

    const player =
        document.getElementById(
            'circleYoutubePlayer'
        );

    const container =
        document.getElementById(
            'circlePlayerContainer'
        );

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    container.classList.remove('hidden');

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    document.onfullscreenchange = () => {

        if (!document.fullscreenElement) {

            container.classList.add('hidden');

            player.src = "";
        }
    };
}

/* =========================
   CLEAN UP VIDEO
========================= */

function abrirCleanupVideo(videoId) {

    const player =
        document.getElementById(
            'cleanupYoutubePlayer'
        );

    const container =
        document.getElementById(
            'cleanupPlayerContainer'
        );

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    container.classList.remove('hidden');

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    document.onfullscreenchange = () => {

        if (!document.fullscreenElement) {

            container.classList.add('hidden');

            player.src = "";
        }
    };
}

/* =========================
   BYE VIDEOS
========================= */

function abrirByeVideo(videoId) {

    const player =
        document.getElementById(
            'byeYoutubePlayer'
        );

    const container =
        document.getElementById(
            'byePlayerContainer'
        );

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    container.classList.remove('hidden');

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    document.onfullscreenchange = () => {

        if (!document.fullscreenElement) {

            container.classList.add('hidden');

            player.src = "";
        }
    };
}

/* =========================
   TIMER VIDEOS
========================= */

function abrirTimerVideo(videoId) {

    const player =
        document.getElementById(
            'timerYoutubePlayer'
        );

    const container =
        document.getElementById(
            'timerPlayerContainer'
        );

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    container.classList.remove('hidden');

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    document.onfullscreenchange = () => {

        if (!document.fullscreenElement) {

            container.classList.add('hidden');

            player.src = "";
        }
    };
}

/* =========================
   GLOBAL FUNCTIONS
========================= */

window.mostrarSecao = mostrarSecao;

window.abrirVideo = abrirVideo;

window.fecharVideo = fecharVideo;

window.abrirWeatherVideo = abrirWeatherVideo;

window.abrirGameVideo = abrirGameVideo;

window.abrirCircleVideo = abrirCircleVideo;

window.abrirCleanupVideo = abrirCleanupVideo;

window.abrirByeVideo = abrirByeVideo;

window.abrirTimerVideo = abrirTimerVideo;

window.createClassroom = createClassroom;

window.addStudent = addStudent;

window.addToWheel = addToWheel;

window.removeFromWheel = removeFromWheel;

window.addAllToWheel = addAllToWheel;

window.resetWheel = resetWheel;

window.spinWheel = spinWheel;

window.exportData = exportData;

window.removeStudent = removeStudent;

window.deleteStudent = deleteStudent;

window.deleteClassroom = deleteClassroom;

window.closeWinnerPopup = closeWinnerPopup;

window.removeWinner = removeWinner;

window.loadClassroom = loadClassroom;
