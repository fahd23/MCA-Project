const username = "Fahd";
const password = "123";

document.getElementById("studentName").innerHTML =
  localStorage.getItem("username");

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user == username && pass == password) {
    localStorage.setItem("username", user);
    window.location.href = "welcome.html";
  } else {
    document.getElementById("loginError").style.display = "block";
  }
}

function hideLoginError() {
  document.getElementById("loginError").style.display = "none";
}

function addActivity() {
  let activityName = document.getElementById("activityName").value;
  let activityDetails = document.getElementById("activityDetails").value;
  localStorage.setItem("activityName", activityName);
  localStorage.setItem("activityDetails", activityDetails);
  alert("Activity submitted");
  document.getElementById("activityName").value = "";
  document.getElementById("activityDetails").value = "";
}

function listActivity() {
  let activityName = localStorage.getItem("activityName");
  let activityDetails = localStorage.getItem("activityDetails");

  document.getElementById("activityNameData").innerHTML = activityName;
  document.getElementById("activityDetailData").innerHTML = activityDetails;
}
