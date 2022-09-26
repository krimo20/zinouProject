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









blocks = [

{
    "gym":false,  //5  f
    "school":true,
    "store":false
},
{
    "gym":true,
    "school":false, //4
    "store":false
},
{
    "gym":true,
    "school":true, //2
    "store":false
},
{
    "gym":false,
    "school":true, //2
    "store":false
},
{
    "gym":false, //
    "school":true,
    "store":true
}
]

let Reqs= ["gym","school","store"];
let count=0
let preCount;
let total=0

for (a=0;a<Reqs.length;) {
    console.log(count)

   total+=count;
   if (blocks[0][Reqs[a]]===false)  {
    count=1000;
    
    for (b=1;b<blocks.length;) {
        if (blocks[b][Reqs[a]]===true) {
        preCount= b-0;
        //console.log(preCount);
        }
        b+=1;
        if (preCount<count){count=preCount}
        
    }
  }
   
   
   a+=1;
}




/* check the reqs list to know what we need 
compare ever element of the reqs list with the object properties
we gonna  work only with the properties that hav false value 
search for the reqs in other object when we find it we sub the index of true obj of our current obj 
we do this with all the rest of objects and we take the smallest value 
*/









