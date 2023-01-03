const nodemailer = require("nodemailer");
const Usuario = require("../models/nosql/users");

const mailer = async (req, res, next) => {
  const { email, pass } = req.body;

  Usuario.findOne({ email }).then((usuario) => {
    // if (usuario) {
    //   res.json("Ya se registro ese email.");
    // } else {
    console.log(email);
    console.log(pass);
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "elcampitorefugiodev@gmail.com", // generated ethereal user
        pass: "gfbjvbpweuafacmp ", // generated ethereal password
      },
    });

    // send mail with defined transport object
    const mailer = async () => {
      let info = await transporter.sendMail({
        from: '"El campito Refugio" <elcampitorefugiodev@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: `Bienvenido ${pass} `, // Subject line
        html: `
          <h2>Se inicio session con el email : ${email} en el Campito Regufio!</h2>
          <br>
                <p>Ingresa <a href=${"http://localhost:3000"} style="color:blue">AQUI</a></p>
                  <br>
                  <img src='https://doprod-statics.s3.amazonaws.com/pictures/logo/9343/large_fit_6709cfc0-d706-49ed-ba8e-d9682a4b8305.png' alt='Elcampito.jpeg' />
                  <br>
                  <p>El campito refugio staff.</p>`, // html body
      });
      return info;
    };
    mailer();
    next();
    // }
  });
};

module.exports = mailer;
