const nodemailer = require("nodemailer");
// const Usuario = require("../models/nosql/users");
// const { usersModel } = require("../models");

const mdwVolunteer = async (req, res, next) => {
  try {
        let { location, area, people, accordance, description, otherAnimals,
            expatiate, castrated, reason, vaccinated, events, holidays, babies,
            allergies, items, home, freshAir, status, authorization, sleep,
            loneliness, walk, moving, adaptation, sterilization,
            name, birthday, email, phone, nameDog,
        } = req.body;

        let campito = "matiasdentoni@gmail.com" // "adoptantesdelcampito@gmail.com";

        let url = req.url;
        let route = url.split("/").pop();

        if ( items ) {
            let destino = "";
            items.array.forEach(element => {
              destino =  destino + `${element}, `
            });
          } else { let destino = "" };  

        if ( home ) {
            let vivienda = "";
            home.array.forEach(element => {
                vivienda =  vivienda + `${element}, `
            });
          } else { let vivienda = "" };  
        
        if ( freshAir ) {
            let aireLibre = "";
            freshAir.array.forEach(element => {
                aireLibre =  aireLibre + `${element}, `
            });
          } else { let aireLibre = "" };  

        

        
      const messages = {
        
        volunteers: `<h2>Formulario de Adopción</h2>
                    <br/><br/>
                  <h3>Nombre del Camperito: ${nameDog}</h3>
                  <br/>
                  <h3>Nombre y Apellido: ${name}</h3>
                  <br/>
                  <h4>Teléfono: ${phone}</h4>
                  <br/>
                  <h4>Correo: ${email}</h4>
                  <br/>
                  <h4>Fecha de Nacimiento: ${birthday}</h4>
                  <br/>
                  <p>Domicilio: ${location}</p>
                  <br/>
                  <p>Localidad: ${area}</p>
                  <br/>
                  <h4>¿Cuantas Personas viven en la casa?: ${toString(people)}</h4>
                  <br/>
                  <h4>¿Estan todas de acuerdo en adoptar?: ${accordance}</h4>
                  <br/>
                  <h4>Composición del núcleo familiar -Relación y edades de las
                  Personas que viven en la casa-. Nos permite saber si el
                  Camperito es apto para tu hogar.</h4>
                  <p>- ${description}</p>
                  <br/>
                  <h4>¿Tenes otros animales? -Nos permite saber si el Camperito es
                  apto para tu hogar-: ${otherAnimals}</h4>
                  <br/>
                  <h4>¿Cuántos ? ¿Nos cuentan un poco sobre ellos?:</h4>
                  <h4> ${expatiate}</h4>
                  <br/>
                  <h4>¿Estan castrados?: ${castrated}</h4>
                  <br/>
                  <h4>¿Cómo fueron castrados? Si no están castrados ¿cual es el
                  motivo?: </h4>
                  <h4>-${reason}</h4>
                  <br/>
                  <h4>¿Estan vacunados? ${vaccinated}</h4>
                  <br/>
                  <h4>¿Tuviste otros animales? ¿Qué pasó con ellos?</h4>
                  <h6>- ${events}</h6>
                  <br/>
                  <h4>¿Han pensado que harán en vacaciones? Explique</h4>
                  <h6>- ${holidays}</h6>
                  <br/>
                  <h4>Han pensado que harán si hay un embarazo o llega un bebé?
                  Explique:</h4>
                  <h4>-${babies}</h4>
                  <br/>
                  <h4>Han pensado que harán si hay alguien alérgico? Explique:</h4>
                  <h4>-${allergies}</h4>
                  <br/>
                  <h4>¿Por que se interesan en este animal en particular?</h4>
                  <h5>Cómo conocemos el carácter de nuestros perros la pregunta nos
                  permite evaluar si es el indicado para lo que buscan</h5>
                  <h6>- ${destino}</h6>
                  <br/>
                  <h4>¿Donde vivirá el adoptado?</h4>
                  <h4>- ${vivienda}</h4>
                  <br/>
                  <h4>¿Posee espacio al aire libre?</h4>
                  <h4>- ${aireLibre}</h4>
                  <br/>
                  <h4>¿Son propietarios o alquilan? -${status}</h4>
                  <br/>
                  <h4>¿Cuentan con autorización del propietario o la comunidad de
                  vecinos para tener animales de compañia? ${authorization}</h4>
                  <br/>
                  <h4>¿Dónde dormirá el adoptado? -${sleep}</h4>
                  <br/>
                  <h4>¿Estará solo? ¿Cuánto tiempo?</h4>
                  <h6>- ${loneliness}</h6>
                  <br/>
                  <h4>¿Quién lo paseará? ¿Cuántas veces al día?</h4>
                  <h4>-${walk}</h4>
                  <br/>
                  <h4>En caso de mudarse, ¿ha pensado que hará con el perro?</h4>
                  <h4>-${moving}</h4>
                  <br/>
                  <h4>¿Están de acuerdo en tener un tiempo de adaptación?- ${adaptation}</h4>
                  <br/>
                  <h4>¿Qué piensa de la esterilización de animales de compañía?</h4>
                  <h6>- ${sterilization}</h6>
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
        to: `${email}, ${campito}`, // list of receivers
        subject: `Formulario para Adopciones`, // Subject line
        html: messages[route], // html body
      });


    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = mdwVolunteer;
// ---------------------------------------------------------
