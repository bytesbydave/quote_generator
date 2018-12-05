import React from 'react';
import quotesondesign from '../api/quotesondesign';
import DisplayQuote from './DisplayQuote';
import '../css/App.css';


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
      <div className="blue-back">
        <div className="ui container display-top">
          <div className="quote-container">
            <div className="inner-contain">
              <div className="hero">
                <button className="ui secondary button" onClick={this.onSearchSubmit}>Click for a Quote</button>
                <DisplayQuote quote={this.state.quote} author={this.state.author} />

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;