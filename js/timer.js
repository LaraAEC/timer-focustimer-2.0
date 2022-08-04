import {
  cardSet,
  songCafeteria,
  songFireplace,
  songForest,
  songRain,
  songButtonPress,
  songkitchenTimer,
  buttonAddTime,
  buttonReduceTime,
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds
} from "./elements.js"

let timerTimeOut

export default function Timer() {

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function countdown() {
    timerTimeOut = setTimeout (function() {
      let secondsCountdown = Number(secondsDisplay.textContent)
      let minutesCountdown = Number(minutesDisplay.textContent)
      let isFinished = minutesCountdown <= 0 && secondsCountdown <= 0
      updateDisplay(minutesCountdown, 0) 
        if (isFinished) {
          songForest.pause()
          songRain.pause()
          songCafeteria.pause()
          songFireplace.pause()
          songkitchenTimer.play()
            return
        }
        if (secondsCountdown <= 0) {
          secondsCountdown = 60
          --minutesCountdown
        }
      updateDisplay(minutesCountdown, String(secondsCountdown - 1))
  
      buttonAddTime.addEventListener('click', function() {
        songButtonPress.play()
        minutesCountdown = minutesCountdown + 5
        updateDisplay(minutesCountdown, secondsCountdown)
      })
      buttonReduceTime.addEventListener('click', function() {
         songButtonPress.play()
        if((minutesCountdown - 5) <= 0) {
          updateDisplay(minutesCountdown, secondsCountdown)
        } else {
          minutesCountdown = minutesCountdown - 5
          updateDisplay(minutesCountdown, secondsCountdown)
        }
      })
        countdown()
      }, 1000)
  }

  function configTime() {
    songButtonPress.play()
    if (!cardSet.classList.contains('on-set')) {
      cardSet.classList.add('on-set')
      setTimeout(function(){
        let configMinutes = prompt('Quantos minutos?')
        if (!configMinutes) {
          updateDisplay()
          return
        }
        updateDisplay(configMinutes, 0)
        minutes = configMinutes
      }, 500) 
    } else {
      cardSet.classList.remove('on-set')
      updateDisplay(minutes, 0)
      hold()
    }
  }
  
  return {
    updateDisplay,
    countdown,
    hold,
    configTime
  }
}