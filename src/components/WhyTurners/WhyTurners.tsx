import React from "react";
import benefit1Img from "../../images/benefit1.png";
import benefit2Img from "../../images/benefit2.png";
import benefit3Img from "../../images/benefit3.png";
import benefit4Img from "../../images/benefit4.png";
import './WhyTurners.css'

interface WhyTurnersProps {}

export const WhyTurners: React.FC<WhyTurnersProps> = ({}) => {
  return (
    <div className="why-turners-container">
      <h1 className="heading">Why choose Turners Car Insurance?</h1>
      <div className="benefits">
        <div className="benefit1">
          <img src={benefit1Img} />
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="benefit2">
          <img src={benefit2Img} />
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="benefit3">
          <img src={benefit3Img} />
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="benefit4">
          <img src={benefit4Img} />
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};
