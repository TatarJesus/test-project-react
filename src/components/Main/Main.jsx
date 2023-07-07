import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { updateTime } from "../../stores/storeTime";

const Main = () => {
  const dispatch = useDispatch();

  dispatch(updateTime(new Date().getTime()));

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Main;
