function addNumber() {
  const div = document.createElement('div');
  div.innerHTML = '3012';
  document.body.appendChild(div);
  return div;
}

export default addNumber;
