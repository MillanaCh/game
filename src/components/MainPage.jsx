import React, { useState } from "react";
import Header from "./Header";
export default function MainPage() {
  const [userName, setUserName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="background-logo">
        <form className="container">
          <label className="label-name">
            <b> Write your name!</b>
          </label>
          <input
            placeholder="your name"
            className="input-name"
            onChange={(e) => console.log(e.target.name)}
          />
          <button
            className="btn-name"
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            Enter
          </button>
        </form>
      </div>
    </>
  );
}
