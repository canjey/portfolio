import * as React from "react";
import Grid from "@mui/material/Grid";
import Image1 from "../../assets/Ellipse 5.png";
// import Typography from "@mui/material/Typography";
import {useState} from "react";
import Button from '@mui/material/Button';


export default function Topbar() {
    const [home, setHomeActive] = useState(true);
    const [services, setServicesActive] = useState(false);
    const [portfolio, setPortfolioActive] = useState(false);
    const [contact, setContactAtive] = useState(false);

    let color;

    function handleHomeClick(e){
        e.preventDefault();
        setHomeActive(!home)
        setServicesActive(false)
        setPortfolioActive(false)
        setContactAtive(false)

    }
    function handleServiceClick(e){
        e.preventDefault();
        setServicesActive(!services)
        setHomeActive(false)
        setPortfolioActive(false)
        setContactAtive(false)

    }
    function handlePortfolioClick(e){
        e.preventDefault();
        setPortfolioActive(!portfolio)
        setServicesActive(false)
        setContactAtive(false)


    }
    function handleContactClick(e){
        e.preventDefault();
        setContactAtive(!contact)
        setServicesActive(false)
        setPortfolioActive(false)
        setHomeActive(false)
    }

    console.log(color)
  return (
    <>
      <Grid container>
        <Grid item lg={6} xl={6} md={5.5} sx={{display:{xs:'none', md:'inline', marginLeft:{xs:'10px'}}}}>
          <img src={Image1} width="100px" />
        </Grid>
        <Grid item xl={1} md={1} sm={2} xs={2} sx={{marginTop:'3%'}}>
        <Button variant="text"  onClick={handleHomeClick} style={{ color: home ? "#F900D1" : "white" }}>Home</Button>
        </Grid>
        <Grid item  xl={1} md={1.5} sm={3} xs={4} sx={{marginTop:'3%'}}>
        <Button variant="text" onClick={handleServiceClick} style={{ color: services ? "#F900D1" : "white", width:'120px'}}>My Services</Button>
        </Grid>
        <Grid item xl={1} md={1.5} sm={2} xs={3} sx={{marginTop:'3%', }}>
        <Button variant="text" onClick={handlePortfolioClick} style={{ color: portfolio ? "#F900D1" : "white" }}>Portfolio</Button>
        </Grid>
        <Grid item xl={1} md={1.5} sm={2} xs={3} sx={{marginTop:'3%'}} >
        <Button variant="text" onClick={handleContactClick} style={{ color: contact ? "#F900D1" : "white" }}>Contact Me</Button>
        </Grid>

      </Grid>
    </>
  );
}
