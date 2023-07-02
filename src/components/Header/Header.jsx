import {
    BackSVG, StatisticsSVG, CalculateSVG, ScheduleSVG
} from '../../assets/indexHeader';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.name_pages}>
                <BackSVG />
                <span><b>User pages</b> - Profile</span>
            </div>
            <div className={styles.navigation}>
                <div className={styles.navigation_elem}>
                    <StatisticsSVG />
                    <span>Statistics</span>
                </div>
                <div className={styles.navigation_elem}>
                    <CalculateSVG />
                    <span>Invoices</span>
                </div>
                <div className={styles.navigation_elem}>
                    <ScheduleSVG />
                    <span>Schedule</span>
                </div>
            </div>
        </div>
    )
}

export default Header;