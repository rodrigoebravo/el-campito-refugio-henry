import styles from "./QuieroColaborar.module.css";
import mercadoLibre from "../../assets/img/logosPasarelas/mercado-pago.png";
import cafecito from "../../assets/img/logosPasarelas/cafecito.png";
import paypal from "../../assets/img/logosPasarelas/paypal.svg";
import Footer from "../Footer/Footer";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
import { useDispatch } from "react-redux";
import postMeli from "../../redux/actions/action";
import { useState } from "react";
import { payWithPayPal } from "../../login";

const QuieroColaborar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0); //para input del usuario
  const unique = "Donación única"
  const handleClick = (title, unit_price) => {
    dispatch(postMeli({ title, unit_price }));
  };

  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <main className={styles.colaborar}>
        <section>
          <h2 className={styles.h2Colborar}>¡QUIERO COLABORAR!</h2>
          <p className={styles.pColaborar}>
            El Campito Refugio es una ONG con sus balances al día.
          </p>
          <p className={styles.pColaborar}>
            Nuestra cuenta bancaria está auditada a nombre del refugio
            por lo cual cada donación es rendida.
          </p>
          <p className={styles.pColaborar}>
            Para solicitar tu recibo legal o confirmar una transacción,
            envianos el comprobante a{" "}
            <span className={styles.spanColaborar}>
              <a className={styles.aColaborar} href="/#">
                madrinasdelcampito@gmail.com
              </a>
            </span>
          </p>
        </section>
        <section>
          <article className={styles.parentGrid2}>
            <div className={styles.cuentaBancaria}>
              <h3 className={styles.h3Colaborar}>CUENTA BANCARIA</h3>
              <p className={styles.pCuentaBancaria}>
                <span className={styles.spanColaborar}>
                  Banco Santander Rio
                </span>
              </p>
              <p className={styles.pCuentaBancaria}>Refugio El Campito</p>
              <p className={styles.pCuentaBancaria}>
                Cta Cte n° 0123787 - Sucursal 180
              </p>
              <p className={styles.pCuentaBancaria}>Alias refugioelcampito</p>
              <p className={styles.pCuentaBancaria}>
                CBU 0720180220000001237872
              </p>
              <p className={styles.pCuentaBancaria}>CUIT 30-71212593-0</p>
            </div>

            <div className={styles.debitoAutomatico}>
              <h3>
                <span>POR DÉBITO AUTOMÁTICO</span>
              </h3>
              <h3>CON TARJETA VISA Y VISA ELECTRON</h3>
              <p>
                Si querés ser madrina o padrino del refugio colaborando
                mensualmente, podés hacerlo utilizando tu tarjeta de
                crédito. Elegí el monto que quieras donar, y se
                debitará automáticamente de tu cuenta todos los
                meses.
              </p>
              <div className={styles.buttonFormDiv}>
                <button className={styles.buttonForm}>
                  <a href="https://www.donaronline.org/refugio-el-campito/colabore-con-el-refugio-el-campito">
                    Completá el formulario
                  </a>
                </button>
                <button className={styles.buttonForm}>
                  <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848573564c018579faf7e504ff">  
                    Suscripción por Mercado Pago
                  </a>
                </button>
              </div>
              {/* funcional para demo */}
              {/* <button className={styles.buttonForm}> Complet&aacute; el formulario </button> */}
            </div>
          </article>
          <article className={styles.parentGrid5}>
            <div className={styles.medioDePagoML}>
              <img
                src={mercadoLibre}
                className={styles.imgColaborar}
                alt="Logo de mercado pago"
              />
            </div>
            <button
              className={styles.buttonML}
              onClick={() => handleClick("$200", 200)}
            >
              $200
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick(unique, 300)}
            >
              $300
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick(unique, 500)}
            >
              $500
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick(unique, 1000)}
            >
              $1000
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick(unique, 3000)}
            >
              $3000
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick(unique, 5000)}
            >
              $5000
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick(unique, 7000)}
            >
              $7000
            </button>
            {/* <button
              className={styles.buttonML}
              onClick={() => handleClick(unique, 10000)}
            >
              $10000
            </button> */}
            <form onSubmit={(e) => { e.preventDefault(); handleClick(unique, parseInt(value)); }}>
              <button type="submit" className={styles.buttonML}>
                $ <input 
                    type="number" min="1" step="any"
                    style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1.2em"}} //hice estilos en linea porque no funcionaba exportando css
                    appearance="none" 
                    className={styles.inputColaborar}
                    value={value} onChange={(e) => setValue(e.target.value)} 
                  />
              </button>
            </form>
          </article>
          <article className={styles.parentGrid5}>
            <div className={styles.medioDePagoCF}>
              <img
                src={cafecito}
                className={styles.imgColaborar}
                alt="Logo de dinero mail"
              />
            </div>
            <button className={styles.buttonCF}>$15</button>
            <button className={styles.buttonCF}>$50</button>
            <button className={styles.buttonCF}>$100</button>
            <div className={styles.buttonCF}>
              <input className={styles.inputColaborar} type="text" />
              <p className={styles.noButton}>Otro $ (solo números,</p>
              <p className={styles.noButton}>sin centavos)</p>
            </div>
            <button className={styles.buttonCF}>US15</button>
            <button className={styles.buttonCF}>US50</button>
            <button className={styles.buttonCF}>US100</button>
            <div className={styles.buttonCF}>
              <input className={styles.inputColaborar} type="text" />
              <p className={styles.noButton}>Otro $ (solo números,</p>
              <p className={styles.noButton}>sin centavos)</p>
            </div>
          </article>
          <article className={styles.parentGridPaypal}>
            <div className={styles.medioDePagoPaypal}>
              <img
                src={paypal}
                className={styles.imgColaborar}
                alt="Logo de pay pal"
              />
            </div>
            <button className={styles.buttonPaypal} onClick={payWithPayPal()}>
              DONÁ VÍA PAYPAL
            </button>
          </article>
          <article className={styles.parentGridPaypal}>
            <div className={styles.medioDePagoPaypal}>
            <img
                src={cafecito}
                className={styles.imgColaborar}
                alt="Logo de cafecito"
              />
            </div>
            <button className={styles.buttonPaypal}>
              <a href="https://cafecito.app/refugioelcampito" rel='noreferrer' target='_blank'>  
                INVITANOS UN CAFECITO
              </a>
            </button>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuieroColaborar;
