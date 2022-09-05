import React from "react";
import mechanicPhoto from "../../images/mechanic.png";

interface MechanicalInsuranceProps {}

export const MechanicalInsurance: React.FC<MechanicalInsuranceProps> = ({}) => {
  return (
    <div className="mechanical-insurance">
      <div className="mechanical-insurance-content">
        <div className="photo">
          <img src={mechanicPhoto} className='mechanic'/>
        </div>
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Nihil
            reiciendis accusamus libero neque tempore blanditiis!<br/> Laboriosam,
            reprehenderit assumenda fugit excepturi provident<br/> fugiat maxime
            aliquid quasi odio voluptate repellat,<br/> ipsam voluptates!
          </p>
          <div className="btn-container">
          <button className="get-quote-btn">Get a Quote / Buy</button>
          <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
      <table className="mechanical-table">
      <tbody>
        <tr>
          <th>Comprehensive cover for mechanical and electrical breakdown</th>
        </tr>
        <tr>
          <th>Parts & Labour</th>
        </tr>
        <tr>
          <th>AA Roadservice & 24/7 breakdown assistance</th>
        </tr>
        <tr>
          <th>Vehicle recovery and towing</th>
        </tr>
        <tr>
          <th>Accommodation & rental car costs for out of town breakdowns</th>
        </tr>
        <tr>
          <th>Generous claim limits that are set when you purchase your policy</th>
        </tr>
      </tbody>
    </table>
    </div>
  );
};
