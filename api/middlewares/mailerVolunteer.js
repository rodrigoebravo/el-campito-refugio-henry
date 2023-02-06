const nodemailer = require("nodemailer");
// const Usuario = require("../models/nosql/users");
// const { usersModel } = require("../models");

const mdwVolunteer = async (req, res, next) => {
  try {
    let {
      email,
      area,
      profession,
      interest,
      modality,
      availability,
      days,
      clarification,
      description,
      purpose,
      vehicle,
      carpooling,
      question,
      name,
      phone,
      birthday,
    } = req.body;

    // if (days) {
    //   let dias = "";
    //   days.array.forEach((element) => {
    //     dias = dias + `${element}, `;
    //   });
    // } else {
    //   let dias = "";
    // }

    let campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER, // generated ethereal user
        pass: process.env.GMAIL_PASSWORD, // generated ethereal passcd  word
      },
    });

    // send mail with defined transport object

    await transporter.sendMail({
      from: '"El campito Refugio" <elcampitorefugiodev@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: `Copia de tu Solicitud de Voluntariado`, // Subject line
      html: `
      <div
      style="
        background-color: black;
        font-family: Helvetica, sans-serif;
        color: white;
      "
    >
      <div>
        <div style="padding: 2rem">
          <h2>Formulario de Voluntarios Copia. No Responder</h2>
        </div>
        <div style="padding: 0 3rem">
          <h2>Nombre: ${name}</h2>
          <h3>Teléfono: ${phone}</h3>
          <h3>Correo: ${email}</h3>
          <h3>Fecha de Nacimiento: ${birthday}</h3>
          <h3>Localidad: ${area}</h3>
          <h3>Profesión: ${profession}</h3>
          <h3>
            ¿Tenés algún área de interés en particular para trabajar en el
            refugio?: ${interest}
          </h3>
          <h3>Modalidad: ${modality}</h3>
          <h3>
            ¿De cuánto tiempo -en horas- dispones para realizar una tarea
            voluntaria?: ${availability}
          </h3>
          <h3>¿De cuáles días dispones?: ${days}</h3>
          <h3>Aclaranos un poco los dos puntos anteriores: ${clarification}</h3>
          <h3>¿Qué crees que podes sumar personalmente?: ${description}</h3>
          <h3>¿Por que querés ser voluntario del Campito?: ${purpose}</h3>
          <h3>¿Tenés vehiculo propio?: ${vehicle}</h3>
          <h3>¿Harías carpooling?: ${carpooling}</h3>
          <h3>¿Querés hacer algún comentario o dejarnos alguna pregunta?</h3>
          <h4>- ${question}</h4>
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

    // email admin
    await transporter.sendMail({
      from: '"El campito Refugio" <elcampitorefugiodev@gmail.com>', // sender address
      to: `${campito}`, // list of receivers
      subject: `Formulario para Voluntariado`, // Subject line
      html: `
      <div
      style="
        background-color: black;
        font-family: Helvetica, sans-serif;
        color: white;
      "
    >
      <div>
        <div style="padding: 2rem">
          <h2>Solicitud de Voluntario de ${name}</h2>
        </div>
        <div style="padding: 0 3rem">
          <h2>Nombre: ${name}</h2>
          <h3>Teléfono: ${phone}</h3>
          <h3>Correo: ${email}</h3>
          <h3>Fecha de Nacimiento: ${birthday}</h3>
          <h3>Localidad: ${area}</h3>
          <h3>Profesión: ${profession}</h3>
          <h3>Modalidad: ${modality}</h3>
          <h3>¿Tenés algún área de interés en particular para trabajar en el
          refugio?: ${interest}</h3>
          <h3>¿De cuánto tiempo -en horas- dispones para realizar una tarea
          voluntaria?: ${availability}</h3>
          <h3>¿De cuáles días dispones?: ${days}</h3>
          <h3>Aclaranos un poco los dos puntos anteriores: ${clarification}</h3>
          <h3>¿Qué crees que podes sumar personalmente?: ${interest}</h3>
          <h3>¿Por que querés ser voluntario del Campito?: ${purpose}</h3>
          <h3>¿Tenés vehiculo propio?: ${vehicle}</h3>
          <h3>¿Harías carpooling?: ${carpooling}</h3>
          <h3>¿Querés hacer algún comentario o dejarnos alguna pregunta?</h3>
          <h4>- ${question}</h4>
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

module.exports = mdwVolunteer;
// ---------------------------------------------------------
