import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";

interface Item {
  title: string;
  url: string;
  [key: string]: any;
}

interface MenuItemsProps {
  items: Item;
  key: number;
  depthLevel: number;
}

export const MenuItems: React.FC<MenuItemsProps> = ({
  items,
  depthLevel,
  key,
}) => {
  const [dropdown, setDropdown] = React.useState(false);

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (event: { target: any; }) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <Link
            to={items.url}
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </Link>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            key={key}
            items={items}
          />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};
