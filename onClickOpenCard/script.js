const boxes = document.querySelectorAll(".box");
console.log('boxes:', boxes)

boxes.forEach(box => 
   
    box.addEventListener('click' , () => {
        removeClass();
        box.classList.add('desiredBoxDesign')
    } )
)

function  removeClass ( ){
    boxes.forEach(box => 
        box.classList.remove("desiredBoxDesign")
    )
}
