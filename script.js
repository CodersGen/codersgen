import { db, collection, addDoc, serverTimestamp } from "./firebase.js";

document.getElementById("submitBtn").addEventListener("click", async function () {
    const emailInput = document.getElementById("email");
    const submitBtn = document.getElementById("submitBtn");
    const successMessage = document.getElementById("successMessage");

    const email = emailInput.value.trim();

    // Hide success message when the form is submitted
    successMessage.classList.add("hidden");

    if (email === "") {
        alert("⚠️ Please enter a valid email.");
        return;
    }

    // Disable button to prevent multiple submissions
    submitBtn.disabled = true;

    try {
        await addDoc(collection(db, "subscribers"), {
            email: email,
            timestamp: serverTimestamp()
        });

        // Show success message
        successMessage.classList.remove("hidden");

        // Clear input field
        emailInput.value = "";

        // Hide success message & re-enable button after 3 seconds
        setTimeout(() => {
            successMessage.classList.add("hidden");
            submitBtn.disabled = false;
        }, 3000);
    } catch (error) {
        console.error("Error saving email: ", error);
        alert("❌ Error saving email. Please try again.");
        submitBtn.disabled = false;
    }
});
