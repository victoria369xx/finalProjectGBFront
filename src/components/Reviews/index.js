
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Typography from '@mui/joy/Typography';
// import Card from '@mui/joy/Card';
import * as React from 'react';
import { selectProfile } from "../../store/profile/selector";
import { selectErrReviews, selectReviews } from '../../store/reviews/selectors';
import { useDispatch, useSelector } from 'react-redux';
import "../../css/style.css"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getReviewsFromDB } from '../../store/reviews/actions';
import { Box } from '@mui/material';


export default function Reviews() {

    const user = useSelector(selectProfile)
    console.log(`user:${user}`)
    const reviews = useSelector(selectReviews)
    const errorReviews = useSelector(selectErrReviews)
    console.log(reviews)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userId } = useParams()
    console.log(`userId=${userId}`)

    useEffect(() => {
        if (isNaN(Number(userId))) {
            navigate("*");
        } else {
            dispatch(getReviewsFromDB(userId))
        }
    }, [userId])

    if (!reviews || errorReviews) {
        return <h3>Не удалось загрузить отзывы</h3>;
    } else if (reviews.lenght === 0) {
        return <h3>Нет отзывов</h3>
    }

    return (<>
        <div className="text-lev2">Отзывы</div>
        <div className="review-unit">
            {reviews.map((review) => (
                <Box>
                    <div className="text-lev3">Наталья</div>
                    <div className="rating">
                        <span>
                            <img src="img/star.svg" alt=""></img>
                            {review.rating}
                        </span>
                    </div>
                    <div>{review.comment}
                    </div>
                </Box>
            ))}
        </div>
    </>)
}
{/* <div className="review-unit">
            <div className="text-lev3">Наталья</div>
            <div className="rating">
                <span>
                    <img src="img/star.svg" alt=""></img>
                                4
                            </span>
            </div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dolore maiores! Quas nihil
            veniam sit ducimus, modi eum optio! Alias, adipisci ipsum? Accusamus, aspernatur vel?
            Architecto placeat suscipit vel. Ipsa vero, quidem, accusantium rem magnam natus nulla
            reprehenderit ea obcaecati dolore libero perspiciatis quas esse aliquam dicta, illum
                            voluptatem. Possimus!</div>
        </div> */}



{/* <Typography fontWeight="md" variant='h1'>Отзывы</Typography>
        <Box
            sx={{
                display: 'flex',
                gap: 3,
                py: 1,
                overflow: 'auto',
                width: '100%',
                scrollSnapType: 'x mandatory',
                '& > *': {
                    scrollSnapAlign: 'center',
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {data.map((item) => (
                <Card
                    row
                    key={item.title}
                    variant="outlined"
                    sx={{
                        gap: 2,
                        '--Card-padding': (theme) => theme.spacing(2),
                    }}
                >
                    <AspectRatio
                        ratio="1"
                        sx={{ minWidth: 150, borderRadius: 'sm', overflow: 'auto' }}
                    >
                        <img
                            src={`${item.src}?h=120&fit=crop&auto=format`}
                            srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                        />
                    </AspectRatio>
                    <Box sx={{ whiteSpace: 'nowrap' }}>
                        <Typography fontWeight="md">{item.title}</Typography>
                        <Typography level="body2">{item.description}</Typography>
                    </Box>
                </Card>
            ))}
        </Box> */}


        // const data = [
        //     {
        //         src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        //         title: 'Night view',
        //         description: '4.21M views',
        //     },
        //     {
        //         src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        //         title: 'Lake view',
        //         description: '4.74M views',
        //     },
        // ];
