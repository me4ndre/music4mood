// Get references to the form and input fields
const form = document.getElementById('myForm');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values of the input fields
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Save the values to a JavaScript object or perform any other desired actions
  const userData = {
    firstName: firstName,
    lastName: lastName
  };

  // Log the user data to the console for demonstration
  console.log('User Data:', userData);

  // Redirect to the loading page
  window.location.href = 'loading.html';
});
const moodBtns = document.querySelectorAll('.mood-btn');

moodBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const selectedMood = this.dataset.mood;
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || {};
    storedUserData.mood = selectedMood;
    localStorage.setItem('userData', JSON.stringify(storedUserData));

    // Redirect to the next page or perform any other desired action
    window.location.href = 'next-page.html';
  });
});