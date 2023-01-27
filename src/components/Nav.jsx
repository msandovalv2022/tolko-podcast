import { useState } from "react";

import Toolbar from "./Toolbar";
import Sidetoolbar from "./Sidetoolbar";
import Backdrop from "./Backdrop";

const Nav = () => {
  // Toolbar
  const [sidetoolbar, setSidetoolbar] = useState(false);

  const toggleSidetoolbar = () => {
    setSidetoolbar((prevState) => !prevState);
  };
  return(
    <div className="nav">
        <Toolbar openSidetoolbar={toggleSidetoolbar} />
        <Backdrop
          sideToolbar={sidetoolbar}
          closeSidetoolbar={toggleSidetoolbar}
        />
        <Sidetoolbar sideToolbar={sidetoolbar} />
    </div>
  )
};

export default Nav;
