import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Profile from "../../assets/background1.png";
import Interface from "../../interface.png";
import Mobile from "../../mobile.png";
import Graphics from "../../assets/graphics.png";
import Button from '@mui/material/Button';

const myImage = {
  backgroundImage: `url(${Profile})`,
//   backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
//   height: "100%"
};

export default function MyServices() {
  return (
    <>
      <Grid>
        <Typography variant="h3" align="center" sx={{ marginTop: "40px" }}>
          {" "}
          My Services{" "}
        </Typography>
      </Grid>
      <Grid xs={5} sx={myImage}>
        <Grid sx={{ margin: "5%",  }}>
          <Typography
            sx={{
              marginTop: "30px",
              padding: "50px",
              marginLeft: "5%",
              marginRight: "15%"
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
          <Grid container sx={{marginTop:'5%'}}>
            <Grid item xs={4}>
              <img src={Interface} width="200px" />
              <Typography>User Interface Design</Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s,
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={Graphics} height="200px" />
              <Typography sx={{ color: "#F900D1" }}>
                User Interface Design
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s,
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={Mobile} width="200px" />
              <Typography>Mobile Interface Design</Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s,
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
        <Button variant="contained" sx={{backgroundColor:'#F900D1', width:'150px', marginLeft:'45%', borderRadius:'20px', }}>Hire Me</Button>
        </Grid>

        <Grid>
        <Typography variant="h3" align="center" sx={{ marginTop: "60px" }}>
          {" "}
         Portfolio{" "}
        </Typography>        
        </Grid>
      </Grid>
    </>
  );
}
