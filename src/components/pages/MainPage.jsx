import React, { useState } from "react";
import Header from "../Header";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";
import { Link } from "react-router-dom";
export default function MainPage() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: actions.LOGIN_NAME, payload: userName });
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="background-logo">
        <form className="container">
          <label style={{ color: "white" }}>
            <b> Write your name!</b>
          </label>
          <input
            placeholder="your name"
            className="input-name"
            onChange={(e) => handleChange(e)}
          />

          <button
            className="btn-name"
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            {userName ? (
              <Link
                to="/play"
                style={{ color: "white", textDecoration: "none" }}
              >
                Enter
              </Link>
            ) : (
              <p>Enter</p>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
