const buttonDarkMode = document.querySelector('.dark-mode')
const buttonLightMode = document.querySelector('.light-mode')
const bgPage = document.querySelector('.body')

const iconForest = document.querySelector('#forest')
const iconRain = document.querySelector('#rain')
const iconCafeteria = document.querySelector('#cafeteria')
const iconFireplace = document.querySelector('#fireplace')

const cardForest = document.querySelector('.wrapper-forest')
const cardRain = document.querySelector('.wrapper-rain')
const cardCafeteria = document.querySelector('.wrapper-cafeteria')
const cardFireplace = document.querySelector('.wrapper-fireplace')
const cardSet = document.querySelector('.wrapper-set')

const songForest = new Audio('https://github.com/LaraAEC/sounds-soundtracks/blob/main/Floresta.wav?raw=true')
const songRain = new Audio('https://github.com/LaraAEC/sounds-soundtracks/blob/main/Chuva.wav?raw=true')
const songCafeteria = new Audio('https://github.com/LaraAEC/sounds-soundtracks/blob/main/Cafeteria.wav?raw=true')
const songFireplace = new Audio('https://github.com/LaraAEC/sounds-soundtracks/blob/main/Lareira.wav?raw=true')
const songButtonPress = new Audio('https://github.com/LaraAEC/sounds-soundtracks/blob/main/audios_button-press.wav?raw=true')
const songkitchenTimer = new Audio('https://github.com/LaraAEC/sounds-soundtracks/blob/main/audios_kitchen-timer.mp3?raw=true')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.add-time')
const buttonReduceTime = document.querySelector('.reduce-time')
const buttonSet = document.querySelector('.set')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)  


export {
  buttonLightMode,
  buttonDarkMode,
  bgPage,
  iconCafeteria,
  iconForest,
  iconFireplace,
  iconRain,
  cardCafeteria,
  cardFireplace,
  cardForest,
  cardRain,
  cardSet,
  songCafeteria,
  songFireplace,
  songForest,
  songRain,
  songButtonPress,
  songkitchenTimer,
  buttonAddTime,
  buttonReduceTime,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds
}
