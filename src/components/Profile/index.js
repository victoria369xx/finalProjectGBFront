import {
  CardMedia,
  Container,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileFromDB } from "../../store/profile/actions";
import {
  selectProfile,
  selectProfileError,
  selectProfileLoading,
} from "../../store/profile/selector";
import avatar from "../../assets/images/user.jpg";
import avatar2 from "../../assets/images/user2.jpg";
import Carousel from "../Carousel";
import { ReviewForm } from "../ReviewForm";

export const Profile = () => {
  const { userId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector(selectProfile);
  const error = useSelector(selectProfileError);
  const loading = useSelector(selectProfileLoading);

  //временная заглушка на фото
  const imgArr = [avatar, avatar2];
  const profileImg = imgArr[Math.floor(Math.random() * 2)];

  useEffect(() => {
    if (isNaN(Number(userId))) {
      navigate("*");
    } else {
      dispatch(getProfileFromDB(Number(userId)));
    }
  }, [userId]);

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box sx={{ display: "flex", gap: 5, mt: 10 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (!profile || error) {
    return <h3>Нет такого ситтера</h3>;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex", gap: 5, mt: 10, mb: 8 }}>
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={profile.img ? profile.img : profileImg}
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
            {profile.description}
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
      <Carousel></Carousel>
      <ReviewForm/>
    </Container>
  );
};
