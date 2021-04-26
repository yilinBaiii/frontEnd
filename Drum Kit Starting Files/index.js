
var numberOfDrumButton = document.querySelectorAll(".drum").length;

var w = new Audio("sounds/tom-1.mp3");
var a = new Audio("sounds/tom-2.mp3");
var s = new Audio("sounds/tom-3.mp3");
var d = new Audio("sounds/tom-4.mp3");
var j = new Audio("sounds/snare.mp3");
var k = new Audio("sounds/crash.mp3");
var l = new Audio("sounds/kick-bass.mp3");

var drums={"w":w,"a":a,"s":s,"d":d,"j":j,"k":k,"l":l};

// console.log(w);


for(var i=0;i<numberOfDrumButton;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",
    function(){
        // this.style.color="white";
        drums[this.innerHTML].play();
        console.log(this);
        buttonAnimation(this.innerHTML);
        
        
    })
    
}
function makeSound(event){
    switch (event.key) {
        case "w":
            var w = new Audio("sounds/tom-1.mp3");
            w.play();
            break;
        case "a":
            var a = new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
                var s = new Audio("sounds/tom-3.mp3");
                s.play();
                break;
        case "d":
                var d = new Audio("sounds/tom-4.mp3");
                d.play();
                break;
        case "j":
            var j = new Audio("sounds/snare.mp3");
            j.play();
            break;
        case "k":
                var k = new Audio("sounds/crash.mp3");
                k.play();
                break;
        case "l":
                var l = new Audio("sounds/kick-bass.mp3");
                l.play();
                break;

        default:
            break;
    }
}

function keyDown(){
    document.addEventListener("keydown",function(event){
        console.log(event);
        makeSound(event);
;       buttonAnimation(event.key);

    });
    
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    console.log(activeButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
},100);
}


// keyDown();


// function showH2(){
//     $(document).keypress(function(event){
//         console.log(event.originalEvent.key);
//         $("h2").text(event.originalEvent.key);
//         // alert("world");
//     });
// }

function showH2(){
    $(document).on("click",function(event){
        console.log(event.originalEvent.key);
        $("h2").text(event.originalEvent.key);
        // alert("world");
    });
}
showH2();