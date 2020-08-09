import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    axios.get('/react/api/header.json').then((res) => {
      console.log(res);
    });
  }

  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
