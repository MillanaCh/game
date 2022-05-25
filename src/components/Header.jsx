import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box } from "@mui/material";
export default function Header() {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#5eaed3",
          padding: "5px",
        }}
      >
        <Grid item xs={4} md={2}>
          <Link to="/">
            <img
              src="https://jeopardylabs.com/static/1638638181/img/logo.png"
              width="200px"
            />
          </Link>
        </Grid>
        <Grid
          item
          xs={8}
          md={10}
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-around",
          }}
        >
          <Link to="/play" className="link-part">
            Play
          </Link>
          <Link to="/statistics" className="link-part">
            Statistics
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
