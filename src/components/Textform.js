import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState(" ");
  const handeleOnchange = (event) => {
    // console.log('On Change');
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log('You have clicked the Upper case the button'+ text);
    let myText = text.toUpperCase();
    setText(myText);
    props.showAlert('Converted to UpperCase','Success');
  };
  const handleLoClick = () => {
    let myText = text.toLowerCase();
    setText(myText);
    props.showAlert('Converted to LowerCase','Success');
  };
  const handleClearClick = () => {
    let myText = "";
    setText(myText);
    props.showAlert('Text is Cleared','Success');
  };
  const handleRemoveClick = () => {
    let myText = text.split(/[ ]+/);
    // console.log(myText);
    setText(myText.join(" "));
    props.showAlert('Extra spaces removed','Success');
  };
  const handleCopy = () => {
    let myText = document.getElementById("myBox");
    myText.select();
    navigator.clipboard.writeText(myText.value);
    props.showAlert('Text has been copied','Success');
  };
  return (
    <div style={{color:props.mode === "dark" ? "white" : "black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handeleOnchange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "rgb(110 86 57)",
            color:props.mode === "dark" ? "white" : "black"
          }}
          rows="8"
        ></textarea>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={handleRemoveClick}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      <div className="container">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters{" "}
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes required to read your Text{" "}
        </p>
        <h3>Preview of your text</h3>
        <p>{text.length>0?text:"Write in the textbox to preview"}</p>
      </div>
    </div>
  );
}
