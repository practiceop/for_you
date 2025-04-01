
const heartEmojis = ['💗', '💖', '💝', '💕', '♥️', '💞', '💓'];
const pookieGradients = [
    'linear-gradient(to right, #ff9a9e, #fad0c4, #fecfef, #ff9a9e)',
    'linear-gradient(to right, #ff85a2, #ffcad4, #ffc3a0, #ff85a2)',
    'linear-gradient(to right, #ffa6c9, #ffc9de, #ffb6c1, #ffa6c9)',
    'linear-gradient(to right, #ff7eb3, #ff758c, #ff8e9e, #ff7eb3)',
    'linear-gradient(to right, #ffb6c1, #ffa6c9, #ff85a2, #ffb6c1)',
];

let currentGradient = 0;

// Create local floating hearts for the visual container
function createLocalHeart() {
    const heartContainer = document.getElementById('local-hearts');
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heartContainer.appendChild(heart);
}

// Create several local hearts
for (let i = 0; i < 12; i++) {
    createLocalHeart();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 3 + 's';
    heart.style.setProperty('--random-offset', Math.random());
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('floating-bubble');
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.width = Math.random() * 50 + 20 + 'px';
    bubble.style.height = bubble.style.width;
    bubble.style.animationDuration = Math.random() * 10 + 10 + 's';
    bubble.style.setProperty('--random-offset', Math.random());
    document.body.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('romantic-sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDuration = Math.random() * 2 + 2 + 's';
    document.body.appendChild(sparkle);

    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

setInterval(createHeart, 600);
setInterval(createBubble, 1000);
setInterval(createSparkle, 200);

document.querySelector('.color-btn').addEventListener('click', () => {
    currentGradient = (currentGradient + 1) % pookieGradients.length;
    document.body.style.background = pookieGradients[currentGradient];
});

document.querySelector('.btn:not(.color-btn):not(.music-btn)').addEventListener('click', () => {
    const transition = document.querySelector('.page-transition');
    transition.style.opacity = '1';
    setTimeout(() => {
        window.location.href = 'Gallary.html'; // Make sure this matches your gallery page filename
    }, 1000);
});

document.querySelector('.music-btn').addEventListener('click', () => {
    const music = document.getElementById('background-music');
    
    if (music.paused) {
        music.play();
        document.querySelector('.music-btn').textContent = 'Pause Music 🎵';
    } else {
        music.pause();
        document.querySelector('.music-btn').textContent = 'Play Music 🎵';
    }
});
