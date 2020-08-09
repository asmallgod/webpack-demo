import wife from './wife.jpg';
import createWife from './wife.js';
import style from './css/style.scss';

const img = new Image();
img.classList.add(style.wife);
img.src = wife;
document.getElementById('root').appendChild(img);

createWife();

const fontDiv = document.createElement('div');
fontDiv.classList.add('iconfont iconyueliang');
document.getElementById('root').appendChild(fontDiv);
