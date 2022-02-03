let num = 0
let p = document.querySelector("p")
p.innerText = num
function add(){
    ++num
    console.log(num)
    p.innerText = num
    
}
function menos(){
    --num
    console.log(num)
    p.innerText = num
}


