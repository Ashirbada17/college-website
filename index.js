const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
        delay: 3000,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
        },
});

document.addEventListener('DOMContentLoaded', function () {
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile menu after clicking link
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
    });
});
});
// admission form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("admissionForm");

    if (form) {
        form.addEventListener("submit", function (e) {
        const name = document.getElementById("full-name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const program = document.getElementById("program");

        // Helper: clear previous errors
        const clearErrors = () => {
            form.querySelectorAll(".form-error").forEach(el => el.remove());
            [name, email, phone, program].forEach(field => field.classList.remove("border-red-500"));
        };

        // Helper: show error below field
        const showError = (field, message) => {
            field.classList.add("border-red-500");
            const error = document.createElement("p");
            error.className = "form-error text-red-500 text-sm mt-1";
            error.textContent = message;
            field.insertAdjacentElement("afterend", error);
        };

        clearErrors();

        let valid = true;

        // Name check
        if (name.value.trim() === "") {
            showError(name, "Full name is required.");
            valid = false;
        }

        // Email check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, "Valid email address is required.");
            valid = false;
        }

        // Phone check
        const phonePattern = /^[0-9+\-\s()]{7,15}$/;
        if (phone.value.trim() !== "" && !phonePattern.test(phone.value.trim())) {
            showError(phone, "Phone number format is invalid.");
            valid = false;
        }

        // Program selection check
        if (program.value.trim() === "") {
            showError(program, "Please select a program.");
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); // Prevent submission
        }
        });
    }
});
// contact form
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
        const name = document.getElementById("contact-name");
        const email = document.getElementById("contact-email");
        const subject = document.getElementById("contact-subject");
        const message = document.getElementById("contact-message");

        // Clear previous errors
        contactForm.querySelectorAll(".form-error").forEach(el => el.remove());
        [name, email, subject, message].forEach(field => field.classList.remove("border-red-500"));

        const showError = (field, msg) => {
            field.classList.add("border-red-500");
            const error = document.createElement("p");
            error.className = "form-error text-red-500 text-sm mt-1";
            error.textContent = msg;
            field.insertAdjacentElement("afterend", error);
        };

        let valid = true;

        // Name validation
        if (name.value.trim() === "") {
            showError(name, "Name is required.");
            valid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, "Please enter a valid email.");
            valid = false;
        }

        // Subject validation (optional — skip or include)
        if (subject.value.trim() === "") {
            showError(subject, "Subject is required.");
            valid = false;
        }

        // Message validation
        if (message.value.trim() === "") {
            showError(message, "Message cannot be empty.");
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); // Stop form from submitting
        }
        });
    }
});
// //hoarding


  document.addEventListener("DOMContentLoaded", function () {
    const hoarding = document.getElementById("hoarding");
    const closeBtn = document.getElementById("closeHoarding");

    // Always show hoarding on page load
    hoarding.style.display = "block";

    // Hide hoarding on close
    closeBtn.addEventListener("click", () => {
      hoarding.style.display = "none";
    });
  });










