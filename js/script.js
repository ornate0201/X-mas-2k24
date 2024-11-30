// Countdown Function
function updateCountdown() {
    const christmasDate = new Date("December 25, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = christmasDate - now;
  
    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    // Update the HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
  
  // Update every second
  setInterval(updateCountdown, 1000);
  