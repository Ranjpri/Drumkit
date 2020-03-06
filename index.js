var e = document.querySelectorAll(".drum");

for (var i = 0; i < e.length; i++) {
    e[i].addEventListener("click", function () {        
        var buttonInnerHTML = this.innerHTML;
        soundSelection(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    }
    )
}


document.addEventListener('keypress', function(e){
    key = e.key.toLowerCase();
    soundSelection(key);  
    buttonAnimation(key);      
})



function soundSelection(input){

    switch (input) {
        case 'w':
            var sound = "tom-1.mp3";
            var audio = new Audio("sounds/" + sound);
            audio.play();
            break;
        case 'a':
            var sound = "tom-2.mp3";
            var audio = new Audio("sounds/" + sound);
            audio.play();
            break;
        case 's':
            var sound = "tom-3.mp3";
            var audio = new Audio("sounds/" + sound);
            audio.play();
            break;
        case 'd':
            var sound = "tom-4.mp3";
            var audio = new Audio("sounds/" + sound);
            audio.play();
            break;
        case 'j':
            var sound = "crash.mp3";
            var audio = new Audio("sounds/" + sound);
            audio.play();
            break;
        case 'k':
            var sound = "snare.mp3";
            var audio = new Audio("sounds/" + sound);
            audio.play();
            break;
        case 'l':
            var sound = "kick-bass.mp3";
            var audio = new Audio("sounds/" + sound);
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentButton){
 
    var btn = document.querySelector('.'+ currentButton);
    btn.classList.add('pressed');
    setTimeout(function(){btn.classList.remove('pressed')}, 100);   

}