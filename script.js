// Get the form element
const form = document.querySelector('form');

// Get the input fields
const day = document.querySelector('#dd');
const month = document.querySelector('#MM');
const year = document.querySelector('#YYYY');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Validate the username input
  const bday = day.value.trim();
  if (bday === '') {
    showError(day, 'Must be a valid day');
  } else if (!/^\d+$/.test(bday)) {
    showError(day, 'Must be a valid day');
  } else if (bday > 30) {
    showError(day, 'Must be a valid day');
  } else {
    hideError(day);
  }

  // Validate the month input
  const bmonth = month.value.trim();
  if (bmonth === '') {
    showError(month, 'Must be a valid month');
  } else if (!/^\d+$/.test(bmonth)) {
    showError(month, 'Must be a valid month');
  } else if (bmonth > 12) {
    showError(month, 'Must be a valid month');
  } else {
    hideError(month);
  }

   // Validate the month input
   const byear = year.value.trim();
   if (byear === '') {
     showError(year, 'Must be in the past');
   } else if (!/^\d+$/.test(byear)) {
     showError(year, 'Must be in the past');
   } else if (byear > 2023) {
     showError(year, 'Must be in the past');
   } else {
     hideError(year);
   }

  // If there are no errors, submit the form
  if (!document.querySelectorAll('.error').length) {
    form.submit();
  }
});

// Function to show an error message
function showError(input, message) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
}

// Function to hide an error message
function hideError(input) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = '';
  errorDiv.style.display = 'none';
}


  
function calculateAge() {
  const day = Number(document.getElementById("dd").value);
  const month = Number(document.getElementById("MM").value) - 1;
  const year = Number(document.getElementById("YYYY").value);
  const birthDate = new Date(year, month, day);
  const currentDate = new Date();
  
  
    // Calculate the difference between the two dates
    const diff = currentDate.getTime() - birthDate.getTime();
    

    // Convert the difference to years, months, and days
    const ageYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const ageMonths = Math.floor((diff / (1000 * 60 * 60 * 24 * 30.44)) % 12);
    const ageDays = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30.44);

    // Output the age in years, months, and days
    document.getElementById("ageYear").textContent = `${ageYears}`;
    document.getElementById("ageMonth").textContent = `${ageMonths}`;
    document.getElementById("ageDay").textContent = `${ageDays}`;

};


