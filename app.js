

let gameseq=[];
let userseq=[];

let btns=["red", "green", "yellow", "purple"];

let started= false;
let highScore=0;

let level=0;
let h2 = document.querySelector("h2");
let h3= document.querySelector("#highscore");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game has been started!");
        started=true;

        levelup();
    }
    
})

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash")
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash")
    },500);
}



function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    // call random btn

    let random = Math.floor(Math.random () *3);

    let randomcol=btns[random];
    let randombtn=document.querySelector(`.${randomcol}`);
    gameseq.push(randomcol);
    console.log(gameseq);
    btnFlash(randombtn);
}

function checkans(ind){
    console.log("cueernt level:", level);

    // let ind = level-1;
    if(userseq[ind]== gameseq[ind]){
        if(userseq.length==gameseq.length){
            levelup();
        }
    }else{
        h2.innerHTML=`Game over! Your Score is <b> ${level}</b><br>Press anykey to start the game.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200)
        if(highScore < level){
            highScore = level;
            h3.innerHTML= `You new HighScore is ${highScore}.`;
            h3.style.backgroundColor = "#DCFCE7";
            h3.style.border = "2px solid #DCFCE7";
            h3.style.color = "#166534";
            h3.style.padding = "10px";
            
        }else{
            h3.innerHTML=`Your HighScore was ${highScore}.`;
            h3.style.backgroundColor = "#F3E8FF";
            h3.style.color = "#6B21A8";
            h3.style.border = "2px solid #F59E0B";
            h3.style.padding = "10px";
            
        }
        reset();
    }
}

function btnpress(){
    
    let btn =this;
    userFlash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtn= document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}