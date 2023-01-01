import styles from './QuieroColaborar.module.css'
import mercadoLibre from '../../assets/img/logosPasarelas/mercado-pago.png'
import cafecito from '../../assets/img/logosPasarelas/cafecito.png'
import paypal from '../../assets/img/logosPasarelas/paypal.svg'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/NavBar'
const QuieroColaborar = () => {
  return (
    <div>
      <Navbar/>
      <main className={styles.colaborar}>
        <section>
            <h2 className={styles.h2Colborar}>¡QUIERO COLABORAR!</h2>
            <p className={styles.pColaborar}>El Campito Refugio es una ONG con sus balances al d&iacute;a.</p>
            <p className={styles.pColaborar}>Nuestra cuenta bancaria est&aacute; auditada a nombre del refugio por lo cual cada donaci&oacute;n es
                rendida.</p>
                <p className={styles.pColaborar}>Para solicitar tu recibo legal o confirmar una transacci&oacute;n, envianos el comprobante a <span className={styles.spanColaborar}><a  className={styles.aColaborar}href="#">madrinasdelcampito@gmail.com</a></span></p>
        </section>
        <section>
            <article className={styles.parentGrid2}>
                   <div className={styles.cuentaBancaria}>
                    <h3 className={styles.h3Colaborar}>CUENTA BANCARIA</h3>
                    <p className={styles.pCuentaBancaria}><span className={styles.spanColaborar}>Banco Santander Rio</span></p>
                    <p className={styles.pCuentaBancaria}>Refugio El Campito</p>
                    <p className={styles.pCuentaBancaria}>Cta Cte n° 0123787 - Sucursal 180</p>
                    <p className={styles.pCuentaBancaria}>Alias refugioelcampito</p>
                    <p className={styles.pCuentaBancaria}>CBU 0720180220000001237872</p>
                    <p className={styles.pCuentaBancaria}>CUIT 30-71212593-0</p>
                </div>
               
                <div className={styles.debitoAutomatico}>
                <h3><span>POR D&Eacute;BITO AUTOM&Aacute;TICO</span></h3>
                    <h3>CON TARJETA VISA Y VISA ELECTRON</h3>
                    <p>Si quer&eacute;s ser madrina o padrino del refugio colaborando mensualmente, pod&eacute;s
                        hacerlo utilizando tu tarjeta de cr&eacute;dito. Eleg&iacute; el monto que quieras donar, y se
                        debitar&aacute; autom&aacute;ticamente de tu cuenta todos los meses.</p>
                    <button className={styles.buttonForm}> Complet&aacute; el formulario </button>
                </div>
            </article>
            <article className={styles.parentGrid5}>
              
                <div className={styles.medioDePagoML}>
                    <img src={mercadoLibre} className={styles.imgColaborar} alt="Logo de mercado pago"/>
                </div>
                <button className={styles.buttonML}>$200</button>
                <button className={styles.buttonML}>$300</button>
                <button className={styles.buttonML}>$500</button>
                <button className={styles.buttonML}>$1000</button>
                <button className={styles.buttonML}>$3000</button>
                <button className={styles.buttonML}>$5000</button>
                <button className={styles.buttonML}>$7000</button>
                <button className={styles.buttonML}>$10000</button>
            </article>
            <article className={styles.parentGrid5}>
              <div className={styles.medioDePagoCF}>
                    <img src={cafecito}  className={styles.imgColaborar} alt="Logo de dinero mail"/>
                </div>
                <button className={styles.buttonCF}>$15</button>
                <button className={styles.buttonCF}>$50</button>
                <button className={styles.buttonCF}>$100</button>
                <div className={styles.buttonCF}>
                <input className={styles.inputColaborar} type="text"/>
                    <p className={styles.noButton}>Otro $ (solo n&uacute;meros,</p>
                    <p className={styles.noButton}>sin centavos)</p>
                </div>
                <button className={styles.buttonCF}>US15</button>
                <button className={styles.buttonCF}>US50</button>
                <button className={styles.buttonCF}>US100</button>
                <div className={styles.buttonCF}>
                    <input className={styles.inputColaborar} type="text"/>
                    <p className={styles.noButton}>Otro $ (solo n&uacute;meros,</p>
                    <p className={styles.noButton}>sin centavos)</p>
                </div>
            </article>
            <article className={styles.parentGridPaypal}>
                <div className={styles.medioDePagoPaypal}>
                    <img src={paypal}  className={styles.imgColaborar} alt="Logo de pay pal"/>
                </div>
                <button className={styles.buttonPaypal}>DON&Aacute; V&Iacute;A PAYPAL</button>
            </article>
        </section>
    </main>
  
      <Footer/>
    
    </div>

  )
}

export default QuieroColaborar;