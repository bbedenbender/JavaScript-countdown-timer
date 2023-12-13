let countdownInterval;
let targetTime;

function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeRemaining = targetTime - currentTime;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        timeExpired();
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const mseconds = Math.floor(timeRemaining % 1000);

    // Update your UI with days, hours, minutes, seconds, and milliseconds
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("mseconds").textContent = mseconds;
}

function timeExpired() {
    // Implement this function according to your needs
    console.log("Your time has expired!");
    // You can perform actions like displaying a message, showing an alert, etc.
}

function startCountdown() {
    // Set targetTime to a random time less than 3 days (in milliseconds)
    targetTime = new Date().getTime() + Math.floor(Math.random() * 259200000); // 3 days in milliseconds
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 100);
}

function stopCountdown() {
    // Divide time countdown in half each click
    targetTime /= 2;
}

function resetCountdown() {
    // Reset the countdown and display a message
    targetTime = new Date().getTime() + Math.floor(Math.random() * 259200000); // 3 days in milliseconds
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 100);

    // Display the reset message
    document.getElementById("reset-message").textContent = "Fate will decide";
}

function changeFate() {
    // Popup box with "Good Luck"
    alert("Good Luck");
}

// Start the initial countdown
startCountdown();

// Add blinking effect after 15 seconds
setTimeout(function () {
    document.getElementById("main-jumbotron").classList.add("blinking-jumbotron");
}, 15);
