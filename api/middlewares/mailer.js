const nodemailer = require("nodemailer");
// const Usuario = require("../models/nosql/users");
// const { usersModel } = require("../models");

const mailer = async (req, res, next) => {
  try {
    let { email, pass, fullName, organization, telephone, asunto, consulta,
      date, location, area, profession, interest, modality, availability, days,
      clarification, description, purpose, vehicle, carpooling, question,
      name, phone, birthday
      
    } = req.body;

    let url = req.url;
    let route = url.split("/").pop();

    let aux = { }

    if ( 
      route === "login" || route === "register" || route === "conatcto" 
      || route === "volunteers" || route === "adoptions" 
    ) { 
        
      if (!organization) organization = "ninguna";
      if ( days ) {
        let dias = "";
        days.array.forEach(element => {
          dias =  dias + `${element}, `
        });
      } else { let dias = "" }

      if (route === "conatcto" || route === "volunteers" || route === "adoptions") {

        let campito = "";

        if ( route === "adoptions") campito = "matiasdentoni@gmail.com" // "adoptantesdelcampito@gmail.com";
        if ( route === "volunteers" ) campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";

        if ( route === "contacto" ) {
          switch (asunto) {
            case "adopciones":
              campito = "matiasdentoni@gmail.com" //  "adoptantesdelcampito@gmail.com";
              break;    
            case "consulta":
              campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";
              break;
            case "reclamo":
              campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";
              break;
            case "donaciones":
              campito = "matiasdentoni@gmail.com" //  "donacionesalcampito@gmail.com";
              break;
            case "débitos automáticos":
              campito = "matiasdentoni@gmail.com" //  "debito@elcampitorefugio.org.ar";
              break;    
            case "campito escolar":
              campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";
              break;
            case "visitas":
              campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";
              break;
            case "denuncias":
              campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";
              break;
            case "prensa":
              campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";
              break;
            case "felicitaciones":
              campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";
              break;
            case "otro":
              campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";
              break;
            default:
              campito = "matiasdentoni@gmail.com" //  "institucional@elcampitorefugio.org.ar";
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
        volunteers: `<h2>Formulario de Voluntarios</h2>
                  <h2>Nombre: ${name}</h2>
                  <br/>
                  <h4>Teléfono: ${phone}</h4>
                  <br/>
                  <h4>Correo: ${email}</h4>
                  <br/>
                  <h4>Fecha de Nacimiento: ${asunto}</h4>
                  <br/>
                  <p>Localidad: ${area}</p>
                  <br/>
                  <h4>Profesión: ${profession}</h4>
                  <br/>
                  <h4>¿Tenés algún área de interés en particular para trabajar en el
                  refugio?</h4>
                  <h4>- ${interest}</h4>
                  <br/>
                  <h4>¿Qué modalidad preferis?: ${modality}</h4>
                  <br/>
                  <h4>¿De cuánto tiempo -en horas- dispones para realizar una tarea
                  voluntaria?: ${availability}</h4>
                  <br/>
                  <h4>¿De cuáles días dispones?: - ${dias}</h4>
                  <br/>
                  <h4>Aclaranos un poco los dos puntos anteriores: ${clarification}</h4>
                  <br/>
                  <h4>¿Qué crees que podes sumar personalmente?</h4>
                  <h5>- No es una pregunta sobre tu profesión, sino sobre vos - </h5>
                  <h6>- ${description}</h6>
                  <br/>
                  <h4>¿Por que querés ser voluntario del Campito?</h4>
                  <h6>- ${purpose}</h6>
                  <br/>
                  <h4>¿Tenés vehiculo propio?: ${vehicle}</h4>
                  <br/>
                  <p>¿Harías carpooling?: ${carpooling}</p>
                  <br/>
                  <h4>¿Querés hacer algún comentario o dejarnos alguna pregunta?</h4>
                  <h6>- ${question}</h6>
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

    };

    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = mailer;
// ---------------------------------------------------------
