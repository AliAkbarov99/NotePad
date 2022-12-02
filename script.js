const titleInput = document.getElementById("titleInput");
const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementsByTagName("button")[0];

const pinkCircle = document.getElementsByClassName("pink")[0];
const purpleCircle = document.getElementsByClassName("purple")[0];
const blueCircle = document.getElementsByClassName("blue")[0];
const yellowCircle = document.getElementsByClassName("yellow")[0];
const greenCircle = document.getElementsByClassName("green")[0];

const pinkCheckElement = document.getElementById("pink-check");
const purpleCheckElement = document.getElementById("purple-check");
const blueCheckElement = document.getElementById("blue-chech");
const yellowCheckElement = document.getElementById("yellow-check");
const greenCheckElement = document.getElementById("green-check");


const cardBox = document.getElementById("cards");


pinkCircle.onclick = function () {
    pinkCheckElement.style.display="block"
}

purpleCircle.onclick = function () {
    purpleCheckElement.style.display="block"
}
blueCircle.onclick = function () {
    blueCheckElement.style.display="block"
}
yellowCircle.onclick = function () {
    yellowCheckElement.style.display="block"
}
greenCircle.onclick = function () {
    greenCheckElement.style.display="block"
}



saveBtn.onclick = function () {
    if (titleInput.value.trim() === "" || noteInput.value.trim() === "") {
        alert("Please make sure the boxes are filled");
    }
    else {
        const cardElement = document.createElement("div");
        const headerElement = document.createElement("h4");
        const iconElement = document.createElement("i");
        const paragraphElement = document.createElement("p");

        if(pinkCheckElement.style.display === "block"){
            headerElement.style.backgroundColor = "rgb(240, 98, 146)"
            cardElement.style.borderColor = "rgb(240, 98, 146)"
        }
        else if(purpleCheckElement.style.display === "block"){
            headerElement.style.backgroundColor = "rgb(186, 104, 200)"
            cardElement.style.borderColor = "rgb(186, 104, 200)"
        }
        else if(blueCheckElement.style.display === "block"){
            headerElement.style.backgroundColor = "rgb(79, 195, 247)"
            cardElement.style.borderColor = "rgb(79, 195, 247)"
        }
        else if(yellowCheckElement.style.display === "block"){
            headerElement.style.backgroundColor = "rgb(255, 213, 79)"
            cardElement.style.borderColor = "rgb(255, 213, 79)"
        }
        else if(greenCheckElement.style.display ==="block"){
            headerElement.style.backgroundColor = "rgb(174, 213, 129)"
            cardElement.style.borderColor = "rgb(174, 213, 129)"
        }
        else{
            return alert("Please choose color")
        }
        

        headerElement.textContent = titleInput.value;
        paragraphElement.textContent = noteInput.value;
        iconElement.classList.add("fa-regular")
        iconElement.classList.add("fa-trash-can")
        cardElement.classList.add("cards__item");
        headerElement.appendChild(iconElement);
        cardElement.append(headerElement, paragraphElement);
        cardBox.appendChild(cardElement);





        pinkCheckElement.style.display="none"
        purpleCheckElement.style.display="none"
        blueCheckElement.style.display="none"
        yellowCheckElement.style.display="none"
        greenCheckElement.style.display="none"

        titleInput.value = "";
        noteInput.value = "";



        iconElement.onclick = function () {
            cardBox.removeChild(cardElement);
        }

    }
}
