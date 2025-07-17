// 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".subscribe form");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    alert("You're subscribed! 🎉");
    emailInput.value = "";
  });
});
