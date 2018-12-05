import React from 'react';
import faker from 'faker';

function strip(html){
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function twitter(tweet) {
  return `https://twitter.com/intent/tweet?text=${tweet}`
}

const DisplayQuote = ({ quote, author }) => {
  return (
    <div className="hero-quote">
      <div className="stack-1">
        <h1>{strip(quote)}</h1>
      </div>
      <div className="hero-image">
        <div className="image-contain">
          <img alt="person-image" src={faker.image.avatar()} />
        </div>
      </div>
      <div className="stack-1">
        <p>{strip(author)}</p>
        <div className="twitter-icon">
          <a class="twitter-share-button" href={twitter(strip(quote))}>Tweet</a>
        </div>
      </div>
    </div>
  );
}

export default DisplayQuote;