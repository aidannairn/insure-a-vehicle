import React from "react";
import checkIco from "../../images/check.png";
import xIco from "../../images/x-icon.png";
import upArrowIco from "../../images/up-arrow.png";
import downArrowIco from "../../images/down-arrow.png";
import { TableExpanded } from "./TableExpanded";
import { Table } from "./Table";

interface CarInsuranceTableProps {
  showMore: boolean;
}

export const CarInsuranceTable: React.FC<CarInsuranceTableProps> = ({
  showMore,
}) => {
  return <>{showMore ? <Table /> : <TableExpanded />}</>;
};
