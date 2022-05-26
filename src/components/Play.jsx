import React, { useEffect } from "react";
import Header from "./Header";
import { useState } from "react";
import Categories from "./extraComponents/Category";
import { useSelector } from "react-redux";
import Questions from "./extraComponents/Questions";
import { createTheme, styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

// Style
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 50,
  lineHeight: "30px",
  fontSize: "16px",
}));
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Play() {
  let data = useSelector((state) => [state.data]);

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
  // console.log(questions);
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
      <Grid container spacing={4}>
        {[lightTheme].map((theme) => (
          <>
            {filteredData.map((el) => (
              <>
                <Grid item xs={4}>
                  <Categories el={el} theme={theme} />
                </Grid>
                <Grid item xs={8}>
                  <Questions el={el} theme={theme} />
                </Grid>
              </>
            ))}
          </>
        ))}
      </Grid>
    </>
  );
}

//   data[0].forEach(item => {
//       const categ = [];
//       const newData = [];
//       if (!categ.includes(item.category_id)) {
//         categ.push(category_id);
//         newData.push({...item.category, clues: [{...item}]})
//       } else {
//         //  push only clues part
//       }
//   });

//   const [value, setValue] = useState()

// let filtered = data[0]?.filter((item) => item.category.title === "baseball");
//   { name: "BASE", id: 2, games: [{ value: 100, quest: 'efwg' }]}
