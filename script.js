const container = document.querySelector('.container');
const card = document.querySelector('.card');

let isFlipped = false; // Track card flip state
let isRotating = false; // Track if rotation is active

// Toggle card flip state on click
container.addEventListener('click', () => {
  isFlipped = !isFlipped;
  card.classList.toggle('flipped', isFlipped);
});

// Start rotation on mouse down
container.addEventListener('mousedown', () => {
  isRotating = true;
});

// Stop rotation on mouse up
container.addEventListener('mouseup', () => {
  isRotating = false;
  card.style.transform = ''; // Reset transform on release
});

// Rotate the card based on mouse movement if isRotating is true
container.addEventListener('mousemove', (event) => {
  if (isRotating) {
    const rect = container.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    const rotationX = (mouseY / (rect.height / 2)) * 30;
    const rotationY = (mouseX / (rect.width / 2)) * -30;

    card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
  }
});

// Double-click to reset rotation and flip state
container.addEventListener('dblclick', () => {
  card.style.transform = '';
  if (isFlipped) {
    isFlipped = false;
    card.classList.remove('flipped');
  }
});
