import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import * as actions from "../../redux/actions/actions";
export default function Statistics() {
  const dispatch = useDispatch()
  const loginName = useSelector((state) => state.login);
  const infoStat = useSelector((state) => state.answerCheck);
  const points = useSelector((state) => state.score);
  const [localData, setLocalData] = useState([]);

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

  let newData = {
    name: loginName,
    howManyQuestion: copy.length,
    right: obj.rightAnswer.length,
    wrong: obj.wrongAnswer.length,
    points: points,
  };
  let globalObj = [];

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("historyLocal"));
    globalObj = data ? [...data, { ...newData }] : [{ ...newData }];
    localStorage.setItem("historyLocal", JSON.stringify(globalObj));
  }, []);

  useEffect(() => {
    setLocalData(globalObj);
  }, []);

  const handleRemove = () => {
    setLocalData([]);
    localStorage.clear("historyLocal");
  };

  const finishGame = () => {
    dispatch({ type: actions.UPDATESCORE });
    dispatch({ type: actions.UPDATEANSWERS });
  };

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
            <thead>
              <tr>
                <th>How many questions?</th>
                <th>Right Answers</th>
                <th>Wrong Answers</th>
                <th>Total points: </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{copy.length}</td>
                <td>{obj.rightAnswer.length}</td>
                <td>{obj.wrongAnswer.length}</td>
                <td>{points}</td>
              </tr>
            </tbody>
          </table>
          <Link to="/">
            <button
              style={{
                margin: "20px 0px 0 40px",
                borderRadius: "5px",
                border: "none",
                padding: "8px",
                backgroundColor: "#dfdb61",
              }}
              onClick={() => finishGame()}
            >
              Play again
            </button>
          </Link>
          <h3 style={{ padding: "5% 20px 0 40px", color: "#fbec56" }}>
            History of game
          </h3>
          <button
            style={{
              margin: "20px 0px 0 40px",
              borderRadius: "5px",
              border: "none",
              padding: "8px",
              backgroundColor: "#dfdb61",
            }}
            onClick={handleRemove}
          >
            Remove history
          </button>
          <table className="statistic-part">
            <thead>
              <tr>
                <th>Player</th>
                <th>How many questions?</th>
                <th>Right Answers</th>
                <th>Wrong Answers</th>
                <th>Total points: </th>
              </tr>
            </thead>
            {localData.map((el, index) => (
              <tbody key={index}>
                <tr>
                  <td>{el.name}</td>
                  <td>{el.howManyQuestion}</td>
                  <td>{el.right}</td>
                  <td>{el.wrong}</td>
                  <td>{el.points}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
