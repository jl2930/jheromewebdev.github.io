// Function to get URL parameters
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Set the motorcycle model in the form when page loads
function initializePage() {
    const model = getParameterByName('model');
    if (model) {
        document.getElementById('motorcycle-model').textContent = model;
        document.getElementById('motorcycle-model-input').value = model;
    }

    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    // Mobile menu toggle
    document.getElementById('hamburger').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });

    // Form submission handler
    document.getElementById('test-ride-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        if (!this.checkValidity()) {
            alert('Please fill out all required fields correctly.');
            return;
        }

        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        const model = document.getElementById('motorcycle-model-input').value;
        const firstName = document.getElementById('first-name').value;
        
        alert(`Thank you ${firstName} for your test ride request for the ${model}!\nWe will contact you shortly to confirm your appointment.`);
        
        // Reset form
        this.reset();
        
        // Optional: Redirect back to the main page after a delay
        // setTimeout(() => { window.location.href = 'index.html'; }, 3000);
    });
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);