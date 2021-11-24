// codice da eseguire
const playBtn = document.getElementById("play-btn");
const numbersBox = document.getElementById("numbers");
const timer = document.getElementById("timer");
const numbers = [];
const newNumbers = [];
const numbersInput = document.getElementById("input");
playBtn.addEventListener("click", play);
numbersInput.addEventListener("keypress", newNumber);
function newNumber(key) {
    if (key.code == "Enter") {
        newNumbers.push(parseInt(this.value));
        this.value = "";
    }
    if (newNumbers.length == numbers.length) {
        numbersInput.classList.add("hidden");
        const numbersResult = newNumbers.filter(number => {
            if (numbers.includes(number)) return number;
        });
        numbersBox.innerHTML = "";
        numbersBox.classList.remove("hidden");
        numbersBox.classList.add("active");
        timer.innerHTML = `Hai ricordato ${numbersResult.length} numeri su 5!`;
        numbersResult.forEach((number, i) => {
            numbersBox.innerHTML += number;
            if (i < numbersResult.length - 1) {
                numbersBox.innerHTML += ", ";
            }
        });
    }
}

// funzioni
function play() {
    this.classList.remove("active");
    this.classList.add("hidden");
    numbersBox.classList.remove("hidden");
    numbersBox.classList.add("active");
    writeNumbers();
    startTime();
}
function writeNumbers() {
    for (let i = 0; i < 5; i++) {
        const number = randomNumber();
        numbers.push(number);
        numbersBox.innerHTML += number;
        if (i < 4) {
            numbersBox.innerHTML += ", ";
        }
    }
    function randomNumber() {
        const num = Math.floor(Math.random() * 99) + 1;
        return num;
    }
}
function startTime() {
    let time = 10;
    timer.innerHTML = time;
    clock = setInterval(countDown, 1000);
    function countDown() {
        time--;
        if (time > 0) {
            timer.innerHTML = time;
        } else {
            timer.innerHTML = "Scrivi uno ad uno i numeri che ricordi";
            numbersBox.classList.add("hidden");
            numbersInput.classList.remove("hidden");
            numbersInput.focus();
            clearInterval(clock);
        }
    }
}