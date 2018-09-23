function follow() {
  alert("You're now following Humans of New York");
}

function like(){
  alert("You like this !");
}


function arrow(){
  alert("You just share it !");
}

function show(){
  document.getElementById('read').setAttribute("onclick","hide()");
  document.getElementById('read').setAttribute("class","readOpen");
  document.getElementsByClassName('text')[0].style.maxHeight = "none";
  document.getElementsByClassName('text')[0].style.color = "gray";
  document.getElementById('read').innerHTML= "<p>READ LESS</p>";

}

function hide(){
  document.getElementById('read').setAttribute("onclick","show()");
  document.getElementById('read').setAttribute("class","readClose");
  document.getElementsByClassName('text')[0].style.maxHeight = "120px";
  document.getElementsByClassName('text')[0].style.color = "black";
  document.getElementById('read').innerHTML= "<p>READ MORE</p>";
}