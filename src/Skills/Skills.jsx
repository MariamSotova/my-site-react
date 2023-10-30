import classes from "./Skills.module.css";
import PageHeader from "./../PageHeader/PageHeader";

const frontendSkills = (
  <ul>
    <li>JavaScript</li>
    <li>TypeScript</li>
    <li>ReactJS</li>
    <li>Jest</li>
  </ul>
);

const webSkills = (
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Less/Sass</li>
    <li>Pug</li>
  </ul>
);

const otherSkills = (
  <ul>
    <li>Git</li>
    <li>Webpack/Gulp</li>
    <li>NPM/Yarn</li>
  </ul>
);

const designSkills = (
  <ul>
    <li>Figma</li>
    <li>Photoshop</li>
    <li>Pixel Perfect</li>
  </ul>
);

const totalSkills = [frontendSkills, webSkills, otherSkills, designSkills];

const Skills = () => {
  return (
    <div id="skills" className={classes.Skills}>
      <PageHeader title={"What about the Skills?"} />
      <div className={classes.Container}>
        {totalSkills.map((skills) => {
          return <div className={classes.List}>{skills}</div>;
        })}
      </div>
      <p>
        I'm a lifelong learner and enjoy learning new stuff! Above are some
        programming languages, toolkits, frameworks and libraries I worked with
        and like. Some of them I control better than others.
      </p>
    </div>
  );
};

export default Skills;
