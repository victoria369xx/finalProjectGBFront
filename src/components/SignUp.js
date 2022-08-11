import React from 'react';
import {Card,FormGroup, TextField, Button, Typography} from '@mui/material';

function SignUp () {
    return (
        <>
        <Card sx={{ maxWidth: 400, p: 4, boxShadow: 2 }}>
        <Typography sx={{fontWeight: 'medium'}}>SIGN UP</Typography>
        <FormGroup>
        <TextField id="standard-basic" label="Phone number" variant="outlined" sx={{mt:2}}/>
        <TextField id="standard-basic" label="Password" variant="outlined" sx={{mt:2}}/>
        <TextField id="standard-basic" label="Confirm password" variant="outlined" sx={{mt:2}}/>
        <Button variant="contained" sx={{mt:2}}>SIGN UP</Button>
        </FormGroup>
        <Typography sx={{mt:2}}>Already have an account? <Button> Log in</Button></Typography>
        </Card>
        </>
    )
}

export default SignUp;