
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function()  {
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}
//
// function BellGirl(name, age, hobbies, permit) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//     this.permit = permit;
//     this.moveSuitcase = function () {
//         alert('Hi, how are you?');
//         pickUpSuitCase();
//         move();
//     }
// }
// let mBG = new BellGirl('megan', 29, ['working out', 'cleaning', 'being nice'], true);
// console.log(mBG.moveSuitcase());

// Detecting keyboard press
document.addEventListener('keydown', function (e) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

            break;
        case "a": var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "s": var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "d": var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j": var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k": var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l": var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        default: console.log(buttonInnerHtml);
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}