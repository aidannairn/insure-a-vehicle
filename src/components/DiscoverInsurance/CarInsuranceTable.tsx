import React from "react";
import checkIco from "../../images/check.png";
import xIco from "../../images/x-icon.png";
import upArrowIco from "../../images/up-arrow.png";
import downArrowIco from "../../images/down-arrow.png";

interface CarInsuranceTableProps {
  showMore: boolean;
}

export const CarInsuranceTable: React.FC<CarInsuranceTableProps> = ({showMore}) => {
  return (
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
      {!showMore && (
        <>
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
        </>
      )}
    </table>
  );
};
