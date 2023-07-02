import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";

import Main from "./Main/Main";
import Activity from "./Main/Activity/Activity";

const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Main />}>
                <Route index element={< Activity/>} />
                {publicRoutes.map((route, index) =>
                    <Route key={index} path={route.path} element={route.element} />
                )}
            </Route>
        </Routes>
    )
}

export default AppRouter;