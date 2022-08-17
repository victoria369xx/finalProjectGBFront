import { Routes, Route } from "react-router-dom";
import { PrivatRoute } from "../PrivatRoute";
import {ProfilePage} from "../../pages/ProfilePage";
import { LogInPage } from "../../pages/LogInPage";
import { SignUpPage } from "../../pages/SignUpPage";
import { HomePage } from "../../pages/HomePage";
import {NotFound} from "../../pages/NotFound";
import { RenderSearchResultsBlock } from '../../components';



export const ProjectRoutes = () => {
    const authStatus = false
    return (
        <Routes>
            <Route path='/' element={<HomePage />}>
                <Route path='/login' element={<LogInPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route element={<PrivatRoute authed={authStatus} />}>
                    <Route exact path={"profile"} element={<ProfilePage />} />
                </Route>
                <Route path='/search/:cityId' element={<RenderSearchResultsBlock />} />
                <Route path={"*"} element={<NotFound />} />

            </Route>
        </Routes>

    )
}
