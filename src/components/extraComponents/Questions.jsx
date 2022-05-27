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
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";

const Questions = ({ el }) => {
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState([]);
  const [answer, setAnswer] = useState("");
  const [isRight, setIsRight] = useState(null);
  const [answer2, setAnswer2] = useState("");

  const handleClickOpen = (item) => {
    setOpen(true);
    setSelectedElement(item);
  };
  const handleClose = () => setOpen(false);

  const handleCheck = (e) => {
    e.preventDefault();
    setAnswer2(answer);
    checkAnswer();
    setOpen(false);
  };
  //    dispatch({ type: actions.ADDPOINTS, payload: isRight });
  const handleChangeInput = (e) => {
    setAnswer(e.target.value);
  };

  function checkAnswer() {
    if (answer2 === selectedElement.answer) {
      setIsRight(true);
    } else {
      setIsRight(false);
    }
  }

  // useEffect(() => {
  // }, [answer2]);

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
            <DialogTitle>{el[0].toUpperCase()}</DialogTitle>
            <DialogTitle>{selectedElement.value}</DialogTitle>
          </Toolbar>
          <DialogContent>
            <DialogContentText>{selectedElement.question}</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="answer"
              label="answer"
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
