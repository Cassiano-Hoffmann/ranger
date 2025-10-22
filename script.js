// Menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simulação de envio do formulário
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Obrigado! Um de nossos consultores entrará em contato em breve.');
  e.target.reset();
});