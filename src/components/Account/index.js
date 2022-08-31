import { CardMedia, Container, Box, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams} from "react-router-dom";
import { getAccountFromDB } from "../../store/account/actions";
import {
  selectAccount,
  selectAccountError,
} from "../../store/account/selector";
import avatar from "../../assets/images/user.jpg";

export const Account = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const account = useSelector(selectAccount);
  const error = useSelector(selectAccountError);

  useEffect(() => {
    if (isNaN(Number(userId))) {
      navigate("*");
    } else {
      //пока редактирование не интегрировано с бэком
      if (!account) {
        dispatch(getAccountFromDB(Number(userId)));
      }
    }
  }, [userId, account]);

  //после интеграции с бэком добавить элемент с loading

  if (!account || error) {
    return <h3>Нет такого аккаунта</h3>;
  }

  const handleClick = () => {
    navigate(`/accountEdit/${userId}`);
  };

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
          <Typography component="div" variant="h4">
            {account.name}
          </Typography>
          <Typography variant="h6" component="div">
            Обо мне
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {account.description}
          </Typography>
          <Typography variant="h6" component="div">
            Спецификация услуги
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <p>-Размер принимаемой собаки:</p>
            <div style={{ marginLeft: "10px" }}>
              {account.petSize.map((size) => (
                <p>{size}</p>
              ))}
            </div>
            <p>-Есть другие животные:</p>
            <div style={{ marginLeft: "10px" }}>{account.otherAnimals}</div>
          </Typography>
          <Typography variant="h6" component="div">
            Адрес:
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {account.city}, {account.address}
          </Typography>
          <Typography variant="h6" component="div">
            Контакты:
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Телефон&emsp;{account.phone}
          </Typography>
        </Box>
      </Box>
      <Button variant="outlined" color="warning" onClick={handleClick}>
        Редактировать профиль
      </Button>
      {/* <Link to={`/accountEdit/${userId}`}>Редактировать профиль</Link> */}
    </Container>
  );
};
