document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded successfully!");

    // Handle soil form submission
    document.getElementById('soil-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Simulate prediction (replace with actual API call)
        const crops = ['Wheat', 'Rice', 'Corn', 'Soybean', 'Potato'];
        const randomCrop = crops[Math.floor(Math.random() * crops.length