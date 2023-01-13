let elementOutputText;
let elementInputBox;
let elementInputButton;
let currentColor;


function changeBackground(event) {

    if(event.target.classList.contains("bg-yellow")){
        event.target.classList.add("bg-red");
        event.target.classList.remove("bg-yellow");
        return;
    }

    if(event.target.classList.contains("bg-red")){
        event.target.classList.add("bg-green");
        event.target.classList.remove("bg-red");
        return;
    }

    if(event.target.classList.contains("bg-green")){
        event.target.classList.add("bg-blue");
        event.target.classList.remove("bg-green");
        return;
    }

    if(event.target.classList.contains("bg-blue")){
        event.target.classList.add("bg-white");
        event.target.classList.remove("bg-blue");
        return;
    }

    if(event.target.classList.contains("bg-white")){
        event.target.classList.add("bg-black");
        event.target.classList.remove("bg-white");
        return;
    }

    event.target.classList.add("bg-yellow");
    event.target.classList.remove("bg-black");
    //classList.contains = tells if a class is prensent in a list of classes.
}

function setRandom(element) {
    const random = Math.random();
    
    if(random<0.15){
        element.classList.add("bg-yellow");
        return;
    }

    if(random<0.3){
        element.classList.add("bg-red");
        return;
    }
    
    if(random<0.5){
        element.classList.add("bg-green");
        return;
    }

    if(random<0.65){
        element.classList.add("bg-blue");
        return;
    }

    if(random<0.8){
        element.classList.add("bg-black");
        return;
    }

    element.classList.add("bg-white");

}

function setRandomText(element) {
    const setRandomText = Math.random();
    
    if(setRandomText<0.15){
        currentColor = "yellow";
    }

    else if(setRandomText<0.3){
        currentColor = "red";
    }
    
    else if(setRandomText<0.5){
        currentColor = "green";
    }

    else if(setRandomText<0.65){
        currentColor = "blue";
    }

    else if(setRandomText<0.8){
        currentColor = "black";
    }

    else {
        currentColor = "white";
    }

    element.innerText = `Change all tiles to ${currentColor}.`;

}

function checkTiles(){
    let success = true;
    const elements = elementInputBox.children; 
    let elementCurrent = 0;
    const elementTotal = 100;

    while(elementCurrent < elementTotal){
        if (elements[elementCurrent].classList.contains(`bg-${currentColor}`) !=true){
            success = false;
        }
        elementCurrent += 1;
    }

    if (success == true){
        elementOutputText.innerText= "Well done, play again.";

    }

    else {
        elementOutputText.innerText = `Try again, these should all be ${currentColor}`;
    }

}

function setup(){
    
    elementInputBox = document.getElementById ("inputbox");
    //This is to say where to find my elements in HTML and stating how I would like to find it. 
    //Example in this I am using ID. ID`S is an appropaiate use here as ID`S can only be used once.
    elementInputButton = document.getElementById("inputbutton");
    const elementsTotal = 99;
    //Saying the total I want
    let elementCurrent = 0;
    //Saying how many I would like it to start with.

    while(elementCurrent < elementsTotal) {
        const copy = elementInputButton.cloneNode(); 
        //Here I am saying that is my elementCurrent is less than my elementTotal to clone it until
        //it reaches the amount I set
        copy.id = "";
        //Here I am removing the ID, to stop any future ID`S from clashing as an idea can only be used once.
        setRandom(copy);
        //Here I am telling my javascript to copy my "setRandom" which is my random colours.
        elementInputBox.appendChild(copy);
        //Here I am stating where I want it to live
        elementCurrent += 1; // + 1 to the elementCurrent
    }

    //Now the copies have been made I am going to apply the effects to the original Shape.
    setRandom(elementInputButton)
    
    elementOutputText = document.getElementById("outputtext");

    setRandomText(outputtext);


}

function Mute(){
    var elements = document.getElementsByTagName('audio');
    for(var e = 0; e < elements.length; elements[e].muted = !elements[e].muted, e++);
    //I used the material from num8er on stackoverflow, to help me with the muteing
    //aspect of this code.
}



window.onload = setup;
//When window is loaded, it will load/call this first.
//Must do this after as it needs something to load. Goes through every tag and then sets it up.
