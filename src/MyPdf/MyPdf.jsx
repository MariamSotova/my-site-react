import React from "react";
import classes from "./MyPdf.module.css";

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

const PDF_FILE_URL = "http://localhost:3000/CV_Mariam_Sotova.pdf"; //изменить ссылку на свою страницу

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
