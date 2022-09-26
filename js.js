let menulogo = document.getElementById("menulogo");
let ul = document.getElementById("ul");


int=1;
menulogo.onclick = function () {
    
if (int%2!=0) {
ul.setAttribute("class","slide")
int+=1}
else {
    ul.setAttribute("class"," ")
    int+=1
}
}










