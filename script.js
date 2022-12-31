var ele=document.getElementById("box")
const d = new Date();
function daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  }
var diaries=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
const newDiv1 = document.createElement("div");
newDiv1.classList.add("extra");
var input = document.getElementById("text");
var ok=0;
for(let i=0;i<daysInThisMonth();i++)
{
    // if(i>27)
    // {
    //     // const newDiv = document.createElement("div");
    //     // newDiv.classList.add("radius");
    //     // newDiv.classList.add("trigger"+i);
    //     // const newContent = document.createTextNode(i+1);
    //     // newDiv.append(newContent);
    //     // newDiv1.appendChild(newDiv);
    //     // ok=1;
    // }
    // else{
    const newDiv = document.createElement("div");
    newDiv.classList.add("radius");
    newDiv.classList.add("trigger"+i);
    diaries[i]=localStorage.getItem(i)!=null?localStorage.getItem(i):"";
   // console.log(i);
   // newDiv.innerHTML+=``
   //newDiv.classList.add("modal");

   //closeButton.addEventListener("click", toggleModal1);
    const newContent = document.createTextNode(i+1);
    newDiv.append(newContent);
    ele.appendChild(newDiv);
    // const el=document.getElementById(`ind${i}`);
    // el.addEventListener("click",toggleModal1);
  //  }
}
// if(ok)
// {
//     ele.appendChild(newDiv1);
// }
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const text=document.getElementById(".modal-content");
const closeButton = document.querySelector(".close-button");
console.log(modal);
function toggleModal(ind) {
   // console.log(ind);
    var toadd="close-button"+ind;
 
    
closeButton.classList.add(toadd);
// var input = document.createElement("textarea");
// input.setAttribute("id", "text"+ind);
const trigger = document.querySelector(".trigger"+ind);

 

// console.log(closeButton);
    // closeButton.classList.pop();
    input.value=diaries[ind];
    
 
  
    // closeButton.classList[1].value=toadd;

    // console.log(ind);
    // text.value=diaries[ind];
    // console.log(text.value);
    modal.classList.toggle("show-modal");
   
}
function toggleModal1(event) {
    //console.log(closeButton.classList[closeButton.classList.length-1]);
    // closeButton.classList.
    var s1=closeButton.classList[closeButton.classList.length-1];
    var st=s1.substring(12);
    //console.log(st);

     var num=parseInt(st);
     localStorage.setItem(num, input.value);
     diaries[num]=input.value;
     console.log(input.value)
    // console.log(num);
    // console.log("himakhyati");
    

    // console.log(event.target);    //console.log(event.target.closest(".close-button"));
  // console.log(event.parentElement);
  // var num=parseInt(event.target.classList[1].substring(3));
   // console.log(num);
   
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
     console.log(event.target);
    var st=event.target.classList[1].substring(0,7);
    var num=parseInt(event.target.classList[1].substring(7));
    if(st=="trigger")
    {
        toggleModal(num);
    }
}
//  closeButton.addEventListener("click", toggleModal1);
window.addEventListener("click", windowOnClick)
function mainInit() 
{
    // let k=0;
   const nodeList= document.querySelectorAll('.close-button');
   
   nodeList.forEach(function(element) {
   
    element.addEventListener('click',toggleModal1);
  });
    //   .forEach(elmNode =>
    //     {
            // const el=document.getElementById("ind"+k);
            // el.addEventListener("click",toggleModal1);
            // console.log(elmNode);
  
        // elmNode.addEventListener('click',toggleModal1,false);
        
        // k+=1;
        // }   
    //   );
  }
  mainInit();
