import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/quotes/random")
            .then((res) => res.json())
            .then((quote) => {
                setQuote(quote.quote);
                setAuthor(quote.author);
            });
    }, []);

    let fetchNewQuote = () => {
        fetch("https://dummyjson.com/quotes/random")
            .then((res) => res.json())
            .then((quote) => {
                setQuote(quote.quote);
                setAuthor(quote.author);
            });
    };

    return (
        <div className="App">
            <div className="quote">
                <h2>{quote}</h2>
                <small>-{author}-</small>
            </div>
            <br />
            <button className="btn" onClick={fetchNewQuote}>
                Generate New Quote
            </button>
        </div>
    );
}

export default App;
