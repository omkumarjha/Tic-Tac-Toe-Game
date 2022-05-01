//constants
let gameOverSound = new Audio("gameover.mp3")
let musicSound = new Audio("music.mp3")
let tingSound = new Audio("ting.mp3")

let val = "X";
function check(){
    if(val == "X"){
        return "0";
    }
    return "X";
}

function checkWin(){
    //This function is used to check who has won
   let boxes = document.querySelectorAll(".box");

    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    win.forEach(el => {
        if((boxes[el[0]].innerHTML == boxes[el[1]].innerHTML) &&  (boxes[el[1]].innerHTML == boxes[el[2]].innerHTML) && (boxes[el[0]].innerHTML != "")){
            if(val == "X"){
                val = "0";
            }
            else{
                val = "X";
            }
            if(val == "0"){
                gameOverSound.play();
            }
            document.querySelector(".mid").firstElementChild.innerHTML = "Winner is : "+val;
            document.querySelector(".img").firstElementChild.style.width = "110px";
        }
    });

}

function func(){
   let boxes = document.querySelectorAll(".box");
    boxes.forEach(element => {
        element.addEventListener("click",function(){
            element.innerHTML = val;
            val = check();
            document.querySelector(".mid").firstElementChild.innerHTML = "Turn of : "+val;
            tingSound.play();
            checkWin();
        })
    });
}

func();

function func2(){
    location.reload();
}
