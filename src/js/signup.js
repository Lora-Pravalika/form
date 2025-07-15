document.addEventListener("DOMContentLoaded", () => {
  const companyInput = document.getElementById("company-input");
  const verifyBtn = document.getElementById("verify-btn");
  const statusMsg = document.getElementById("status-msg");

  verifyBtn.addEventListener("click", () => {
    const companyName = companyInput.value.trim();

    if (!companyName) return;

    // Disable button to prevent multiple submissions
    verifyBtn.disabled = true;
    statusMsg.textContent = "⏳ Verifying...";
    statusMsg.className = "";

    fetch("https://aihr4u.onrender.com/api/verify-company/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ company_name: companyName }),
    })
      .then(async (res) => {
        const data = await res.json();
        console.log("Response Status:", res.status);
        console.log("Response Body:", data);

        if (res.ok && data.message?.includes("Verified")) {
          statusMsg.textContent = "✅ Verified! Redirecting to login...";
          statusMsg.className = "verified";

          setTimeout(() => {
            window.location.href = "/login"; // Adjust path as needed
          }, 1500);
        } else {
          statusMsg.textContent = "❌ Company not verified";
          statusMsg.className = "not-verified";
        }
      })
      .catch((error) => {
        console.error("Error verifying company:", error);
        statusMsg.textContent = "❌ Verification failed. Try again.";
        statusMsg.className = "not-verified";
      })
      .finally(() => {
        verifyBtn.disabled = false;
      });
  });
});
