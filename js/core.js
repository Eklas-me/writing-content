// const drpdwn =() => {
//   document.getElementById('ddd').style.display = "block";
// }

// siderbar menu dropdown
const button = document.getElementById("click");

const dropdown = document.getElementById("drpdown");

dropdown.style.display = "none";
button.addEventListener("click", (event) => {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

// Navbar menu dropdown
const file = document.getElementById("file");
const fileDropdown = document.getElementById("file-dropdown");

fileDropdown.style.display = "none";
file.addEventListener("click", (event) => {
  if (fileDropdown.style.display == "none") {
    fileDropdown.style.display = "block";
  } else {
    fileDropdown.style.display = "none";
  }
});

const drop2 = document.getElementById("drop2");
const editDropdown = document.getElementById("editDropdown");

editDropdown.style.display = "none";
drop2.addEventListener("click", (event) => {
  if (editDropdown.style.display == "none") {
    editDropdown.style.display = "block";
  } else {
    editDropdown.style.display = "none";
  }
});

const drop3 = document.getElementById("drop3");
const viewDropdown = document.getElementById("viewDropdown");

viewDropdown.style.display = "none";
drop3.addEventListener("click", (event) => {
  if (viewDropdown.style.display == "none") {
    viewDropdown.style.display = "block";
  } else {
    viewDropdown.style.display = "none";
  }
});

const drop4 = document.getElementById("drop4");
const helpdown = document.getElementById("helpdown");

helpdown.style.display = "none";
drop4.addEventListener("click", (event) => {
  if (helpdown.style.display == "none") {
    helpdown.style.display = "block";
  } else {
    helpdown.style.display = "none";
  }
});

// Writing Content Drag

dragElement(document.getElementById("mydiv"));
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Floating contact menu

function actionToggle() {
  const action = document.querySelector(".action");
  action.classList.toggle("active");
}

$(function () {
  $("#mydiv2").draggable();
});
