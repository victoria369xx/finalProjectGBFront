import {
  Autocomplete,
  Box,
  Button,
  CardMedia,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editAccount, getAccountFromDB } from "../../store/account/actions";
import {
  selectAccount,
  selectAccountError,
  selectAccountLoading,
} from "../../store/account/selector";
import { selectCities } from "../../store/search/selector";
import avatar from "../../assets/images/user.jpg";
import { getToken } from "../../store/userAuth/selectors";

export const AccountForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(getToken);
  const loading = useSelector(selectAccountLoading);

  const accountFromDB = useSelector(selectAccount);
  const errorDB = useSelector(selectAccountError);
  const citiesFromDB = useSelector(selectCities);
  const cities = {
    options: citiesFromDB,
    getOptionLabel: (option) => option.city,
  };

  const [account, setAccount] = useState(
    accountFromDB
      ? accountFromDB
      : {
          name: "",
          description: "",
          phone: "",
          img: "",
          city: "",
          address: "",
          petSize: ["mini"],
          otherAnimals: "нет",
        }
  );
  const [petSize, setPetSize] = useState({
    mini: account.petSize ? account.petSize.includes("mini") : true,
    small: account.petSize ? account.petSize.includes("small") : false,
    medium: account.petSize ? account.petSize.includes("medium") : false,
    big: account.petSize ? account.petSize.includes("big") : false,
  });
  const [cityInput, setCityInput] = useState(account.city);
  //тут потом будет useState для фотографии

  const [errorPetSize, setErrorPetSize] = useState(false);

  useEffect(() => {
    if (!accountFromDB) {
      dispatch(getAccountFromDB(token));
    }
  }, [accountFromDB, token]);

  if (loading) {
    return (
      <Container maxWidth="md">
        <CircularProgress />
      </Container>
    );
  }

  if (!account || errorDB) {
    return <h3>Нет данных об аккаунте</h3>;
  }

  const handlerChangeName = (event) => {
    setAccount({
      ...account,
      name: event.target.value,
    });
  };

  const handlerChangeDescription = (event) => {
    setAccount({
      ...account,
      description: event.target.value,
    });
  };

  const handlerChangePetSize = (event) => {
    setErrorPetSize(false);
    setPetSize({
      ...petSize,
      [event.target.name]: event.target.checked,
    });
  };

  const handlerChangeOtherAnimals = (event) => {
    setAccount({
      ...account,
      otherAnimals: event.target.value,
    });
  };

  const handlerChangeCity = (event, newValue) => {
    setAccount({
      ...account,
      city: newValue ? newValue.city : "",
    });
  };
  const handlerOnInputChangeCity = (event, newInputValue) => {
    setCityInput(newInputValue);
  };

  const handlerChangeAddress = (event) => {
    setAccount({
      ...account,
      address: event.target.value,
    });
  };

  const handlerChangePhone = (event) => {
    setAccount({
      ...account,
      phone: event.target.value,
    });
  };

  //тут потом будет handlerChange для фотографии

  const handlerSubmit = (event) => {
    event.preventDefault();

    const petSizeNew = Object.keys(petSize).filter(
      (key) => petSize[key] === true
    );

    if (petSizeNew.length === 0) {
      setErrorPetSize(true);
      return;
    }

    account.petSize = petSizeNew;

    dispatch(editAccount(account));
    navigate(`/account`);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image={avatar}
            alt={account.name}
          />
          <Button
            variant="contained"
            component="label"
            color="warning"
            disabled
          >
            Загрузить фотографию
            <input type="file" name="photo" accept="image/*" hidden />
          </Button>
        </Box>
        <Box
          component="form"
          method="POST"
          encType="multipart/form-data"
          sx={{
            flex: 1,
            display: "flex",
            gap: 2,
            mb: 5,
            flexDirection: "column",
          }}
          onSubmit={handlerSubmit}
        >
          <TextField
            required
            variant="outlined"
            defaultValue={account.name}
            name="name"
            onChange={handlerChangeName}
            placeholder="Введите свое имя"
            label="Имя"
          />
          <FormControl>
            <FormLabel htmlFor="description">
              <Typography variant="h6" component="div">
                Обо мне
              </Typography>
            </FormLabel>
            <TextField
              id="description"
              name="description"
              defaultValue={account.description}
              onChange={handlerChangeDescription}
              multiline
              placeholder="Введите информацию о себе"
            />
          </FormControl>
          {/* когда изменятся данные на бэке, тогда корректно будет отображаться */}
          {/* <Typography variant="h6" component="div">
            Спецификация услуги
          </Typography>
          <FormControl error={errorPetSize}>
            <FormLabel htmlFor="petSize">-Размер принимаемой собаки</FormLabel>
            <FormGroup id="petSize" name="petSize">
              <FormControlLabel
                label="Mini (до 3 кг)"
                control={
                  <Checkbox
                    checked={petSize.mini}
                    name="mini"
                    onChange={handlerChangePetSize}
                  />
                }
              />
              <FormControlLabel
                label="Small (3-5 кг)"
                control={
                  <Checkbox
                    checked={petSize.small}
                    name="small"
                    onChange={handlerChangePetSize}
                  />
                }
              />
              <FormControlLabel
                label="Medium (5-10 кг)"
                control={
                  <Checkbox
                    checked={petSize.medium}
                    name="medium"
                    onChange={handlerChangePetSize}
                  />
                }
              />
              <FormControlLabel
                label="Big (более 10 кг)"
                control={
                  <Checkbox
                    checked={petSize.big}
                    name="big"
                    onChange={handlerChangePetSize}
                  />
                }
              />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="other_animals_label">
              Есть другие животные
            </FormLabel>
            <RadioGroup name="otherAnimals" id="other_animals_label">
              <FormControlLabel
                control={
                  <Radio
                    value="да"
                    checked={account.otherAnimals === "да"}
                    onChange={handlerChangeOtherAnimals}
                  />
                }
                label="Да"
              ></FormControlLabel>
              <FormControlLabel
                control={
                  <Radio
                    value="нет"
                    checked={account.otherAnimals === "нет"}
                    onChange={handlerChangeOtherAnimals}
                  />
                }
                label="Нет"
              ></FormControlLabel>
            </RadioGroup>
          </FormControl> */}
          <FormControl>
            <Typography variant="h6" component="div">
              Адрес
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Autocomplete
                {...cities}
                value={cities.options.find((el) => el.city === account.city)}
                onChange={handlerChangeCity}
                inputValue={cityInput}
                onInputChange={handlerOnInputChangeCity}
                id="city"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    placeholder="Выберите город"
                  />
                )}
                sx={{ width: 200 }}
              />
              <TextField
                variant="outlined"
                defaultValue={account.address}
                name="address"
                onChange={handlerChangeAddress}
                placeholder="Введите свой адрес"
                sx={{ flexGrow: 1 }}
              />
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phone">
              <Typography variant="h6" component="div">
                Телефон
              </Typography>
            </FormLabel>
            <TextField
              required
              variant="outlined"
              defaultValue={account.phone}
              name="phone"
              onChange={handlerChangePhone}
              inputProps={{
                inputMode: "numeric",
                pattern:
                  "^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}",
              }}
              sx={{ width: 200 }}
              placeholder="+79999999999"
            />
          </FormControl>
          <Button type="submit" variant="contained" color="warning">
            Сохранить
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
