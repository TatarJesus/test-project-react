import { useEffect, useRef } from "react";
import { useYMaps } from "@pbe/react-yandex-maps";

import Loader from "../../components/Loader/Loader";

import "./MapDev.css";

import { ChevronDownSVG, CloseSVG, UpdateSVG } from "../../assets/indexMapTime";

export const MapDev = () => {
  const mapRef = useRef(null);
  const ymaps = useYMaps(["Map"]);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 9,
    });
  }, [ymaps]);

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
          {ymaps ? (
            <div ref={mapRef} style={{ width: "1312px", height: "480px" }} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};
