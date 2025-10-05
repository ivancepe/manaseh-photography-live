// contact-form.js

document.addEventListener('DOMContentLoaded', () => {
      // Script for mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            var menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
  // Find the form, the status message div, and the submit button in the HTML
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn'); // Make sure your button has id="submit-btn"

  // Listen for the form's submit event
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the browser from refreshing the page

    // Disable the button and show a "Sending..." message to prevent multiple submissions
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.textContent = ''; // Clear any previous messages
    formStatus.className = 'mt-4 text-center font-medium'; // Reset styles

    // Collect all the data from the form fields
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send the data to your Netlify Function using a POST request
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Get the response from the function
      const result = await response.json();

      if (response.ok) {
        // If the function returns a success, show a success message and clear the form
        formStatus.textContent = 'Thank you! Your message has been sent.';
        formStatus.classList.add('text-green-600');
        form.reset();
      } else {
        // If the function returns an error, throw an error to be caught below
        throw new Error(result.message || 'An unknown error occurred.');
      }

    } catch (error) {
      // If there's any error in the process, show an error message
      formStatus.textContent = `Error: ${error.message}`;
      formStatus.classList.add('text-red-600');
    } finally {
      // Re-enable the submit button whether it succeeded or failed
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
});