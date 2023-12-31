import React, { useState } from "react";
import Button from "./Button";
function App() {
  const [content, setContent] = useState(""); //text for tooltip
  const [position, setPosition] = useState("top"); //position for tooltip
  const [formSubmit, setFormSubmit] = useState(false); //check for setting the content and position of tooltip

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(true);
  };
  return (
    <div className="App">
      <div className="form-container">
        <form id="tooltip-prop-form" onSubmit={handleSubmit}>
          <div>
            <label>Content for Tool Tip: </label>
            <input
              type="text"
              name="content"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
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
          </div>
          <div id="submit-btn">
            <button>Set</button>
          </div>
        </form>
      </div>
      <div className="button-container">
        <Button
          content={formSubmit ? content : undefined}
          position={formSubmit ? position : undefined}
        />
      </div>
    </div>
  );
}

export default App;
