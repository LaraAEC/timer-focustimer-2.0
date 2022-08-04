import Timer from "./timer.js"
import Buttons from "./btn-functions.js"

import {
  buttonLightMode,
  buttonDarkMode,
  iconCafeteria,
  iconForest,
  iconFireplace,
  iconRain,
  cardCafeteria,
  cardFireplace,
  cardForest,
  cardRain,
  songCafeteria,
  songFireplace,
  songForest,
  songRain,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutes,
  seconds,
} from "./elements.js"


const buttons = Buttons()
const timer = Timer()

buttonDarkMode.addEventListener('click', function() {
  buttons.darkMode()
})

buttonLightMode.addEventListener('click', function() {
  buttons.lightMode()
})

buttonSet.addEventListener('click', function() {
  timer.configTime()

})

buttonPlay.addEventListener('click', function() {
  buttons.play()
})

buttonStop.addEventListener('click', function() {
  buttons.stop()
})



iconForest.addEventListener('click', function() {
  if(!(cardForest.classList.contains('on-card'))) {  
    songForest.play()
    songForest.loop = true
  } else {
    songForest.pause()
  }

  iconForest.classList.add('on-icon')
  cardForest.classList.add('on-card')

  iconRain.classList.remove('on-icon')
  cardRain.classList.remove('on-card')
  iconCafeteria.classList.remove('on-icon')
  cardCafeteria.classList.remove('on-card')
  iconFireplace.classList.remove('on-icon')
  cardFireplace.classList.remove('on-card') 

  songRain.pause()
  songCafeteria.pause()
  songFireplace.pause()
  }
  )

iconRain.addEventListener('click', function() {
  if(!(cardRain.classList.contains('on-card'))) {  
    songRain.play()
    songRain.loop = true
  } else {
    songRain.pause()
  }
 
  iconRain.classList.add('on-icon')
  cardRain.classList.add('on-card')
  
  iconForest.classList.remove('on-icon')
  cardForest.classList.remove('on-card')
  iconCafeteria.classList.remove('on-icon')
  cardCafeteria.classList.remove('on-card')
  iconFireplace.classList.remove('on-icon')
  cardFireplace.classList.remove('on-card')

  songForest.pause()
  songCafeteria.pause()
  songFireplace.pause()
  }
  )

iconCafeteria.addEventListener('click', function() {
  if(!(cardCafeteria.classList.contains('on-card'))) {  
    songCafeteria.play()
    songCafeteria.loop = true
  } else {
    songCafeteria.pause()
  }

  iconCafeteria.classList.add('on-icon')
  cardCafeteria.classList.add('on-card')
  
  iconRain.classList.remove('on-icon')
  cardRain.classList.remove('on-card')
  iconForest.classList.remove('on-icon')
  cardForest.classList.remove('on-card')
  iconFireplace.classList.remove('on-icon')
  cardFireplace.classList.remove('on-card')

  songRain.pause()
  songForest.pause()
  songFireplace.pause()
  }
  )
  
iconFireplace.addEventListener('click', function() {
  if(!(cardFireplace.classList.contains('on-card'))) {  
    songFireplace.play()
    songFireplace.loop = true
  } else {
    songFireplace.pause()
  }

  iconFireplace.classList.add('on-icon')
  cardFireplace.classList.add('on-card')
  
  iconRain.classList.remove('on-icon')
  cardRain.classList.remove('on-card')
  iconCafeteria.classList.remove('on-icon')
  cardCafeteria.classList.remove('on-card')
  iconForest.classList.remove('on-icon')
  cardForest.classList.remove('on-card')

  songRain.pause()
  songCafeteria.pause()
  songForest.pause()
  }
  )
