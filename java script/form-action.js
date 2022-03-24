function form1div()
{
  var div1 = document.getElementById("form1div");

  if(div1.style.display==="block")
  {
    div1.style.display = "none";
  }
  
}

function myFunction() {
  var x = document.getElementById("form1");
  var y = document.getElementById("form2");
  var aemail = document.getElementById("a-email");
  var f1title = document.getElementById("form1-title");
  var f2title = document.getElementById("form2-title");


  if (x.style.display === "none") {
    x.style.display = "block";
    aemail.classList.add('active');
    f1title.style.display = "block";
    y.style.display = "none";
    f2title.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    f1title.style.display = "none";
    f2title.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("form1");
  var y = document.getElementById("form2");
  var f2title = document.getElementById("form2-title");
  if (y.style.display === "none") {
    y.style.display = "block";
    x.style.display = "none";
    f2title.style.display = "block";
  } else {
    y.style.display = "none";
    f2title.style.display = "none";

  }
}

function ValidateEmail() {
  var inputText = document.getElementById("eadd");
  var mailformat = /@vaniercollege.qc.ca/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.Email.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.Email.focus();
    return false;
  }
}