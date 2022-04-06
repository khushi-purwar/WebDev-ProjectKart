const grid = document.querySelector('.grid')
const score = document.querySelector('#score')
const display = document.querySelector('#display')
const blkWidth = 100
const blkHeight = 20
const userStart = [230, 10]
let currentPos = userStart
const boardWidth = 560
const boardHeight = 320
const ballStart = [270, 40]
let currentBallPos = ballStart
let timerId
const ballDiameter = 20
xDirection = -2
yDirection = 2
let userScore = 0

class Block {
    constructor(x, y) {
        this.bottomLeft = [x, y]
        this.bottomRight = [x + blkWidth, y]
        this.topRight = [x + blkWidth, y + blkHeight]
        this.topLeft = [x, y + blkHeight]

    }
}

const blocks = [
    new Block(10, 290),
    new Block(120, 290),
    new Block(230, 290),
    new Block(340, 290),
    new Block(450, 290),
    new Block(10, 260),
    new Block(120, 260),
    new Block(230, 260),
    new Block(340, 260),
    new Block(450, 260),
    new Block(10, 230),
    new Block(120, 230),
    new Block(230, 230),
    new Block(340, 230),
    new Block(450, 230),
    new Block(10, 200),
    new Block(120, 200),
    new Block(230, 200),
    new Block(340, 200),
    new Block(450, 200),
]

function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)

    }
}
addBlocks()

const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
user.style.left = currentPos[0] + 'px'
user.style.bottom = currentPos[1] + 'px'

function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (currentPos[0] > 0) {
                currentPos[0] -= 10
                user.style.left = currentPos[0] + 'px'
                user.style.bottom = currentPos[1] + 'px'
            }
            break

        case 'ArrowRight':
            if (currentPos[0] < boardWidth - blkWidth) {
                currentPos[0] += 10
                user.style.left = currentPos[0] + 'px'
                user.style.bottom = currentPos[1] + 'px'
            }
            break

    }
}
document.addEventListener('keydown', moveUser)

const ball = document.createElement('div')
ball.classList.add('ball')
ball.style.left = currentBallPos[0] + 'px'
ball.style.bottom = currentBallPos[1] + 'px'
grid.appendChild(ball)

function moveBall() {
    currentBallPos[0] += xDirection
    currentBallPos[1] += yDirection
    ball.style.left = currentBallPos[0] + 'px'
    ball.style.bottom = currentBallPos[1] + 'px'
    checkCollisions()
}

timerId = setInterval(moveBall, 20)

function checkCollisions() {
    for (let i = 0; i < blocks.length; i++) {
        if ((currentBallPos[0] > blocks[i].bottomLeft[0] && currentBallPos[0] < blocks[i].bottomRight[0]) && ((currentBallPos[1] + ballDiameter) > blocks[i].bottomLeft[1]) && currentBallPos[1] < blocks[i].topLeft[1]) {
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i, 1)
            changeDirection()
            userScore++
            score.innerHTML = userScore
            if (blocks.length == 0) {
                score.innerHTML = 'You Win!'
                display.innerHTML = ''
                clearInterval(timerId)
                document.removeEventListener('keydown', moveUser)
            }
        }
    }

    if (currentBallPos[0] >= (boardWidth - ballDiameter) || currentBallPos[1] >= (boardHeight - ballDiameter) || currentBallPos[0] <= 0) {
        changeDirection()
    }

    if ((currentBallPos[0] > currentPos[0] && currentBallPos[0] < currentPos[0] + blkWidth) && (currentBallPos[1] > currentPos[1] && currentBallPos[1] < currentPos[1] + blkHeight)) {
        changeDirection()
    }

    if (currentBallPos[1] <= 0) {
        clearInterval(timerId)
        score.innerHTML = 'You Lose!'
        display.innerHTML = ''
        document.removeEventListener('keydown', moveUser)
    }
}

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }

}