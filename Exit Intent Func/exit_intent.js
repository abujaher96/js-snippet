// Function to add an exit intent listener
function addExitIntentListener() {
    // Variable to track if exit modal is shown
    var exitModalShown = false;

    // Function to handle exit intent event
    function handleExitIntent(event) {
        // Check if exit modal is not shown and exit intent is detected
        if (!exitModalShown && isExitIntent(event)) {
            // Show your modal here
            exitModalShown = true; // Update exit modal status
            console.log('Exit intent detected'); // Log exit intent in console (can be removed in production)
        }
    }

    // Function to determine exit intent based on mouse position
    function isExitIntent(event) {
        // Check if mouse is moving towards top or leaving viewport
        if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
            return true; // Return true if exit intent detected
        }
        return false; // Return false otherwise
    }

    // Event listeners to detect exit intent
    document.addEventListener('mouseout', handleExitIntent); // Listen for mouseout event
    document.addEventListener('mouseleave', handleExitIntent); // Listen for mouseleave event
}

// Example usage of the exit intent listener function
addExitIntentListener();
