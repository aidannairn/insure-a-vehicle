import React from "react";
import checkIco from "../../images/check.png";
import xIco from "../../images/x-icon.png";

interface TableProps {}

export const Table: React.FC<TableProps> = ({}) => {
  return (
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
      </tbody>
    </table>
  );
};
