import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid, Box, Card, Paper } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor:"#097a55",
  textAlign: "center",
  color: "white",
  height: 60,
  lineHeight: "55px",
  fontSize: "18px",
}));

const Questions = ({ el, theme }) => {
  return (
    <>
      <Grid item xs={12}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              paddingTop: "5px",
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            {el[1].map((be) => (
              <Item>{be.value}</Item>
            ))}
          </Box>
        </ThemeProvider>
      </Grid>
    </>
  );
};
export default Questions;
