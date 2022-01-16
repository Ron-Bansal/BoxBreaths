const mainCircle = document.querySelector('main');
const bgCircles = document.querySelectorAll('.bgCircle');

const backgroundCircles = document.querySelector('.backgroundCircles');
const pointer = document.querySelector('.pointer');

const stepText = document.querySelector('.step');
const timeRemaining = document.querySelector('.remaining');

let pauseState = false;
let duration = 4000;

//toggle pause when space is pressed
// document.addEventListener('keydown', event => {
//     if (event.code === 'Space') {
//         console.log('Space pressed');
//         pause();
//     }
// })

// function pause() {
//     pauseState = !pauseState;
//     pointer.classList.toggle('pause');
//     mainCircle.classList.toggle('pause');
//     for (let circle of bgCircles) {
//         circle.classList.toggle('pause');
//     }
// }

function exhale(duration = 4) {
    stepText.innerHTML = "exhale";
    mainCircle.classList = "exhaleShrink"
    backgroundCircles.classList = "backgroundCircles exhaleBg"
}

function inhale(duration = 4) {
    stepText.innerHTML = "inhale";
    mainCircle.classList = "inhaleGrow"
    backgroundCircles.classList = "backgroundCircles inhaleBg"
}

function hold(visit) {
    stepText.innerHTML = 'Hold';
    if (visit === 1) {
        mainCircle.classList.remove("inhaleGrow");
        mainCircle.classList = "inhaleHold";
    } else {
        mainCircle.classList = "exhaleHold";
    }
}

function breatheAnimation() {
    inhale();
    updateCountdown();

    setTimeout(() => {
        hold(1);
        updateCountdown();

        setTimeout(() => {
            exhale();
            updateCountdown();

            setTimeout(() => {
                hold(2);
                updateCountdown();
            }, duration)

        }, duration)

    }, duration)

    setTimeout(breatheAnimation, 16000);
}

breatheAnimation();

function updateCountdown() {
    timeRemaining.innerHTML = "4 seconds";
    setTimeout(() => {
        timeRemaining.innerHTML = "3 seconds";
        setTimeout(() => {
            timeRemaining.innerHTML = "2 seconds";
            setTimeout(() => {
                timeRemaining.innerHTML = "1 second";

            }, 1000)

        }, 1000)

    }, 1000)
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './particles.json', function () {
    console.log('callback - particles.js config loaded');
});