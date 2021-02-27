const form = document.getElementById('form');

form.addEventListener('input', (event) => {
  event.preventDefault();
  console.log(event.target.value);
  // include regex to detect any special characters
});
