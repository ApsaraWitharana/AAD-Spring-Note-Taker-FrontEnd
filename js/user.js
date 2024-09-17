// Get the profile picture input and image preview element
const profilePicInput = document.getElementById('profilePic');
const profilePreview = document.getElementById('profilePreview');

// Display the uploaded profile picture as a preview
profilePicInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePreview.src = e.target.result;
            profilePreview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// Handle form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    // Send form data to the backend using AJAX
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting normally

        const formData = new FormData(form); // Collect form data

        fetch('http://localhost:8080/api/v1/users', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('User created successfully:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
