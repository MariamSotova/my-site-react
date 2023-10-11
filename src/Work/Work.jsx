import classes from "./Work.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import sale1 from "./../img/sale1.png";
import sale2 from "./../img/sale2.png";
import sale3 from "./../img/sale3.png";
import cat from "./../img/cat-project.png";
import cat1 from "./../img/cat1.png";
import cat2 from "./../img/cat2.png";
import form1 from "./../img/form1.png";
import design from "./../img/design.png";

const Work = () => {
  return (
    <div className={classes.Work}>
      <PageHeader title={"Work"} />
      <div className={classes.Container}>
        <div className={classes.Wrpphoto}>
          <div className={classes.PhotoSale}>
            <img className={classes.sale1} src={sale1} alt="sale"></img>
            <img className={classes.sale3} src={sale3} alt="sale"></img>
            <img className={classes.sale2} src={sale2} alt="sale"></img>
            <p>
              About{" "}
              <a
                href="https://github.com/MariamSotova/Sale-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                this
              </a>{" "}
              <br />
              project
            </p>
          </div>
          <div className={classes.CatPhoto}>
            <p>
              About{" "}
              <a
                href="https://github.com/MariamSotova/project-cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                this
              </a>
              <br />
              project
            </p>
            <img className={classes.cat} src={cat} alt="cat"></img>
            <img className={classes.ca1} src={cat1} alt="cat1"></img>
            <img className={classes.ca2} src={cat2} alt="cat2"></img>
          </div>
          <div className={classes.OtherWorks}>
            <p>Other works</p>
            <img className={classes.form1} src={form1} alt="form"></img>
            <img className={classes.design} src={design} alt="design"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
