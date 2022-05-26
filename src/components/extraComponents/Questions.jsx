import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid, Box, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const Questions = ({ el, theme }) => {
  return (
    <>
      <Grid item xs={12}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            {el[1].map((be) => (
              <Button variant="contained" size="large">
                {be.value}
              </Button>
            ))}
          </Box>
        </ThemeProvider>
      </Grid>
    </>
  );
};
export default Questions;
