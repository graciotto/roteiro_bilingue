function mostrarSecao(id) {

    const secoes = document.querySelectorAll('.secao');

    secoes.forEach(secao => {
        secao.classList.remove('ativa');
    });

    document.getElementById(id).classList.add('ativa');
}

/* ABRIR VÍDEO */

function abrirVideo(videoId) {

    const grid =
        document.getElementById('helloGrid');

    const playerContainer =
        document.getElementById('playerContainer');

    const player =
        document.getElementById('youtubePlayer');

    /* ESCONDE A GRADE */

    grid.classList.add('hidden');

    /* MOSTRA PLAYER */

    playerContainer.classList.remove('hidden');

    /* DEFINE O VÍDEO */

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    /* FULLSCREEN */

    if (player.requestFullscreen) {
        player.requestFullscreen();
    }
}

document.addEventListener('fullscreenchange', () => {

    if (!document.fullscreenElement) {

        fecharVideo();
    }
});

function fecharVideo() {

    const grid =
        document.getElementById('helloGrid');

    const playerContainer =
        document.getElementById('playerContainer');

    const player =
        document.getElementById('youtubePlayer');

    /* MOSTRA A GRADE */

    grid.classList.remove('hidden');

    /* ESCONDE PLAYER */

    playerContainer.classList.add('hidden');

    /* PARA O VÍDEO */

    player.src = "";
}

/* DATA ATUAL */

const hoje = new Date();

/* DIA DA SEMANA */

const diaSemana = hoje.getDay();

/* MÊS */

const mesAtual = hoje.getMonth();

/* LISTAS */

const diasCards =
    document.querySelectorAll('.days-column .board-card');

const mesesCards =
    document.querySelectorAll('.months-column .board-card');

/* DESTACA DIA */

if (diasCards[diaSemana]) {

    diasCards[diaSemana]
        .classList.add('current-day');
}

/* DESTACA MÊS */

if (mesesCards[mesAtual]) {

    mesesCards[mesAtual]
        .classList.add('current-month');
}

/* ESTAÇÃO */

let classeEstacao = '';

if (mesAtual === 11 || mesAtual <= 1) {

    classeEstacao = 'season-summer';

} else if (mesAtual >= 2 && mesAtual <= 4) {

    classeEstacao = 'season-autumn';

} else if (mesAtual >= 5 && mesAtual <= 7) {

    classeEstacao = 'season-winter';

} else {

    classeEstacao = 'season-spring';
}

/* APLICA CORES */

document
.querySelectorAll('.calendar-grid div')
.forEach(dia => {

    dia.classList.add(classeEstacao);
});

if (diasCards[diaSemana]) {

    diasCards[diaSemana]
        .classList.add(classeEstacao);
}

