let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let choreBotDoor = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoor = "./images/beach.svg";
let spaceDoor = "./images/space.svg";
let closedDoor = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;

const isBot = (door) => {
    if (door.src === choreBotDoor){
        return true;
    } else {
        return false;
    }
}

const isClicked = (door) => {
    if (door.src === closedDoor){
        return false;
    } else {
        return true;
    }
}

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0){
        gameOver('win');
    } else if (isBot(door)){
        gameOver();
    }
}

const randomChoreDoorGenerator = () => {
    choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0){
        openDoor1 = choreBotDoor;
        openDoor2 = beachDoor;
        openDoor3 = spaceDoor;
    } else if (choreDoor === 1){
        openDoor1 = spaceDoor;
        openDoor2 = choreBotDoor;
        openDoor3 = beachDoor;
    } else {
        openDoor1 = beachDoor;
        openDoor2 = spaceDoor;
        openDoor3 = choreBotDoor;
    }
}

doorImage1.onclick = () => {
    if(!isClicked(doorImage1) && currentlyPlaying){
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if(!isClicked(doorImage2) && currentlyPlaying){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if(!isClicked(doorImage3) && currentlyPlaying){
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if (currentlyPlaying === false){
        startRound();
    }
}

const startRound = () => {
    doorImage1.src = closedDoor;
    doorImage2.src = closedDoor;
    doorImage3.src = closedDoor;
    numClosedDoors = 3;
    startButton.innerHTML = "Good Luck!";
    startButton.style.padding = "";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

const gameOver = (status) => {
    if (status === 'win'){
        startButton.style.padding = "10px 5px 10px 5px";
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.style.padding = "10px 5px 10px 5px";
        startButton.innerHTML = "Game over! Play again?";
    }
    currentlyPlaying = false;
}

startRound();