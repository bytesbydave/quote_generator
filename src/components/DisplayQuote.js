import React from 'react';

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
    <div>
      {strip(quote)}
      <a class="twitter-share-button" href={twitter(strip(quote))}>
    Tweet
      </a>
      <p>
        {strip(author)}
      </p>
    </div>
      
        
  );
}

export default DisplayQuote;