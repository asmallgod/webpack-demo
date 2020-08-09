import _ from 'lodash';

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return _.join(['Hello', this.greeting], ' ');
  }
}

const greeter = new Greeter('world');

const button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = function () {
  alert(greeter.greet());
};
document.body.appendChild(button);
