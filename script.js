const form = document.getElementById('contactForm');
const modal = document.getElementById('thankYouModal');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      modal.style.display = 'flex'; // Show modal on success
      form.reset(); // Optional: reset the form
    } else {
      alert('Something went wrong. Please try again later.');
    }
  } catch (error) {
    alert('An error occurred while submitting the form.');
    console.error(error);
  }
});

function closeModal() {
  modal.style.display = 'none';
}
