import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.PureComponent {
  render() {
    return (
      <section>
        Hello Next!
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
