const turtle = document.querySelector('.turt');
function handleKeyDown(event) {
  let x = 0;
  let y = 0;
  //If it is not an arrow key we don't care
  if (!event.key.includes('Arrow')) {
    return;
  }
  switch (event.key) {
    case 'ArrowUp':
      y = y - 1;
      break;
    case 'ArrowZDown':
      y = y + 1;
      break;
    case 'ArrowLeft':
      x = x - 1;
      break;
    case 'ArrowRight':
      x = x + 1;
      break;
    default:
      console.log('Not a directional key');
      break;
  }
}
window.addEventListener('keydown', handleKeyDown);
