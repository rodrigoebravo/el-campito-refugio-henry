const nodemailer = require("nodemailer");
// const Usuario = require("../models/nosql/users");
// const { usersModel } = require("../models");


const mailer = async (req, res, next) => {
  try {
    const { email, pass } = req.body;
    let url = req.url;
    let route = url.split("/").pop(); 

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
      to: `${email}`, // list of receivers
      subject: `Bienvenido ${pass}`, // Subject line
      html: messages[route], // html body
    });
    

    next(); 

  } catch (error) {
    console.error(error);
  }
};




module.exports = mailer;
// ---------------------------------------------------------
