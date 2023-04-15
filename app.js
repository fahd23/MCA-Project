document.getElementById("studentName").innerHTML =
  localStorage.getItem("username");

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch("db.json")
    .then((res) => res.json())
    .then((data) => {
      const users = data.students;
      const user = users.find(
        (i) => i.username === username && i.password === password
      );
      let userData = data.students.find(
        (student) => student.username === username
      );
      if (user) {
        localStorage.setItem("username", user.username);
        window.location.href = "welcome.html";
      } else {
        document.getElementById("loginError").style.display = "block";
      }

      // Setting Value

      document.getElementById("name").textContent = userData.username;
      document.getElementById("dob").textContent = userData.dateOfBirth;
      document.getElementById("email").textContent = userData.email;
    })
    .catch((error) => {
      console.error("Error fetching student data:", error);
    });
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
