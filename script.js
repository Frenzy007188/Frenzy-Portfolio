  // Tab Functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons and contents
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          // Add active class to clicked button and corresponding content
          button.classList.add('active');
          const tabId = button.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
      });
  });

  // Smooth Scroll for Navbar Links
  document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', e => {
          e.preventDefault();
          const targetId = anchor.getAttribute('href').slice(1);
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  });
  
  