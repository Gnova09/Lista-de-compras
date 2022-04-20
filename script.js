var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	//creamos div,btn y li para ser asignado a ul
	var div = document.createElement("div");
	var li = document.createElement("li");
	var btn = document.createElement("button");
	//configuramos clases y texto
	btn.appendChild(document.createTextNode("del"));
	btn.classList.add("delTask");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("clase-li");
	div.classList.add("wrapper");
	//asignamos al div en el orden correspondiente
	div.appendChild(li);
	div.appendChild(btn);
	//asignamos al ul
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", ulclick);

function ulclick(element){
	done_notdone(element);
	eliminarTarea(element);
}
function done_notdone(task){
	
	if (task.target.nodeName === "LI"){
		console.log(task);
		task.target.classList.toggle("done");
	}
}
function eliminarTarea(task){
	console.log(task);
	if(task.target.className === "delTask"){
		task.target.parentElement.remove();
	}
}

