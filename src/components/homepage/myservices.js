import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Profile from "../../assets/background1.png";
import Interface from "../../interface.png";
import Graphics from "../../assets/graphics.png";
import Button from '@mui/material/Button';
import TerminalIcon from '@mui/icons-material/Terminal';

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
        <div id="myservices"></div>
        <Typography variant="h4" align="center" sx={{ marginTop: "40px" }}>
          {" "}
          My Services{" "}
        </Typography>
      </Grid>
      <Grid xs={5} sx={myImage}>
        <Grid>
          <Typography
            sx={{
              marginTop: "3px",
              padding: "50px",
              marginLeft: "5%",
              marginRight: "15%"
            }}
          >
            A well-designed user interface will significantly increase conversions. 
            I help you manage your business more effectively with a responsive design and top-notch sale funnels. 
            Below are the services i offer my clients
          </Typography>
          <Grid container sx={{marginTop:'5%'}}>
            <Grid item xs={12} md={4} lg={3} sm={6} sx={{padding:'10px'}}>
              <Typography align="center">
              <img src={Interface} width="200px"  style={{marginLeft:{xs:'5%'}}}/>
              </Typography>
              <Typography sx={{marginLeft:"15%"}}>User Interface Design</Typography>
              <Typography sx={{marginLeft:"15%"}}>
              <li>Landing pages</li>
              <li>User Flow</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Mobile App Designs</li>
               
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={4} sm={6}>
            <Typography align="center">
              <img src={Graphics} height="200px" />
              </Typography>
              <Typography sx={{ color: "#F900D1",marginLeft:'20%' }}>
                Graphic Design
              </Typography>
              <Typography sx={{marginLeft:"15%"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s,
              </Typography>
              <Typography sx={{marginLeft:"15%"}}>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>WordPress</li>
              <li> React.js </li>
              <li>Node.js</li>
              
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={4} sm={12} sx={{padding:'10px', }}>
            <Typography align="center">
              <TerminalIcon fontSize="large" sx={{fontSize:'200px', color:"#BCBABA"}} />
              </Typography>
              <Typography sx={{marginLeft:"15%"}}>
                Front-end Development</Typography>
                <Typography sx={{marginLeft:"15%"}}>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>WordPress</li>
              <li> React.js </li>
              <li>Node.js</li>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
        <Button variant="contained" sx={{backgroundColor:'#F900D1', marginTop:'5%',width:'150px', marginLeft:'40%', borderRadius:'20px', }}>Hire Me</Button>
        </Grid>

        <Grid>
        <div id="portfolio"></div>
        <Typography variant="h4" align="center" sx={{ marginTop: "60px" }}>
          {" "}
         Portfolio{" "}
        </Typography>        
        </Grid>
      </Grid>
    </>
  );
}
