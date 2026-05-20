window.onload = function() {

    // ----- SIMPLE ACCORDION -----
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        };
    }


};

    // ----- 2. BOOKING FORM VALIDATION (booking.html) -----
    var bookingForm = document.querySelector("form");

    if (bookingForm) {
        bookingForm.onsubmit = function() {
            var nameField = document.getElementById("full-name");
            var phoneField = document.getElementById("phone");
            var emailField = document.getElementById("email");
            var serviceField = document.getElementById("service");

            if (nameField && nameField.value.trim() === "") {
                alert("Please enter your full name.");
                return false;
            }

            if (phoneField && phoneField.value.trim() === "") {
                alert("Please enter your phone number.");
                return false;
            }

            if (emailField && emailField.value.trim() === "") {
                alert("Please enter your email address.");
                return false;
            }

            if (serviceField && serviceField.value === "") {
                alert("Please select a service.");
                return false;
            }

            alert("Thank you! Your booking has been received.");
            return true;
        };
    }

    // ----- 3. CANCEL FORM CONFIRMATION (Cancel.html) -----
    var cancelButton = document.querySelector("button");

    if (cancelButton && cancelButton.innerHTML.includes("CONFIRM")) {
        cancelButton.onclick = function(event) {
            var confirmCancel = confirm("Are you sure you want to cancel your reservation?");
            if (!confirmCancel) {
                event.preventDefault();
            } else {
                alert("Your reservation has been cancelled.");
            }
        };
    }

    // ----- 4. GALLERY IMAGE CLICK (Gallery.html) -----
    var galleryImages = document.querySelectorAll(".gallery-item img");

    for (var j = 0; j < galleryImages.length; j++) {
        galleryImages[j].style.cursor = "pointer";

        galleryImages[j].onclick = function() {
            window.open(this.src, "_blank");
        };
    }

   

    // ----- 6. SMOOTH SCROLLING (Optional) -----
    var allLinks = document.querySelectorAll('a[href^="#"]');
    for (var k = 0; k < allLinks.length; k++) {
        allLinks[k].onclick = function(event) {
            event.preventDefault();
            var targetId = this.getAttribute("href");
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        };
    }

};