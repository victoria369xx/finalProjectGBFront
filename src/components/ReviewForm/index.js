import React from "react"; 
import {Card, Typography, Button, Rating, FormGroup, TextField} from '@mui/material'

export function ReviewForm () {
    return <>
    <Card sx={{p:4}}>
        <Typography>Оставить отзыв</Typography>
        <form>
        <FormGroup>
                <Typography>Имя</Typography>
                <Rating></Rating>
                <TextField></TextField>
                <Button variant="outlined" color="warning">Отправить</Button>
        </FormGroup>
        </form>
    </Card>
    </>
}