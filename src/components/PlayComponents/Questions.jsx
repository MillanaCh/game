import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";
import { debounce } from "lodash";

const Questions = ({ el, setIsRight }) => {
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState([]);
  const [answer, setAnswer] = useState("");

  // Timer Part
  const [seconds, setSeconds] = useState(null);
  const handleClickOpen = (event, item) => {
    event.target.className = "value-toggle";
    setSeconds(60);
    setOpen(true);
    setSelectedElement(item);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch({ type: actions.CHOOSENITEM, payload: selectedElement });
    checkAnswer();
  };

  const handleCheck = (e) => {
    e.preventDefault();
    setOpen(false);
    dispatch({ type: actions.CHOOSENITEM, payload: selectedElement });
    checkAnswer();
  };

  const handleChangeInput = debounce((e) => {
    setAnswer(e.target.value);
  }, 500);

  function checkAnswer() {
    if (answer.toLowerCase() === selectedElement.answer.toLowerCase()) {
      setIsRight("Right Answer");
      dispatch({ type: actions.ADDSCORE, payload: selectedElement.value });
      dispatch({ type: actions.ANSWERS, payload: "RightAnswer" });
    } else {
      setIsRight("Wrong Answer");
      dispatch({ type: actions.DELETESCORE, payload: selectedElement.value });
      dispatch({ type: actions.ANSWERS, payload: "WrongAnswer" });
    }
  }
  // This PART
  // useEffect(() => {
  //   let myInterval = setTimeout(() => {
  //     if (seconds === 0) {
  //       clearInterval(myInterval);
  //       console.log("zero");
  //     } else {
  //       setSeconds(seconds - 1);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(myInterval);
  //   };
  // }, [seconds]);

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <>
      {el[1].map((item) => (
        <button
          className="valueBtn"
          onClick={(event) => handleClickOpen(event, item)}
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
            <h3 style={{ padding: "10px" }}>
              Time Left: <span>{seconds}</span>
            </h3>
          </div>
        </Dialog>
      </div>
    </>
  );
};
export default Questions;
