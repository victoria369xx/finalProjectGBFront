import { Routes, Route } from "react-router-dom";
// import { PrivatRoute } from "../PrivatRoute";
import { LogInPage } from "../../pages/LogInPage";
import { SignUpPage } from "../../pages/SignUpPage";
import { HomePage } from "../../pages/HomePage";
import { RenderSearchResultsBlock } from "../../components";
import { ProfilePage } from "../../pages/ProfilePage";
import { NotFound } from "../../pages/NotFound";
import { AccountPage } from "../../pages/AccountPage";

export const ProjectRoutes = () => {
  const authStatus = false;

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
