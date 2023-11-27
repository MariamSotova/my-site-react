import React from "react";
import classes from "./MyPdf.module.css";
import "../pdf/CV_Mariam.pdf";

const MyPdf = () => {
  return (
    <div className={classes.ButtonRainbow}>
      <div className={classes.File}>
        <button onClick={downloadFileURL}>download CV</button>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MyPdf;

// private

const PDF_FILE_URL =
  "https://mariamsotova.github.io/my-site-react/static/media/CV_Mariam.7608107e5c149804197e.pdf"; //изменить ссылку на свою страницу для pdf

function downloadFileURL() {
  const url = PDF_FILE_URL;
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
}
