import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  LogInPage,
  SignUpPage,
  HomePage,
  ProfilePage,
  AccountPage,
  NotFound,
} from "../../pages";
import { useDispatch, useSelector } from "react-redux";
import { initAuthAction } from "../../store/userAuth/actions";
import { getUser } from "../../store/userAuth/selectors";
import { RenderSearchResultsBlock } from "../../components";

export const ProjectRoutes = () => {
  const dispatch = useDispatch();
  //const authState = useSelector(getIsAuth);
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(initAuthAction(user));
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route exact path={"/profile/:userId"} element={<ProfilePage />} />

        <Route path="/account/:userId" element={<AccountPage />} />

        <Route path="/search/:cityId" element={<RenderSearchResultsBlock />} />
      </Route>
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};
