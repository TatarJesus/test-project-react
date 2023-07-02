

import photo from '../../../assets/img/dk.jpg';

import {
    CommentSVG, EyeSVG, ChevronDownSVG, TimeSVG, TelegramLogoSVG, TwitterLogoSVG, PersonSVG, FinanceSVG, SchemeSVG, PeopleSVG,
    ChevronDownProfSVG, BottomLineSVG, CalendarSVG, SettingsSVG
} from '../../../assets/indexActivity';

import styles from './Activity.module.css';

const Activity = () => {

    return (
        <div>
            <div className={styles.content_page}>
                <div className={styles.content_1}>
                    <div className={styles.content_1_wrapper}>
                        <img src={photo} alt="" />
                        <div className={styles.comment_author}>
                            <CommentSVG />
                            <span>Grishin Adel</span>
                        </div>
                        <div className={styles.comment}>
                            <div className={styles.comment_shadow}></div>
                            <div className={styles.comment_text}>
                                <p>JUST DO IT</p>
                                <span>- Grishin Adel, 10:30 am</span>
                            </div>
                        </div>
                        <div className={styles.comment_reaction}>
                            <div className={styles.views}>
                                <EyeSVG />
                                <span>999</span>
                            </div>
                            <div className={styles.comm}>
                                <CommentSVG />
                                <span>99</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.content_other}>
                    <span id={styles.heading}>Nenahod</span>
                    <div className={styles.other_date}>
                        <div>
                            <TimeSVG />
                            <span>55 minutes ago</span>
                        </div>
                        <ChevronDownSVG />
                    </div>
                </div>
                <div className={styles.content_other}>
                    <span id={styles.heading}>Neumeha</span>
                    <div className={styles.other_date}>
                        <div>
                            <TimeSVG />
                            <span>55 minutes ago</span>
                        </div>
                        <ChevronDownSVG />
                    </div>
                </div>
            </div>
            <div className={styles.info_user}>
                <div className={styles.img_user}>
                </div>
                <div className={styles.about_user}>
                    <span id={styles.name}>Stanislav Ziganshin</span>
                    <span id={styles.proffesion}>Front-end Developer</span>
                </div>
                <div className={styles.social_user}>
                    <TelegramLogoSVG />
                    <TwitterLogoSVG />
                </div>
            </div>
            <div className={styles.navigation_user_block}>
                <div className={styles.navigation_user_block_wrapper}>
                    <div className={styles.nav_header}>
                        <div className={styles.nav_header_wrapper}>
                            <div>
                                <span>Navigation</span>
                                <ChevronDownProfSVG />
                            </div>
                            <BottomLineSVG />
                        </div>
                    </div>
                    <div className={styles.main_buts}>
                        <div className={styles.main_buts_elem}>
                            <PersonSVG />
                            <span id={styles.nav_txt}>My Profile</span>
                        </div>
                        <div className={styles.main_buts_elem}>
                            <FinanceSVG />
                            <span id={styles.nav_txt}>Balance</span>
                            <span id={styles.balance}>$9,999</span>
                        </div>
                        <div className={styles.main_buts_elem}>
                            <SchemeSVG />
                            <span id={styles.nav_txt}>Connections</span>
                            <div className={styles.amountCon}>
                                <span>99</span>
                            </div>
                        </div>
                        <div className={styles.main_buts_elem}>
                            <PeopleSVG />
                            <span id={styles.nav_txt}>Friends</span>
                        </div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.other_buts}>
                        <div className={styles.other_buts_elem}>
                            <CalendarSVG />
                            <span id={styles.nav_txt}>Events</span>
                            <div className={styles.amountCon} style={{ backgroundColor: '#47B091' }}>
                                <span>99</span>
                            </div>
                        </div>
                        <div className={styles.other_buts_elem}>
                            <SettingsSVG />
                            <span id={styles.nav_txt}>Account Settings</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.share}>
                <div className={styles.share_wrapper}>
                    <div className={styles.heading_share}>
                        <div className={styles.heading_share_wrapper}>
                            <div>
                                <span>Share your thoughts</span>
                                <ChevronDownProfSVG />
                            </div>
                            <BottomLineSVG />
                        </div>
                    </div>
                    <div className={styles.share_text}>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message...'></textarea>
                    </div>
                    <div className={styles.but_share}>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Activity