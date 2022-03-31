function eventadd()
{
  document.getElementById("a-add").addEventListener("click",address);
  document.getElementById("a-call").addEventListener("click",call);
  document.getElementById("a-email").addEventListener("click",email);
  document.getElementById("a-chat").addEventListener("click",chat);
  document.getElementsByClassName("btn btn-outline").addEventListener("click",conus);
}

function conus()
{
  window.location.href='Contact_Us.html'
}

function hide() {
  var add = document.getElementById("tab-address").style.display = "block";
  var email = document.getElementById("tab-email").style.display = "none";
  var call = document.getElementById("tab-call").style.display = "none";
  var chat = document.getElementById("tab-chat").style.display = "none";
}

function address() {

  var add = document.getElementById("tab-address");
  var email = document.getElementById("tab-email");
  var call = document.getElementById("tab-call");
  var chat = document.getElementById("tab-chat");
  var aemail = document.getElementById("a-add");

  if (add.style.display == "none") {
    add.style.display = "block";
    email.style.display = "none";
    call.style.display = "none";
    chat.style.display = "none";
    aemail.classList.add("active"); 
  } else

    email.style.display = "none";
  call.style.display = "none";
  chat.style.display = "none";
}

function call() {
  var add = document.getElementById("tab-address");
  var email = document.getElementById("tab-email");
  var call = document.getElementById("tab-call");
  var chat = document.getElementById("tab-chat");

  if (call.style.display == "none") {
    call.style.display = "block";
    add.style.display = "none";
    email.style.display = "none";
    chat.style.display = "none";

  } else

  {
    add.style.display = "none";
    email.style.display = "none";
    chat.style.display = "none";
  }
}

function email() {

  var add = document.getElementById("tab-address");
  var email = document.getElementById("tab-email");
  var call = document.getElementById("tab-call")
  var chat = document.getElementById("tab-chat");

  if (email.style.display == "none") {
    email.style.display = "block";
    add.style.display = "none";
    call.style.display = "none";
    chat.style.display = "none";

  } else

   add.style.display = "none";
  call.style.display = "none";
  chat.style.display = "none";
}

function chat() {
  var add = document.getElementById("tab-address");
  var email = document.getElementById("tab-email");
  var call = document.getElementById("tab-call")
  var chat = document.getElementById("tab-chat");

  if (chat.style.display == "none") {
    chat.style.display = "block";
    add.style.display = "none";
    call.style.display = "none";
    email.style.display = "none";

  } else
  email.style.display = "none";
  add.style.display = "none";
  call.style.display = "none";
}

function ValidateEmail() {
  var inputText = document.getElementById("eadd");
  var mailformat = /@edu.vaniercollege.qc.ca/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}
debugger;
window.onload(eventadd(),hide(),conus());