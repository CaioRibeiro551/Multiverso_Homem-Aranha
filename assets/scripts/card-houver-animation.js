function handleMouseEnter() {
  this.classList.add('s-card--houvered');
}
function handleMouseLeave() {
  this.classList.remove('s-card--houvered');
}
function addEventListenersToCards() {
  const cardsElements = document.getElementsByClassName('s-card');

  for (let index = 0; index < cardsElements.length; index++) {
    const card = cardsElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);
