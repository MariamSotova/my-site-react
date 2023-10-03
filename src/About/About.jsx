import classes from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader";

const About = () => {
  return (
    <div className={classes.About}>
      <PageHeader title={"About Me"} />
      <h1>About</h1>
    </div>
  );
};

export default About;
