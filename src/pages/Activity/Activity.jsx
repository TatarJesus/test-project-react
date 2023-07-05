import photo from "../../assets/img/dk.jpg";

import {
  CommentSVG,
  EyeSVG,
  ChevronDownSVG,
  TimeSVG,
  TelegramLogoSVG,
  TwitterLogoSVG,
  PersonSVG,
  FinanceSVG,
  SchemeSVG,
  PeopleSVG,
  ChevronDownProfSVG,
  BottomLineSVG,
  CalendarSVG,
  SettingsSVG,
} from "../../assets/indexActivity";

import "./Activity.css";

export const Activity = () => {
  return (
    <div>
      <div className="content-page">
        <div className="content-1">
          <div className="content-1-wrapper">
            <img src={photo} alt="photo" />
            <div className="comment-author">
              <CommentSVG />
              <span>Grishin Adel</span>
            </div>
            <div className="comment">
              <div className="comment-shadow"></div>
              <div className="comment-text">
                <p>JUST DO IT</p>
                <span>- Grishin Adel, 10:30 am</span>
              </div>
            </div>
            <div className="comment-reaction">
              <div className="views">
                <EyeSVG />
                <span>999</span>
              </div>
              <div className="comm">
                <CommentSVG />
                <span>99</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-other">
          <span id="heading">Nenahod</span>
          <div className="other-date">
            <div>
              <TimeSVG />
              <span>55 minutes ago</span>
            </div>
            <ChevronDownSVG />
          </div>
        </div>
        <div className="content-other">
          <span id="heading">Neumeha</span>
          <div className="other-date">
            <div>
              <TimeSVG />
              <span>55 minutes ago</span>
            </div>
            <ChevronDownSVG />
          </div>
        </div>
      </div>
      <div className="info-user">
        <div className="img-user"></div>
        <div className="about-user">
          <span id="name">Stanislav Ziganshin</span>
          <span id="proffesion">Front-end Developer</span>
        </div>
        <div className="social-user">
          <TelegramLogoSVG />
          <TwitterLogoSVG />
        </div>
      </div>
      <div className="navigation-user-block">
        <div className="navigation-user-block-wrapper">
          <div className="nav-header">
            <div className="nav-header-wrapper">
              <div>
                <span>Navigation</span>
                <ChevronDownProfSVG />
              </div>
              <BottomLineSVG />
            </div>
          </div>
          <div className="main-buts">
            <div className="main-buts-elem">
              <PersonSVG />
              <span id="nav-txt">My Profile</span>
            </div>
            <div className="main-buts-elem">
              <FinanceSVG />
              <span id="nav-txt">Balance</span>
              <span id="balance">$9,999</span>
            </div>
            <div className="main-buts-elem">
              <SchemeSVG />
              <span id="nav-txt">Connections</span>
              <div className="amountCon">
                <span>99</span>
              </div>
            </div>
            <div className="main-buts-elem">
              <PeopleSVG />
              <span id="nav-txt">Friends</span>
            </div>
            <div className="line"></div>
          </div>
          <div className="other-buts">
            <div className="other-buts-elem">
              <CalendarSVG />
              <span id="nav-txt">Events</span>
              <div className="amountCon" style={{ backgroundColor: "#47B091" }}>
                <span>99</span>
              </div>
            </div>
            <div className="other-buts-elem">
              <SettingsSVG />
              <span id="nav-txt">Account Settings</span>
            </div>
          </div>
        </div>
      </div>
      <div className="share">
        <div className="share-wrapper">
          <div className="heading-share">
            <div className="heading-share-wrapper">
              <div>
                <span>Share your thoughts</span>
                <ChevronDownProfSVG />
              </div>
              <BottomLineSVG />
            </div>
          </div>
          <div className="share-text">
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter your message..."
            ></textarea>
          </div>
          <div className="but-share">
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
