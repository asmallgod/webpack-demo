// import './style.scss';

// const btn = document.createElement('button');
// btn.innerHTML = 'add';
// document.body.appendChild(btn);
// btn.onclick = () => {
//   const div = document.createElement('div');
//   div.innerHTML = 'item';
//   document.body.appendChild(div);
// };

import counter from './counter';
import addNumber from './number';

counter();
let div = addNumber();

if (module.hot) {
  module.hot.accept('./number.js', () => {
    document.body.removeChild(div);
    div = null;
    div = addNumber();
  });
}
