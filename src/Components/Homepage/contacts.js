import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Background from "../../assets/background2.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../../App.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const myImage = {
    backgroundImage: `url(${Background})`,
  //   backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  //   height: "100%"
  };
  

export default function Contacts(){
    return(
        <>
        <Grid sx={myImage}>  
        <Grid sx={{}}>
          <Typography
            sx={{
              // marginTop: "30px",
              padding: "20px",
              marginLeft: "5%",
              marginRight: "15%"
        }}>
            If you have any project or you need help,
            Feel free to contact me
        </Typography>
        </Grid>
        <Grid container >
            <Grid item lg={6} xl={6} xs={12} md={6}  sm={12} sx={{marginLeft:'50px', marginRight:'40px'}}>
        <TextField  fullWidth id="outlined-basic" label="Name" variant="outlined" /><br />
        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" sx={{marginTop:'10px'}}/><br />
        <TextField  fullWidth id="outlined-basic" label="Phone Number" variant="outlined" sx={{marginTop:'10px'}}/><br />
        <TextField fullWidth id="outlined-basic" label="Message" variant="outlined" sx={{marginTop:'10px'}} /><br />
       
            


        <Grid>
        <a href="mailto:email@example.com">
        <Button variant="contained" sx={{backgroundColor:'#F900D1', marginLeft:'30%', borderRadius:'20px', marginTop:'20px', marginBottom:'20px' }}>Send Message</Button>
        </a>
        </Grid>
        </Grid>
          <Grid lg={1.5} xl={1} xs={4}  sm={4} md={2}>
                <LocationOnIcon sx={{fontSize:"30px", color:'#F3F3F3'}} />              
                <Typography>Nairobi, Kenya</Typography>
                </Grid>
                <Grid lg={2} xl={2} xs={4}  sm={4} md={2}>
                <PublicIcon  sx={{fontSize:"30px", marginLeft:'25%', color:"#F900D1"}}/>
                <Typography fullWidth>www.portfolio-unop.vercel.app/</Typography>
                <Typography fullWidth>carolnjeri3235@gmail.com</Typography>


                </Grid>
                <Grid lg={1} xl={1} xs={4}  sm={4} md={2}>
                <PhoneAndroidIcon sx={{fontSize:"30px", }} />
                <Typography>0700152742</Typography>

                </Grid>

            </Grid>

   
        </Grid>
        </>
    )
}