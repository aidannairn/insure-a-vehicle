import React from "react";
import comprehensiveImg from "../../images/comprehensive.png";
import thirdpPropertyImg from "../../images/thirdparty-property.png";
import thirdpTheftImg from "../../images/thirdparty-theft.png";
import { CarInsuranceTable } from "./CarInsuranceTable";
import upArrowIco from "../../images/up-arrow.png";
import downArrowIco from "../../images/down-arrow.png";

interface CarInsuranceProps {}

export const CarInsurance: React.FC<CarInsuranceProps> = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [showMore, setShowMore] = React.useState(true);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="car-insurance">
      <div className="list-container">
        <ul className="list-content">
          <li className="item1">
            <span>
              <img src={comprehensiveImg} />
              <p>
                Comprehensive
                <br /> Everyday Plus
              </p>
            </span>
          </li>
          <li className="item2">
            <span>
              <img src={thirdpPropertyImg} />
              <p>
                Third Party
                <br /> Property Damage
              </p>
            </span>
          </li>
          <li className="item3">
            <span>
              <img src={thirdpTheftImg} />
              <p>
                Third Party
                <br /> Fire & Theft
              </p>
            </span>
          </li>
        </ul>
        <CarInsuranceTable showMore={showMore} />
        <div className="feature">
          <a onClick={handleShowMore} className="features">
            {showMore ? "Show all features" : "Hide features"}
            <span className={showMore ? "down-arrow" : "up-arrow"}>
              {showMore ? <img src={downArrowIco} className="arrow-ico"/> : <img src={upArrowIco} className="arrow-ico"/>}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
