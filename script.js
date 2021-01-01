let gameBoard = document.getElementById("gameBoard")

let ctx = gameBoard.getContext("2d")

gameBoard.setAttribute("height", getComputedStyle(gameBoard)["height"])
gameBoard.setAttribute("width", getComputedStyle(gameBoard)["width"])



function Ship(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect (this.x, this.y, this.width, this.height)
    }
}

let ship = new Ship(380, 400, "grey", 60, 65)

function Asteroid(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect (this.x, this.y, this.width, this.height)
    }
}

let asteroid = new Asteroid (100, 50, "brown", 100, 100)


function gameLoop () {
    ctx.clearRect (0, 0, gameBoard.width, gameBoard.height)
    ship.render()
    asteroid.render()
}

let gameInterval = setInterval (gameLoop, 100)


let moveShip = (e) => {
    switch (e.keyCode) {
        case (87):
            ship.y -= 10
            break  
        case (68):
            ship.x += 10
            break   
        case (83):
            ship.y += 10
            break  
        case (65):
            ship.x -= 10  
    }  
}

document.addEventListener("keydown", moveShip)
    

    // if (e.keyCode === 87) 
    //    ship.y -= 10
    
    // else if (e.keyCode === 68) 
    //     ship.x += 10
    
    // else if (e.keyCode === 83) 
    //     ship.y += 10
    
    // else if (e.keyCode === 65) 
    //     ship.x -= 10
