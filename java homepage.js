// Smooth Scrolling for "Explore Our Work" Button
document.querySelector('.btn-scroll').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#portfolio').scrollIntoView({
    behavior: 'smooth',
  });
});

// Animate Portfolio Items on Scroll
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Intersection Observer for triggering animations when items come into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, {
  threshold: 0.5, // Trigger when 50% of the item is visible
});

portfolioItems.forEach(item => {
  observer.observe(item);
});
