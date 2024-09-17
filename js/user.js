
function userRegistration() {
    console.log("click!!");

    // Collect values from the form
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let profilePic = $('#profilePic')[0].files[0]; // Get profile picture file

    console.log(firstName, lastName, email, password);

    // Create FormData to handle text and file data
    let formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profilePic', profilePic); // Append profile picture

    // Create AJAX request
    $.ajax({
        url: "http://localhost:8080/api/v1/users",
        method: "POST",
        data: formData, // Send FormData object
        processData: false, // Important: Do not process data as a string
        contentType: false, // Important: Let the browser set content type including the boundary
        success: function (response) {
            Swal.fire({
                title: 'Success!',
                text: 'User registered successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        },
        error: function (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'User registration failed.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });
}
