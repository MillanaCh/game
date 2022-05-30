import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/actions";
import { debounce } from "lodash";

const Questions = ({ el }) => {
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState([]);
  const [answer, setAnswer] = useState("");
  const [isRight, setIsRight] = useState("");
  const [active, setActive] = useState(false);

  // Timer Part
  const [quizTime, setQuizTime] = useState();
  const handleClickOpen = (item) => {
    // setQuizTime(60);
    // startTimer(60);
    setActive("i change style");
    setOpen(true);
    setSelectedElement(item);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCheck = (e) => {
    e.preventDefault();
    dispatch({ type: actions.CHOOSENITEM, payload: selectedElement });
    setOpen(false);
    checkAnswer();
  };

  const handleChangeInput = debounce((e) => {
    setAnswer(e.target.value);
  }, 1000);

  function checkAnswer() {
    if (answer === selectedElement.answer) {
      setIsRight("Right Answer");
      dispatch({ type: actions.ADDSCORE, payload: selectedElement.value });
    } else {
      setIsRight("Wrong Answer");
      dispatch({ type: actions.DELETESCORE, payload: selectedElement.value });
    }
  }

  useEffect(() => {
    dispatch({ type: actions.ANSWERCHECK, payload: isRight });
  }, [isRight]);

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
