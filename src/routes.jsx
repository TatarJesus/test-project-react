import { ACTIVITY_ROUTE, MAP_ROUTE, TIME_ROUTE} from './constRoutes';

import Activity from './components/Main/Activity/Activity';
import MapDev from './components/Main/Map/MapDev';
import Time from './components/Main/Time/Time';

export const publicRoutes = [
    {
        path: ACTIVITY_ROUTE,
        element: <Activity />
    },
    {
        path: MAP_ROUTE,
        element: <MapDev />
    },
    {
        path: TIME_ROUTE,
        element: <Time />
    }
]