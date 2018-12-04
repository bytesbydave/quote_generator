import React from 'react';
import quotesondesign from '../api/quotesondesign';
import DisplayQuote from './DisplayQuote';

class App extends React.Component {
  state = { quote: '', author: '' };

  onSearchSubmit = async ( ) => {
    const response = await quotesondesign.get(`/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`);
    this.setState({quote: response.data[0].content});
    this.setState({author: response.data[0].title});
  }

  componentDidMount() {
    this.onSearchSubmit();
  }

  render() {
    return (
      <div className="ui container">
        <DisplayQuote quote={this.state.quote} author={this.state.author} />
        <button className="ui secondary button" onClick={this.onSearchSubmit}>Click</button>
      </div>
    );
  }
}

export default App;