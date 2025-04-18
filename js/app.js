let userScore = 0
const gameMaxTime = 20
let gameScreenTime = gameMaxTime

let timer = null

let defaultSize = 3

loadingGameGrid(defaultSize) 
let randomMole = document.createElement('img')


const screenTimeDisplay = document.querySelector('.screen-time-display')
const userScoreDisplay = document.querySelector('.user-score-display')

const startGameBtn = document.querySelector('.start-game-btn')

function loadingGameGrid(size) {
  const gameGrid = document.querySelector('#game-grid')
  gameGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  gameGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  // creating boards with size
  const amountOfSize = size * size
  for (let i = 0; i < amountOfSize; i++) {
    let board = document.createElement('div')
    // let moleIcn = document.createElement('img')
    board.classList.add('board')
    // board.appendChild(moleIcn)
    gameGrid.appendChild(board)
  }
}

// game begins
startGameBtn.addEventListener('click', (e)=> {
  let parentContainer = e.target.parentElement
  parentContainer.removeChild(e.target)
  gameTriggering()
})

function gameTriggering() {
  timer = setInterval(timerRunning, 600)
  screenRun = setInterval(runningMole, 500)

}




function runningMole() {
  console.log('running .....')
  let allBoards = document.querySelectorAll('.board')
  randomMole.src = ''


  let randomBoard = allBoards[Math.floor(Math.random() * allBoards.length)]
  randomBoard.appendChild(randomMole)
  randomMole.style.border = 'none'
  randomMole.classList.add('mole')
  // randomMole.alt = 'x'
  randomMole.src = '../icons/mole.png'
  console.log(randomBoard)
}

// adding user score
const allBoards = document.querySelectorAll('.board')
randomMole.addEventListener('mousedown', (e) => {
  userScore++
  userScoreDisplay.textContent = userScore
})

function timerRunning() {
  console.log('time running....')
  screenTimeDisplay.textContent = gameScreenTime
  gameScreenTime--
  if (gameScreenTime <= 0) {
    screenTimeDisplay.textContent = 'Times Up'
    console.log('the game ends')
    // timer killing
    clearInterval(timer)
    clearInterval(screenRun)
    resetNextRoundGame()
  }
}


function resetNextRoundGame() {
  const controlSection = document.querySelector('#control-section')
  controlSection.appendChild(startGameBtn)
  randomMole.src = ''
  let parentContainer = randomMole.parentElement
  parentContainer.remove(randomMole)
  gameScreenTime = gameMaxTime
}