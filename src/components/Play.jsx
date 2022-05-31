import React, { useEffect } from "react";
import Header from "./Header";
import { useState } from "react";
import Categories from "./extraComponents/Category";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Card } from "@mui/material";
import { Link } from "react-router-dom";

export default function Play() {
  let data = useSelector((state) => [state.data]);
  let rightAnswer = useSelector((state) => state.choosenItem);

  const [isRight, setIsRight] = useState("");

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
              <Categories el={el} setIsRight={setIsRight} />
            </Grid>
          </>
        ))}

        <Grid container spacing={2}>
          <Grid item xs={10}>
            {isRight == "Wrong Answer" ? (
              <Grid container spacing={2}>
                <Card
                  sx={{
                    width: "20%",
                    height: "60px",
                    margin: "24px 0 13px 21px",
                    color: "white",
                    backgroundColor: "#cb1717",
                  }}
                >
                  <h3 className="bottomAnswer">{isRight}</h3>
                </Card>
                <h3 className="rightAnswer">
                  The right answer is:
                  <span>{rightAnswer?.map((el) => el.answer)}</span>
                </h3>
              </Grid>
            ) : (
              <>
                <Card
                  sx={{
                    width: "20%",
                    height: "60px",
                    margin: "10px 3px",
                    color: "white",
                    backgroundColor: "#042c42",
                  }}
                >
                  <h3 className="bottomAnswer">{isRight}</h3>
                </Card>
              </>
            )}
          </Grid>
          <Grid item xs={2}>
            <Link to="/statistics">
              <button
                style={{
                  margin: "10px 0 0 100px",
                  color: "black",
                  backgroundColor: "white",
                  border: "none",
                  padding: "15px",
                  borderRadius: "7px",
                }}
              >
                <h3>Finish</h3>
              </button>
            </Link>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
