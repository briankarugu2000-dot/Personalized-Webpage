// Run when the page loads — check if user data is already in localStorage
window.onload = function () {
  const savedName = localStorage.getItem("userName");
  const savedAge = localStorage.getItem("userAge");

  if (savedName && savedAge) {
    showUserData(savedName, savedAge);
  }
};

// Save user data to localStorage and display it
function saveUser() {
  const name = document.getElementById("nameInput").value.trim();
  const age = document.getElementById("ageInput").value.trim();

  // Basic validation
  if (name === "" || age === "") {
    alert("Please enter both your name and age.");
    return;
  }

  // Store in localStorage
  localStorage.setItem("userName", name);
  localStorage.setItem("userAge", age);

  showUserData(name, age);
}

// Display all personalized content
function showUserData(name, age) {
  // Hide form, show display section
  document.getElementById("form-section").classList.add("hidden");
  document.getElementById("display-section").classList.remove("hidden");

  // 1. Personalized Greeting using template literals
  document.getElementById("greeting").textContent = `Hello, ${name}! Welcome to your personalized page.`;

  // 2. Age in months
  const ageInMonths = calculateAgeInMonths(Number(age));
  document.getElementById("age-months").textContent = `You are ${age} years old, which is ${ageInMonths} months!`;

  // 3. if...else for adult content check
  const contentMsg = document.getElementById("content-message");
  if (Number(age) >= 18) {
    contentMsg.textContent = "You are 18 or older. You can access adult content.";
  } else {
    contentMsg.textContent = "You are too young for adult content. Come back when you are 18!";
  }

  // 4. Loop to display motivational quote 5 times
  const quote = "Believe in yourself and all that you are.";
  const container = document.getElementById("quotes-container");
  container.innerHTML = ""; // Clear previous quotes

  for (let i = 1; i <= 5; i++) {
    const p = document.createElement("p");
    p.textContent = `${i}. ${quote}`;
    container.appendChild(p);
  }
}

// Function to calculate age in months
function calculateAgeInMonths(years) {
  return years * 12;
}

// Reset — clear localStorage and show form again
function resetUser() {
  localStorage.removeItem("userName");
  localStorage.removeItem("userAge");

  document.getElementById("form-section").classList.remove("hidden");
  document.getElementById("display-section").classList.add("hidden");

  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";
}