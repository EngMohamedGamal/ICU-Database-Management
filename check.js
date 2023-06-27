$(document).ready(function () {
  $("#example").DataTable();
});
const data = [
    {
        Patient_name: "Ahmed Ismail",
        department: "Medical",
        Doctor_name: "Ahmed Yousef",
        Nurse_name: "Salma Mohamed",
        Room_no: "4"
    },
  
    {
        Patient_name: "Ashraf Osama",
        department: "Surgical",
        Doctor_name: "Ibrahim Hegazy",
        Nurse_name: "Mona Mohamed",
        Room_no: "7"
    },
    {
        Patient_name: "Yousef Othman",
        department: "Cardiac",
        Doctor_name: "Emad Yousef",
        Nurse_name: "Sondos Mohamed",
        Room_no: "1"
    },
    {
        Patient_name: "Kamal Yousef",
        department: "Surgical",
        Doctor_name: "Ahmed Ibrahim",
        Nurse_name: "Reem Mohamed",
        Room_no: "2"
    },
    {
        Patient_name: "Hussein Mostafa",
        department: "Neonatal",
        Doctor_name: "Ahmed Yousef",
        Nurse_name: "Salma Mohamed",
        Room_no: "6"
    },
    {
        Patient_name: "Hesham Tamer",
        department: "Medical",
        Doctor_name: "Ahmed Yousef",
        Nurse_name: "Salma Mohamed",
        Room_no: "5"
    },
    {
        Patient_name: "Mohamed Gamal",
        department: "Medical",
        Doctor_name: "Ahmed Yousef",
        Nurse_name: "Salma Mohamed",
        Room_no: "4"
    },
    {
        Patient_name: "Alaa Ismail",
        department: "Medical",
        Doctor_name: "Ahmed Yousef",
        Nurse_name: "Salma Mohamed",
        Room_no: "2"
    },
    {
        Patient_name: "Mahmoud Yousef",
        department: "Medical",
        Doctor_name: "Ahmed Yousef",
        Nurse_name: "Salma Mohamed",
        Room_no: "1"
    },
    {
        Patient_name: "Ibrahim Emad",
        department: "Medical",
        Doctor_name: "Ahmed Yousef",
        Nurse_name: "Salma Mohamed",
        Room_no: "2"
    },
    {
        Patient_name: "Omar Magdy",
        department: "Medical",
        Doctor_name: "Ahmed Mostafa",
        Nurse_Name: "Salma Mohamed",
        Room_no: "3"
    }
];

function display() {
    var cartona = "";
    for (var i = 0; i < allproduct.length; i++) {
        cartona += `
            <tr>
                <td>${i + 1}</td>
                <td>${allproduct[i].Patient_name}</td>
                <td>${allproduct[i].department}</td>
                <td>${allproduct[i].Doctor_name}</td>
                <td>${allproduct[i].Nurse_name}</td>
                <td>${allproduct[i].Room_no}</td>
                <td> <button class="btn btn-warning"> update</button></td> 
                <td> <button class="btn btn-danger">Delete</button></td>

            </tr>`;
    }
    // Add the generated rows to the tbody of the table
    document.getElementById("tbody").innerHTML=cartona;
}

/* Delete Button Back-End HOPEFULLY WORKING Function */
document.addEventListener('DOMContentLoaded', function() {
    // Find the delete button element
    var deleteButton = document.querySelector('.delete-button');
  
    // Attach a click event listener to the delete button
    deleteButton.addEventListener('click', function() {
      // Send a request to the backend to delete the item
      deleteItem();
    });
  });
  