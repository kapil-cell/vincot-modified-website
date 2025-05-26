document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    document.querySelector('.mobile-menu-toggle').addEventListener('click', () => {
        document.getElementById("navMenu").classList.toggle("active");
    });

    // Page switching
    window.showPage = function(pageId) {
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
            window.scrollTo(0, 0);
        }
        document.getElementById("navMenu").classList.remove("active");
    }

    // FAQ toggles
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
            const icon = question.querySelector('span:last-child');
            icon.textContent = answer.classList.contains('active') ? '−' : '+';
        });
    });

    // Contact form submission with validation and AJAX
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Form data
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData);

            // Basic validation (HTML5 already prevents empty required fields)
            if (!formObject.name || !formObject.email || !formObject.message) {
                alert("Please fill in all required fields.");
                return;
            }

            try {
                // Simulated AJAX request (replace URL with real endpoint)
                await fakeApiSubmit(formObject);

                // Reset form and show success
                contactForm.reset();
                showSuccess("Your message has been sent successfully!");
            } catch (error) {
                showError("Something went wrong. Please try again.");
            }
        });
    }

    // Simulated API call (for demo only)
    async function fakeApiSubmit(data) {
        return new Promise(resolve => setTimeout(resolve, 1000)); // simulate delay
    }

    // Show success message
    function showSuccess(message) {
        const div = document.createElement('div');
        div.className = 'form-success';
        div.textContent = message;
        contactForm.prepend(div);
        setTimeout(() => div.remove(), 5000);
    }

    // Show error message
    function showError(message) {
        const div = document.createElement('div');
        div.className = 'form-error';
        div.textContent = message;
        contactForm.prepend(div);
        setTimeout(() => div.remove(), 5000);
    }
});
