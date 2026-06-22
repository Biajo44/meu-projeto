// Rolagem suave + efeito glow //
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Adiciona efeito glow //
    target.classList.add('glow');
    setTimeout(() => target.classList.remove('glow'), 1200);
  });
});
