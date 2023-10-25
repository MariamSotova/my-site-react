import classes from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import me from "./../img/me.png";
const About = () => {
  return (
    <div id="about" className={classes.AboutMe}>
      <PageHeader title={"About Me"} />
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Hello</h2>
          <p>
            My name is Mariam Sotova, and I am Front End Developer based in
            Rotterdam, Netherlands. I love creating interactive digital
            experiences on the web.
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
