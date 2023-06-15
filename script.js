// Obtener todos los elementos de autos
const cars = document.querySelectorAll('.car');

// Agregar evento de clic a cada auto
cars.forEach(car => {
  const detailsLink = car.querySelector('a');

  detailsLink.addEventListener('click', () => {
    car.classList.toggle('highlight');
  });
});

