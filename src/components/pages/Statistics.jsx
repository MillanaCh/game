import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Statistics() {
  const loginName = useSelector((state) => state.login);
  const infoStat = useSelector((state) => state.answerCheck);
  const points = useSelector((state) => state.score);

  // Make copy
  let obj = {
    wrongAnswer: [],
    rightAnswer: [],
  };
  let copy = [...infoStat];
  function checkAnswer() {
    let mapped = copy.forEach((el) => {
      if (el === "RightAnswer") {
        obj.rightAnswer.push(el);
      } else if (el !== "RightAnswer") {
        obj.wrongAnswer.push(el);
      }
    });
  }
  checkAnswer();

  return (
    <>
      <Header />
      {loginName ? (
        <div
          style={{
            backgroundColor: "#136998",
            height: "95vh",
            color: "white",
          }}
        >
          <h3 style={{ padding: "5% 20px 0 40px", color: "#fbec56" }}>
            Name of player:{loginName}
          </h3>
         
          <table className="statistic-part">
            <tr>
              <th>How many questions?</th>
              <th>Right Answers</th>
              <th>Wrong Answers</th>
              <th>Total points: </th>
            </tr>
            <tr>
              <td>{copy.length}</td>
              <td>{obj.rightAnswer.length}</td>
              <td>{obj.wrongAnswer.length}</td>
              <td>{points}</td>
            </tr>
          </table>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
