import { Routes, Route } from "react-router-dom";
import { LogInPage } from "../../pages/LogInPage";
import { SignUpPage } from "../../pages/SignUpPage";
import { HomePage } from "../../pages/HomePage";
import { ProfilePage } from "../../pages/ProfilePage";
import { NotFound } from "../../pages/NotFound";
import { PrivateRoute } from "../PrivateRoute";

export const ProjectRoutes = () => {
<<<<<<< HEAD
  const dispatch = useDispatch();
  const authState = useSelector(getIsAuth);

  useEffect(() => {
    dispatch(initAuthAction);
  });
=======
  const authStatus = false;
>>>>>>> test connect with backend
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<PrivateRoute authed={authStatus} />}>
          {/* <Route exact path={"profile"} element={<ProfilePage />} /> */}
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
