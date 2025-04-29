// use strict validation
"use strict";


// create variables to hold the buttons

// create variable to hold the empty field value warning
let fillFieldWarn = document.getElementById("FillFieldWarn")
// set it's text color to red
fillFieldWarn.style.color = "red";

// create variable to hold the empty queue warning/customer display list
let custsDisplay = document.getElementById("custsDisplay");

// create variable to hold the customer count
let custCount = document.getElementById("custCount");

// create queue for customers to be added to
const queue = [];

// function to add a new person to the queue
function AddToQueue() {
    // create variables to hold the values of the form inputs
    let fullName = document.getElementById("fullName").value
    let age = document.getElementById("age").value
    let mail = document.getElementById("mail").value
    // verify the name, age, and email are defined in the console
    console.log(fullName + age + mail);
    // validate each of the fields has a value
    if (!(fullName || age || mail)) {   // if any values are null/undefined/falsy
        // tell user all fields should have a value
        fillFieldWarn.innerText = "All fields should be filled"
        console.log("undefined field")
    }
    // otherwise
    else {
        console.log("all fields defined")
        // remove the warning
        fillFieldWarn.style.display = "none";

        // create the customer as an object
        let customer = {
            name: fullName,
            age: age,
            email: mail
        }
        // add customer to the queue
        queue.push(customer);
        // set customer count to the length of the queue array
        // custCount.textContent = queue.length;
    }
}

// function to display the queue
function DisplayQueue() {
    // if the list is empty
    if (!(queue)) {
        console.log("queue no display")
        // set warning text color to red
        //custsDisplay.style.color = "red";
        // give user warning the queue is empty
        custsDisplay.textContent = "The queue is empty";
    }
    // otherwise
    else {
        console.log("queue display")
        // set normal text color to black
        // custsDisplay.style.color = "black";
        // set the queue to empty
        custsDisplay.textContent = "";
        // for each item in the queue

            // add the customer name and a separater to the displayedcusts <p>
            custsDisplay.textContent += cust.name + " --- "
            // add the customer age and a separater to the displayedcusts <p>
            custsDisplay.textContent += cust.age + " --- ";
            // add the customer email and a break to the displayedcusts <p>
            custsDisplay.textContent += cust.mail + "<br>"
        }


    }