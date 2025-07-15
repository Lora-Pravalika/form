document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const employeeIdInput = document.getElementById("employeeId");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");
  const errorText = document.getElementById("errorText");

  let loading = false;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    errorText.textContent = "";
    setLoading(true);

    const employeeId = employeeIdInput.value.trim();
    const password = passwordInput.value;

    setTimeout(() => {
      if (employeeId === "admin" && password === "admin123") {
        window.location.href = "dashboard.html"; // Replace with actual page
      } else {
        setError("Invalid Employee ID or password");
      }
      setLoading(false);
    }, 1000);
  });

  function setError(message) {
    errorText.textContent = message;
  }

  function setLoading(isLoading) {
    loading = isLoading;
    loginButton.disabled = isLoading;
    loginButton.textContent = isLoading ? "Logging in..." : "Login";
  }
});
