import { Routes, Route } from "react-router-dom";
import { Page404 } from "../Page404";
import { Profile } from "../../components";
import { PrivatRoute } from "../PrivatRoute";
import { LogInPage } from "../../pages/LogInPage";
import { SignUpPage } from "../../pages/SignUpPage";
import { HomePage } from "../../pages/HomePage";
import { AccountPage } from "../../pages/AccountPage";

// import { PublicRoute } from "../PublicRoute"

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {/* в MainContainer.index.js прописала <Outlet/> куда попадaют все руты, 
            находящиеся в Route path='/' element={<MainContainer />}  */}
        <Route path="/login" element={<LogInPage />} />
        <Route path="/account/:userId" element={<AccountPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route
          exact
          path={"profile"}
          element={
            <PrivatRoute>
              <Profile />
            </PrivatRoute>
          }
        />

        <Route path={"*"} element={<Page404 />} />
      </Route>
    </Routes>
  );
};
