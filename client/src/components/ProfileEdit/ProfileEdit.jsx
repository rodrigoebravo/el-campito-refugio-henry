import React, { useState } from "react";
import styles from "./ProfileEdit.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { editProfile } from "../../login";

import ImageUpload from "../ImageUpload/ImageUpload";

const ProfileEdit = () => {
  const user = JSON.parse(localStorage.getItem("user")) || undefined;
  const responseCloudinary = useSelector((state) => state.responseCloudinary);
  // console.log(responseCloudinary, "soy responseCloudinary");
  // console.log(id, "soy user");
  const [input, setInput] = useState({
    image: "",
    phone: "",
    birthday: "",
  });
  console.log(input);

  function handleChange(e) {
    // postCloudinaryPhoto(input.image);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    
  }
  let imagenLocal = user.data.info.image;
  console.log(responseCloudinary.length, "soy response claudinary");
  function handleSubmit(e) {
    e.preventDefault();

    responseCloudinary.length > 0
      ? setInput({
          ...input,
          image: responseCloudinary,
        })
      : setInput({
          ...input,
          image: imagenLocal,
        });

    console.log(input, "soy input de handle");
    let id = user.data.info._id;
    // setTimeout(() => {
    //   let data = editProfile(input, id);
    //   // postCloudinaryPhoto(input.image)
    //   data();
    // }, 4000);
    let data = editProfile(input, id);
    //   // postCloudinaryPhoto(input.image)
    data();

    setInput({
      image: "",
      phone: "",
      birthday: "",
    });
  }

  return (
    <div className={styles.div}>
      <div className={styles.div2}>
        <h2> Editar Perfil </h2>
        <Link to="/profile" className={styles.ButtonDashboard2}>
          Back
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.divForm}>
          <div className={styles.item}>
            <label className={styles.label}>Nombre de usario</label>
            <input
              type="name"
              value={user.data.info.name}
              onChange={handleChange}
              className={styles.input}
            ></input>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              value={user.data.info.email}
              onChange={handleChange}
              className={styles.input}
            ></input>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Imagen de perfil </label>
            <div className={styles.divImg}>
              {user.data.info.image ? (
                <div>
                  <h6>Imagen Actual</h6>
                  <img alt="profile imagen" src={user.data.info.image} />
                </div>
              ) : (
                <></>
              )}
              <ImageUpload />
              {responseCloudinary.length > 0 ? <h6>Imagen Nueva</h6> : null}

              {/* {responseCloudinary.length === 0 ? null : (
                <div>
                  <img alt="profile imagen" src={responseCloudinary} />
                  <h6>Nueva Imagen</h6>
                </div>
              )} */}
            </div>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Telefono</label>
            <input
              value={input.phone}
              type="tel"
              name="phone"
              onChange={handleChange}
              className={styles.input}
              placeholder="(Código de área) Número"
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Fecha de Nacimiento</label>
            <input
              value={input.birthday}
              min="1950-01-01"
              type="date"
              name="birthday"
              className={styles.input}
              onChange={handleChange}
              placeholder="Fecha de Nacimiento"
            />
          </div>
          <input
            type="submit"
            value="Enviar"
            onClick={handleSubmit}
            className={styles.submit}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
