var myGamePiece;
var myObstacles = [];
var mySound;
var myScore;
var myMusic;

document.body.onkeydown = function (e) {
    if (e.keyCode == 38) {
        move('up');
    }
    if (e.keyCode == 40) {
        move('down');
    }
    if (e.keyCode == 39) {
        move('right');
    }
    if (e.keyCode == 37) {
        move('left');
    }
};

document.body.onkeyup = function (e) {
    clearmove();
};

function startGame() {
    myGamePiece = new component(70, 70, "smiley_2.png", 10, 120, "image");
    myScore = new component("50px", "Orbitron", "white", 280, 40, "text");
    mySound = new sound("bomb.mp3");
    myMusic = new sound("mario.mp3");
    myMusic.play();
    myGameArea.start();
    document.getElementById("menuBox").classList.add("hidden");
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1920;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
};

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }

    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        }
        else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

    };
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    };
    this.crashWith = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var htmlTemplate = '';
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myMusic.stop();
            mySound.play();
            alert("GAME OVER!!! SPRÓBUJ JESZCZE RAZ! Twoj " + myScore.text);
            myGameArea.stop();
            return;
        }
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(30)) {
        x = myGameArea.canvas.width;
        minHeight = 100;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 200;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new component(69, height, "cegly.png", x, 0, "image"));
        myObstacles.push(new component(80, height + gap, "cegly.png", x, height + gap, "image"));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x -= 4;
        myObstacles[i].update();
    }
    myScore.text = "wynik: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();

    };
    this.stop = function () {

        this.sound.pause();
    }
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

function move(dir) {
    myGamePiece.image.src = "smiley_2.png";
    if (dir == "up") {
        myGamePiece.speedY = -5;
    }
    if (dir == "down") {
        myGamePiece.speedY = 5;
    }
    if (dir == "left") {
        myGamePiece.speedX = -5;
    }
    if (dir == "right") {
        myGamePiece.speedX = 5;
    }
}

function clearmove() {
    myGamePiece.image.src = "smiley_2.png";
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}
