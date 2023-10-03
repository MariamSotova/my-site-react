import classes from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { CgMenuRight } from "react-icons/cg";
import { PiEyeClosed } from "react-icons/pi";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenuRight
      className={classes.Hamburger}
      size="40px"
      color="blue"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <PiEyeClosed
      className={classes.Hamburger}
      size="40px"
      color="blue"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
