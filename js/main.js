const btns = document.querySelector('body')
// const minutesTime = +document.querySelector('.minute').value // инпут с минутами
// const secondsTime = +document.querySelector('.second').value // инпут с секунды
// const miliSecondsTime = +document.querySelector('.milisecond').value // инпут с милисекунды
const inputAll = document.querySelectorAll('input') // все инпуты
const yourModel = document.querySelector('.model') // полученная модель
const bestTime = document.querySelector('.best-time') // лучшее время
let finish = 0
let time = 0
let string = ''

// выводим лучшее время на страницу
btns.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')) {
        time = e.target.getAttribute('data-time')
        string = e.target.textContent
        timeEnd(time, string)
    }
})
// переводит секунды в минуты
function timeEnd(num, str) {
    let minuts = Math.floor(num / 60)
    let seconds = num - 360
    if (num > 420) {
        seconds = num - 420
    }
    if (num < 360) {
        seconds = num - 300
    }
    let second = seconds.toFixed(2)
    if (second < 10) {
        second = '0' + second
    }
    let finish = `${minuts}:${second}`
    bestTime.innerText = ''
    bestTime.innerText += `Лучшее время : ${finish} (${str})`
    return finish
}


inputAll.forEach(input => {
    input.addEventListener('input', () => {
        const min = +document.querySelector('.minute').value;
        const sec = +document.querySelector('.second').value;
        const milsec = +document.querySelector('.milisecond').value;
        const modell = min * 60 + sec + milsec / 100 

        finish = time / modell * 100
        let finishEnd = finish.toFixed(2)
        
        yourModel.innerText = `Ваша модель :  ${finishEnd}%`
    });
});







