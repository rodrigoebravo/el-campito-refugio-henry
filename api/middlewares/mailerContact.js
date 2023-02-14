const nodemailer = require("nodemailer");
// const Usuario = require("../models/nosql/users");
// const { usersModel } = require("../models");

const mdwContact = async (req, res, next) => {
  try {
    let { email, fullName, organization, telephone, asunto, consulta } =
      req.body;

    let url = req.url;
    let route = url.split("/").pop();
    console.log(asunto, "soy asunto");

    if (!organization) organization = "ninguna";

    let campito = "";

    if (asunto === "adopciones") campito = "adoptantesdelcampito@gmail.com"; //  "adoptantesdelcampito@gmail.com";
    if (asunto === "consulta") campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";
    if (asunto === "reclamo") campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";
    if (asunto === "donaciones") campito = "donacionesalcampito@gmail.com"; //  "donacionesalcampito@gmail.com";
    if (asunto === "débitos automáticos") campito = "debito@elcampitorefugio.org.ar"; //  "debito@elcampitorefugio.org.ar";
    if (asunto === "campito escolar") campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";
    if (asunto === "visitas") campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";
    if (asunto === "denuncias") campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";
    if (asunto === "prensa") campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";
    if (asunto === "denuncias") campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";
    if (asunto === "felicitaciones") campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";
    if (asunto === "otro") campito = "institucional@elcampitorefugio.org.ar"; //  "institucional@elcampitorefugio.org.ar";

    console.log(campito, "SOY EL CAMPITDO DESPUS DEL SWITCH");

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER, // generated ethereal user
        pass: process.env.GMAIL_PASSWORD, // generated ethereal password
      },
    });
    let asuntoCapitilaze = asunto[0].toUpperCase() + asunto.substring(1); // capitalizo la primera letra de la string asunto

    //email copia
    await transporter.sendMail({
      from: '"El campito Refugio" <elcampitorefugiodev@gmail.com>', // sender address
      to: [`${campito}`], // list of receivers
      subject: `${asuntoCapitilaze}`, // Subject line
      html: `
      <div style="background: #000;color: #fff;font-family: Helvetica, sans-serif;">
      <div style="padding: 2rem;">
        <h2>${fullName} se quiere contactar:</h2>
      </div>
      <br />
      <div style="padding: 0rem 3rem;">
        <h3>Nombre: ${fullName}</h3>
        <h3>Teléfono: ${telephone}</h3>
        <h3>Correo: ${email}</h3>
        <br />
        <h3>Consulta:</h3>
        <h4>${consulta}</h4>
        <br />
        <br />
      </div>
    </div>`,
    });

    await transporter.sendMail({
      from: '"El campito Refugio" <elcampitorefugiodev@gmail.com>', // sender address
      to: [`${email}`], // list of receivers
      subject: `Copia de tu Consulta`, // Subject line
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
          <h2>No responder, Esto es una copia de tu email de contacto.</h2>
        </div>
        <div style="padding: 0 3rem">
          <h3>Tu Nombre: ${fullName}</h3>
          <h3>Tu Teléfono: ${telephone}</h3>
          <h3>Tu Correo: ${email}</h3>
          <br />
          <h4>Tu Consulta: ${consulta}</h4>
          <br />
          <br />
        </div>
        <br />
        <br />
        <div style="display: flex; background-color: white;">
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
    alert("error en enviarlo");
  }
};

module.exports = mdwContact;
// ---------------------------------------------------------
