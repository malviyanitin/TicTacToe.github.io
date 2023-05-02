console.log("welcome to The Game");
let turnMusic = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover=false;
//funtion to change turn
const changeturn = ()=>{
    return turn === "X"? "0":"X";
}

//funtion to check win

const checkWin = ()=>{
let entries = document.getElementsByClassName("boxtext");
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]
wins.forEach(e=>{
    if((entries[e[0]].innerText===entries[e[1]].innerText) && (entries[e[1]].innerText===entries[e[2]].innerText) && (entries[e[0]].innerText !== ""))
    {   document.querySelector(".info").innerText= entries[e[0]].innerText + " has Won";
        isgameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="150px"; 
    }
})
}


//GAME LOGIC
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText=turn;
        turn= changeturn();
        turnMusic.play();
        checkWin();
        if(!isgameover)
        document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
        } 
    })
})

//now i am adding a listener to reset button
document.getElementById("reset").addEventListener('click',()=>{
     Array.from(boxes).forEach(element=>{
        let data = element.querySelector('.boxtext');
        data.innerText="";
     });
     turn ="X";
     isgameover=false;
     if(!isgameover)
     document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0"; 
})