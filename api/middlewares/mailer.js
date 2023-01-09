const nodemailer = require("nodemailer");
// const Usuario = require("../models/nosql/users");
// const { usersModel } = require("../models");

const mailer = async (req, res, next) => {
  try {
    const { email, pass, fullName, organization, telephone, asunto, consulta,
      date, location, area, profession, interest, modality, availability, days,
      clarification, description, purpose, vehicle, carpooling, question,
      name, phone, birthday
      
    } = req.body;

    let url = req.url;
    let route = url.split("/").pop();

    let aux = { }

    if (!organization) organization = "ninguna";

    if (url === "conatcto" || url === "volunteers" || url === "adoptions") {

      let campito = "";

      if ( url === "adoptions") campito = "adoptantesdelcampito@gmail.com";
      if ( url === "volunteers" ) campito = "institucional@elcampitorefugio.org.ar";

      if ( url === "contacto" ) {
        switch (asunto) {
          case "adopciones":
            campito = "adoptantesdelcampito@gmail.com";
            break;    
          case "consulta":
            campito = "institucional@elcampitorefugio.org.ar";
            break;
          case "reclamo":
            campito = "institucional@elcampitorefugio.org.ar";
            break;
          case "donaciones":
            campito = "donacionesalcampito@gmail.com";
            break;
          case "débitos automáticos":
            campito = "debito@elcampitorefugio.org.ar";
            break;    
          case "campito escolar":
            campito = "institucional@elcampitorefugio.org.ar";
            break;
          case "visitas":
            campito = "institucional@elcampitorefugio.org.ar";
            break;
          case "denuncias":
            campito = "institucional@elcampitorefugio.org.ar";
            break;
          case "prensa":
            campito = "institucional@elcampitorefugio.org.ar";
            break;
          case "felicitaciones":
            campito = "institucional@elcampitorefugio.org.ar";
            break;
          case "otro":
            campito = "institucional@elcampitorefugio.org.ar";
            break;
          default:
            campito = "institucional@elcampitorefugio.org.ar";
            break;
        }
      };

    };

    const messages = {
      login: `
      <h2>Se inicio session con el email : ${email} en el Campito Regufio!</h2>
      <br>
            <p>Ingresa <a href=${"http://localhost:3000"} style="color:blue">AQUI</a></p>
              <br>
              <img src='https://doprod-statics.s3.amazonaws.com/pictures/logo/9343/large_fit_6709cfc0-d706-49ed-ba8e-d9682a4b8305.png' alt='Elcampito.jpeg' />
              <br>
              <p>El campito refugio staff.</p>`,

      register: `<h2>Registro>registro exitoso en el Campito Regufio!</h2>
                <p>Correo: ${email}</p>
                <p>Contraseña: ${pass}</p>
                <br>
                    <img src='https://doprod-statics.s3.amazonaws.com/pictures/logo/9343/large_fit_6709cfc0-d706-49ed-ba8e-d9682a4b8305.png' alt='Elcampito.jpeg' />
                <br>`,
       contacto: `<h2>COPIA DE LA CONSULTA</h2>
                <h4>Nombre: ${fullName}</h4>
                <h4>Teléfono: ${telephone}</h4>
                <h4>Correo: ${email}</h4>
                <h4>Asunto: ${asunto}</h4>
                <br/>
                <p>${consulta}</p>
                <br/>
                <h4>Recibido en correo: ${campito}</h4>
                <br/>
                <br>
                    <img src='https://doprod-statics.s3.amazonaws.com/pictures/logo/9343/large_fit_6709cfc0-d706-49ed-ba8e-d9682a4b8305.png' alt='Elcampito.jpeg' />
                <br>`,
        volunteers: `<h2>COPIA DE LA CONSULTA</h2>
                <h4>Nombre: ${fullName}</h4>
                <h4>Teléfono: ${telephone}</h4>
                <h4>Correo: ${email}</h4>
                <h4>Asunto: ${asunto}</h4>
                <br/>
                <p>${consulta}</p>
                <br/>
                <h4>Recibido en correo: ${campito}</h4>
                <br/>
                <br>
                    <img src='https://doprod-statics.s3.amazonaws.com/pictures/logo/9343/large_fit_6709cfc0-d706-49ed-ba8e-d9682a4b8305.png' alt='Elcampito.jpeg' />
                <br>`,
        adoptions: `<h2>COPIA DE LA CONSULTA</h2>
                <h4>Nombre: ${fullName}</h4>
                <h4>Teléfono: ${telephone}</h4>
                <h4>Correo: ${email}</h4>
                <h4>Asunto: ${asunto}</h4>
                <br/>
                <p>${consulta}</p>
                <br/>
                <h4>Recibido en correo: ${campito}</h4>
                <br/>
                <br>
                    <img src='https://doprod-statics.s3.amazonaws.com/pictures/logo/9343/large_fit_6709cfc0-d706-49ed-ba8e-d9682a4b8305.png' alt='Elcampito.jpeg' />
                <br>`,
    };

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

    await transporter.sendMail({
      from: '"El campito Refugio" <elcampitorefugiodev@gmail.com>', // sender address
      to: ( campito ) ? `${email},${campito}` : `${email}`, // list of receivers
      subject: ( pass ) ? `Bienvenido ${pass}` : `${asunto}`, // Subject line
      html: messages[route], // html body
    });

    next();
  } catch (error) {
    console.error(error);
  }
};




module.exports = mailer;
// ---------------------------------------------------------
