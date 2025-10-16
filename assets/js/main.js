document.getElementById('searchInput').addEventListener('keyup', function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.card--category');

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    card.style.display = title.includes(searchTerm) ? '' : 'none';
  });
});
