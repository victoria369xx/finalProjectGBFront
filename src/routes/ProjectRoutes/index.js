import { Routes, Route } from "react-router-dom";
import { Page404 } from "../Page404";
import { Profile } from "../../components";
import { PrivatRoute } from "../PrivatRoute";
import { LogInPage } from "../../pages/LogInPage";
import { SignUpPage } from "../../pages/SignUpPage";
import { HomePage } from "../../pages/HomePage";
import { AccountPage } from "../../pages/AccountPage";
import { RenderSearchResultsBlock } from "../../components";
import { ProfilePage } from "../../pages/ProfilePage";
import { NotFound } from "../../pages/NotFound";

export const ProjectRoutes = () => {
  const authStatus = false;
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<PrivatRoute authed={authStatus} />}>
          <Route exact path={"profile"} element={<ProfilePage />} />
        </Route>
        <Route path="/search/:cityId" element={<RenderSearchResultsBlock />} />
        <Route path={"*"} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
