countElement = document.getElementById("count");
let count = 0;
function addpassenger(){
    count++;
    countElement.innerText = count;
}

function reset() {
    count = 0;
    countElement.innerText = count;
}