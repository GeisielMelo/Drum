// Seleciona todos os elementos do HTML com a classe drum e retorna uma lista.
// adicionando o .length para saber o tamanho da lista.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// O for vai percorrer todos os elementos da lista,
// adicionando o event listener para cada um dos elementos.
for (var i = 0; i < numberOfDrumButtons; i++) {
    // O event listener vai chamar a função btnClicked.
    document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
        btnName = this.innerHTML;
        makeSound(btnName);
    }); 
}

// Detectando tecla pressionada utilizando o Element: keydown event.
// Obs: keydown detecta qualquer tecla pressionada no teclado.
document.addEventListener("keydown", function(event) {
    keyName = event.key;
    buttonAnimation(keyName);
    makeSound(keyName);
}); 


function makeSound(btnName) {
    switch (btnName) {
        case "a":
            var tom1 = new Audio("./sounds/tom-3.mp3");
            tom1.play();
            break;

        case "s":       
            var tom2 = new Audio("./sounds/snare.mp3");
            tom2.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
            
        case "j":       
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom1 = new Audio("./sounds/crash.mp3");
            tom1.play();
            break;
            
        case "l":       
            var tom2 = new Audio("./sounds/tom-4.mp3");
            tom2.play();
            break;

        case " ":       
            var tom2 = new Audio("./sounds/kick-bass.mp3");
            tom2.play();
            break;
        
        case "space":       
            var tom2 = new Audio("./sounds/kick-bass.mp3");
            tom2.play();
            break;
        
        default: console.log(key);
    }
}

var buttonAnimation = function(currentKey) {
    if (currentKey == " ") {
    currentKey = "space";
    }
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("drum-active");

    setTimeout(function() {
    activeButton.classList.remove("drum-active");
    }, 100);
}
