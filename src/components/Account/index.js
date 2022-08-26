import { CardMedia, Container, Box, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAccountFromDB } from "../../store/account/actions";
import {
  selectAccount,
  selectAccountError,
} from "../../store/account/selector";
import avatar from "../../assets/images/user.jpg";

export const Account = () => {
  const { userId } = useParams();
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const account = useSelector(selectAccount);
  const error = useSelector(selectAccountError);

  useEffect(() => {
    dispatch(getAccountFromDB(Number(userId)));
  }, [userId]);

  // здесь потом будет настроен редирект с некорректного id
  // if (isNaN(Number(userId))) {
  //   return navigate("*");
  // }
  // if (error) {
  //   return navigate("/");
  // }

  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex", gap: 5, mt: 10, mb: 5 }}>
        {/* user.jpg - (временная) заглушка, когда у пользователя нет фото */}
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          // image={account.img || avatar}
          image={avatar}
          alt={account.name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="div" variant="h5">
            {account.name}
          </Typography>
          <Typography variant="h6" component="div">
            О себе:
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {account.info}
          </Typography>
          <Typography variant="h6" component="div">
            Город:
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {account.city}
          </Typography>
          <Typography variant="h6" component="div">
            Контакты:
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Телефон&emsp;{account.phone}
          </Typography>
        </Box>
      </Box>
      <Button variant="outlined" color='warning'>Редактировать профиль</Button>
    </Container>
  );
};
