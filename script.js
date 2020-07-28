const bot = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beach = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const space="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const close="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let door1= document.getElementById('door1');
let door2= document.getElementById('door2');
let door3= document.getElementById('door3');
let button = document.getElementById('buttonid');
let door1path;
let door2path;
let door3path;
let doornum = 3;
let isplaying = true;
const isBot = (door) => {
    if (door.src === bot){
        return true;
    } else {
        return false;
    }
}
const isopen = (door) => {
    if (door.src === close) {
        return false;
    } else {
        return true;
    }
};
const playdoor = (door) => {
    doornum --;
    if (doornum === 1 && !isBot(door)){
        gameover('win');
    } else if (isBot(door)){
        gameover('lose')
    } 
    }

const randomimg = () => { 
    let rannum = Math.floor(Math.random()*doornum);
    if(rannum === 0) {
    door1path = bot;
    door2path= beach;
    door3path= space;
    } else if(rannum === 1) {
    door2path = bot;
    door1path = beach;
    door3path= space;
    } else {
    door3path= bot;
    door2path= beach;
    door1path= space;
    }
}
door1.onclick = () => {
    if (!isopen(door1) && isplaying){ 
    door1.src= door1path;
    playdoor(door1);
    }
}
door2.onclick = () => {
    if (!isopen(door2) && isplaying){ 
    door2.src= door2path;
    playdoor(door2);
    }
}
door3.onclick = () => {
    if (!isopen(door3) && isplaying){ 
    door3.src= door3path;
    playdoor(door3);
    }
}
const startgame = () => {
    doornum = 3;
    door1.src=close;
    door2.src=close;
    door3.src=close;
    button.innerHTML = 'Good luck!';
    isplaying = true;
    randomimg();
}
button.onclick = () => {
    if(!isplaying){
        startgame();
    };
}
const gameover = (status) => {
    if (status === 'win'){
        button.innerHTML = "You Win!";
    } else {
        button.innerHTML = "You Lose!";
    }
    isplaying = false;
}
startgame();




