// Function to send the form data via AJAX
function sendFormData(formData) {
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Redirect to the home page after successful form submission
            window.location.href = 'index.html';
        } else {
            console.error('Error:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to handle form submission
function handleSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get form data
    var form = event.target;
    var formData = new FormData(form);

    // Send form data
    sendFormData(formData);
}

// Get the form element
var form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', handleSubmit);
