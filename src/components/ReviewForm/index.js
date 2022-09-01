import React, {useState} from "react"; 
import { useParams } from "react-router";
import {Card, Typography, Button, Rating, FormGroup, TextareaAutosize} from '@mui/material';
import {useSelector,useDispatch} from 'react-redux';
import {getUser} from '../../store/userAuth/selectors'; 
import { addReviewThunk } from "../../store/reviews/actions";



export function ReviewForm () {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector(getUser);
    const [rating, setRating] = useState(3); 
    const [reviewText, setReviewText] = useState('');

    function setRatingHandler(event) {
        setRating(event.target.value)
    } 

    function setReviewTextHandler(event) {
        setReviewText(event.target.value)
    }
    function clearForm () {
        setRating(3);
        setReviewText('');
    }
    
    function reviewSubmitHandler(event) {
        event.preventDefault();
        if(reviewText) {
            const newReview = {
                name: currentUser.email,
                rating:rating,
                reviewText: reviewText
            }
            dispatch(addReviewThunk(userId, newReview))
            clearForm();
        } else {
            alert('Поле комментарий не может быть пустым!')
        }
    }
    return <>
    <Card sx={{p:4}}>
        <Typography sx={{fontWeight:'medium'}}>Оставить отзыв</Typography>
        <form onSubmit={reviewSubmitHandler}>
        <FormGroup>
                <Typography sx={{mt:2}}>Имя: {currentUser.email}</Typography>
               <Typography> Оценка: <Rating sx={{mb:2}} value={rating} onChange={setRatingHandler}></Rating></Typography>
                <Typography>Комментарий:</Typography>
                <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                placeholder=" Введите текст..."
                sx={{p:2}}
                value={reviewText} onChange={setReviewTextHandler} />
                <Button variant="outlined" color="warning" sx={{mt:2, width:'100px'}} type="submit">Отправить</Button>
        </FormGroup>
        </form>
    </Card>
    </>
}