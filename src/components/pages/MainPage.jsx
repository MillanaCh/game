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
    let testing = new RegExp(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{2,8}$/
    );
    let validEMail = testing.test(userName);

    if (userName === "") {
      setUserName(null);
      alert("Name is required");
    } else if (userName.length < 2 || userName.length > 10) {
      setUserName(null);
      alert("User name must have min-2, max-10");
    } else if (validEMail) {
      dispatch({ type: actions.LOGIN_NAME, payload: userName });
    } else {
      alert(
        "User name should consist at least a symbol, upper and lower case letters, number"
      );
    }
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
            <b> Write your user name! </b>
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
