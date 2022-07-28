var numberOfButtons = document.querySelectorAll(".drum").length;

//Detecting Button Press
for (let i=0; i<numberOfButtons; i++){
    var drum = document.querySelectorAll(".drum")[i];
    drum.addEventListener("click", function (){
        var key = this.innerHTML;
        playSound(key);
        addAnimation(key);
    });
}

//Detecting Keyboard Press
document.addEventListener("keypress",function(event){
    playSound(event.key);
    addAnimation(event.key);
});

function playAudio(audioFile){
    var sound = new Audio('sounds/' + audioFile + '.mp3');
    sound.play();
}
function playSound(keyPressed){
    switch (keyPressed){
        case 'w':
            playAudio('tom-1');
            break;
        case 'a':
            playAudio('tom-2');
            break;
        case 's':
            playAudio('tom-3');
            break;
        case 'd':
            playAudio('tom-4');
            break;
        case 'j':
            playAudio('snare');
            break;
        case 'k':
            playAudio('crash');
            break;
        case 'l':
            playAudio('kick-bass');
            break;
        default:
            console.log(key);
    }
}

function addAnimation(keyPressed){
    var activeButton = document.querySelector("." + keyPressed);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}