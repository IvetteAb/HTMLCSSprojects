// change colour of the title
const title = document.getElementById("title");

title.addEventListener("click", function() {
  title.style.background = "linear-gradient(to right, #808B96, #000000, #000000, #808B96)";
});


//////////////////////////////////////////////////

// limit checkbox for sauces

function twoCheckboxes() {
  const checkboxgroup = document.getElementById("checkboxgroup").getElementsByTagName("input");
  
  // set limit
  const limit = 2;
  // for loop iterates through each checkbox element & listens for a click on each checkbox
  for (let i = 0; i < checkboxgroup.length; i++) {
    checkboxgroup[i].onclick = function() {
      // keep track of how many boxes have been checked
      let checkedCount = 0;
      for (let i = 0; i < checkboxgroup.length; i++) {
        // conditional operator - if a box is checked, 1 is added to the checkedCount, otherwise 0 added
        checkedCount += checkboxgroup[i].checked ? 1 : 0;
      }
      if (checkedCount > limit) {
        console.log("You can only select a maximum of " + limit + " sauces.");
        alert("You can only select a maximum of " + limit + " sauces.");
        // unchecks the box if the limit has been exceeded
        this.checked = false;
      }
    };
  }
}

// Call the function to set up the checkboxes validation
twoCheckboxes();


//////////////////////////////////////////////////

// Function to check if all required fields are filled
// gather html elements
function checkRequiredFields() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const mainMealInputs = document.querySelectorAll("input[name='main-meal']");
    const sidesInput = document.querySelector("input[name='sides']:checked");
    const dessertInput = document.querySelector("input[name='dessert']:checked");
    const drinkInput = document.querySelector("input[name='drink']:checked");

    const submitButton = document.getElementById("submit");
    // submitButton.disabled = true is if any of the required fields are empty
    // && logical operator
    // > 0 = at least one is selected
    submitButton.disabled = !(nameInput.value && emailInput.value && mainMealInputs.length > 0 && sidesInput && dessertInput && drinkInput);
}

// Attach the checkRequiredFields function to input change events
// a listener on all input elements, so when a user makes a change to any of the inputs the checkRequiredFields is called to update the state of the confirm/submit button
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("change", checkRequiredFields);
});

// Function to generate order confirmation
function confirmation() {
  const orderNumber = generateRandomOrderNumber();
  // string interpolation i.e. template literals/string
  const message = `Your order number is: #${orderNumber}. You will receive an email to confirm your order. I hope you enjoy your meal. See you soon!`;
  alert(message);
}

// Initialise form validation
checkRequiredFields();

// Function to generate a random number between 0 and 10,000
function generateRandomOrderNumber() {
  const min = 0;
  const max = 10000;
  const randomOrderNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomOrderNumber;
}


/////////////////////////////////////////////////

// get the html ids you'll refer to:
const submit = document.getElementById("submit");

// colour change for confirmation btn 
submit.addEventListener("mouseover", function() {
  submit.style.backgroundColor = "#e5e4e2";
  submit.style.color = "black";
});

submit.addEventListener("mouseout", function() {
  submit.style.backgroundColor = "black";
  submit.style.color = "#e5e4e2";
});