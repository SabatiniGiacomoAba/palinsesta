var newPJWindow = document.createElement('div');
var closeButton = document.createElement("button");
var pjWinOpened = false;

function GenerateProjectWindow()
{
  if(!pjWinOpened)
  {
  closeButton.setAttribute("id","pjCloseButton");
  closeButton.setAttribute("onclick","closeWindow()");
  closeButton.innerHTML = "close";

  newPJWindow.setAttribute("class","windows");
  newPJWindow.setAttribute("id","project");

  newPJWindow.appendChild(document.createTextNode("Hello World again!"));
  newPJWindow.appendChild(closeButton);
   document.getElementsByTagName("body")[0].appendChild(newPJWindow);

pjWinOpened = true;
}
   // Make the DIV element draggable:
   dragElement(document.getElementById("project"));

   function dragElement(elmnt) {
     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

       elmnt.onmousedown = dragMouseDown;


     function dragMouseDown(e) {
       e = e || window.event;
       e.preventDefault();
       // get the mouse cursor position at startup:
       pos3 = e.clientX;
       pos4 = e.clientY;
       document.onmouseup = closeDragElement;
       // call a function whenever the cursor moves:
       document.onmousemove = elementDrag;
     }

     function elementDrag(e) {
       e = e || window.event;
       e.preventDefault();
       // calculate the new cursor position:
       pos1 = pos3 - e.clientX;
       pos2 = pos4 - e.clientY;
       pos3 = e.clientX;
       pos4 = e.clientY;
       // set the element's new position:
       elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
       elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
     }

     function closeDragElement() {
       // stop moving when mouse button is released:
       document.onmouseup = null;
       document.onmousemove = null;
     }
   }
}

function closeWindow()
{
  document.getElementById("project").innerHTML=" ";
  document.getElementById("project").remove();

  pjWinOpened = false;
}
