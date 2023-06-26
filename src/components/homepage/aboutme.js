import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Profile from "../../removed12.png";
import Button from "@mui/material/Button";

export default function AboutMe() {
  return (
    <>
      <div id="aboutme"></div>
      <Grid container>
        <Grid item lg={6} md={6} xs={12} sx={{ padding: "30px" }}>
          <Typography>I AM A PROFESSIONAL</Typography>
          <Typography sx={{ color: "#F900D1" }}>Front End Developer</Typography>
          <Typography sx={{ marginTop: "30px" }}>
            Hello! My name is Carol Waithaka. I am a UI/UX Designer and a
            front-end developer, specialized in Website and Mobile Application
            Designs and implementations.
          </Typography>
          <a href="mailto:carolnjeri3235@gmail.com">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F900D1",
                width: "150px",
                borderRadius: "20px",
                marginTop: "10%"
              }}
            >
              Hire Me
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <img src={Profile} />
        </Grid>
      </Grid>
    </>
  );
}
