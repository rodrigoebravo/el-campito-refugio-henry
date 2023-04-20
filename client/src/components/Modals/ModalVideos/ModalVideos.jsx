import React from "react";
import Button from "@mui/material/Button";
import styles from "./ModalVideos.module.css";


const ModalVideos = ({title, url, close}) => {

  console.log(`title: ${title},</br> url: ${url},</br> close:${close}`);

  return (
    <div className={styles.modalDivsup}>
      <div className={styles.modalDiv}>
          <h2 className={styles.h2modal}>
            {title}
          </h2>
          <iframe
              src={url}
              title={title}
            >{" "}</iframe>
          <Button
            variant="contained"
            onClick={() => close()}
          >
            Cerrar Video
          </Button>
        </div>       
    </div>
  );

};

export default ModalVideos;
