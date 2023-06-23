import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Profile from "../../removed12.png";
import Button from '@mui/material/Button';




export default function AboutMe(){
    return(
        <>
        <Grid container>
            <Grid item xs={6} sx={{padding:'30px'}}>
                <Typography>
                    I AM A PROFESSIONAL 
                </Typography>
                <Typography sx={{color:'#F900D1'}}>
                     UI/UX DESIGNER
                </Typography>
                <Typography sx={{marginTop:'30px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
                <Button variant="contained" sx={{backgroundColor:'#F900D1', width:'150px', borderRadius:'20px', marginTop:'20%'}}>Hire Me</Button>
            </Grid>
            <Grid item xs={6}>
                <img src={Profile} />
            </Grid>
        </Grid>
        </>
    )
}