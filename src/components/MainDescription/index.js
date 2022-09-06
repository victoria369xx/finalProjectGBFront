import { Grid, Typography, Container } from "@mui/material"
// import dog from "../../assets/images/home-dog.svg"
import dog from "../../img/girl.png"
import "../../css/style.css"

export const MainDescription = () => {


    return (
        <Container>
            <Grid container rowSpacing={1} sx={{ marginTop: '4em' }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs container direction="column" sx={{ justifyContent: 'space-between', margin: '6em 0', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}> Передержка у догситтера
                    <Typography gutterBottom variant="subtitle1">
                            Возьмем вашего питомца в гости, пока вы в отпуске и будем о нем заботиться
                </Typography>
                    </Typography>

                    <Typography variant='h6' sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>  Выгул питомца
                    <Typography gutterBottom variant="subtitle1">

                            Погуляем и поиграем с вашим питомцем, чтобы дома Вас ждал счастливый пес
                        </Typography>
                    </Typography>
                </Grid>

                <Grid item>
                    {/* className="page-img" */}
                    <img className="img-description" src={dog} alt="dog" ></img>

                </Grid>

                <Grid item xs container direction="column" sx={{ justifyContent: 'space-between', margin: '6em 0', alignItems: 'center' }} >
                    <Typography variant='h6' sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>   Дневная няня
                    <Typography gutterBottom variant="subtitle1">

                            Придем к вам, если питомец требует внимания или заболел
                </Typography> </Typography>
                    <Typography variant='h6' sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}> Забота как дома<Typography gutterBottom variant="subtitle1">

                        У нас есть ситтеры для всех типов собак: и для маленьких йорков, и для больших овчарок, и для щенков, и для пожилых питомцев
                </Typography> </Typography>
                </Grid>

            </Grid>
        </Container >
    )
}

// return (
//     <div className={classes.root}>
//         <Paper className={classes.paper}>
//             <Grid container spacing={2}>
//                 <Grid item>
//                     <ButtonBase className={classes.image}>
//                         <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
//                     </ButtonBase>
//                 </Grid>
//                 <Grid item xs={12} sm container>
//                     <Grid item xs container direction="column" spacing={2}>
//                         <Grid item xs>
//                             <Typography gutterBottom variant="subtitle1">
//                                 Standard license
//                 </Typography>
//                             <Typography variant="body2" gutterBottom>
//                                 Full resolution 1920x1080 • JPEG
//                 </Typography>
//                             <Typography variant="body2" color="textSecondary">
//                                 ID: 1030114
//                 </Typography>
//                         </Grid>
//                         <Grid item>
//                             <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                                 Remove
//                 </Typography>
//                         </Grid>
//                     </Grid>
//                     <Grid item>
//                         <Typography variant="subtitle1">$19.00</Typography>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Paper>
//     </div>
// );
// }
