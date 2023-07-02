import styles from './NavBar.module.css';

import {
    ActivitySVG, MapSVG, TimeSVG, NotesSVG, FriendsSVG, PhotosSVG, SettingsSVG, SmallArrowDownSVG
} from '../../assets/indexNavBar';

import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className={styles.nav_bar}>
            <div className={styles.left_buts}>
                <Link to='/activity' className={`sidebar ${`${styles.left_buts_elem} ${styles.activity} ${styles.active}`}`} >
                    <ActivitySVG />
                    <span>Activity</span>
                </Link>
                <Link to='/map' className={`sidebar ${`${styles.left_buts_elem} ${styles.map} ${styles.active}`}`}>
                    <MapSVG />
                    <span>Map</span>
                </Link>
                <Link to='/time' className={`sidebar ${`${styles.left_buts_elem} ${styles.time} ${styles.active}`}`}>
                    <TimeSVG />
                    <span>Time</span>
                </Link>
            </div>
            <div className={styles.right_buts}>
                <div className={`sidebar ${`${styles.right_buts_elem} ${styles.notes}`}`}>
                    <NotesSVG />
                    <span>Notes</span>
                </div>
                <div className={`sidebar ${`${styles.right_buts_elem} ${styles.friends}`}`}>
                    <FriendsSVG />
                    <span>Friends</span>
                </div>
                <div className={`sidebar ${`${styles.right_buts_elem} ${styles.photos}`}`}>
                    <PhotosSVG />
                    <span>Photos</span>
                </div>
                <div className={`sidebar ${`${styles.right_buts_elem} ${styles.settings}`}`}>
                    <SettingsSVG />
                    <SmallArrowDownSVG />
                </div>
            </div>
        </div>
    )
}

export default NavBar