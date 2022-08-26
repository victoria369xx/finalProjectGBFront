import React from "react"; 
import {Card, Typography, Button, Rating, FormGroup, TextareaAutosize} from '@mui/material'

export function ReviewForm () {
    return <>
    <Card sx={{p:4}}>
        <Typography>Оставить отзыв</Typography>
        <form>
        <FormGroup>
                <Typography sx={{mt:2}}>Имя</Typography>
                <Rating sx={{mb:2}}></Rating>
                <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                placeholder="Введите текст..."
                />
                <Button variant="outlined" color="warning" sx={{mt:2}}>Отправить</Button>
        </FormGroup>
        </form>
    </Card>
    </>
}