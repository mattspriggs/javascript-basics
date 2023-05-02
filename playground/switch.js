const turtle = document.querySelector('.turt');
let x = 0;
let y = 0;
function handleKeyDown(event) {
  //If it is not an arrow key we don't care
  if (!event.key.includes('Arrow')) {
    return;
  }
  console.log(event.key);
  switch (event.key) {
    case 'ArrowUp':
      y = y - 1;
      break;
    case 'ArrowDown':
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
  turtle.setAttribute('style', `--x: ${x}px; --y: ${y}px`);
  // turtle.setAttribute('style', `--y: ${y}px`);
}
window.addEventListener('keydown', handleKeyDown);
