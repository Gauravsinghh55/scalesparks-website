'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);


// Initialize EmailJS with your user ID
// emailjs.init("mhfV0P3sj7dvnnwB6"); // Replace with your actual EmailJS User ID

// // Function to send the email
// function sendEmail(event) {
//   event.preventDefault(); // Prevent form from submitting the traditional way

//   const emailAddress = document.getElementById("email_address").value;

//   // Send the email via EmailJS
//   emailjs.send("service_p94p787", "template_o39izfz", {
//     email_address: emailAddress,
//   }).then(
//     function(response) {
//       alert("Email sent successfully!");
//       console.log("SUCCESS!", response.status, response.text);
//     },
//     function(error) {
//       alert("Failed to send email. Please try again.");
//       console.log("FAILED...", error);
//     }
//   );
// }


  emailjs.init("mhfV0P3sj7dvnnwB6");  // Initialize EmailJS with your user ID

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Send the email using EmailJS
    emailjs.sendForm("service_p94p787", "template_o39izfz", this)
      .then(function(response) {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("Failed to send message.");
        console.log("FAILED...", error);
      });
  });