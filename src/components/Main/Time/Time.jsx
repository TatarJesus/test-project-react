import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './Time.module.css';

import { updateTime } from '../../../stores/storeTime';

import {
    ChevronDownSVG, CloseSVG, UpdateSVG
} from '../../../assets/indexMapTime';

const Time = () => {
    const dispatch = useDispatch();
    const time = useSelector(state => state.currentTime.time);

    const [curTime, setCurTime] = useState(0);

    const convertTimeHHMMSS = () => {
        let now = new Date().getTime();
        let sec = Math.floor((now - time.date) / 1000);
        let hhmmss = new Date(sec * 1000).toISOString().substr(11, 8);
        setCurTime(hhmmss.indexOf("00:") === 0 ? hhmmss.substr(0) : hhmmss);
    }

    const zeroTime = () => {
        dispatch(updateTime(new Date().getTime()));
    }

    useEffect(() => {
        convertTimeHHMMSS();
    }, [curTime])

    return (
        <div className={`sidebar ${`${styles.main_block} ${styles.timer_block}`}`}>
            <div className={styles.timer_block_wrapper}>
                <div className={styles.heading_block}>
                    <span>Timer</span>
                    <div className={styles.block_manag}>
                        <ChevronDownSVG />
                        <UpdateSVG onClick={() => {zeroTime()}} />
                        <CloseSVG />
                    </div>
                </div>
                <div className={styles.timer}>
                    <span>{curTime}</span>
                </div>
            </div>
        </div>
    )
}

export default Time