import React, { useState } from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faGlobe,
  faAward,
  faUserFriends,
  faVideo,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    title: "Movies",
    svg: faFilm,
  },
  {
    title: "TV Shows",
    svg: faTv,
  },
  {
    title: "Awards & Event",
    svg: faAward,
  },
  {
    title: "Celebs",
    svg: faUserFriends,
  },
  {
    title: "Videos",
    svg: faVideo,
  },
  {
    title: "Community",
    svg: faGlobe,
  },
];

const SideNavContainer = ({ isSearchExpanded }) => {
  const [showNav, setShowNav] = useState();
  return (
    <div className={`${isSearchExpanded ? "display-none sidenav" : "sidenav"}`}>
      <div className="menu-icon">
        <MenuIcon onClick={() => setShowNav(true)} />
      </div>
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title={[
          <React.Fragment key={1}>
            <FontAwesomeIcon
              icon={faTimes}
              color="white"
              onClick={() => setShowNav(false)}
            />
          </React.Fragment>,
        ]}
        items={menuItems.map(({ title, svg }, index) => (
          <React.Fragment key={index}>
            <FontAwesomeIcon icon={svg} color="white" size="1x" />
            <span>{title}</span>
          </React.Fragment>
        ))}
      />
    </div>
  );
};

export default SideNavContainer;
