// alert("hello");
var buttonColours=["red","blue","green","yellow"]
var gamePattern=[]
var userClickedPattern=[];
var level=0;
function nextSequence(){
    var randomnumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomnumber];
    gamePattern[gamePattern.length]=randomChosenColour;

    $("#"+randomChosenColour).animate({opacity:0},100);
    $("#"+randomChosenColour).animate({opacity:1},100);

    
    $("h1").text("Level "+level);
    level+=1;
    console.log("gamePattern");
    console.log(gamePattern);
    
}
$(".btn").on("click",function(){
    
    var userChosenColour=this.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern[userClickedPattern.length]=userChosenColour;
    
    console.log("userClickedPattern");
    console.log(userClickedPattern);
    checkAnswer(level);
});

function playSound(name){
    switch (name) {
        case "red":
            var PressedColor=new Audio("sounds/red.mp3");
            PressedColor.play();
            break;
         case "blue":
            var PressedColor=new Audio("sounds/blue.mp3");
            PressedColor.play();
            break;
        case "green":
            var PressedColor=new Audio("sounds/green.mp3");
            PressedColor.play();
            break;
        case "yellow":
            var PressedColor=new Audio("sounds/yellow.mp3");
            PressedColor.play();
            break;
        
        default:
            var PressedColor=new Audio("sounds/wrong.mp3");
            PressedColor.play();
            break;
    }
    
}

function animatePress(currentColour){
    // console.log(("#"+currentColour));
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    for(var i=0;i<userClickedPattern.length;i++){
        if(userClickedPattern[i]!=gamePattern[i]){
            console.log("wrong");
            var PressedColor=new Audio("sounds/wrong.mp3");
            PressedColor.play();
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            $("h1").text("Game Over, Press Any key to Restart");
            
            break;            
        }
    }
    if(userClickedPattern.length==gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
        userClickedPattern=[];
        console.log("success");
    }
    
    
    
}

function startOver(){
    level=0;
    userClickedPattern=[];
    gamePattern=[];
}

$(document).on("keypress",function(){
    startOver();
    setTimeout(function(){
        nextSequence();
    },1000);   
});

