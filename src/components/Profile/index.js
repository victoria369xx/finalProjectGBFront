
import { CardMedia, Container, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileFromDB } from "../../store/profile/actions";
import { selectProfile } from "../../store/profile/selector";

export const Profile = () => {
  // const { userId } = useParams();
  const userId = 3;

  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    dispatch(getProfileFromDB(userId));
  }, [userId]);

  if (!profile) {
    return;
    //будет редирект на 404
    //return <Redirect to="*" />
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex", gap: 5, mt: 10 }}>
        {/* user.jpg - (временная) заглушка, когда у пользователя нет фото */}
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={profile.img || "user.jpg"}
          alt={profile.name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="div" variant="h5">
            {profile.name}
          </Typography>
          <Typography variant="h6" component="div">
            О себе:
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {profile.info}
          </Typography>
          <Typography variant="h6" component="div">
            Город:
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {profile.city}
          </Typography>
          <Typography variant="h6" component="div">
            Контакты:
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Телефон&emsp;{profile.phone}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};



