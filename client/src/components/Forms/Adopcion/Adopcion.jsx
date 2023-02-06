import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"; // version 5.2.0
import { useForm } from "react-hook-form";
import styles from "./Adopcion.module.css";
import Footer from "../../Footer/Footer";
import { postAdoption } from "../../../redux/actions/action";

const Adopcion = (props) => {
  const user = JSON.parse(localStorage.getItem("user")) || undefined;

  let history = useHistory();

  const nameDog = props.location.pathname.split("/").pop();

  console.log(props);

  const [storage, setStorage] = React.useState({
    name: "undefined",
    email: "undefined",
    phone: "undefined",
    birthday: "undefined",
  });

  // React.useEffect(()=>{
  // },[user]);

  console.log(storage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const dispatch = useDispatch();

  const handleClick = () => {
    const load = user?.data.info || {
      name: "",
      email: "",
      phone: "",
      birthday: "",
    };
    setStorage(load);
  };

  const onSubmit = (data) => {
    data.people = parseInt(data.people);
    console.log(data);
    // e.preventDefault();
    dispatch(postAdoption(data));
    alert("form create successfuly!");
    // window.location.reload();
    // e.target.reset();
    history.push("../");
  };

  return (
    <div className={styles.divContenedor}>
      {storage.name === "undefined" ? (
        <button className={styles.buttonLoad} onClick={() => handleClick()}>
          {" "}
          Llenar el Formulario de Adopción{" "}
        </button>
      ) : (
        <div className={styles.mainContainer}>
          <h2 className={styles.h3form}>Formulario de Adopción</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.item}>
              <label className={styles.label}>Nombre del Camperito</label>
              <input
                value={!nameDog ? undefined : nameDog}
                type="text"
                className={styles.input}
                {...register("nameDog", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p>Nombre del Camperito necesario</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>Nombre y Apellido</label>
              <input
                value={
                  !storage.name ||
                  storage.name === "undefined" ||
                  storage.name === "requerir" ||
                  storage.name === ""
                    ? undefined
                    : storage.name
                }
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p>Ingrese su nombre, por favor</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>Fecha de nacimiento</label>
              <input
                value={
                  !storage.birthday ||
                  storage.birthday === "undefined" ||
                  storage.birthday === "requerir" ||
                  storage.birthday.includes("2022") ||
                  storage.birthday.includes("2023") ||
                  storage.birthday === ""
                    ? undefined
                    : storage.birthday
                }
                type="date"
                className={styles.inputDate}
                min="1923-01-01"
                {...register("birthday", { required: true })}
              />
              {errors.birthday?.type === "required" && (
                <p>Fecha de nacimiento requerida</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>Correo</label>
              <input
                value={
                  !storage.email ||
                  storage.email === "undefined" ||
                  storage.email === ""
                    ? undefined
                    : storage.email
                }
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email?.type === "pattern" && (
                <p>Formato de Email incorrecto</p>
              )}
              {errors.email?.type === "required" && <p>Email requerido</p>}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>Teléfono</label>
              <input
                value={
                  !storage.phone ||
                  storage.phone === "undefined" ||
                  storage.phone === "requerir" ||
                  storage.phone === ""
                    ? undefined
                    : storage.phone
                }
                type="tel"
                className={styles.input}
                {...register("phone", {
                  required: true,
                  pattern: /^\d{3}\d{3}\d{4}$/,
                })}
              />
              {errors.phone?.type === "required" && (
                <p>Número de telefono requerido</p>
              )}
              {errors.phone?.type === "pattern" && (
                <p>El numero ingresado es invalido</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>Domicilio</label>
              <input
                type="text"
                placeholder="Tu respuesta"
                className={styles.input}
                {...register("location", { required: true })}
              />
              {errors.location?.type === "required" && (
                <p>Domicilio requerido</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>Localidad</label>
              <input
                type="text"
                placeholder="Tu respuesta"
                className={styles.input}
                {...register("area", { required: true })}
              />
              {errors.area?.type === "required" && <p>Localidad requerida</p>}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Cuantas Personas viven en la casa?
              </label>
              <input
                type="number"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("people", { required: true })}
              />
              {errors.people?.type === "required" && (
                <p>responda la pregunta por favor</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Estan todas de acuerdo en adoptar?
              </label>
              <select
                className={styles.select}
                {...register("accordance", { required: true })}
              >
                <option value="si">Si</option>
                <option value="no">No</option>
                <option value="tal vez">Tal vez</option>
              </select>
              {errors.accordance?.type === "required" && (
                <p>Seleccione una opción</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                Composición del núcleo familiar -Relación y edades de las
                Personas que viven en la casa-. Nos permite saber si el
                Camperito es apto para tu hogar.
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("description", { required: true })}
              />
              {errors.description?.type === "required" && (
                <p>Profesión requerida</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿ Tenes otros animales? -Nos permite saber si el Camperito es
                apto para tu hogar-
              </label>
              <select
                className={styles.select}
                {...register("otherAnimals", { required: true })}
              >
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
              {errors.otherAnimals?.type === "required" && (
                <p>Seleccione una opción</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Cuántos ? ¿Nos cuentan un poco sobre ellos?
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("expatiate", { required: true })}
              />
              {errors.expatiate?.type === "required" && (
                <p>información requerida</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>¿Estan castrados?</label>
              <select
                className={styles.select}
                {...register("castrated", { required: true })}
              >
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
              {errors.castrated?.type === "required" && (
                <p>Seleccione una opción</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Cómo fueron castrados? Si no están castrados ¿cual es el
                motivo?
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("reason", { required: true })}
              />
              {errors.reason?.type === "required" && (
                <p>haga, al menos, un breve comentario</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>¿Estan vacunados?</label>
              <select
                className={styles.select}
                {...register("vaccinated", { required: true })}
              >
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
              {errors.vaccinated?.type === "required" && (
                <p>Seleccione una opción</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Tuviste otros animales? ¿Qué pasó con ellos?
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("events", { required: true })}
              />
              {errors.events?.type === "required" && (
                <p>haga, al menos, un breve comentario</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Han pensado que harán en vacaciones? Explique
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("holidays", { required: true })}
              />
              {errors.holidays?.type === "required" && (
                <p>haga, al menos, un breve comentario</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                Han pensado que harán si hay un embarazo o llega un bebé?
                Explique
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("babies", { required: true })}
              />
              {errors.babies?.type === "required" && (
                <p>haga, al menos, un breve comentario</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                Han pensado que harán si hay alguien alérgico? Explique
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("allergies", { required: true })}
              />
              {errors.allergies?.type === "required" && (
                <p>haga, al menos, un breve comentario</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Por que se interesan en este animal en particular?
              </label>
              <h5>
                Cómo conocemos el carácter de nuestros perros la pregunta nos
                permite evaluar si es el indicado para lo que buscan
              </h5>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="defensa"
                  className={styles.checkbox}
                  {...register("items", { required: true })}
                />
                <p>defensa</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="compañia"
                  className={styles.checkbox}
                  {...register("items", { required: true })}
                />
                <p>compañia</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="guardia"
                  className={styles.checkbox}
                  {...register("items", { required: true })}
                />
                <p>guardia</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="caza"
                  className={styles.checkbox}
                  {...register("items", { required: true })}
                />
                <p>caza</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="deporte y aire libre"
                  className={styles.checkbox}
                  {...register("items", { required: true })}
                />
                <p>deporte y aire libre</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="otros"
                  className={styles.checkbox}
                  {...register("items", { required: true })}
                />
                <p>otros</p>
              </div>
              {errors.items?.type === "required" && (
                <p>Al menos, elegir la opción "otros"</p>
              )}
            </div>

            <div className={styles.itemCheckbox}>
              <label className={styles.label}>¿Donde vivirá el adoptado?</label>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="departamento"
                  className={styles.checkbox}
                  {...register("home", { required: true })}
                />
                <p>departamento</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="ph"
                  className={styles.checkbox}
                  {...register("home", { required: true })}
                />
                <p>ph</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="casa"
                  className={styles.checkbox}
                  {...register("home", { required: true })}
                />
                <p>casa</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="casa en barrio cerrado"
                  className={styles.checkbox}
                  {...register("home", { required: true })}
                />
                <p>casa en barrio cerrado</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="quinta"
                  className={styles.checkbox}
                  {...register("home", { required: true })}
                />
                <p>quinta</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="campo"
                  className={styles.checkbox}
                  {...register("home", { required: true })}
                />
                <p>campo</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="otros"
                  className={styles.checkbox}
                  {...register("home", { required: true })}
                />
                <p>otros</p>
              </div>
              {errors.home?.type === "required" && (
                <p>Al menos, elegir la opción "otros"</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Posee espacio al aire libre
              </label>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="balcón"
                  className={styles.checkbox}
                  {...register("freshAir", { required: true })}
                />
                <p>balcón</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="patio"
                  className={styles.checkbox}
                  {...register("freshAir", { required: true })}
                />
                <p>patio</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="terraza"
                  className={styles.checkbox}
                  {...register("freshAir", { required: true })}
                />
                <p>terraza</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="parque"
                  className={styles.checkbox}
                  {...register("freshAir", { required: true })}
                />
                <p>parque</p>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  value="otros"
                  className={styles.checkbox}
                  {...register("freshAir", { required: true })}
                />
                <p>otros</p>
              </div>
              {errors.freshAir?.type === "required" && (
                <p>Al menos, elegir la opción "otros"</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Son propietarios o alquilan?
              </label>
              <select
                className={styles.select}
                {...register("status", { required: true })}
              >
                <option value="propietario">propietario</option>
                <option value="alquilo">alquilo</option>
              </select>
              {errors.status?.type === "required" && (
                <p>Seleccione una opción</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Cuentan con autorización del propietario o la comunidad de
                vecinos para tener animales de compañia?
              </label>
              <select
                className={styles.select}
                {...register("authorization", { required: true })}
              >
                <option value="si">Si</option>
                <option value="no">No</option>
                <option value="tal vez">Tal vez</option>
              </select>
              {errors.authorization?.type === "required" && (
                <p>Seleccione una opción</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Dónde dormirá el adoptado?
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("sleep", { required: true })}
              />
              {errors.sleep?.type === "required" && (
                <p>conteste la pregunta, por favor</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Estará solo? ¿Cuánto tiempo?
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("loneliness", { required: true })}
              />
              {errors.loneliness?.type === "required" && (
                <p>conteste la pregunta, por favor</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Quién lo paseará? ¿Cuántas veces al día?
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("walk", { required: true })}
              />
              {errors.walk?.type === "required" && (
                <p>conteste la pregunta, por favor</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                En caso de mudarse, ¿ha pensado que hará con el perro?
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("moving", { required: true })}
              />
              {errors.moving?.type === "required" && (
                <p>conteste la pregunta, por favor</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Están de acuerdo en tener un tiempo de adaptación?
              </label>
              <select
                className={styles.select}
                {...register("adaptation", { required: true })}
              >
                <option value="si">Si</option>
                <option value="no">No</option>
                <option value="tal vez">Tal vez</option>
              </select>
              {errors.adaptation?.type === "required" && (
                <p>Seleccione una opción</p>
              )}
            </div>

            <div className={styles.item}>
              <label className={styles.label}>
                ¿Qué piensa de la esterilización de animales de compañía?
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu respuesta"
                {...register("sterilization", { required: true })}
              />
              {errors.sterilization?.type === "required" && (
                <p>conteste la pregunta, por favor</p>
              )}
            </div>

            <input type="submit" value="Enviar" className={styles.submit} />
          </form>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Adopcion;
