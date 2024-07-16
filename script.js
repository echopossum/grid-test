const NUMBER_OF_BOXES = 9;

let boxes = [];

for (let i = 0; i <= NUMBER_OF_BOXES; i++) {
    boxes[i] = document.getElementById(`item-${i+1}`)
}

setInterval(()=>{
    for(let i = 0; i <=NUMBER_OF_BOXES; i++){
        boxes[i].style.animation = "none";
        setTimeout(()=>{
            boxes[i].style.animation = ""
        },100)
    }

},5000)