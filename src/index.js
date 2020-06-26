


'use strict';


require('normalize.css/normalize.css');
require('./styles/index.scss');


const jsonFile = require("./students.json");
//const fs = require('file-system');


var Draggable = require('Draggable');


const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});


function textWidth(text, fontProp) {
    var tag = document.createElement('div')
    tag.style.position = 'absolute'
    tag.style.left = '-99in'
    tag.style.whiteSpace = 'nowrap'
    tag.style.font = fontProp
    tag.innerHTML = text

    document.body.appendChild(tag)
    var result = tag.clientWidth
    document.body.removeChild(tag)
    return result;
}



document.querySelector(".colophon-title").onclick = showColophon;


//interaction



jsonFile.students.forEach(el => {
  //console.log(el)
  var container = document.querySelector(".middle-container")
  var projectWindow = document.createElement("div")
  projectWindow.title = "Clicca qui per aprire il progetto!";
  projectWindow.style.backgroundSize = "cover";
  projectWindow.style.backgroundImage = "url('" + el.cover + "')"
  projectWindow.onclick = () => {
    showPopups(el.title, el.author, el.description, el.link)
  }
  container.appendChild(projectWindow)
})


// menu moving
var elmnts = document.querySelectorAll('.middle-container > div');
var elmntsLength = elmnts.length
let menuCounter = 0


var myTimer = setInterval(moveMenus, 500)
/*
var addBtn = document.getElementsByClassName("add-button")[0];
addBtn.onclick = function()
{
  fontChanger()
  var addProject_container = document.createElement("div")
  addProject_container.classList.add("add-project-window")
  addProject_container.id = "add-project-window-" + counter
  var title_container = document.createElement("div")
  title_container.classList.add("add-project-title-container")
  title_container.id = "add-project-title-container-" + counter;
  var _title = document.createElement("h1")
  _title.classList.add("add-project-window-title")
  _title.classList.add("titles_marquee");
  var content_container = document.createElement("div")
  content_container.classList.add("add-project-content-container")
  _title.textContent = "carica il tuo progetto!";
//showPopups(el.title, el.author, el.description, el.link)
  var _content = document.createElement("p");
   _content.textContent = "inviaci il tuo progetto!";
  // var pjForm = document.createElement("form");

   var titleLabel =  document.createElement("label");
   var titleInput =   document.createElement("input");
   var authorLabel =  document.createElement("label");
   var authorInput =   document.createElement("input");
   var descriptionLabel =  document.createElement("label");
   var descriptionInput =   document.createElement("input");
   var linkLabel =  document.createElement("label");
   var linkInput =   document.createElement("input");
   var coverLabel =  document.createElement("label");
   var coverInput =   document.createElement("input");
   var pjSubmit =  document.createElement("button");

  content_container.appendChild(_content)


  //pjForm.setAttribute("method", "POST");

  titleLabel.setAttribute("for","pjTitle");
  titleLabel.innerHTML = "titolo";
  titleInput.setAttribute("type","text");
  titleInput.setAttribute("id","pjTitle");
  titleInput.setAttribute("name","pjTitle");
  titleInput.setAttribute("value", "");

  authorLabel.setAttribute("for","pjAuthor");
  authorLabel.innerHTML = "autore";
  authorInput.setAttribute("type","text");
  authorInput.setAttribute("id","pjAuthor");
  authorInput.setAttribute("name","pjAuthor");
  authorInput.setAttribute("value", "");

  descriptionLabel.setAttribute("for","pjDescription");
  descriptionLabel.innerHTML = "descrizione";
  descriptionInput.setAttribute("type","text");
  descriptionInput.setAttribute("id","pjDescription");
  descriptionInput.setAttribute("name","pjDescription");
  descriptionInput.setAttribute("value", "");

  linkLabel.setAttribute("for","pjLink");
  linkLabel.innerHTML = "link del progetto";
  linkInput.setAttribute("type","text");
  linkInput.setAttribute("id","pjLink");
  linkInput.setAttribute("name","pjLink");
  linkInput.setAttribute("value", "");

  coverLabel.setAttribute("for","pjCover");
  coverLabel.innerHTML = "immagine di copertina (url)";
  coverInput.setAttribute("type","text");
  coverInput.setAttribute("id","pjCover");
  coverInput.setAttribute("name","pjCover");
  coverInput.setAttribute("value", "");

  //pjSubmit.setAttribute("type", "submit");
  //pjSubmit.setAttribute("value", "invia");
  pjSubmit.innerHTML = "invia";

  content_container.appendChild(titleLabel);
  content_container.appendChild(document.createElement("br"));
  content_container.appendChild(titleInput);
  content_container.appendChild(document.createElement("br"));

  content_container.appendChild(authorLabel);
  content_container.appendChild(document.createElement("br"));
  content_container.appendChild(authorInput);
  content_container.appendChild(document.createElement("br"));

  content_container.appendChild(descriptionLabel);
  content_container.appendChild(document.createElement("br"));
  content_container.appendChild(descriptionInput);
  content_container.appendChild(document.createElement("br"));

  content_container.appendChild(linkLabel);
  content_container.appendChild(document.createElement("br"));
  content_container.appendChild(linkInput);
  content_container.appendChild(document.createElement("br"));

  content_container.appendChild(coverLabel);
  content_container.appendChild(document.createElement("br"));
  content_container.appendChild(coverInput);
  content_container.appendChild(document.createElement("br"));
  content_container.appendChild(pjSubmit);

  //content_container.appendChild(pjForm);


  title_container.appendChild(_title)
  var span = document.createElement("span")
  var cross = document.createTextNode("×");
  span.appendChild(cross);
  span.style.padding = "0px 12.5px";
  span.id = counter
  span.addEventListener("click", closeAddProj)
  title_container.append(span)
  addProject_container.appendChild(title_container)
  addProject_container.appendChild(content_container)

//const fs = require('fs');
//const fs = require('fs');
pjSubmit.onclick = () =>
{

  //document.getElementById("pjTitle").value
  let project = {
    "author": document.getElementById("pjAuthor").value,
     "title" :document.getElementById("pjTitle").value,
     "link": document.getElementById("pjLink").value,
     "description": document.getElementById("pjDescription").value,
     "cover": document.getElementById("pjTitle").value
  };
  let data = JSON.stringify(project);
  console.log(project);

fs.writeFile(jsonFile.students, project, (err) =>
{
  if (err) throw err;
    console.log('Data written to file');
})
}

  document.body.appendChild(addProject_container)
  addProject_container.style.top = (Math.random() * window.innerHeight) / 3 + "px";
  addProject_container.style.left = (Math.random() * window.innerWidth) / 3 + "px";
  new Draggable(addProject_container, {
    handle: title_container,
    onDragEnd:  function(){
      fontChanger();
      addProject_container.style.zIndex = 98;
      for(var y = 0; y < document.getElementsByClassName('popup-window').length; y++)
      {
          document.getElementsByClassName('popup-window')[y].style.zIndex -= 1;
          //console.log(document.getElementsByClassName('popup-window')[y].style.zIndex);
      }
    }
  });
}

function closeAddProj() {
  fontChanger()
  document.querySelectorAll(".add-project-window").forEach(el => {
    el.remove()
  })
}
*/

