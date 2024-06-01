import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResult(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    console.log(keyword);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "ca0094f431ob9cbfef2ed6ce95bt0cc7";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <p className="form-title">What word are you looking for?</p>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <p className="form-hint">try searching for house, food, travel...</p>
      </section>
      <Result result={result} />
    </div>
  );
}
