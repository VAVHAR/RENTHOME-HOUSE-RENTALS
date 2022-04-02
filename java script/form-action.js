// JS for the event listner

function eventadd()
{
  document.getElementById("a-add").addEventListener("click",address);
  document.getElementById("a-call").addEventListener("click",call);
  document.getElementById("a-email").addEventListener("click",email);
  document.getElementById("a-chat").addEventListener("click",chat);
}

// JS to hdie the tabs in contact us page with windwos on load.
function hide() 
{
  var add = document.getElementById("tab-address").style.display = "block";
  var email = document.getElementById("tab-email").style.display = "none";
  var call = document.getElementById("tab-call").style.display = "none";
  var chat = document.getElementById("tab-chat").style.display = "none";
}

// JS for the tab of address in contact us page

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

// JS for the tab of call in contact us page


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


// JS for the tab of email in contact us page


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

// JS for the tab of chat in contact us page

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

// JS for the validation of email with vanier email id in email tab in conatact us page

function ValidateEmail() {
  var inputText = document.getElementById("eadd");
  var mailformat = /@edu.vaniercollege.qc.ca/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

// JS to load the script of windows load 

window.onload(eventadd(),hide());