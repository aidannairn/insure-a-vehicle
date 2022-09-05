import React from "react";
import checkIco from "../../images/check.png";
import xIco from "../../images/x-icon.png";
import policyIco from "../../images/Privacy Policy.png";

interface TableExpandedProps {}

export const TableExpanded: React.FC<TableExpandedProps> = ({}) => {
  return (
    <>
      <table className="insurance-table">
        <tbody>
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
        </tbody>
      </table>
      <div className="policy">
        <a>Check Policy <img src={policyIco} /></a>
        <a>Check Policy <img src={policyIco} /></a>
        <a>Check Policy <img src={policyIco} /></a>
      </div>
      <div className="btn-container">
        <button className="learn-more-btn">Learn More</button>
        <button className="learn-more-btn">Learn More</button>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </>
  );
};
