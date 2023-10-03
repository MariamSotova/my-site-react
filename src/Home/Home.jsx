import classes from "./Home.module.css";
import code from "./../img/code-circle.svg";
import PageHeader from "./../PageHeader/PageHeader";

const Home = () => {
  return (
    <div className={classes.Home}>
      <PageHeader title={"Home"} />
      <div className={classes.Container}>
        <h1>Hi</h1>
        <p>text</p>
      </div>
      <img className={classes.Code} src={code} alt="code"></img>
    </div>
  );
};

export default Home;
