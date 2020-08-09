import { add } from './math';
import './style.scss';

add(1, 2);

const element = document.createElement('div');
element.innerHTML = 'hello wolrd';
document.body.appendChild(element);

console.log(process.env.NODE_ENV);
