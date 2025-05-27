document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const simulationButtons = document.querySelectorAll('.start-simulation');
  const modal = document.getElementById('simulation-details-modal');
  const closeModal = document.querySelector('.close-button');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');

  const simulationData = {
    'underwriter': {
      title: 'Medical Underwriter Simulation',
      description: 'Assess records, identify risks, and decide on policies.'
    },
    'financial-analyst': {
      title: 'Financial Analyst Simulation',
      description: 'Analyze data, build models, and interpret market trends.'
    }
  };

  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  simulationButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.simulationId;
      const data = simulationData[id];
      if (data) {
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modal.style.display = 'flex';
      }
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
