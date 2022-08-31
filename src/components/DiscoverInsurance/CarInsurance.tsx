import React from "react";
import comprehensiveImg from "../../images/comprehensive.png";
import thirdpPropertyImg from "../../images/thirdparty-property.png";
import thirdpTheftImg from "../../images/thirdparty-theft.png";
import checkIco from "../../images/check.png";
import xIco from "../../images/x-icon.png";

interface CarInsuranceProps {}

export const CarInsurance: React.FC<CarInsuranceProps> = ({}) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
}

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
        <table className="insurance-table">
          <tr>
            <th>Accidental loss or damage</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={checkIco} />
            </td>
            <td className="third-row">
              <img src={checkIco} />
            </td>
          </tr>
          <tr>
            <th>Fire damage</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={checkIco} />
            </td>
            <td className="third-row">
              <img src={checkIco} />
            </td>
          </tr>
          <tr>
            <th>Theft or illegal conversion</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={checkIco} />
            </td>
            <td className="third-row">
              <img src={xIco} />
            </td>
          </tr>
          <tr>
            <th>Legal Liability</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={xIco} />
            </td>
            <td className="third-row">
              <img src={xIco} />
            </td>
          </tr>
          <tr>
            <th>Vehicle Removal</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={xIco} />
            </td>
            <td className="third-row">
              <img src={xIco} />
            </td>
          </tr>
          <tr>
            <th>Accidental loss or damage</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={checkIco} />
            </td>
            <td className="third-row">
              <img src={checkIco} />
            </td>
          </tr>
          <tr>
            <th>Fire damage</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={checkIco} />
            </td>
            <td className="third-row">
              <img src={checkIco} />
            </td>
          </tr>
          <tr>
            <th>Theft or illegal conversion</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={checkIco} />
            </td>
            <td className="third-row">
              <img src={xIco} />
            </td>
          </tr>
          <tr>
            <th>Legal Liability</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={xIco} />
            </td>
            <td className="third-row">
              <img src={xIco} />
            </td>
          </tr>
          <tr>
            <th>Vehicle Removal</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={xIco} />
            </td>
            <td className="third-row">
              <img src={xIco} />
            </td>
          </tr>
          <tr>
            <th>Accidental loss or damage</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={checkIco} />
            </td>
            <td className="third-row">
              <img src={checkIco} />
            </td>
          </tr>
          <tr>
            <th>Fire damage</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={checkIco} />
            </td>
            <td className="third-row">
              <img src={checkIco} />
            </td>
          </tr>
          <tr>
            <th>Theft or illegal conversion</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={checkIco} />
            </td>
            <td className="third-row">
              <img src={xIco} />
            </td>
          </tr>
          <tr>
            <th>Legal Liability</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={xIco} />
            </td>
            <td className="third-row">
              <img src={xIco} />
            </td>
          </tr>
          <tr>
            <th>Vehicle Removal</th>
            <td className="first-row">
              <img src={checkIco} />
            </td>
            <td className="second-row">
              <img src={xIco} />
            </td>
            <td className="third-row">
              <img src={xIco} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
