/** 
*This method generates a red circle div where the user clicks
*
*@param evt     the info about the click
*/
function makeACircle(evt){
    //generate a div
    var circ = document.createElement("div");
    //add styles so it resembles a circle
    circ.style.width = "10px";
    circ.style.height = "10px";
    circ.style.opacity = "1";
    circ.style.border = "#99f solid 1px";
    circ.style.position = "absolute";
    circ.style.borderRadius = "100px";
    //give it the ability to animate its width if the width value changes
    circ.style.transition = "width 2s .5s ease-out, height 2s .5s ease-out, opacity 2s .5s ease-out";
    //set its horizontal position to that of the cursor:
    circ.style.left = evt.clientX+'px';
    //set its vertical position to that of the cursor:
    circ.style.top = evt.clientY+'px';
    //adds it to the HTML as child <body>
    document.body.appendChild(circ);
    
    //make the circle change after an almost-nonexistant delay
    setTimeout(function(){ 
         //change the circle, making it bigger
        circ.style.width = "200px";
        circ.style.height = "200px";
        circ.style.opacity = "0";
    } ,0);
   
}

onload=init;

function init() {
    document.onmousemove = function(evt){
        makeACircle(evt);
    }
}
