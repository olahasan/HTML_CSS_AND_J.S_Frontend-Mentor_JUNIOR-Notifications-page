let mark = document.getElementById("mark");
let not = document.querySelectorAll(".not");
let spnum = document.getElementById("spnum");
console.log(mark);
console.log(not);
console.log(length);
console.log(spnum.innerHTML= not.length/2);


mark.onclick = function(){
    not.forEach(function(e){
       e.classList.toggle("not");
       if(!e.classList.contains("not")){
            spnum.innerHTML= 0;
            spnum.style.background = "green";
            mark.style.color = "green";
       
        }else{
            spnum.innerHTML= not.length/2;
            spnum.style.background = "#0a317b";
            mark.style.color = "#939dae";
        }
    })
 
}