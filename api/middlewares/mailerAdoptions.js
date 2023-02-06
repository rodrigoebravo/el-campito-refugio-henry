const nodemailer = require("nodemailer");
// const Usuario = require("../models/nosql/users");
// const { usersModel } = require("../models");

const mdwAdoptions = async (req, res, next) => {
  try {
    let {
      location,
      area,
      people,
      accordance,
      description,
      otherAnimals,
      expatiate,
      castrated,
      reason,
      vaccinated,
      events,
      holidays,
      babies,
      allergies,
      items,
      home,
      freshAir,
      status,
      authorization,
      sleep,
      loneliness,
      walk,
      moving,
      adaptation,
      sterilization,
      name,
      birthday,
      email,
      phone,
      nameDog,
    } = req.body;

    let campito = "elcampitorefugiodev@gmail.com"; // "adoptantesdelcampito@gmail.com";

    let destino = "";
    let vivienda = "";
    let aireLibre = "";

    if (items) {
      destino = "";
      items.forEach((element) => {
        destino = destino + `${element}, `;
      });
    } else {
      destino = "";
    }

    if (home) {
      home.forEach((element) => {
        vivienda = vivienda + `${element}, `;
      });
    } else {
      vivienda = "";
    }

    if (freshAir) {
      freshAir.forEach((element) => {
        aireLibre = aireLibre + `${element}, `;
      });
    } else {
      aireLibre = "";
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER, // generated ethereal user
        pass: process.env.GMAIL_PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object

    // email admin
    await transporter.sendMail({
      from: '"El campito Refugio" <elcampitorefugiodev@gmail.com>', // sender address
      to: `${campito}`, // list of receivers
      subject: `Solicitud de Adopcion`, // Subject line
      html: `  <div
      style="
        background-color: black;
        font-family: Helvetica, sans-serif;
        color: white;
      "
    >
    <div>
        <div style="padding: 2rem">
          <h2>Formulario de Adopción</h2>
        </div>
        <div style="padding: 0 3rem">
          <h3>Nombre del Camperito: ${nameDog}</h3>
          <br />
          <h3>Nombre y Apellido: ${name}</h3>
          <br />
          <h3>Teléfono: ${phone}</h3>
          <br />
          <h3>Correo: ${email}</h3>
          <br />
          <h3>Fecha de Nacimiento: ${birthday}</h3>
          <br />
          <p>Domicilio: ${location}</p>
          <br />
          <p>Localidad: ${area}</p>
          <br />
          <h3>¿Cuantas Personas viven en la casa?: ${people}</h3>
          <br />
          <h3>¿Estan todas de acuerdo en adoptar?: ${accordance}</h3>
          <br />
          <h3>
            Composición del núcleo familiar -Relación y edades de las Personas
            que viven en la casa-. Nos permite saber si el Camperito es apto
            para tu hogar.
          </h3>
          <p>- ${description}</p>
          <br />
          <h3>
            ¿Tenes otros animales? -Nos permite saber si el Camperito es apto
            para tu hogar-: ${otherAnimals}
          </h3>
          <br />
          <h3>¿Cuántos ? ¿Nos cuentan un poco sobre ellos?:</h3>
          <h3>${expatiate}</h3>
          <br />
          <h3>¿Estan castrados?: ${castrated}</h3>
          <br />
          <h3>
            ¿Cómo fueron castrados? Si no están castrados ¿cual es el motivo?:
          </h3>
          <h3>-${reason}</h3>
          <br />
          <h3>¿Estan vacunados? ${vaccinated}</h3>
          <br />
          <h3>¿Tuviste otros animales? ¿Qué pasó con ellos?</h3>
          <h4>- ${events}</h4>
          <br />
          <h3>¿Han pensado que harán en vacaciones? Explique</h3>
          <h4>- ${holidays}</h4>
          <br />
          <h3>
            Han pensado que harán si hay un embarazo o llega un bebé? Explique:
          </h3>
          <h3>-${babies}</h3>
          <br />
          <h3>Han pensado que harán si hay alguien alérgico? Explique:</h3>
          <h3>-${allergies}</h3>
          <br />
          <h3>¿Por que se interesan en este animal en particular?</h3>
          <h5>
            Cómo conocemos el carácter de nuestros perros la pregunta nos
            permite evaluar si es el indicado para lo que buscan
          </h5>
          <h4>- ${destino}</h4>
          <br />
          <h3>¿Donde vivirá el adoptado?</h3>
          <h3>- ${vivienda}</h3>
          <br />
          <h3>¿Posee espacio al aire libre?</h3>
          <h3>- ${aireLibre}</h3>
          <br />
          <h3>¿Son propietarios o alquilan? -${status}</h3>
          <br />
          <h3>
            ¿Cuentan con autorización del propietario o la comunidad de vecinos
            para tener animales de compañia? ${authorization}
          </h3>
          <br />
          <h3>¿Dónde dormirá el adoptado? -${sleep}</h3>
          <br />
          <h3>¿Estará solo? ¿Cuánto tiempo?</h3>
          <h4>- ${loneliness}</h4>
          <br />
          <h3>¿Quién lo paseará? ¿Cuántas veces al día?</h3>
          <h3>-${walk}</h3>
          <br />
          <h3>En caso de mudarse, ¿ha pensado que hará con el perro?</h3>
          <h3>-${moving}</h3>
          <br />
          <h3>
            ¿Están de acuerdo en tener un tiempo de adaptación?- ${adaptation}
          </h3>
          <br />
          <h3>¿Qué piensa de la esterilización de animales de compañía?</h3>
          <h4>- ${sterilization}</h4>
          <br />
          <br />
        </div>
          <div style="display: flex; background-color: white">
            <img
              style="width: 10rem; margin: 0 auto 1rem"
              src="https://doprod-statics.s3.amazonaws.com/pictures/logo/9343/large_fit_6709cfc0-d706-49ed-ba8e-d9682a4b8305.png"
              alt="Elcampito.jpeg"
            />
        </div>
      </div>
    </div>`,
    });

    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = mdwAdoptions;
// ---------------------------------------------------------
