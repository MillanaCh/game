import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid, Box, Paper } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 45,
  lineHeight: "45px",
  fontSize: "14px",
}));

const Categories = ({ el, theme }) => {
  // let category = Object.keys(questions);
  // // let sliced = category.slice(0, 11))
  // console.log(el);
  return (
    <>
      <Grid item xs={12}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr" },
              gap: 2,
            }}
          >
            <Item>{el[0]}</Item>
          </Box>
        </ThemeProvider>
      </Grid>
    </>
  );
};
export default Categories;
