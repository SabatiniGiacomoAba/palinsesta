
require('normalize.css/normalize.css');
require('./styles/index.scss');
var Draggable = require ('Draggable');


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



// menu moving
var elmnts = document.querySelectorAll('.middle-container > div');
var elmntsLength = elmnts.length
let menuCounter = 0

var myTimer = setInterval(moveMenus,500)

function moveMenus(){
  elmnts.forEach(el => {
    el.style.zIndex = "initial";
  })
  elmnts[menuCounter].style.zIndex = "9";
  if (menuCounter == elmntsLength-1) {
    menuCounter = 0
  } else {
    menuCounter++
  }
}
elmnts.forEach(el => {
  el.onmouseover = () =>{
    elmnts.forEach(el => {
      el.style.zIndex = "0"
    })
    el.style.zIndex = "9"

  }
})
document.querySelector(".middle-container").onmouseenter= () => {
  clearInterval(myTimer)
}
document.querySelector(".middle-container").onmouseleave= () => {
  myTimer = setInterval(moveMenus,500)
}

document.querySelector(".colophon-title").onclick = showColophon;


//interaction
let counter =0;


elmnts.forEach(el => {
    el.onclick = () =>{
        showPopups("asmr","marco almonti",lorem.generateParagraphs(3),"https://www.youtube.com/embed/P3TG8tq8zj4")
    }
})
var fonts = ["Times New Roman", "Arial", "Helvetica", "Courier", "Verdana"];
 window.onload = function(){

  setInterval(fontChanger, 16000);
}
var font_counter = 0;
function fontChanger()
{

  document.getElementsByTagName("body")[0].setAttribute("style", "font-family: " + fonts[font_counter] + " !important");
  document.getElementsByClassName("site-title")[0].setAttribute("style", "font-family: " + fonts[font_counter] + " !important");
  font_counter++;
  if(font_counter == 5)
  {
    font_counter = 0;
  }
}
//function(){document.getElementsByTagName("body")[0].setAttribute("style", fonts[i] + " !important")}


function showPopups(title,author,content, link) {

  // description

    var popup_container = document.createElement("div")
    popup_container.classList.add("popup-window")
    popup_container.id = "popup-window-"+counter
    var title_container = document.createElement("div")
    title_container.classList.add("title-container")
    title_container.id = "title-container-"+counter;
    var _title = document.createElement("h1")
    _title.classList.add("popup-window-title")
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
    span.id = counter;
    span.addEventListener("click",closePopupWindow);
    title_container.append(span)
    popup_container.appendChild(title_container)
    popup_container.appendChild(content_container)

    counter++

    document.body.appendChild(popup_container)
    popup_container.style.top = (Math.random()* window.innerHeight)/3 + "px";
    popup_container.style.left = (Math.random()* window.innerWidth)/3 + "px";
    new Draggable (popup_container, {
      handle: title_container
    });
   // video

// devo provare ad aggiungere il titolo
    var video_container = document.createElement("div")
    video_container.classList.add("video-window")
    video_container.id = "video-window-"+counter
    var video_title_container = document.createElement("div")
    //var video_author = document.createElement("span")
    //video_author.textContent =  "by " + author
    //video_author.classList.add("video-author");
    //video_title_container.appendChild(video_author)

    video_title_container.classList.add("video-title-container")
    video_title_container.id = "video-title-container-"+counter;
    var video_title = document.createElement("h1")
    video_title.classList.add("video-window-title")
    video_title.textContent = title + " - di " + author
    video_title_container.appendChild(video_title)
    video_container.appendChild(video_title_container)
    var video_iframe = document.createElement("div")
    video_iframe.classList.add("video-iframe-container")
    var iframe = document.createElement("iframe");
    var span = document.createElement("span")
    var cross = document.createTextNode("×");
    span.appendChild(cross);
    span.id = counter;
    span.addEventListener("click",closePopupWindow)
    video_title_container.append(span);
    iframe.setAttribute("src",link);
    iframe.setAttribute("autoplay","1")
    video_iframe.appendChild(iframe)

    video_container.appendChild(video_iframe)


    document.body.appendChild(video_container)
    video_container.style.top = Math.random()* window.innerHeight/3 + "px";
    video_container.style.left = Math.random()* window.innerWidth/3 + "px";
    //dragElement(video_container,counter)
    counter++
    new Draggable (video_container);


}
function closePopupWindow(){
  var thisContainer = this.parentNode;
  var master = thisContainer.parentNode;
  //alert(master.id);
  const id = this.id
  if(master.id == "popup-window-"+id)
  {
    document.querySelector("#popup-window-"+id).remove()
  }
  else if(master.id == "video-window-"+id)
  {
    document.querySelector("#video-window-"+id).remove()
  }
}

function showColophon(){
  var popup_container = document.createElement("div")
    popup_container.classList.add("colophon-window")
    popup_container.id = "colophon-window-"+counter
    var title_container = document.createElement("div")
    title_container.classList.add("colophon-title-container")
    title_container.id = "colophon-title-container-"+counter;
    var _title = document.createElement("h1")
    _title.classList.add("colophon-window-title")
    var content_container = document.createElement("div")
    content_container.classList.add("colophon-content-container")
    _title.textContent = "colophon"
    var _content = document.createElement("p")
    _content.textContent = "Palinsesta è un format creato dal corso di Visual Motion e Design all'Accademia di Belle Arti di Urbino."
    content_container.appendChild(_content)
    title_container.appendChild(_title)
    var span = document.createElement("span")
    span.classList.add("glyphicon")
    span.classList.add("glyphicon-remove")
    span.id = counter
    span.addEventListener("click",closeColophon)
    title_container.append(span)
    popup_container.appendChild(title_container)
    popup_container.appendChild(content_container)



    document.body.appendChild(popup_container)
    popup_container.style.top = (Math.random()* window.innerHeight)/3 + "px";
    popup_container.style.left = (Math.random()* window.innerWidth)/3 + "px";
    new Draggable (popup_container, {
      handle: title_container
    });
}
function closeColophon(){
  document.querySelectorAll(".colophon-window").forEach(el => {
    el.remove()
  })
}
