import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  if (props.index < 3) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
