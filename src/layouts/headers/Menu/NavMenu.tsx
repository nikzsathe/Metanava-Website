import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import menu_data from "../../../data/MenuData";

const NavMenu = () => {
   const [navClick, setNavClick] = useState<boolean>(false);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [navClick]);

   const handleClick = () => setNavClick(!navClick);

   const renderMenuLink = (title: string, link: string, external?: boolean) => {
      if (external) {
         return (
            <a href={link} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
               {title}
            </a>
         );
      }
      return (
         <Link to={link} onClick={handleClick}>
            {title}
         </Link>
      );
   };

   return (
      <ul className="navigation">
         {menu_data.map((menu) => (
            <li key={menu.id} className={menu.has_dropdown ? "menu-item-has-children" : ""}>
               {renderMenuLink(menu.title, menu.link, menu.external)}

               {menu.has_dropdown && menu.sub_menus && (
                  <ul className="sub-menu">
                     {menu.sub_menus.map((sub_m, i) => (
                        <li key={i}>
                           {renderMenuLink(sub_m.title, sub_m.link, sub_m.external)}
                        </li>
                     ))}
                  </ul>
               )}
            </li>
         ))}
      </ul>
   );
};

export default NavMenu;
