let userScore = 0
const gameMaxTime = 20
let gameScreenTime = gameMaxTime

let timer = null

const screenTimeDisplay = document.querySelector('.screen-time-display')
const userScoreDisplay = document.querySelector('.user-score-display')

const gameGrid = document.querySelector('#game-grid')
const startGameBtn = document.querySelector('.start-game-btn')


// game begins
startGameBtn.addEventListener('click', (e)=> {
  let parentContainer = e.target.parentElement
  parentContainer.removeChild(e.target)
  gameTriggering()
})

function gameTriggering() {
  timer = setInterval(timerRunning, 600)

}


function timerRunning() {
  console.log('time running....')
  screenTimeDisplay.textContent = gameScreenTime
  gameScreenTime--
  if (gameScreenTime <= 0) {
    screenTimeDisplay.textContent = 'Times Up'
    console.log('the game ends')
    // timer killing
    clearInterval(timer)
  }
}