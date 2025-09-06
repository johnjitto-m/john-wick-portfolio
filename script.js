// ============================
// Navbar Injection + Active Link
// ============================
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Highlight current page link
    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
      if (link.getAttribute("href") === location.pathname.split("/").pop()) {
        link.classList.add("active");
      }
    });
  });

// ============================
// Contact Form Submission + Modal
// ============================
const form = document.getElementById('contactForm');
const modal = document.getElementById('thankYouModal');

if (form && modal) {
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
        modal.style.display = 'flex'; // Show modal
        form.reset(); // Reset form
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred while submitting the form.');
      console.error(error);
    }
  });
}

function closeModal() {
  if (modal) modal.style.display = 'none';
}

// ============================
// Horizontal Slider Logic (About Page)
// ============================
let currentIndex = 0;
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');

function slide(direction) {
  if (!sliderTrack || slides.length === 0) return;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;

  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Optional: fade-in effect for slide content
  slides.forEach((s, i) => {
    s.style.opacity = (i === currentIndex) ? '1' : '0.5';
  });
}

// Auto slide every 5 seconds
if (slides.length > 0) {
  slides.forEach((s, i) => s.style.opacity = (i === 0 ? '1' : '0.5')); // initialize opacity
  setInterval(() => {
    slide(1);
  }, 5000);
}
