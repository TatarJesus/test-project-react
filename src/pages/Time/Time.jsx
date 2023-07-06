import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { updateTime } from "../../stores/storeTime";

import { ChevronDownSVG, CloseSVG, UpdateSVG } from "../../assets/indexMapTime";

import "./Time.css";

export const Time = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.currentTime.time);

  const [curTime, setCurTime] = useState("00:00:00");

  const convertTimeHHMMSS = () => {
    let now = new Date().getTime();
    let sec = Math.floor((now - time.date) / 1000);
    let hhmmss = new Date(sec * 1000).toISOString().substr(11, 8);
    setCurTime(hhmmss);
  };

  const zeroTime = () => {
    dispatch(updateTime(new Date().getTime()));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      convertTimeHHMMSS();
    }, 100);
    return () => clearInterval(interval);
  }, [time.date]);

  return (
    <div className="main-block timer-block">
      <div className="timer-block-wrapper">
        <div className="heading-block">
          <span>Timer</span>
          <div className="block-manag">
            <ChevronDownSVG />
            <UpdateSVG onClick={zeroTime} />
            <CloseSVG />
          </div>
        </div>
        <div className="timer">
          <span>{curTime}</span>
        </div>
      </div>
    </div>
  );
};
