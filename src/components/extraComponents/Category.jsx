import React from "react";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Questions from "./Questions";

const Item = styled(Paper)(() => ({
  backgroundColor: "#0d597f",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  color: "white",
  height: 60,
  lineHeight: "55px",
  fontSize: "16px",
}));

const Categories = ({ el }) => {
  return (
    <>
      <Box
        sx={{
          paddingTop: "5px",
          display: "grid",
          gridTemplateColumns: { md: "1fr" },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ margin: "4px" }}>
            <Item>
              <Grid item sx={{ minWidth: "300px" }}>
                <p className="category-name">{el[0].toUpperCase()}</p>
              </Grid>
              <Questions el={el} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Categories;
