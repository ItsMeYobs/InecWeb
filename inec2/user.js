// Show the About Us section
function showAboutUs() {
    document.getElementById("dashboard").style.display = "none"; // Hide main content
    document.getElementById("about-us").style.display = "block"; // Show About Us
    document.getElementById("overlay").style.display = "block"; // Show overlay
}

// Hide the About Us section
function hideAboutUs() {
    document.getElementById("dashboard").style.display = "block"; // Show main content
    document.getElementById("about-us").style.display = "none"; // Hide About Us
    document.getElementById("overlay").style.display = "none"; // Hide overlay
}

// Show the Contact Us section
function showContactUs() {
    document.getElementById("dashboard").style.display = "none"; // Hide main content
    document.getElementById("contact-us").style.display = "block"; // Show Contact Us
    document.getElementById("overlay").style.display = "block"; // Show overlay
}

// Hide the Contact Us section
function hideContactUs() {
    document.getElementById("dashboard").style.display = "block"; // Show main content
    document.getElementById("contact-us").style.display = "none"; // Hide Contact Us
    document.getElementById("overlay").style.display = "none"; // Hide overlay
}

// Function to handle button clicks and set active state
function setActiveButton(clickedButtonId) {
    // Get all buttons
    const buttons = document.querySelectorAll('.options h2 button');
            
    // Remove 'active' class from all buttons
    buttons.forEach(button => button.classList.remove('active'));
            
    // Add 'active' class to the clicked button
    document.getElementById(clickedButtonId).classList.add('active');
}


// Show billing info section
function showBillingInfo() {
    document.querySelector('.billing-info').style.display = 'block';
    document.querySelector('.myprofile').style.display = 'none';
}

// Show my profile section
function showMyProfile() {
    document.querySelector('.billing-info').style.display = 'none';
    document.querySelector('.myprofile').style.display = 'block';
}

document.querySelector('.logout-button').addEventListener('click', function() {
    // Redirect to the login page
    window.location.href = 'login.php';
    });




document.getElementById('check-button').addEventListener('click', function() {
    const billCodeInput = document.getElementById('bill-code').value;
    const errorMessage = document.getElementById('bill-code-error');
    const billCodePattern = /^(0[1-9]|1[0-2])\d{4}$/; // Regex to match MMYYYY

    if (!billCodePattern.test(billCodeInput)) {
        errorMessage.textContent = 'Invalid format. Please enter MMYYYY (e.g., 082024).';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    }
});





