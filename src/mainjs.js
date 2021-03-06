let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");

let screenresult = '';

for(item of buttons){
   item.addEventListener("click",(e)=>{
       buttontext = e.target.innerText;
       console.log(buttontext);
       if(buttontext == 'x'){
           buttontext = '*';
           screenresult += buttontext;
           screen.value = screenresult;
       }
       else if(buttontext == 'C'){
             screenresult = "";
             screen.value = screenresult;
       }
       else if(buttontext == '='){
           screen.value = eval(screenresult);
       }
       else{
        screenresult += buttontext;
        screen.value = screenresult;
       }
       
   })
}