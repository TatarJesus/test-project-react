import { YMaps, Map } from '@pbe/react-yandex-maps';

import styles from './MapDev.module.css';

import {
    ChevronDownSVG, CloseSVG, UpdateSVG
} from '../../../assets/indexMapTime';

const MapDev = () => {

    return (
        <div className={styles.map_block}>
            <div className={styles.map_block_wrapper}>
                <div className={styles.heading_block}>
                    <span>Basic Map</span>
                    <div className={styles.block_manag}>
                        <ChevronDownSVG />
                        <UpdateSVG />
                        <CloseSVG />
                    </div>
                </div>
                <div id={styles.map} className={styles.map_g}>
                    <YMaps>
                        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width='1312px' height='480px' />
                    </YMaps>
                </div>
            </div>
        </div>
    )
}

export default MapDev