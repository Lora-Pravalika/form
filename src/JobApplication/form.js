document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const aadhar = document.getElementById("aadhar").value.trim();
  const pan = document.getElementById("pan").value.trim();
  const resume = document.getElementById("resume").files[0];

  // Basic validation
  if (!name || !email || !phone || !aadhar || !pan || !resume) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/^\d{12}$/.test(aadhar)) {
    alert("Aadhar number must be 12 digits.");
    return;
  }

  if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) {
    alert("Invalid PAN format. Example: ABCDE1234F");
    return;
  }

  if (resume.type !== "application/pdf") {
    alert("Resume must be a PDF file.");
    return;
  }

  alert("Form submitted successfully! (Demo only)");
});
