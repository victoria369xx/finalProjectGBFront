
import { Routes, Route } from 'react-router-dom'
import { MainContainer } from '../../components'
import { Page404 } from '../Page404'
import { Profile } from '../../components'
import { PrivatRoute } from "../PrivatRoute"
// import { PublicRoute } from "../PublicRoute"


export const ProjectRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<MainContainer />}>
                {/* в MainContainer.index.js прописала <Outlet/> куда попадaют все руты, 
            находящиеся в Route path='/' element={<MainContainer />}  */}

                <Route exact path={"profile"} element={<PrivatRoute><Profile /></PrivatRoute>} />

                <Route path={"*"} element={<Page404 />} />

            </Route>
        </Routes>

    )
}