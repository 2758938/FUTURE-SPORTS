document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('email');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting the traditional way

        const email = emailInput.value.trim();
        if (validateEmail(email)) {
            // You would typically send the email to a server
            // I have just display a success message for the purposes of this test
            messageElement.textContent = 'Thank you for subscribing!';
            messageElement.className = 'message'; // This applies success message styling
            emailInput.value = ''; // Clear the input
        } else {
            messageElement.textContent = 'Please enter a valid email address.';
            messageElement.className = 'error'; // Applys error message styling
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
