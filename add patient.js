let department;
let roomNumber;

// Department Combo Box
const departmentSelect = document.getElementById("departmentSelect");
departmentSelect.addEventListener("change", function () {
  const selectedOption =
    departmentSelect.options[departmentSelect.selectedIndex];
  department = selectedOption.textContent;
});

// Room Number Combo Box
const roomSelect = document.getElementById("roomSelect");
roomSelect.addEventListener("change", function () {
  const selectedOption = roomSelect.options[roomSelect.selectedIndex];
  roomNumber = selectedOption.textContent;
});

function validateForm() {
  let Fname = document.querySelector(".FirstName").value;
  let Lname = document.querySelector(".LastName").value;
  let SSN = document.querySelector(".SSN").value;
  let Address = document.querySelector(".Address").value;
  let DOB = document.querySelector(".DateOfBirth").value;
  let Phone = document.querySelector(".PhoneNumber").value;
  let errorMessage = document.querySelector(".errorMessage");

  console.log(Fname);
  console.log(Lname);
  console.log(SSN);
  console.log(Address);
  console.log(DOB);
  console.log(Phone);
  console.log(department);
  console.log(roomNumber);

  if (
    Fname &&
    Lname &&
    SSN &&
    Address &&
    DOB &&
    Phone &&
    department &&
    roomNumber
  ) {
    errorMessage.textContent = "";
    window.location.href = "welcome.html";
  } else {
    errorMessage.textContent = "Can't Add Patient";
  }
}

// Add an event listener to the login button
const addbutton = document.querySelector(".addbutton");
addbutton.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});
