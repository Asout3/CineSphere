function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
    // Store the state in local storage
    localStorage.setItem("navState", navLinks.classList.contains("show"));
}

// Check local storage to set the initial state
window.onload = function() {
    const navLinks = document.getElementById("nav-links");
    const navState = localStorage.getItem("navState");
    if (navState === "true") {
        navLinks.classList.add("show");
    }
};

// Optional: Clear the state on page unload (if needed)
window.onunload = function() {
    localStorage.removeItem("navState");
};

// For Nav bar 

// Get elements
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');

// Open sidebar on hamburger click
hamburger.addEventListener('click', function() {
    sidebar.style.left = '0'; // Slide in
    hamburger.style.display = 'none'; // Hide hamburger button
});

// Close sidebar on close button click
closeBtn.addEventListener('click', function() {
    sidebar.style.left = '-250px'; // Slide out
    hamburger.style.display = 'block'; // Show hamburger button
});

// for the spinner

window.addEventListener("load", () =>{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () =>{
        document.body.removeChild("loader");
    })
})