function moveMenus() {
  elmnts.forEach(el => {
    el.style.zIndex = "initial";
  })
  elmnts[menuCounter].style.zIndex = "9";
  if (menuCounter == elmntsLength - 1) {
    menuCounter = 0
  } else {
    menuCounter++
  }
}
elmnts.forEach(el => {
  el.onmouseover = () => {
    elmnts.forEach(el => {
      el.style.zIndex = "0"
    })
    el.style.zIndex = "9"

  }
})
document.querySelector(".middle-container").onmouseenter = () => {
  clearInterval(myTimer)
}
document.querySelector(".middle-container").onmouseleave = () => {
  myTimer = setInterval(moveMenus, 500)
}



// font change
var fonts = ["Times New Roman", "Helvetica", "Courier", "Arial", "Verdana", "Comic Sans MS"];
// mettiamo il timer in una varibile così da poterlo resettare quando si clicca un elemento

var projectDisplayed = false;
var firstTime = true;

function showProjectContainer() {
  if(!projectDisplayed)
  {
   if(firstTime)
    {
      if(screen.width <900)
      {

          //fontChanger()
          var guide_container = document.createElement("div")
          guide_container.classList.add("g-window")
          guide_container.id = "g-window-" + counter
          var title_container = document.createElement("div")
          title_container.classList.add("g-title-container")
          title_container.id = "g-title-container-" + counter;
          var _title = document.createElement("h1")
          _title.classList.add("g-window-title")
          _title.classList.add("titles_marquee");
          var content_container = document.createElement("div")
          content_container.classList.add("g-content-container")
          _title.textContent = "Guida";

          var _content = document.createElement("p")
          _content.textContent = "Scrolla sopra le immagini per navigare, tocca un'immagine per aprire il progetto.";
          content_container.appendChild(_content)
          title_container.appendChild(_title)
          var span = document.createElement("span")
          var cross = document.createTextNode("×");
          span.classList.add("close-item");
          span.appendChild(cross);
          span.style.padding = "0px 12.5px";
          span.id = counter
          span.ontouchstart = () =>{
            //fontChanger()
            document.querySelectorAll(".g-window").forEach(el => {
              el.remove()
          });
        }

          title_container.append(span)
          guide_container.appendChild(title_container)
          guide_container.appendChild(content_container)



          document.body.appendChild(guide_container)
          guide_container.style.top =  (window.innerHeight/2) + "px";
          guide_container.style.left =  50 + "px";
          new Draggable(guide_container, {
            handle: title_container,
            onDragEnd:  function(){
              //fontChanger();
              
              for(var y = 0; y < document.getElementsByClassName('popup-window').length; y++)
              {
                  document.getElementsByClassName('popup-window')[y].style.zIndex -= 1;
                  //console.log(document.getElementsByClassName('guide-window')[y].style.zIndex);
              }
              
              for(var y = 0; y < document.getElementsByClassName('video-window').length; y++)
              {
                  document.getElementsByClassName('video-window')[y].style.zIndex -= 1;
                  //console.log(document.getElementsByClassName('guide-window')[y].style.zIndex);
              }
              guide_container.style.zIndex = 98;
            }
          });
        }
      firstTime = false;
    }
      document.getElementsByClassName("middle-container")[0].style.display = "block";
      projectDisplayed = true;
  }
  else{
    document.getElementsByClassName("middle-container")[0].style.display = "none";
    projectDisplayed = false;
  }
}

