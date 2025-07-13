function loadCaseStudy(projectId) {
  console.log(`Loading case study for: ${projectId}`);
  window.location.href = `/case-studies/${projectId}`;
}

document.addEventListener('DOMContentLoaded', () => {
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
});
