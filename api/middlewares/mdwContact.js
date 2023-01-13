const nodemailer = require("nodemailer");
// const Usuario = require("../models/nosql/users");
// const { usersModel } = require("../models");

const mdwContact = async (req, res, next) => {
  try {
        let { email,  fullName, organization, telephone, asunto, consulta      
        } = req.body;

        let url = req.url;
        let route = url.split("/").pop();

        if (!organization) organization = "ninguna";
  

        let campito = "";

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
              campito = "matiasdentoni@gmail.com" // 
               "institucional@elcampitorefugio.org.ar";
              break;
          }
        };

      const messages = {
        
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
        to: `${email},${campito}`, // list of receivers
        subject: `${asunto}`, // Subject line
        html: messages[route], // html body
      });


    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = mdwContact;
// ---------------------------------------------------------
