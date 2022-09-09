import React from "react";
import { MenuItems } from "./MenuItems";

interface Submenu {
  title: string;
  url: string;
  [key: string]: any;
}

interface Item {
  title: string;
  url: string;
  [key: string] : any;
}

interface DropdownProps {
  submenus: any;
  dropdown: boolean;
  items: Item;
  key: number;
  depthLevel: number;
}

export const Dropdown: React.FC<DropdownProps> = ({
  submenus,
  dropdown,
  depthLevel,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu: Item, index: number) => (
        // <li key={index} className="menu-items">
        //   <a href={submenu.url}>{submenu.title}</a>
        // </li>
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};
