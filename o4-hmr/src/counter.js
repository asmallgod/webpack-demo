function Counter() {
  const button = document.createElement('button');
  button.innerHTML = '0';
  button.onclick = () => {
    button.innerHTML = parseInt(button.innerHTML) + 1;
  };
  document.body.appendChild(button);
}

export default Counter;
