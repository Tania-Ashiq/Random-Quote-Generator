import React, { useState, useEffect, useRef } from "react";

 
const App = () => {
  const [Quotes, setQuotes] = useState("");
  const textRef = useRef();

  let colors = ["#ffff00", "#90ee90", "#6b63ff ", "#ff68ff", "#a9a9e7"];

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    textRef.current.style.color =
      colors[Math.floor(Math.random() * colors.length)];
  }, [Quotes]);
  return (
    <div className="App">
      <div className="quote">
        <p ref={textRef}>{Quotes.text}</p>
        <p>Author: {Quotes.author}</p>
        <div className="btnContainer">
          <button onClick={getQuote} className="btn">
            Get Quote
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${Quotes.text}`}
            target="_blank"
            rel="noopenI noreferrer"
            className="btn"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
