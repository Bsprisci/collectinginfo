document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display data on the page
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h3>Submitted Information</h3>
                           <p><strong>Name:</strong> ${name}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Message:</strong> ${message}</p>`;

    // Optionally, store data in local storage
    const formData = { name, email, message };
    localStorage.setItem("userData", JSON.stringify(formData));

    // Clear the form
    document.getElementById("infoForm").reset();
});
