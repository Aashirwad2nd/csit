import React from 'react';
import './CustomPage.css';
import TimeAndDateDisplay from './TimeAndDateDisplay';
import LocationDisplay from './LocationDisplay';
import arrowIcon from './images/arrow.png';

const CustomPage = () => {
  return (
    <div className="custom-page">

      <div className="csit-tab">
        <div className="course">BSc CSIT</div>
        <img className="arrow-icon" alt="" src={arrowIcon} />
        <div className="university">Tribhuwan University</div>
        <div className="time-and-same-container">
          <p className="years">4 years</p>
          <p className="years">8 sem</p>
        </div>
        <div className="line"></div>
      </div>

      <div className="info-tab">
        <div className="info-container">
          <div className="info">ALL INFO</div>
          <img className="arrow-icon2" alt="" src={arrowIcon} />
        </div>
      </div>

      <div className="bca-tab">
        <div className="course1">BCA</div>
        <img className="arrow-icon1" alt="" src={arrowIcon} />
        <div className="university1">Tribhuwan University</div>
        <div className="time-and-same-container1">
          <p className="years1">4 years</p>
          <p className="years1">8 sem</p>
        </div>
        <div className="line1"></div>
      </div>

      <div className="site-name-container">
        <div className="site-name">
          <div className="note">
            <div className="note-child" />
            <b className="note1">HUB</b>
          </div>
          <div className="code">
            <div className="note-child" />
            <b className="note1">CSIT</b>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <TimeAndDateDisplay />
          <div className="location-container">
            <LocationDisplay />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CustomPage;
