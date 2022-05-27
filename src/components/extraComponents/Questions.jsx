import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
  DialogActions,
  Toolbar,
  FormControl,
} from "@mui/material";
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
  const [quizTime, setQuizTime] = useState(15);
  const handleClickOpen = (item) => {
    setOpen(true);
    startTimer(15);
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
  }, 1000);

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

  let counter;
  function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
      setQuizTime(time);
      time--;
      // if ((time = 0)) {
      //   handleClose();
      // }
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
        <Dialog
          open={open}
          onClose={handleClose}
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <DialogTitle sx={{ color: "#0d597f", fontWeight: "bold" }}>
              {el[0].toUpperCase()}
            </DialogTitle>
            <DialogTitle sx={{ color: "#0d597f", fontWeight: "bold" }}>
              {selectedElement.value}
            </DialogTitle>
          </Toolbar>
          <DialogContent>
            <DialogContentText sx={{ color: "black" }}>
              <b>Question:</b> {selectedElement.question}
            </DialogContentText>
            <DialogContentText sx={{ color: "black" }}>
              <b>Time Left:</b> {quizTime}
            </DialogContentText>
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
          <DialogActions>
            <Button onClick={(e) => handleCheck(e)}>Check</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
export default Questions;
