document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Functionality
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');
  
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close mobile menu when a nav link is clicked
  const navLinkItems = document.querySelectorAll('.nav-links a');
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
      hamburgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  const tabs = document.querySelectorAll('.tab');
  const previews = document.querySelectorAll('.project-preview');
  const details = document.querySelectorAll('.project-details');
  const detailsBtn = document.querySelector('.more-details-btn');

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all previews
      previews.forEach(preview => preview.classList.add('hidden'));
      // Show selected preview
      const projectId = tab.dataset.project;
      document.getElementById(projectId).classList.remove('hidden');

      // Update details button
      detailsBtn.dataset.details = `${projectId}-details`;
      
      // Hide all details first
      details.forEach(detail => detail.classList.remove('show'));
      
      // Reset button text
      detailsBtn.textContent = 'More Details';
    });
  });

  // Details button toggle
  detailsBtn.addEventListener('click', () => {
    const detailsId = detailsBtn.dataset.details;
    const detailsElement = document.getElementById(detailsId);
    
    if (detailsElement.classList.contains('show')) {
      detailsElement.classList.remove('show');
      detailsElement.classList.add('hidden');
      detailsBtn.textContent = 'More Details';
    } else {
      detailsElement.classList.remove('hidden');
      detailsElement.classList.add('show');
      detailsBtn.textContent = 'Hide Details';
    }
  });
});