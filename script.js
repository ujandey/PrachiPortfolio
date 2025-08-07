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

      // Update details button (if exists)
      if (detailsBtn) {
        detailsBtn.dataset.details = `${projectId}-details`;
      }
      
      // Hide all details first
      details.forEach(detail => detail.classList.remove('show'));
      
      // Reset button text
      if (detailsBtn) {
        detailsBtn.textContent = 'More Details';
      }
    });
  });

  // Details button toggle (only if button exists)
  if (detailsBtn) {
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
  }

  // Education Timeline Animation
  const timelineItems = document.querySelectorAll('.timeline-content');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the item is visible
  });

  timelineItems.forEach(item => {
    observer.observe(item);
  });

  // Experience Section Animation
  const logEntries = document.querySelectorAll('.log-entry');

  const experienceObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a slight delay for each entry to create a staggered effect
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
          experienceObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05 // Trigger when just 5% of the item is visible
  });

  logEntries.forEach(entry => {
    experienceObserver.observe(entry);
  });
});