var fontTimer
window.onload = function () {
  var projectContainer = document.getElementsByClassName("project-container")[0]
  document.getElementsByClassName("middle-container")[0].style.display = "none";
  
  document.getElementsByTagName("body")[0].appendChild(projectContainer);
  
  projectContainer.addEventListener("click", showProjectContainer)

  //projectContainer.addEventListener("touchstart", showProjectContainer)
  
  if(screen.width < 900)
  {


  /*  var mouseOver = false;
$('body').bind('mousewheel', function(e){
  if(mouseOver){
    if(e.preventDefault) { e.preventDefault(); }
    e.returnValue = false;
    return false;
  }
});

$('body').mouseenter(function(){ mouseOver=true; });
$('body').mouseleave(function(){ mouseOver=false; }); */
var pjCounter = 0;
var limit = 50;
var touchStartYValue = 0;
var lastDelta = 0;
$('body').bind('touchstart', function(e)
{
  clearInterval(myTimer)
  touchStartYValue = e.originalEvent.touches[0].clientY;
});
$('body').bind('touchmove', function(e){
  var projectsArray = document.querySelectorAll('.middle-container > div');
  

  var delta = touchStartYValue - e.originalEvent.changedTouches[0].clientY;;

  if(delta >= limit){
  pjCounter--;
    if(pjCounter > -1)
    {

    projectsArray.forEach((pjs,idx) => {
      if (idx == pjCounter) {return}
      pjs.style.zIndex = "0";
    })
    projectsArray[pjCounter].style.zIndex = "9";
    limit += 50;
    lastDelta = delta;
    }
    else {
      pjCounter++;
      delta = lastDelta;
    }
  //console.log("limit is " + limit);
 //  console.log("pjCounter is " + pjCounter);
  }
  else if (delta < limit){
    pjCounter++;
    if(pjCounter < projectsArray.length)
    {
      
    projectsArray.forEach((pjs,idx) => {
      if (idx == pjCounter) {return}
      pjs.style.zIndex = "0";
    })
    projectsArray[pjCounter].style.zIndex = "9";
    limit -= 50;
  //  lastDelta = delta;
    }
    else {
      pjCounter--;
      delta = lastDelta;
    }
  }


});
$('body').bind('touchend', function(e){
     myTimer = setInterval(moveMenus, 500);
  });
  }
  fontTimer = setInterval(fontChanger, 16000);

}


