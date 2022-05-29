import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";
import { debounce } from "lodash";

const Questions = ({ el }) => {
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState([]);
  const [answer, setAnswer] = useState("");
  const [isRight, setIsRight] = useState("");
  // const [answer2, setAnswer2] = useState("");

  // Timer Part
  const [quizTime, setQuizTime] = useState();
  const handleClickOpen = (item) => {
    setQuizTime(60);
    startTimer(60);
    setOpen(true);
    setSelectedElement(item);
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
  }, 5000);

  function checkAnswer() {
    if (answer === selectedElement.answer) {
      setIsRight("Right Answer");
    } else {
      setIsRight("Wrong Answer");
    }
  }

  useEffect(() => {
    checkAnswer();
  }, [answer]);

  // console.log(isRight); //infinite Loop

  let counter;
  function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
      setQuizTime(time);
      time--;
      if (time === 0) {
        setOpen(false);
        dispatch({ type: actions.ADDPOINTS, payload: isRight });
      }
    }
  }
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
            <TextField
              autoFocus
              margin="dense"
              id="answer"
              label="Write answer"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => handleChangeInput(e)}
            />
          </DialogContent>
          <div className="timeDisplay">
            <h3>
              Time Left: <span>{quizTime}</span>
            </h3>
            <button className="btnDialog" onClick={(e) => handleCheck(e)}>
              Check
            </button>
          </div>
        </Dialog>
      </div>
    </>
  );
};
export default Questions;
