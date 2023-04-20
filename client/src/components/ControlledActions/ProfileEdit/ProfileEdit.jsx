import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editProfile } from "../../../login";
import { clearCloudinaryResponse } from "../../../redux/actions/action";
import ImageUpload from "../ImageUpload/ImageUpload.jsx";
import styles from "./ProfileEdit.module.css";

const ProfileEdit = () => {

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(clearCloudinaryResponse());
  },[dispatch]);

  const user = JSON.parse(localStorage.getItem("user")) || undefined;

  let img = user?.data.info.image || "";  

  const [input, setInput] = useState({
    image: img,
    phone: user?.data.info.phone || "",
    birthday: user?.data.info.birthday || "",
  });

  const [buttonClicked, setButtonClicked] = useState(false);

  let handleButtonClick = (e) => {
    e.preventDefault();
    setButtonClicked(!buttonClicked);
  };
  const [buttonClicked2, setButtonClicked2] = useState(false);

  let handleButtonClick2 = (e) => {
    e.preventDefault();
    setButtonClicked2(!buttonClicked2);
  };
  const [buttonClicked3, setButtonClicked3] = useState(false);
  let handleButtonClick3 = (e) => {
    e.preventDefault();
    setButtonClicked3(!buttonClicked3);
  };
  const [buttonClicked4, setButtonClicked4] = useState(false);
  let handleButtonClick4 = (e) => {
    e.preventDefault();
    setButtonClicked4(!buttonClicked4);
    setInput({
      image: img,
      phone: input.phone,
      birthday: input.birthday,
    });
  };

  console.log(input);

  function handleChange(e) {
    // postCloudinaryPhoto(input.image);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let id = user.data.info._id;
    let data = editProfile(input, id);
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
              disabled
              onChange={handleChange}
              className={styles.input}
            ></input>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              value={user.data.info.email}
              disabled
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
                  <img
                    alt="profile imagen"
                    src={user.data.info.image}
                    width="200"
                  />
                </div>
              ) : (
                <></>
              )}

              {buttonClicked ? (
                <div>
                  <ImageUpload />                  
                </div>
              ) : (
                <>
                  <button onClick={handleButtonClick} className={styles.ButtonEdit}>
                    Modificar
                  </button>
                </>
              )}             
            </div>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Telefono</label>

            {user.data.info.phone ? (
              <div className={styles.divsdate}>
                {buttonClicked2 ? (
                  <input
                    defaultValue={user.data.info.phone}
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="(Código de área) Número"
                  />
                ) : (
                  <>
                    <label>{user.data.info.phone}</label>
                    <button onClick={handleButtonClick2} className={styles.ButtonEdit}>
                      Modificar
                    </button>
                  </>
                )}
              </div>
            ) : (
              <input
                value={input.phone}
                type="number"
                name="phone"
                onChange={handleChange}
                className={styles.input}
                placeholder="(Código de área) Número"
              />
            )}
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Fecha de Nacimiento</label>
            {user.data.info.birthday ? (
              <div className={styles.divsdate}>
                {buttonClicked3 ? (
                  <input
                    defaultValue={user.data.info.birthday}
                    min="1950-01-01"
                    type="date"
                    name="birthday"
                    className={styles.input}
                    onChange={handleChange}
                    placeholder="Fecha de Nacimiento"
                  />
                ) : (
                  <>
                    <label> {user.data.info.birthday.substring(0, 10)}</label>
                    <button onClick={handleButtonClick3} className={styles.ButtonEdit}>Modificar</button>
                  </>
                )}
              </div>
            ) : (
              <input
                value={input.birthday}
                min="1950-01-01"
                type="date"
                name="birthday"
                className={styles.input}
                onChange={handleChange}
                placeholder="Fecha de Nacimiento"
              />
            )}
          </div>

          {buttonClicked4 ? (
            <input
              type="submit"
              value="Enviar"
              onClick={handleSubmit}
              className={styles.submit}
            />
          ) : (
            <button onClick={handleButtonClick4} className={styles.submit2}>
              Confirmar Cambios
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
