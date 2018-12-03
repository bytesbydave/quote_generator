import React from 'react';

function strip(html){
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

const DisplayQuote = ({ quote, author }) => {
  return (
    <div>
      {strip(quote)}
      <p>
        {strip(author)}
      </p>
    </div>
  );
}

export default DisplayQuote;