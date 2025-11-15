import { Link } from "react-router-dom";
import { useState } from "react";
import menu_data from "../../../data/MenuData";

type SubMenu = {
   title: string;
   link: string;
   external?: boolean;
};

type Menu = {
   id: number | string;
   title: string;
   link: string;
   has_dropdown?: boolean;
   external?: boolean;
   sub_menus?: SubMenu[];
};

const MobileMenu = () => {
   const [navTitle, setNavTitle] = useState<string>("");

   const toggleMenu = (menuTitle: string) => {
      setNavTitle((prev) => (prev === menuTitle ? "" : menuTitle));
   };

   const renderLink = (title: string, link: string, external?: boolean) => {
      if (external) {
         return (
            <a href={link} target="_blank" rel="noopener noreferrer">
               {title}
            </a>
         );
      }
      return <Link to={link}>{title}</Link>;
   };

   return (
      <ul className="navigation">
         {(menu_data as Menu[]).map((menu) => (
            <li key={menu.id} className={menu.has_dropdown ? "menu-item-has-children" : ""}>
               {renderLink(menu.title, menu.link, menu.external)}

               {menu.has_dropdown && menu.sub_menus && (
                  <>
                     <ul
                        className="sub-menu"
                        style={{ display: navTitle === menu.title ? "block" : "none" }}
                     >
                        {menu.sub_menus.map((sub_m, i) => (
                           <li key={i}>
                              {renderLink(sub_m.title, sub_m.link, sub_m.external)}
                           </li>
                        ))}
                     </ul>
                     <div
                        className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
                        onClick={() => toggleMenu(menu.title)}
                     >
                        <span className="plus-line"></span>
                     </div>
                  </>
               )}
            </li>
         ))}
      </ul>
   );
};

export default MobileMenu;
