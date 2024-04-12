let correct = 0
let attempt =0
function fun1(){
   let input = document.getElementById('ans1');
   let x = input.value;
   attempt++
   if ( x == 7) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun2(){
   let input = document.getElementById('ans2');
   let x = input.value;
   attempt++
   if ( x == 6) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun3(){
   let input = document.getElementById('ans3');
   let x = input.value;
   attempt++
   if ( x == 26) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun4(){
   let input = document.getElementById('ans4');
   let x = input.value;
   attempt++
   if ( x == 15) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun5(){
   let input = document.getElementById('ans5');
   let x = input.value;
   attempt++
   if ( x == 6) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun6(){
   let input = document.getElementById('ans6');
   let x = input.value;
   attempt++
   if ( x == 73) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun7(){
   let input = document.getElementById('ans7');
   let x = input.value;
   attempt++
   if ( x == 5) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun8(){
   let input = document.getElementById('ans8');
   let x = input.value;
   attempt++
   if ( x == 16) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun9(){
   let input = document.getElementById('ans9');
   let x = input.value;
   attempt++
   if ( x == 45) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun10(){
   let input = document.getElementById('ans10');
   let x = input.value;
   attempt++
   if ( x == 12) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun11(){
   let input = document.getElementById('ans11');
   let x = input.value;
   attempt++
   if ( x == 29) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }
 
}
function fun12(){
   let input = document.getElementById('ans12');
   let x = input.value;
   attempt++
   if ( x == 8) {
      correct++
      input.style.color="white"
      input.style.backgroundColor="rgb(11, 220, 42)"
      input.style.boxShadow="2px 2px  5px green"
   }else{
      
      input.style.color="white"
    input.style.backgroundColor="rgb(244,76,76)"
    input.style.boxShadow="2px 2px  5px red"
    }

    if(attempt == 12){
    let ex = document.querySelector("#percent")
    ex.innerText= Math.floor(correct/12*100) + "%";
    document.querySelector(".result").classList.add("visi")
    }
}