import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div>
        <h2>{props.result.word}</h2>
        <p>/{props.result.phonetic}/</p>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} index={index} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
