import classes from "./MyPdf.module.css";

const PDF_FILE_URL = "http://localhost:3000/CV_Mariam_Sotova.pdf"; //изменить ссылку на свою страницу

const MyPdf = () => {
  const downloadFileURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div className={classes.ButtonRainbow}>
      <div className={classes.File}>
        <button
          onClick={() => {
            downloadFileURL(PDF_FILE_URL);
          }}
        >
          download resume
        </button>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MyPdf;
