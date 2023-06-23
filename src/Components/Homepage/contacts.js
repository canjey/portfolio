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
        <Grid sx={{ margin: "5%",  }}>
          <Typography
            sx={{
              marginTop: "30px",
              padding: "50px",
              marginLeft: "5%",
              marginRight: "15%"
            }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </Typography>
        </Grid>
        <Grid container >
            <Grid item xs={6} sx={{marginLeft:'50px'}}>
        <TextField  fullWidth id="outlined-basic" label="Name" variant="outlined" /><br />
        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" sx={{marginTop:'10px'}}/><br />
        <TextField  fullWidth id="outlined-basic" label="Phone Number" variant="outlined" sx={{marginTop:'10px'}}/><br />
        <TextField fullWidth id="outlined-basic" label="Message" variant="outlined" sx={{marginTop:'10px'}} /><br />
       
            


        <Grid>
        <Button variant="contained" sx={{backgroundColor:'#F900D1', marginLeft:'45%', borderRadius:'20px', marginTop:'20px' }}>Send Message</Button>
        </Grid>
        </Grid>
        <Grid item xs={4} sx={{marginLeft:'10%'}}>
                <LocationOnIcon sx={{fontSize:"100px", color:'#F3F3F3'}} />
                <PublicIcon  sx={{fontSize:"100px"}}color="info"/>
                <PhoneAndroidIcon sx={{fontSize:"100px"}} />

            </Grid>


        </Grid>
        
        </Grid>
        </>
    )
}