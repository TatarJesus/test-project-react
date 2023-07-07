import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";

import Main from "./Main/Main";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={publicRoutes[0].element} />
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element/>} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
