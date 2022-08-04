import Timer from "./timer.js"
import {
  buttonLightMode,
  buttonDarkMode,
  bgPage,
  songButtonPress,
} from "./elements.js"

export default function Buttons (){
  const timer = Timer()

    function darkMode() {
      bgPage.classList.add('bg-mode')
      buttonDarkMode.classList.remove('theme-mode')
      buttonDarkMode.classList.add('hide')
      buttonLightMode.classList.add('theme-mode')
      buttonLightMode.classList.remove('hide')
    }
    

    function lightMode() {
      bgPage.classList.remove('bg-mode')
      buttonDarkMode.classList.remove('theme-mode')
      buttonDarkMode.classList.remove('hide')
      buttonLightMode.classList.remove('theme-mode')
      buttonLightMode.classList.add('hide')
    }


    function play() {
      songButtonPress.play()
      timer.countdown()
    }

     function stop() {
      songButtonPress.play()
      timer.hold()
    }

    return {
      darkMode,
      lightMode,
      play,
      stop  
    }
}