if (mesesCards[mesAtual]) {

    mesesCards[mesAtual]
        .classList.add(classeEstacao);
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

/* MOSTRAR */

rainyCard.addEventListener('mouseenter', () => {

    rainOverlay.classList.add('active');

});

/* ESCONDER */

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

/* SUNNY */

sunnyCard.addEventListener('mouseenter', () => {

    body.style.background =
        'linear-gradient(to bottom, #6ec6ff, #b3e5fc)';
});

sunnyCard.addEventListener('mouseleave', () => {

    body.style.background =
    'linear-gradient(to bottom, #d8ece8, #cfe0df)';
});

/* CLOUDY */

cloudyCard.addEventListener('mouseenter', () => {

    body.style.background =
        'linear-gradient(to bottom, #b0bec5, #cfd8dc)';
});

cloudyCard.addEventListener('mouseleave', () => {

    body.style.background =
    'linear-gradient(to bottom, #d8ece8, #cfe0df)';
});

/* RAINY */

rainyCard.addEventListener('mouseenter', () => {

    body.style.background =
        'linear-gradient(to bottom, #5c6b73, #90a4ae)';
});

rainyCard.addEventListener('mouseleave', () => {

    body.style.background =
    'linear-gradient(to bottom, #d8ece8, #cfe0df)';
});

/* =========================
   PARTLY CLOUDY
========================= */

const partlyCard = document.querySelector('.partly');

const partlyOverlay =
    document.getElementById('partlyOverlay');

partlyCard.addEventListener('mouseenter', () => {

    partlyOverlay.classList.add('active');

    body.style.background =
        'linear-gradient(to bottom, #7fd3ff, #c4ecff)';
});

partlyCard.addEventListener('mouseleave', () => {

    partlyOverlay.classList.remove('active');

    body.style.background =
        'linear-gradient(to bottom, #d8ece8, #cfe0df)';
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

    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
];

const calendarMonth =
    document.getElementById('calendarMonth');

calendarMonth.innerHTML =
    `${months[currentMonth]} ${currentYear}`;

/* CALENDÁRIO */

const calendarGrid =
    document.getElementById('calendarGrid');

const daysInMonth =
    new Date(currentYear, currentMonth + 1, 0).getDate();

for (let i = 1; i <= daysInMonth; i++) {

    const day = document.createElement('div');

    day.innerText = i;

    /* ESTAÇÕES */

    if (
        currentMonth === 11 ||
        currentMonth === 0 ||
        currentMonth === 1
    ) {

        day.classList.add('season-summer');
    }

    else if (
        currentMonth >= 2 &&
        currentMonth <= 4
    ) {

        day.classList.add('season-autumn');
    }

    else if (
        currentMonth >= 5 &&
        currentMonth <= 7
    ) {

        day.classList.add('season-winter');
    }

    else {

        day.classList.add('season-spring');
    }

    /* DIA ATUAL */

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

if (
    currentMonth === 11 ||
    currentMonth === 0 ||
    currentMonth === 1
) {

    activateSeason('summer-card');
}

else if (
    currentMonth >= 2 &&
    currentMonth <= 4
) {

    activateSeason('autumn-card');
}

else if (
    currentMonth >= 5 &&
    currentMonth <= 7
) {

    activateSeason('winter-card');
}

else {

    activateSeason('spring-card');
}

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

    /* ABRIR */

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    container.classList.remove('hidden');

    /* FULLSCREEN */

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    /* AO SAIR DA TELA CHEIA */

    function fecharVideo() {

        if (!document.fullscreenElement) {

            container.classList.add('hidden');

            player.src = "";
        }
    }

    document.addEventListener(
        'fullscreenchange',
        fecharVideo
    );
}

/* =========================
   WHEEL SYSTEM
========================= */

/* BANCO */

let classrooms = {};

async function loadData() {

    const snap =
        await getDoc(
            doc(db, "wheel", "classrooms")
        );

    if (snap.exists()) {

        classrooms =
            snap.data().data || {};
    }

    updateClassroomSelect();

    drawWheel();
}

/* TURMA ATUAL */

let currentClassroom = null;

/* ELEMENTOS */

const classroomSelect =
    document.getElementById(
        'classroomSelect'
    );

const studentsList =
    document.getElementById(
        'studentsList'
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

        doc(db, "wheel", "classrooms"),

        {
            data: classrooms
        }
    );
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

function createClassroom() {

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
   INICIAR
========================= */    

/* =========================
   ROLETA
========================= */

let canvas;
let ctx;

window.addEventListener('load', () => {

    canvas =
        document.getElementById(
            'wheelCanvas'
        );

    ctx =
        canvas.getContext('2d');
    console.log(canvas);
    console.log(ctx);

    loadData();
});

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

    /* GARANTIR CANVAS */

    if (!canvas || !ctx) return;

    /* GARANTIR TURMA */

    if (!currentClassroom) {

        const keys = Object.keys(classrooms);

        if (keys.length === 0) return;

        currentClassroom = keys[0];
    }

    const students =
        classrooms[currentClassroom].wheel;

    /* LIMPAR */

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

        /* FATIA */

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
   ATUALIZAR DESENHO
========================= */

//updateClassroomSelect();

//drawWheel();

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

    /* REMOVE DOS ALUNOS */

    classroom.students =
        classroom.students.filter(
            s => s !== student
        );

    /* REMOVE DA ROLETA */

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

    /* ESCONDER GRID */

    grid.classList.add('hidden');

    /* MOSTRAR PLAYER */

    playerContainer.classList.remove(
        'hidden'
    );

    /* VIDEO */

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    /* FULLSCREEN */

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    /* FECHAR */

    function fecharGameVideo() {

        if (!document.fullscreenElement) {

            grid.classList.remove(
                'hidden'
            );

            playerContainer.classList.add(
                'hidden'
            );

            player.src = "";
        }
    }

    document.addEventListener(
        'fullscreenchange',
        fecharGameVideo
    );
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

    /* DEFINE VÍDEO */

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    /* MOSTRA PLAYER */

    container.classList.remove('hidden');

    /* FULLSCREEN */

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    /* FECHAR AO SAIR */

    function fecharCircleVideo() {

        if (!document.fullscreenElement) {

            container.classList.add(
                'hidden'
            );

            player.src = "";
        }
    }

    document.addEventListener(
        'fullscreenchange',
        fecharCircleVideo
    );
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

    /* DEFINE VÍDEO */

    player.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    /* MOSTRA PLAYER */

    container.classList.remove('hidden');

    /* FULLSCREEN */

    if (player.requestFullscreen) {

        player.requestFullscreen();
    }

    /* FECHAR AO SAIR */

    function fecharCleanupVideo() {

        if (!document.fullscreenElement) {

            container.classList.add(
                'hidden'
            );

            player.src = "";
        }
    }

    document.addEventListener(
        'fullscreenchange',
        fecharCleanupVideo
    );
}
