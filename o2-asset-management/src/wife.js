import wife from './wife.jpg';

function createWife() {
  const img = new Image();
  img.classList.add('wife');
  img.src = wife;
  document.getElementById('root').appendChild(img);
}

export default createWife;
