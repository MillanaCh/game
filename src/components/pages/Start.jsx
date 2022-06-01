import React from "react";
import Header from "../Header";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Start() {
  const loginName = useSelector((state) => state.login);

  return (
    <>
      <Header />
      {loginName ? (
        <div
          style={{
            backgroundColor: "#136998",
            height: "95vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="start-rules">
            <h2>Rules</h2>
            <ul className="rules">
              <li>You will have 60 second for answer to each question</li>
              <li>Once you select card, it can not be undone</li>
              <li>You can finish game</li>
              <li>
                If you will answer correct you will get poits equal to value
              </li>
              <li>
                If you will answer incorrect you will lose poits equal to value
              </li>
            </ul>
          </div>
          <Link to="/startplaying" className="link-part">
            <button className="btn-start">Start</button>
          </Link>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
