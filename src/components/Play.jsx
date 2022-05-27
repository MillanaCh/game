import React, { useEffect } from "react";
import Header from "./Header";
import { useState } from "react";
import Categories from "./extraComponents/Category";
import { useSelector } from "react-redux";
import { Grid, Card } from "@mui/material";
// import { v4 as uuidv4 } from "uuid";

export default function Play() {
  let data = useSelector((state) => [state.data]);
  let answer = useSelector((state) => state.answerCheck);

  const [questions, setAllQuestions] = useState({});

  function allQuestions() {
    const allquestions = data[0].reduce((acc, question) => {
      if (question.category.title in acc && question.value) {
        acc[question.category.title].push(question);
      } else {
        acc[question.category.title] = [question];
      }
      return acc;
    }, {});
    setAllQuestions(allquestions);
  }
  let dataArray = Object.entries(questions);
  let filteredData = [];

  let filterArr = dataArray.map((el) => {
    if (el[1].length === 5) filteredData.push(el);
    return el;
  });

  useEffect(() => {
    allQuestions();
  }, []);
  return (
    <>
      <Header />
      <Card sx={{ backgroundColor: "#136998", borderRadius: "0" }}>
        {filteredData.map((el, index) => (
          <>
            <Grid item xs={12}>
              <Categories el={el} />
            </Grid>
          </>
        ))}
        <Card
          sx={{
            width: "20%",
            height: "40px",
            margin: "10px 3px",
            color: "white",
            backgroundColor: "#042c42",
          }}
        >
          <h3 className="bottomAnswer">Millana</h3>
        </Card>
      </Card>
    </>
  );
}
