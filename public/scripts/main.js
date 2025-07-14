function loadCaseStudy(projectId) {
  console.log(`Loading case study for: ${projectId}`);
  window.location.href = `/case-studies/${projectId}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for work nav buttons
  document.querySelectorAll('.work-nav-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    });
  });

  const backToTop = document.getElementById('backToTop');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    backToTop.style.display = 'none';
  }
});

