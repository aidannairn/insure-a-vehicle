import React from "react";
import familyPlanImg from "../../images/Quoting Process Steps.png";
import familyPlanHomeImg from "../../images/family-plan-img.png";
import "./FamilyPlan.css";

interface FamilyPlanProps {}

export const FamilyPlan: React.FC<FamilyPlanProps> = ({}) => {
  return (
    <div className="family-plan-container">
      <div className="family-plan-content">
        <div className="text">
        <h1>
          Subscribe to our Family Plan,
          <br />
          you’ll spend less time on admin and enjoy great discounts...
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          laborum optio
          <br /> dignissimos esse ipsa, at blanditiis minima in aspernatur
          possimus sapiente
          <br /> quas ratione et quis nostrum autem illum quae explicabo!
        </p>
        </div>
        <div className="family-plan-img">
          <img src={familyPlanImg} />
        </div>
        <div className="btn-container">
          <button className="get-quote-btn">Get a Quote / Buy</button>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="bottom-container">
          <p>
            Do you already have insurance with Turners? Login to your Account
            and
            <br /> add family members to your plan.
          </p>
          <div className="bottom-img">
            <img src={familyPlanHomeImg} className='home-img'/>
          </div>
        </div>
      </div>
    </div>
  );
};
