// Get the DOM element for output:
document.addEventListener('DOMContentLoaded', function () {
    // Add timestamp on page load
    document.getElementById('timestamp').value = new Date().toISOString();
    console.log(timestamp);
})

