var newPJWindow = document.createElement('div');
var closeButton = document.createElement("button");
var pjWinOpened = false;
var borderSize = 4;
var borderUp= document.createElement('div');
var borderDown= document.createElement('div');
var borderLeft= document.createElement('div');
var borderRight= document.createElement('div');
var cornerUpLeft= document.createElement('div');
var cornerDownLeft= document.createElement('div');
var cornerUpRight= document.createElement('div');
var cornerDownRight= document.createElement('div');
var clickable = document.createElement("h1");
var content = document.createElement("p");
//var p;

var mouseOverId;

  function idRecognizer(id)
  {
    mouseOverId = id;
    console.log(id);
  }

  function idCleaner()
  {
    mouseOverId = " ";
  }

function GenerateProjectWindow()
{

//alert(borderSize);
  if(!pjWinOpened)
  {
      closeButton.setAttribute("id","pjCloseButton");
      closeButton.setAttribute("style","position: absolute; top:"+borderSize*2+"; right:"+borderSize*2+";");
      closeButton.setAttribute("onclick","closeWindow()");
      closeButton.innerHTML = "close";

      newPJWindow.setAttribute("class","windows");
      newPJWindow.setAttribute("id","project");
      newPJWindow.setAttribute("style", "height:auto; width:300px");

      clickable.appendChild(document.createTextNode("ASMR"));
      clickable.setAttribute("id","pjExpander");
      clickable.setAttribute("style","position: relative; height:100%");
      clickable.addEventListener('dblclick', expandWindow, false);

      content.appendChild(document.createTextNode("Lorem ipsum dolor sit amet"));

      content.setAttribute("id","pjContent");
      content.setAttribute("style","position: relative; height:0px; overflow-y: scroll; transition: height 1s; overflow: hidden");


      document.getElementsByTagName("body")[0].appendChild(newPJWindow);

        borderUp.setAttribute("id", "pjBordUp");
        borderUp.setAttribute("style","position: absolute; top:"+ (-(borderSize))+"px; left: "+ borderSize/2 +"px; background-color: red; width:"+(document.getElementById("project").offsetWidth - 2*borderSize)+"px; height: "+ borderSize+"px; cursor: n-resize;");
        borderUp.setAttribute("onmouseover", "idRecognizer('pjBordUp')");
        borderUp.setAttribute("onmouseleave", "idCleaner()");
        borderUp.addEventListener('mousedown', initDrag, false);

        borderDown.setAttribute("id", "pjBordDown");
        borderDown.setAttribute("style","position: absolute; bottom:"+ (-(borderSize))+"px; left: "+ borderSize/2 +"px; background-color: red; width:"+(document.getElementById("project").offsetWidth - 2*borderSize)+"px; height: "+ borderSize+"px; cursor: s-resize;");
        borderDown.setAttribute("onmouseover", "idRecognizer('pjBordDown')");
        borderDown.setAttribute("onmouseleave", "idCleaner()");
        borderDown.addEventListener('mousedown', initDrag, false);

        borderLeft.setAttribute("id", "pjBordLeft");
        borderLeft.setAttribute("style","position: absolute; transition: height 1s; top:"+borderSize/2 +"px; left: "+(-(borderSize))+"px; background-color: red; width:"+borderSize+"px; height:"+(document.getElementById("project").offsetHeight - 2*borderSize)+"px; cursor: w-resize;");
        borderLeft.setAttribute("onmouseover", "idRecognizer('pjBordLeft')");
        borderLeft.setAttribute("onmouseleave", "idCleaner()");
        borderLeft.addEventListener('mousedown', initDrag, false);

        borderRight.setAttribute("id", "pjBordRight");
        borderRight.setAttribute("style","position: absolute; transition: height 1s; top:"+borderSize/2 +"px; right: "+(-(borderSize))+"px; background-color: red; width:"+borderSize+"px; height:"+(document.getElementById("project").offsetHeight - 2*borderSize)+"px; cursor: e-resize;");
        borderRight.setAttribute("onmouseover", "idRecognizer('pjBordRight')");
        borderRight.setAttribute("onmouseleave", "idCleaner()");
        borderRight.addEventListener('mousedown', initDrag, false);

        cornerUpLeft.setAttribute("id", "pjCornerUpLeft");
        cornerUpLeft.setAttribute("style","position: absolute; top:"+ +(-(borderSize)) +"px; left: "+(-(borderSize))+"px; background-color: yellow; width:"+borderSize*2+"px; height:"+2*borderSize+"px; cursor: nw-resize;");
        cornerUpLeft.setAttribute("onmouseover", "idRecognizer('pjCornerUpLeft')");
        cornerUpLeft.setAttribute("onmouseleave", "idCleaner()");
        cornerUpLeft.addEventListener('mousedown', initDrag, false);

        cornerUpRight.setAttribute("id", "pjCornerUpRight");
        cornerUpRight.setAttribute("style","position: absolute; top:"+ +(-(borderSize)) +"px; right: "+(-(borderSize))+"px; background-color: yellow; width:"+borderSize*2+"px; height:"+2*borderSize+"px; cursor: ne-resize;");
        cornerUpRight.setAttribute("onmouseover", "idRecognizer('pjCornerUpRight')");
        cornerUpRight.setAttribute("onmouseleave", "idCleaner()");
        cornerUpRight.addEventListener('mousedown', initDrag, false);

        cornerDownRight.setAttribute("id", "pjCornerDownRight");
        cornerDownRight.setAttribute("style","position: absolute; bottom:"+ +(-(borderSize)) +"px; right: "+(-(borderSize))+"px; background-color: yellow; width:"+borderSize*2+"px; height:"+2*borderSize+"px; cursor: se-resize;");
        cornerDownRight.setAttribute("onmouseover", "idRecognizer('pjCornerDownRight')");
        cornerDownRight.setAttribute("onmouseleave", "idCleaner()");
        cornerDownRight.addEventListener('mousedown', initDrag, false);

        cornerDownLeft.setAttribute("id", "pjCornerDownLeft");
        cornerDownLeft.setAttribute("style","position: absolute; bottom:"+ +(-(borderSize)) +"px; left: "+(-(borderSize))+"px; background-color: yellow; width:"+borderSize*2+"px; height:"+2*borderSize+"px; cursor: sw-resize;");
        cornerDownLeft.setAttribute("onmouseover", "idRecognizer('pjCornerDownLeft')");
        cornerDownLeft.setAttribute("onmouseleave", "idCleaner()");
        cornerDownLeft.addEventListener('mousedown', initDrag, false);


        newPJWindow.appendChild(borderUp);
        newPJWindow.appendChild(borderDown);
        newPJWindow.appendChild(borderLeft);
        newPJWindow.appendChild(borderRight);
        newPJWindow.appendChild(cornerUpLeft);
        newPJWindow.appendChild(cornerDownLeft);
        newPJWindow.appendChild(cornerUpRight);
        newPJWindow.appendChild(cornerDownRight);
        newPJWindow.appendChild(clickable);
        newPJWindow.appendChild(closeButton);
        newPJWindow.appendChild(content);

      pjWinOpened = true;
   }
   // Make the DIV element draggable:
   dragElement(document.getElementById("project"));


   function dragElement(elmnt) {

       var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
       elmnt.onmousedown = dragMouseDown;

     function dragMouseDown(e) {
       if(mouseOverId != "pjBordUp" && mouseOverId != "pjBordDown" && mouseOverId != "pjBordLeft" && mouseOverId != "pjBordRight" && mouseOverId != "pjCornerUpLeft" && mouseOverId != "pjCornerDownLeft" && mouseOverId != "pjCornerUpRight" && mouseOverId != "pjCornerDownRight")
       {

       e = e || window.event;
       e.preventDefault();
       // get the mouse cursor position at startup:
       pos3 = e.clientX;
       pos4 = e.clientY;
       document.onmouseup = closeDragElement;
       // call a function whenever the cursor moves:
       document.onmousemove = elementDrag;
     }

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


   var startX, startY, startWidth, startHeight;
 var id;
     function initDrag(e) {

       if(mouseOverId == "pjBordDown")
       //this collects id from MouseOverId, which is dynamic and may change when hovering other things, to make a static value that, during resizing, won't change until mouse is up.
       {
         id = "pjBordDown";
       }
       else if(mouseOverId == "pjBordRight")
       {
         id = "pjBordRight";
       }
       else if(mouseOverId == "pjBordUp")
       {
         id = "pjBordUp";
       }
       else if(mouseOverId == "pjBordLeft")
       {
         id = "pjBordLeft";
       }

       else if(mouseOverId == "pjCornerUpLeft")
       {
         id = "pjCornerUpLeft";
       }
      else if(mouseOverId == "pjCornerUpRight")
       {
         id = "pjCornerUpRight";
       }
       else if(mouseOverId == "pjCornerDownRight")
       {
         id = "pjCornerDownRight";
       }
       else if(mouseOverId == "pjCornerDownLeft")
       {
         id = "pjCornerDownLeft";
       }

          startX = e.clientX;
           startY = e.clientY;
           startYPos = document.getElementById("project").getBoundingClientRect().top;
           startXPos = document.getElementById("project").getBoundingClientRect().left;
           startWidth = parseInt(document.defaultView.getComputedStyle(document.getElementById("project")).width, 10);
           startHeight = parseInt(document.defaultView.getComputedStyle(document.getElementById("project")).height, 10);

           document.documentElement.addEventListener('mousemove', doDrag, false);
           document.documentElement.addEventListener('mouseup', stopDrag, false);
       }

     function doDrag(e) {
            if(id == "pjBordDown")
            {
                 document.getElementById("project").style.height = (startHeight + e.clientY - startY) + 'px';
                 document.getElementById("pjBordRight").style.height = document.getElementById("project").offsetHeight - borderSize*2;
                document.getElementById("pjBordLeft").style.height = document.getElementById("project").offsetHeight - borderSize*2;
            }
          else if(id == "pjBordRight")
           {
              document.getElementById("project").style.width = (startWidth + e.clientX - startX) + 'px';
              document.getElementById("pjBordUp").style.width = document.getElementById("project").offsetWidth - borderSize*2;
              document.getElementById("pjBordDown").style.width = document.getElementById("project").offsetWidth - borderSize*2;

           }
           if(id == "pjBordUp")
           {
             document.getElementById("project").style.top = startYPos + (e.clientY - startY) + 'px';
             document.getElementById("project").style.height = startHeight -( e.clientY - startY) + 'px';
             document.getElementById("pjBordRight").style.height = document.getElementById("project").offsetHeight - borderSize*2;
            document.getElementById("pjBordLeft").style.height = document.getElementById("project").offsetHeight - borderSize*2;

           }
           if(id == "pjBordLeft")
           {
             document.getElementById("project").style.left = startXPos + (e.clientX - startX) + 'px';
             document.getElementById("project").style.width = startWidth -( e.clientX - startX) + 'px';
             document.getElementById("pjBordUp").style.width= document.getElementById("project").offsetWidth - borderSize*2;
            document.getElementById("pjBordDown").style.width = document.getElementById("project").offsetWidth - borderSize*2;

           }
           if(id == "pjCornerUpLeft")
           {
             document.getElementById("project").style.top = startYPos + (e.clientY - startY) + 'px';
             document.getElementById("project").style.height = startHeight -( e.clientY - startY) + 'px';
             document.getElementById("pjBordRight").style.height = document.getElementById("project").offsetHeight - borderSize*2;
            document.getElementById("pjBordLeft").style.height = document.getElementById("project").offsetHeight - borderSize*2;

            document.getElementById("project").style.left = startXPos + (e.clientX - startX) + 'px';
            document.getElementById("project").style.width = startWidth -( e.clientX - startX) + 'px';
            document.getElementById("pjBordUp").style.width= document.getElementById("project").offsetWidth - borderSize*2;
           document.getElementById("pjBordDown").style.width = document.getElementById("project").offsetWidth - borderSize*2;

           }
           if(id == "pjCornerUpRight")
           {
             document.getElementById("project").style.top = startYPos + (e.clientY - startY) + 'px';
             document.getElementById("project").style.height = startHeight -( e.clientY - startY) + 'px';
             document.getElementById("pjBordRight").style.height = document.getElementById("project").offsetHeight - borderSize*2;
            document.getElementById("pjBordLeft").style.height = document.getElementById("project").offsetHeight - borderSize*2;

            document.getElementById("project").style.width = (startWidth + e.clientX - startX) + 'px';
            document.getElementById("pjBordUp").style.width = document.getElementById("project").offsetWidth - borderSize*2;
            document.getElementById("pjBordDown").style.width = document.getElementById("project").offsetWidth - borderSize*2;
           }

           if(id == "pjCornerDownRight")
           {
             document.getElementById("project").style.height = (startHeight + e.clientY - startY) + 'px';
             document.getElementById("pjBordRight").style.height = document.getElementById("project").offsetHeight - borderSize*2;
            document.getElementById("pjBordLeft").style.height = document.getElementById("project").offsetHeight - borderSize*2;

            document.getElementById("project").style.width = (startWidth + e.clientX - startX) + 'px';
            document.getElementById("pjBordUp").style.width = document.getElementById("project").offsetWidth - borderSize*2;
            document.getElementById("pjBordDown").style.width = document.getElementById("project").offsetWidth - borderSize*2;
           }
           if(id == "pjCornerDownLeft")
           {
             document.getElementById("project").style.height = (startHeight + e.clientY - startY) + 'px';
             document.getElementById("pjBordRight").style.height = document.getElementById("project").offsetHeight - borderSize*2;
            document.getElementById("pjBordLeft").style.height = document.getElementById("project").offsetHeight - borderSize*2;

             document.getElementById("project").style.left = startXPos + (e.clientX - startX) + 'px';
             document.getElementById("project").style.width = startWidth -( e.clientX - startX) + 'px';
             document.getElementById("pjBordUp").style.width= document.getElementById("project").offsetWidth - borderSize*2;
            document.getElementById("pjBordDown").style.width = document.getElementById("project").offsetWidth - borderSize*2;
           }
       }

     function stopDrag(e) {
 console.log("done" + " " + id + " " + startY + " " + startHeight);
           document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
      }

      var winExpanded = false;
      var contentHeight = 100;
      function expandWindow()
      {
        if(!winExpanded)
        {
          document.getElementById("pjContent").style.height = contentHeight+"px";
         console.log("expanded");
         document.getElementById("pjBordRight").style.height = document.getElementById("project").offsetHeight - borderSize*2 + contentHeight;
        document.getElementById("pjBordLeft").style.height = document.getElementById("project").offsetHeight - borderSize*2 + contentHeight;
        }
        else {
          document.getElementById("pjBordRight").style.height = document.getElementById("project").offsetHeight - borderSize*2 - contentHeight;
         document.getElementById("pjBordLeft").style.height = document.getElementById("project").offsetHeight - borderSize*2 - contentHeight;
          document.getElementById("pjContent").style.height = 0+"px";
          console.log("restricted");
        }
        winExpanded = !winExpanded;
      }

}

//expandWindow


// Resizable div



function closeWindow()
{

  document.getElementById("pjContent").innerHTML=" ";
  document.getElementById("pjExpander").innerHTML=" ";
  document.getElementById("project").remove();

  pjWinOpened = false;
}
