let container = document.querySelector('.container');
let total = document.querySelector('#total');



let totalSeconds = 24*60*60;
function secondsLeft(){
    let today = new Date();
    let currentSeconds = today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds();
    let  rseconds = totalSeconds - currentSeconds;
    return rseconds;
}

let seconds = secondsLeft();


function createNote(){
    let note = document.createElement('div');
    note.classList.add('note');
    textNode = document.createTextNode("💵");
    note.appendChild(textNode);
    container.appendChild(note);
    return note;
}

for(let i=0; i<seconds; i++){
    createNote();
}

let countnotes = seconds

function removeFirstNote() {
    // Find the first div element with class name "note"
    var noteToRemove = document.querySelector(".note");

    // Check if the element exists before trying to remove it
    if (noteToRemove) {
        // Remove the element from its parent container
        noteToRemove.parentNode.removeChild(noteToRemove);
        countnotes--;
        total.innerHTML = "<b> $" + countnotes + " left <b/>";
    } else {
        console.log("No note found to remove.");
    }
}

// removeNote();

//call the createnote function every second
setInterval(removeFirstNote,1000);


// Get the current date and time


