// Mock Email Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribe-form");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!email || !validateEmail(email)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "tomato";
      return;
    }

    // Simulate sending...
    message.textContent = "Subscribing...";
    message.style.color = "#00ffe1";

    setTimeout(() => {
      message.textContent = "You're subscribed! 🎉";
      emailInput.value = "";
    }, 1000);
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
