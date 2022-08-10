import React from 'react';
import {Card,FormGroup, TextField, FormControlLabel, Checkbox, Button, Link, Typography} from '@mui/material';

function LogIn () {
    return (
        <>
        <Card sx={{ maxWidth: 400 }}>
        <Typography>Log In</Typography>
        <FormGroup>
        <TextField id="standard-basic" label="Phone number" variant="outlined" />
        <TextField id="standard-basic" label="Password" variant="outlined" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        <Button variant="contained">Log In</Button>
        </FormGroup>
        <Link href='#'>Forgot Password?</Link>
        <Button > Create an account</Button>
        </Card>
        </>
    )
}

export default LogIn;