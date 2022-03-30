//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// Hamburger menu function
function hamburger() {
  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("icon");
  if (navlinks.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "#2a1f14";
  } else {
    navlinks.style.display = "block";
    menuicon.style.color = "#f6eee4";
  }
}

//Function to display the first Answer
function ans1() {
  heading.style.display = "block";
  answer.textContent = "Step back and observe the situtation for a few minutes. wait to see if the parent arrives.";
}

function ans2() {
  heading.style.display = "block";
  answer.textContent = "You cannot tell if an animal has rabies simply by seeing it. A test must be performed";
}

function ans3() {
  heading.style.display = "block";
  answer.textContent = "No. This is a myth";
}

function ans4() {
  heading.style.display = "block";
  answer.textContent = "We need volunteers to help feed animals";
}
