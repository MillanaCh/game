import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";
import { debounce } from "lodash";

const Questions = ({ el }) => {
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState([]);
  const [answer, setAnswer] = useState("");
  const [isRight, setIsRight] = useState("");

  // Timer Part
  const [quizTime, setQuizTime] = useState();
  const handleClickOpen = (item) => {
    // setQuizTime(60);
    // startTimer(60);
    setOpen(true);
    setSelectedElement(item);
    dispatch({ type: actions.RIGHTANSWER, payload: item });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCheck = (e) => {
    e.preventDefault();
    setOpen(false);
    dispatch({ type: actions.ADDPOINTS, payload: isRight });
  };

  const handleChangeInput = debounce((e) => {
    setAnswer(e.target.value);
  }, 2000);

  // function checkAnswer() {
  //   if (answer === selectedElement.answer) {
  //     setIsRight("Right Answer");
  //   } else {
  //     setIsRight("Wrong Answer");
  //   }
  // }
  // let checkAnswer = answer === selectedElement.answer;
  function checkAnswer() {
    if (answer === selectedElement.answer) {
      setIsRight("Right Answer");
      dispatch({ type: actions.ADDSCORE, payload: selectedElement.value });
      // let finalScore = (score += selectedElement.value);
      // setScore(finalScore);
    } else {
      setIsRight("Wrong Answer");
      dispatch({ type: actions.DELETESCORE, payload: selectedElement.value });
      // let finalScore = (score -= selectedElement.value);
      // setScore(finalScore);
    }
    return answer;
  }
  // if (checkAnswer) {
  //   setScore(selectedElement.value);
  // }
  useEffect(() => {
    checkAnswer();
  }, [open]);

  // let counter;
  // function startTimer(time) {
  //   counter = setInterval(timer, 1000);
  //   function timer() {
  //     setQuizTime(time);
  //     time--;
  //     if (time === 0) {
  //       setOpen(false);
  //       dispatch({ type: actions.ADDPOINTS, payload: isRight });
  //     }
  //   }
  // }
  return (
    <>
      {el[1].map((item) => (
        <button
          className="valueBtn"
          onClick={() => handleClickOpen(item)}
          key={item.id}
        >
          {item.value}
        </button>
      ))}
      <div>
        <Dialog open={open} onClose={handleClose}>
          <div className="toolbar">
            <h3>{el[0].toUpperCase()}</h3>
            <h3>{selectedElement.value}</h3>
          </div>
          <DialogContent>
            <div className="questionDialog">
              <h4>Question:</h4>
              <p>{selectedElement.question}</p>
            </div>
            <form>
              <input
                label="Write answer"
                type="text"
                onChange={(e) => handleChangeInput(e)}
                style={{ width: "300px", height: "35px", borderRadius: "5px" }}
              />
              <button className="btnDialog" onClick={(e) => handleCheck(e)}>
                Check
              </button>
            </form>
          </DialogContent>
          <div className="timeDisplay">
            <h3>
              Time Left: <span>{quizTime}</span>
            </h3>
          </div>
        </Dialog>
      </div>
    </>
  );
};
export default Questions;
