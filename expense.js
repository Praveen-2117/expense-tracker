let a1=[];
function display(){
let x=document.getElementById("i");
let y=document.getElementById("j");
let listli=document.getElementById("list");
a1.push(y.value);

document.getElementById("demo").innerHTML+=`<div id="demo1">
<div>${x.value}</div>
<div>${y.value}</div>
<button class="remove">x</button></div>`

document.getElementById("span1").innerText=eval(a1.reduce(function(pre,cur){
    return pre+cur;
}))
 let RE=document.querySelectorAll(".remove");
for (let i = 0; i < RE.length; i++) {
      RE[i].onclick=function(){
        this.parentNode.remove();
      }
    
}

x.value='';
y.value='';
 

 



}





