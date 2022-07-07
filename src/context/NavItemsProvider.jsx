import { createContext, useState } from "react";
import {
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineUser,
} from "react-icons/ai";

export const NavItemsContext = createContext();

export default function NavItemsProvider({ children }) {
  const [navItems, setNavItems] = useState([
    { name: "Home", hash: "#home", logo: <AiOutlineHome />, active: true },
    { name: "About", hash: "#about", logo: <AiOutlineUser />, active: false },
    {
      name: "Projects",
      hash: "#projects",
      logo: <AiOutlineProject />,
      active: false,
    },
    {
      name: "Contact",
      hash: "#contact",
      logo: <AiOutlineContacts />,
      active: false,
    },
  ]);

  return (
    <NavItemsContext.Provider value={{ navItems, setNavItems }}>
      {children}
    </NavItemsContext.Provider>
  );
}
