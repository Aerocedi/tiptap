//javascript code for tapwin game
//AUTHOR: Abosede Peter
//LISENCE: Aerocedi technologies
//DATE:10/03/2018
//TAGS:


function say1(){
   var man= document.getElementById("1").value;
if(man==act){
score=score+mark;
 document.getElementById("fun").innerText=score;
 document.getElementById("nuin").innerText=life;
    
}
else{
    if(score>1){
        score=score-1;
        life=life-1;
    }
}
if(life<9){
    document.getElementById("nuin").innerText=life;
    alert("GAME OVER !!");
    window.stop(change());
}
}


function say2(){
    var man= document.getElementById("2").value;
 if(man==act){
 score=score+mark;
 document.getElementById("fun").innerText=score;
 }
 else{
     if(score>1){
         score=score-1;
         life=life-1;

     }
 }
 if(life<9){
    document.getElementById("nuin").innerText=life;
    alert("GAME OVER !!");
    window.stop(change());
}
 }
 function say3(){
    var man= document.getElementById("3").value;
 if(man==act){
 score=score+mark;
document.getElementById("fun").innerText=score;
 }
 else{
     if(score>1){
         score=score-1;
         life=life-1;
     }
 }
 if(life<9){
    document.getElementById("nuin").innerText=life;
    alert("GAME OVER !!");
    window.stop(change());
}
 }
 function say4(){
    var man= document.getElementById("4").value;
 if(man==act){
 score=score+mark;
  document.getElementById("fun").innerText=score;
 }
 else{
     if(score>1){
         score=score-1;
         life=life-1;
     }
 }
 if(life<9){
    document.getElementById("nuin").innerText=life;
    alert("GAME OVER !!");
    window.stop(change());
}
 }

 function say5(){
    var man= document.getElementById("5").value;
 if(man==act){
 score=score+mark;
 document.getElementById("fun").innerText=score;
 }
 else{
     if(score>1){
         score=score-1;
         life=life-1;
     }
 }
 if(life<9){
    document.getElementById("nuin").innerText=life;
    alert("GAME OVER !!");
    window.stop(change());
}
 }

 function say6(){
    var man= document.getElementById("6").value;
 if(man==act){
 score=score+mark;
document.getElementById("fun").innerText=score;
 }
 else{
     if(score>1){
         score=score-1;
         life=life-1;
     }
 }
 if(life<9){
    document.getElementById("nuin").innerText=life;
    alert("GAME OVER !!");
    window.stop(change());
}
 }

 function say7(){
    var man= document.getElementById("7").value;
 if(man==act){
 score=score+mark;
 document.getElementById("fun").innerText=score;
 }
 else{
     if(score>1){
         score=score-1;
         life=life-1;
     }
 }
 if(life<9){
    document.getElementById("nuin").innerText=life;
    alert("GAME OVER !!");
    window.stop(change());
}
 }


 function say8(){
    var man= document.getElementById("8").value;
 if(man==act){
 score=score+mark;
 document.getElementById("fun").innerText=score;
 }
 else{
     if(score>2){
         score=score-1;
         life=life-1;
     }
 }
 if(life<9){
    document.getElementById("nuin").innerText=life;
    alert("GAME OVER !!");
    window.stop(change());
}
 }

 function say9(){
    var man= document.getElementById("9").value;
 if(man==act){
 score=score+mark;
 document.getElementById("fun").innerText=score;
 }
 else{
     if(score>1){
         score=score-1;
         life=life-1;
     }
 }
 if(life<9){
     document.getElementById("nuin").innerText=life;
    alert("GAME OVER !!");
    window.stop(change());
}
 }



var mainbox;
var live=10;
var life= Math.abs(live);
var score=0;
var mark=5;
var act;
var playme;
var all;
var alter=false;

function play(id,color){
document.getElementById(id).style.backgroundColor=color;
}
function runn(){
    mainbox=Math.random()*10;
    act=Math.ceil(mainbox);
}
function change(){
   runn();
    if(act==1){
        play("1","rgb(114, 64, 172)");
        play("2","white")
        play("3","white")
        play("4","white")
        play("5","white")
        play("6","white")
        play("7","white")
        play("8","white")
        play("9","white")
       
        
    }
   
    if(act==2){
        play("2","rgb(114, 64, 172)");
        play("1","white")
        play("3","white")
        play("4","white")
        play("5","white")
        play("6","white")
        play("7","white")
        play("8","white")
        play("9","white")
    }
    if(act==3){
        play("3","rgb(114, 64, 172)");
        play("2","white")
        play("1","white")
        play("4","white")
        play("5","white")
        play("6","white")
        play("7","white")
        play("8","white")
        play("9","white")
    }
    if(act==4){
        play("4","rgb(114, 64, 172)");
        play("2","white")
        play("3","white")
        play("1","white")
        play("5","white")
        play("6","white")
        play("7","white")
        play("8","white")
        play("9","white")
    }
    if(act==5){
        play("5","rgb(114, 64, 172)");
        play("2","white")
        play("3","white")
        play("4","white")
        play("1","white")
        play("6","white")
        play("7","white")
        play("8","white")
        play("9","white")
    }
    if(act==6){
        play("6","rgb(114, 64, 172)");
        play("2","white")
        play("3","white")
        play("4","white")
        play("5","white")
        play("1","white")
        play("7","white")
        play("8","white")
        play("9","white")
    }
    if(act==7){
        play("7","rgb(114, 64, 172)");
        play("2","white")
        play("3","white")
        play("4","white")
        play("5","white")
        play("6","white")
        play("1","white")
        play("8","white")
        play("9","white")
    }
    if(act==8){
        play("8","rgb(114, 64, 172)");
        play("2","white")
        play("3","white")
        play("4","white")
        play("5","white")
        play("6","white")
        play("7","white")
        play("1","white")
        play("9","white")
    }
    if(act==9){
        play("9","rgb(114, 64, 172)");
        play("2","white")
        play("3","white")
        play("4","white")
        play("5","white")
        play("6","white")
        play("7","white")
        play("8","white")
        play("1","white")
    }
    
    
}
function check(){
    switch(score){
        case 10:
        life=life+1;
    }
    change();
    playme=window.setInterval(change,1000);
  
    
}
function stop(){
    window.clearInterval(playme);
    alter=!alter;
    if(alter==true){
    document.getElementById("pause").innerText="Continue Game";
    }else{
        document.getElementById("pause").innerText="Pause Game";
    }
    var nicecode=document.getElementById("pause").innerHTML;
    if(nicecode=="Pause Game"){
        check();
    }
}