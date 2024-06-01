import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState("");

  function handleDictionaryResponse(response) {
    setResult(response.data);
    setLoaded(true);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "ca0094f431ob9cbfef2ed6ce95bt0cc7";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDictionaryResponse);
    axios.get(photoApiUrl).then(handlePhotoResponse);
  }

  if (loaded) {
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={search}>
            <p className="form-title">What word are you looking for?</p>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <p className="form-hint">try searching for house, food, travel...</p>
        </section>
      </div>
    );
  }
}
