import React from 'react';
import DisplayQuote from './DisplayQuote';

class App extends React.Component {
  state = { quote: 'hiya' };
  render() {
    return (
      <div>
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  }
}

export default App;