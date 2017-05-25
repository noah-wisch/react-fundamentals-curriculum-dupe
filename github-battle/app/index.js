let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');

// components are concerned w/ 3 things: state, lifecycle event, UI

class App extends React.Component {
  render() { // used to describe lifecycle of component
    return(
      <div>Hello World!</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
