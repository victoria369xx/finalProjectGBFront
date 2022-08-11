import React from 'react';
import {Card,FormGroup, TextField, FormControlLabel, Checkbox, Button, Typography} from '@mui/material';


export const LogIn = () => {
    return (
        <>
        <Card sx={{ maxWidth: 400, p: 4, boxShadow: 2 }}>
        <Typography sx={{fontWeight: 'medium'}}>LOG IN</Typography>
        <FormGroup>
        <TextField id="standard-basic" label="Phone number" variant="outlined" sx={{mt:2}}/>
        <TextField id="standard-basic" label="Password" variant="outlined" sx={{mt:2}}/>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" sx={{mt:2}}/>
        <Button variant="contained">Log In</Button>
        </FormGroup>
        <Button sx={{mt:2}}>Create an account</Button>
        </Card>
        </>
    )
}
