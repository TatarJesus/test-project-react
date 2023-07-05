import { YMaps, Map } from "@pbe/react-yandex-maps";

import "./MapDev.css";

import { ChevronDownSVG, CloseSVG, UpdateSVG } from "../../assets/indexMapTime";
import { useEffect, useState } from "react";

export const MapDev = () => {
  const [visPreloader, setVisPreloader] = useState(true);

  useEffect(() => {
    setVisPreloader(false);
  }, []);

  return (
    <div className="map-block">
      <div className="map-block-wrapper">
        <div className="heading-block">
          <span>Basic Map</span>
          <div className="block-manag">
            <ChevronDownSVG />
            <UpdateSVG />
            <CloseSVG />
          </div>
        </div>
        <div id="map" className="map-g">
          {visPreloader ? (
            <div className="loader">loading</div>
          ) : (
            <YMaps>
              <Map
                defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                width="1312px"
                height="480px"
              />
            </YMaps>
          )}
        </div>
      </div>
    </div>
  );
};
