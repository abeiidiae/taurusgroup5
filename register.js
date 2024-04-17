
   document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('pass').value;
      var confirmPassword = document.getElementById('c_pass').value;
      var profilePic = document.getElementById('profilePic').files[0];

      // Check if passwords match
      if (password !== confirmPassword) {
         alert("Passwords do not match");
         return;
      }

      // Create a new FormData object
      var formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('profilePic', profilePic);

      // Here you can send the formData to your server using AJAX or fetch
      // For example, using fetch:
      fetch('register.php', {
         method: 'POST',
         body: formData
      })
      .then(response => {
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         return response.json();
      })
      .then(data => {
        console.log(data); // Log the response from the server
        alert("Registration successful!");
        // Redirect the user to index.html
        console.log("Redirecting to index.html...");
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert("Registration failed. Please try again later.");
    });
})