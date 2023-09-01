import React, { useState } from "react";
import Button from "./Button";
function App() {
  const [content, setContent] = useState("");
  const [position, setPosition] = useState("top");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(true);
    console.log("content : ", content);
    console.log("position : ", position);
  };
  return (
    <div className="App">
      <div className="form-container">
        <form id="tooltip-prop-form" onSubmit={handleSubmit}>
          <label>Content for Tool Tip: </label>
          <input
            type="text"
            name="content"
            onChange={(e) => setContent(e.target.value)}
          />
          <label>Position: </label>
          <select
            defaultValue={"top"}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value={"top"}>top</option>
            <option value={"left"}>left</option>
            <option value={"right"}>right</option>
            <option value={"bottom"}>bottom</option>
          </select>
          <div>
            <button>Set</button>
          </div>
        </form>
      </div>
      <div className="button-container">
        <Button />
      </div>
    </div>
  );
}

export default App;
