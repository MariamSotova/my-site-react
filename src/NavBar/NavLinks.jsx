import { motion } from "framer-motion";
import classes from "./NavBar.module.css";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/" className={classes.HomeT}>
          Home
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#about" className={classes.AboutT}>
          About Me
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#skills" className={classes.SkillsT}>
          Skills
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#work" className={classes.WorkT}>
          Work
        </a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://github.com/MariamSotova"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.GitHub}
        >
          GitHub
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.5 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://www.linkedin.com/in/mariam-sotova-1467ba272/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.Linkedin}
        >
          Linkedin
        </a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
