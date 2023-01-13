const nodemailer = require("nodemailer");
// const Usuario = require("../models/nosql/users");
// const { usersModel } = require("../models");

const mailer = async (req, res, next) => {
  try {
    const { body } = req.body;
    console.log(body)
    // console.log(email, "soy el mail de pass");
    // console.log(id, "soy el mail de meiler");

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
      to: `elcampitorefugiodev@gmail.com`, // list of receivers
      subject: `consulta general`, // Subject line
      html: `
      <h2>Mensaje de Nicolas oviedo</h2>
      <br>
              <h2> Nicolas Oviedo lleno un formulario de contacto, que pertenece a la organizacion "perritos". </h2>
             <h2> su correo es briannoviedo@gmail.com.</h2>
             <h2> su telefono es 3585137300.</h2>
             <br>
             <h3>Consulta</h3>
             <h4>info adicional</h4>
            
              
              <br>
              <p>El campito refugio staff.</p>`,
    });

   next()
  } catch (error) {
    console.error(error);
  }
};

module.exports = mailer;
// ---------------------------------------------------------
