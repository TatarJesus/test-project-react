import { routes } from "./const/constRoutes";

import { Activity, MapDev, Time } from "./pages";
import { ActivitySVG, MapSVG, TimeSVG } from "./assets/indexNavBar";

export const publicRoutes = [
  {
    path: routes.ACTIVITY_ROUTE,
    element: <Activity />,
    name: "Activity",
    svg: <ActivitySVG />,
  },
  {
    path: routes.MAP_ROUTE,
    element: <MapDev />,
    name: "Map",
    svg: <MapSVG />,
  },
  {
    path: routes.TIME_ROUTE,
    element: <Time />,
    name: "Time",
    svg: <TimeSVG />,
  },
];