var font_counter = 0;
function fontChanger() {

  clearInterval(fontTimer)
  document.getElementsByTagName("body")[0].setAttribute("style", "font-family: '" + fonts[font_counter] + "' !important");
  document.getElementsByClassName("site-title")[0].setAttribute("style", "font-family: " + fonts[font_counter] + " !important");
  font_counter++;
  if (font_counter == fonts.length) {
    font_counter = 0;
  }
  fontTimer = setInterval(fontChanger, 16000);
  $(".animation-runner").removeClass("run-animation")
  $(".animation-runner").addClass("run-animation")
  

}

// this counter is used for setting unique IDs around the object, so that we can close them without any problem by accessind their IDs
let counter = 0;

function showPopups(title, author, content, link) {
  // se clicchiamo per fare comparire un popup cambiamo il carattere
  showProjectContainer()
  fontChanger()
  // description


  var popup_container = document.createElement("div")
  popup_container.classList.add("popup-window")
  popup_container.id = "popup-window-" + counter
  var title_container = document.createElement("div")
  title_container.classList.add("title-container")
  title_container.id = "title-container-" + counter;
  var _title = document.createElement("h1")
  _title.classList.add("popup-window-title");
  _title.classList.add("titles_marquee");
  var content_container = document.createElement("div")
  content_container.classList.add("content-container")
  _title.textContent = title + " - di " + author;

  //  var _author = document.createElement("span")
  //  _author.textContent =  "by " + author
  //  _author.classList.add("author");
  var _content = document.createElement("p")
  _content.textContent = content
  //title_container.appendChild(_author)
  content_container.appendChild(_content)
  title_container.appendChild(_title)
  var span = document.createElement("span");
  var cross = document.createTextNode("×");
  span.appendChild(cross);

  span.style.padding = "0px 15px";
  span.id = counter;
  span.addEventListener("click", closePopupWindow);
  span.addEventListener("touchstart", closePopupWindow)
  $("#"+counter).bind("tap", closePopupWindow);
  title_container.append(span)
  popup_container.appendChild(title_container)
  popup_container.appendChild(content_container)

  counter++

  document.body.appendChild(popup_container);

  let window_counter = 0
  $(".popup-window").each(() => {
        window_counter += 1
  })
  if (window.innerWidth < 900) {
    popup_container.style.top = window_counter >= 1 ? (150 * window_counter) + "px" : (window.innerHeight / 2)  + "px";
    popup_container.style.left = ("15px");
  } else {
    popup_container.style.top = window_counter >= 1 ? (250 * window_counter) + "px" : (window.innerHeight / 2)  + "px";
    popup_container.style.left = ("600px");
  }
  
  new Draggable(popup_container, {
    handle: title_container,
    onDragEnd: function() {
      for(var y = 0; y < document.getElementsByClassName('popup-window').length; y++)
      {
          document.getElementsByClassName('popup-window')[y].style.zIndex -= 1;
          //console.log(document.getElementsByClassName('popup-window')[y].style.zIndex);
      }
      for(var y = 0; y < document.getElementsByClassName('video-window').length; y++)
      {
          document.getElementsByClassName('video-window')[y].style.zIndex -= 1;
          //console.log(document.getElementsByClassName('popup-window')[y].style.zIndex);
      }
      popup_container.style.zIndex = 98
    }
  });
  // video




  // devo provare ad aggiungere il titolo
  var video_container = document.createElement("div")
  video_container.classList.add("video-window")
  video_container.id = "video-window-" + counter
  var video_title_container = document.createElement("div")
  //var video_author = document.createElement("span")
  //video_author.textContent =  "by " + author
  //video_author.classList.add("video-author");
  //video_title_container.appendChild(video_author)

  video_title_container.classList.add("video-title-container")
  video_title_container.id = "video-title-container-" + counter;
  var video_title = document.createElement("h1")
  video_title.classList.add("video-window-title")
  video_title.classList.add("titles_marquee");
  video_title.textContent = title + " - di " + author
  video_title_container.appendChild(video_title)
  video_container.appendChild(video_title_container)
  var video_iframe = document.createElement("div")
  video_iframe.classList.add("video-iframe-container")
  var iframe = document.createElement("iframe");
  var span_v = document.createElement("span")
  var cross_v = document.createTextNode("×");
  span_v.appendChild(cross_v);
  span_v.style.padding = "0px 15px";
  span_v.id = counter;
  span_v.addEventListener("click", closePopupWindow)
  span_v.addEventListener("touchstart", closePopupWindow)
  $("#"+counter).bind("tap", closePopupWindow);
  video_title_container.append(span_v);
  iframe.setAttribute("src", link);
  iframe.setAttribute("autoplay", "1")
  video_iframe.appendChild(iframe)

  video_container.appendChild(video_iframe)


  document.body.appendChild(video_container)
  


  if (window.innerWidth < 900) {
    video_container.style.top = window_counter >= 1 ? (300 * window_counter) + "px" : (window.innerHeight / 2)+ 50  + "px";
    video_container.style.left = ("250px");
  } else {
    video_container.style.top = window_counter >= 1 ? (300 * window_counter) + "px" : (window.innerHeight / 2)+ 50  + "px";
    video_container.style.left = ("800px");
  }

  //dragElement(video_container,counter)
  counter++
  new Draggable(video_container, {
    onDragEnd: function() {
      for(var y = 0; y < document.getElementsByClassName('popup-window').length; y++)
      {
          document.getElementsByClassName('popup-window')[y].style.zIndex -= 1;
          //console.log(document.getElementsByClassName('popup-window')[y].style.zIndex);
      }
      for(var y = 0; y < document.getElementsByClassName('video-window').length; y++)
      {
          document.getElementsByClassName('video-window')[y].style.zIndex -= 1;
          //console.log(document.getElementsByClassName('popup-window')[y].style.zIndex);
      }
      video_container.style.zIndex = 98
    }
  });
}

