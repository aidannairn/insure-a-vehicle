import React from "react";
import { Home } from "../../pages/Home";
import { CarInsurance } from "./CarInsurance";
import { MechanicalInsurance } from "./MechanicalInsurance";
import towTruckIco from "../../images/Tow Truck.png";
import vehInsuranceIco from "../../images/Vehicle Insurance.png";

import "./DiscoverInsurance.css";

interface DiscoverInsuranceProps {
  alignment: string;
}

export const DiscoverInsurance: React.FC<DiscoverInsuranceProps> = ({
  alignment,
}) => {
  return (
    <>
      <div className="insurance-container">
        {alignment === "left" ? <CarInsurance /> : <MechanicalInsurance />}
      </div>
      {alignment === "left" ? (
        <div className="bottom-insurance">
          <button className="get-quote-btn">Get a Quote / Buy</button>
          <div className="other-plan">
            <img src={towTruckIco} />
            Do you want to get mechanical coverage?{" "}
            <a>Check our Mechanical Breakdown Insurance</a> plan.
          </div>
        </div>
      ) : (
        <div className="bottom-insurance">
          <div className="other-plan">
            <img src={vehInsuranceIco} />
            Are you after car insurance? <a>Check our Car Insurance</a> plan.
          </div>
        </div>
      )}
    </>
  );
};
