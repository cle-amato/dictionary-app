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
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Result result={result} />
    </div>
  );
}
