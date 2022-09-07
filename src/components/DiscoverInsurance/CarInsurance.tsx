import React from "react";
import comprehensiveImg from "../../images/comprehensive.png";
import thirdpPropertyImg from "../../images/thirdparty-property.png";
import thirdpTheftImg from "../../images/thirdparty-theft.png";
import { CarInsuranceTable } from "./CarInsuranceTable";
import upArrowIco from "../../images/up-arrow.png";
import downArrowIco from "../../images/down-arrow.png";

interface CarInsuranceProps {}

export const CarInsurance: React.FC<CarInsuranceProps> = ({}) => {
  const [showMore, setShowMore] = React.useState(true);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="car-insurance">
        <div className="list-container">
          <ul className="list-content">
            <li className="item1">
              <span>
                <img src={comprehensiveImg} />
                <p className="plan-title">
                  Comprehensive
                  <br /> Everyday Plus
                </p>
                <p className="plan-description">
                  Keep yourself fully<br/> protected with our most<br/> popular cover.
                  We'll cover<br/> damage to your car, as well<br/> as damage you might
                  cause<br/> to someone else's car or<br/> property.
                </p>
              </span>
              <div className="btn-container">
                  <button className="learn-more-btn">Learn More</button>
                </div>
            </li>
            <li className="item2">
              <span>
                <img src={thirdpPropertyImg} />
                <p className="plan-title">
                  Third Party
                  <br /> Property Damage
                </p>
                <p className="plan-description">
                  Cover for your car if it is<br/> damaged by fire, stolen, or<br/> you
                  accidentally damage<br/> someone else’s property<br/> with your car.
                </p>
              </span>
              <div className="btn-container">
                  <button className="learn-more-btn">Learn More</button>
                </div>
            </li>
            <li className="item3">
              <span>
                <img src={thirdpTheftImg} />
                <p className="plan-title">
                  Third Party
                  <br /> Fire & Theft
                </p>
                <p className="plan-description">
                  Basic cover for you if you<br/> damage someone else’s<br/> property with
                  your car.
                </p>
              </span>
              <div className="btn-container">
                <button className="learn-more-btn">Learn More</button>
              </div>
            </li>
          </ul>
          <CarInsuranceTable showMore={showMore} />
          <div className="feature">
            <a onClick={handleShowMore} className="features">
              {showMore ? "Show all features" : "Hide features"}
              <span className={showMore ? "down-arrow" : "up-arrow"}>
                {showMore ? (
                  <img src={downArrowIco} className="arrow-ico" />
                ) : (
                  <img src={upArrowIco} className="arrow-ico" />
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
