var timer = 60;
var hitval = "";
var score = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

function getNewHit(){
    hitval = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitval  
}

function makeBubble(){
    var bbl = "";
    for (var i=1; i<=96; i++) {
        var rn = Math.floor(Math.random()*10)
        bbl += `<div class="bubble">${rn}</div>`;
    }
document.querySelector("#panelbottom").innerHTML = bbl;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt)
            document.querySelector("#panelbottom").innerHTML = "<h1>Click Anywhere to replay</h1>"
            
            document.body.addEventListener("click", function reloadPage() {
                location.reload();
            }, { once: true });

        }    
    }, 1000)

}

document.querySelector("#panelbottom").addEventListener("click", function (dets){
    var clickNum = Number(dets.target.textContent)
    if (clickNum === hitval){
        increaseScore();
        makeBubble();
        getNewHit();
    }
}
);

runTimer();
makeBubble();
getNewHit();


