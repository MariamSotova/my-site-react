import classes from "./Work.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import sale1 from "./../img/sale1.png";
import sale2 from "./../img/sale2.png";
import sale3 from "./../img/sale3.png";
import cat from "./../img/cat-project.png";
import form1 from "./../img/form1.png";

const Work = () => {
  return (
    <div className={classes.Work}>
      <PageHeader title={"Work"} />
      <div className={classes.Container}>
        <div className={classes.Text}>
          <img className={classes.sale1} src={sale1} alt="sale"></img>
          <img className={classes.sale2} src={sale2} alt="sale"></img>
          <img className={classes.sale3} src={sale3} alt="sale"></img>
          <img className={classes.cat} src={cat} alt="cat"></img>
          <img className={classes.form1} src={form1} alt="form"></img>
        </div>
      </div>
    </div>
  );
};

export default Work;
