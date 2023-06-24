import * as React from "react";
import Topbar from "./topbar";
import AboutMe from "./aboutme"
import Grid from '@mui/material/Grid';
import MyServices from './myservices'
import Portfolio from './portfolio';
import Contact from './contacts'
import Footbar from "./footbar";


export default function Homepage(){
    return(
        <>
        <Topbar />
        <Grid sx={{marginTop:'5%', marginLeft:'5%'}}>
            <AboutMe />
        </Grid>
        <Grid sx={{marginTop:'5%', }}>
            <MyServices/>
        </Grid>
        <Grid sx={{marginTop:'5%', }}>
            <Portfolio/>
        </Grid>
        <Grid sx={{marginTop:'5%', }}>
            <Contact/>
        </Grid>
        <Grid sx={{marginTop:'1%', marginBottom:'1%' }}>
            <Footbar/>
        </Grid>
        
        </>
    )
}

