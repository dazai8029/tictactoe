let boxes=document.querySelectorAll(".btns")
let msgContainer=document.querySelector(".winnertitle")
let msg=document.querySelector("#msg")
let turnO = true
let trunX = false

let resetbtn=document.querySelector(".rbutton")
const cond= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,5,6]]


boxes.forEach((box)=>{
    box.addEventListener( "click",()=>{
    if(turnO===true)    
    {        
        box.innerText = "X"
         turnO=false
        
           
    }    
    else{

            box.innerText = "O"
             turnO = true
            
        }
        box.disabled=true
    
            checkwinner()
    
    })
})


const resetgame=()=>
{
    turnO=true;
    enbbox()
    msgContainer.classList.add("hide")
}

const disbox=()=>{
    for(let b of boxes)
    {
        b.disabled=true
    }
}


const enbbox=()=>{
    for(let b of boxes)
    {
        b.disabled=false
        b.innerText=""
    }
}

const showwinner = (win)=>
{
    msg.innerText=`CONGRATULATIONS , Winner is ${win}`
    msgContainer.classList.remove("hide")
    disbox()
}


const checkwinner =()=>
{
    for(let con of cond)
    {
            let pos1=boxes[con[0]].innerText
            let pos2=boxes[con[1]].innerText
            let pos3=boxes[con[2]].innerText

            if(pos1 !="" && pos2 !="" && pos3 !="")
            {
                if(pos1 === pos2 && pos2 === pos3)
                {
                    console.log("winner")

                    showwinner(pos1)
                }
            }
    }
}



resetbtn.addEventListener("click",resetgame)