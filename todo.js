var list=document.getElementById('list');
var button = document.getElementById('addBtn');
var input = document.getElementById('input');
var count = 1;

var a = list.value;
button.addEventListener('click', clickbutton);

function clickbutton(text){
  var li=document.createElement('li');
  li.setAttribute("id", "li"+count);
  li.setAttribute("class", "list-group-item");
  li.innerHTML = input.value;
  li.innerHTML += "<button onclick='remove("+count+")' id='remove'>X</button>";
  list.appendChild(li);
  input.value = "";
  count=count+1;
}

function remove(count){
  var li = document.getElementById('li'+count);
  list.removeChild(li);
}
