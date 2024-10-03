let gameseq = [];
let userseq = [];

let started = false;

let btnscolor=["red","green","yellow","blue"];

let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress",function (){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    } 
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btnscolor[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    
    gameseq.push(randColor);
    console.log(gameseq);
    btnflash(randbtn);
}

function check(){
    let idx = userseq.length-1;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        },1000);
        reset();
        
    }
}

function buttonPress(){
 
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    check(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for( let i of allBtns ){
    i.addEventListener("click",buttonPress);
}

function reset(){
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}
