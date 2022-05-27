import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
export default function Header() {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#116a98",
          padding: "5px",
        }}
      >
        <Grid item xs={4} md={2}>
          <Link to="/">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10d7e8b1-9fe1-4c41-aeb7-331f4fb188aa/de2sigw-1ff77398-7093-4c8c-b2f8-f49246a3e26e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwZDdlOGIxLTlmZTEtNGM0MS1hZWI3LTMzMWY0ZmIxODhhYVwvZGUyc2lndy0xZmY3NzM5OC03MDkzLTRjOGMtYjJmOC1mNDkyNDZhM2UyNmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qccwYrbVRZeYKDq0efuvv1zMIVulI1VhiHPhEMyrc3E"
              width="100px"
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
            <button className="btn-header">
              <h4>Play</h4>
            </button>
          </Link>
          <Link to="/statistics" className="link-part">
            <button className="btn-header">
              <h4>Statistics</h4>
            </button>
          </Link>
          <Link to="/info" className="link-part">
            <button className="btn-header">
              <h4>Info</h4>
            </button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
