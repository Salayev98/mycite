let items=document.getElementsByClassName("corousel-items");
let button=document.querySelector("#Previos");
let button2=document.querySelector("#Next");
let count=1;
let count2=items.length-1
button2.addEventListener("click", function(){
   for (let i = 0; i < items.length; i++) {
      items[i].style.display="none"  
   }
    if(count>=items.length){
        count=0
    }
    items[count].style.display="block";
    count++; 
})
// button.addEventListener("click",function(){
    
//     for (let i = 0; i < items.length; i++) {
//         items[i].style.display="none"  
//     }
//      if(count2<0){
//         count2=items.length-1
//     }
//     items[count2].style.display="block";
//     count2--;
// })