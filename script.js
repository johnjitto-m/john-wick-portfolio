window.addEventListener("load", () => {
  const fills = document.querySelectorAll(".bar .fill");
  fills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = "0"; // reset for animation
    setTimeout(() => {
      fill.style.width = width;
    }, 100);
  });
});
// This script animates the width of the fill elements in the progress bars

// Prevent form submission and show modal
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop default form submit

  // Show modal
  document.getElementById("thankYouModal").style.display = "flex";

  // Optional: Reset the form
  this.reset();
});

// Close the modal
function closeModal() {
  document.getElementById("thankYouModal").style.display = "none";
}