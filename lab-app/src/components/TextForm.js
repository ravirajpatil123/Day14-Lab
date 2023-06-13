import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase on clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase on clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // const handleClearClick = () => {
  //   // console.log("Uppercase on clicked" + text);
  //   let newText = "";
  //   setText(newText);
  // };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-danger mx-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>

      <button className="btn btn-danger mx-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      
      {/* <button className="btn btn-success" onClick={handleClearClick}>
        Clear Text
      </button> */}
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <b>{text.split(" ").length}words and {text.length}characters </b>
      <p>{0.008*text.split(" ").length}minutes read  </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