function closePopupWindow() {
  //fontChanger()
  var thisContainer = this.parentNode;
  var master = thisContainer.parentNode;
  //alert(master.id);
  const id = this.id
  if (master.id == "popup-window-" + id) {
    document.querySelector("#popup-window-" + id).remove()
  }
  else if (master.id == "video-window-" + id) {
    document.querySelector("#video-window-" + id).remove()
  }
}

function showColophon() {
  fontChanger()
  var popup_container = document.createElement("div")
  popup_container.classList.add("colophon-window")
  popup_container.id = "colophon-window-" + counter
  var title_container = document.createElement("div")
  title_container.classList.add("colophon-title-container")
  title_container.id = "colophon-title-container-" + counter;
  var _title = document.createElement("h1")
  _title.classList.add("colophon-window-title")
  _title.classList.add("titles_marquee");
  var content_container = document.createElement("div")
  content_container.classList.add("colophon-content-container")
  _title.textContent = "colophon"

  var _content = document.createElement("p")
  _content.textContent = "Palinsesta è un format creato dal corso di Visual Motion e Design all'Accademia di Belle Arti di Urbino."
  content_container.appendChild(_content)
  title_container.appendChild(_title)
  var span = document.createElement("span")
  var cross = document.createTextNode("×");
  span.appendChild(cross);
  span.style.padding = "0px 12.5px";
  span.id = counter
  span.addEventListener("click", closeColophon)
  span.addEventListener("touchstart", closeColophon)
  title_container.append(span)
  popup_container.appendChild(title_container)
  popup_container.appendChild(content_container)



  document.body.appendChild(popup_container)
  popup_container.style.top = (Math.random() * window.innerHeight) / 3 + "px";
  popup_container.style.left = (Math.random() * window.innerWidth) / 3 + "px";
  new Draggable(popup_container, {
    handle: title_container,
    onDragEnd:  function(){
     
      for(var y = 0; y < document.getElementsByClassName('popup-window').length; y++)
      {
          document.getElementsByClassName('popup-window')[y].style.zIndex -= 1;
          //console.log(document.getElementsByClassName('popup-window')[y].style.zIndex);
      }
      popup_container.style.zIndex = 98
    }
  });
}
function closeColophon() {
  fontChanger()
  document.querySelectorAll(".colophon-window").forEach(el => {
    el.remove()
  })
}

function moveUpfront(elmnt) {
 //$(".title-container").parent().css("z-index","-1")
 //$(".video-title-container").parent().css("z-index","-1")

elmnt.parentNode.style.position = "absolute";
elmnt.parentNode.style.zIndex = "1";
console.log(elmnt.parentNode)

}
