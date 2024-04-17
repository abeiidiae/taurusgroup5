document.addEventListener('DOMContentLoaded', function() {
    // Get form element
    var loginForm = document.querySelector('.form-container form');

    // Add event listener to the form
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get email and password values
        var email = loginForm.querySelector('input[name="email"]').value;
        var password = loginForm.querySelector('input[name="pass"]').value;

        // You can perform client-side validation here if needed

        // For demonstration, let's assume the login is successful
        var authenticated = true;

        if (authenticated) {
            // Redirect to index.html
            window.location.href = 'index.html';
        } else {
            // Display error message or handle unsuccessful login
            alert('Invalid email or password. Please try again.');
        }
    });
});
