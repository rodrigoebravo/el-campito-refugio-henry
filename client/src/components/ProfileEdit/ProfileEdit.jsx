import React, { useState, useEffect } from "react";
import styles from "./ProfileEdit.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProfileEdit = () => {
  const user = JSON.parse(localStorage.getItem("user")) || undefined;
  const id = user.data.info._id;
  const dispatch = useDispatch()

  console.log(id, "soy user");
  const [input, setInput] = useState({
    image: "",
    phone: "",
    birthday: "",
  });
  console.log(input);
  function handleChange(e) {
    // console.log(input.name.trim());

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // setErrors(
    //   validate({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (
    //   input.name === "" ||
    //   input.duration === "" ||
    //   input.difficulty === "" ||
    //   input.season === "" ||
    //   input.countryId.length === 0
    // )
    //   return alert("You must fill in the fields");

    // dispatch(editProfile(input));
    alert("Actity Created");
    setInput({
      image: "",
      phone: "",
      birthday: ""
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
        <div>
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

                  <img src={user.data.info.image} />
                  <h6>imagen Actual</h6>

                </div>
              ) : (
                <></>
              )}

             
              <input
                type="file"
                name="image"
                value={input.image}
                onChange={handleChange}
                className={styles.inputImg}
              />
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
          <input type="submit" value="Enviar" className={styles.submit} />
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
