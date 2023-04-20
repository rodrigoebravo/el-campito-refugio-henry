import React from "react";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../Footer/Footer";
import imgDenuncia from "../../../assets/img/img-denuncias.jpg"
import styles from "./Denuncias.module.css"

const Denuncias = () => {
  return (
    <div className={styles.container}>
    <BarraDeNavegacion/>
    <main className={styles.parent}>
        <section className={styles.denunciasSection}>
            <h2 className={styles.h2Denuncias}>DENUNCIAS SOBRE EL MALTRATO</h2>

            <h3 className={styles.h3Denuncia}>C&oacute;MO DENUNCIAR EL MALTRATO ANIMAL EN ARGENTINA</h3>
            <p>Muchas veces vemos alg&uacute;n caso de maltrato animal y no sabemos como o donde denunciarlo. Ac&aacute; les damos los
                datos necesarios para hacerlo.</p>
            <p>No hay que tener miedo. Hay que insistir. Involucr&aacute;ndose e insistiendo podemos lograr un cambio. An&iacute;mense
                y sean la voz de los que no tienen voz. Luchen por ellos.</p>
            <p><span>El maltrato animal es:</span></p>
            <ul className={styles.listasDenuncia}>
                <li>Un delito penado por el C&oacute;digo Penal. LEY 14.346.
                </li>
                <li>Un delito de Acci&oacute;n P&uacute;blica, es decir que puede ser denunciado por cualquier persona.
                </li>
                <li>Un delito que se puede denunciar ante la Polic&iacute;a, el Juzgado del Crimen o la Fiscal&iacute;a seg&uacute;n la
                    jurisdicci&oacute;n.</li>
            </ul>
            <ol className={styles.listasDenuncia}>
                <li>Las denuncias son personales, debe efectuarlas la persona que presencia el hecho.
                </li>
                <li>El/la denunciante debe ser mayor de edad (18 años) y acreditar su identidad con Documento Nacional
                    de Identidad, Libreta de Enrolamiento o C&iacute;vica. Si es extranjero y no posee DNI, por medio de su
                    C&eacute;dula de Identidad.
                </li>
                <li>La denuncia debe hacerse por escrito ante las autoridades del lugar en que ocurri&oacute; el hecho y deber&aacute;
                    ser firmada por el denunciante y sellada y firmada por el funcionario que la recibe.
                    <p>En Capital Federal: en la Comisar&iacute;a de la zona o en la C&aacute;mara Nacional de Apelaciones en lo
                        Criminal y Correccional, en Viamonte 1147 – Cap.
                    </p>
                    <p>En Provincia: en la Comisar&iacute;a de la zona &oacute; en UFI Unidad de Fiscal&iacute;a de Instrucci&oacute;n.
                    </p>
                    <p>ES OBLIGACI&oacute;N del funcionario p&uacute;blico (polic&iacute;a) tomar la denuncia, porque LA LEY DE PROTECCI&oacute;N AL
                        ANIMAL NRO. 14.346 es una Ley Penal. NO acceder a realizar una “EXPOSICION CIVIL”. Es importante
                        que pueda tener el texto de la ley en mano al momento de presentarse a realizar la denuncia.
                    </p>
                </li>
                <li>La denuncia no exige mayores formalidades. Basta con describir los hechos considerados delictuosos,
                    el lugar y tiempo en el que ocurren o han ocurrido y, si se lo conoce, el nombre, apodo, señas, y/o
                    domicilio del culpable y cualquier otro dato de inter&eacute;s que pueda facilitar la investigaci&oacute;n. </li>
                <li> Pedir en la Comisar&iacute;a o Fiscal&iacute;a el Nro. de Expediente de manera de poder seguir la causa para que
                    la misma no muera.</li>
                <li>En caso de muerte del animal deber&aacute; colocar el cuerpo en la heladera hasta que un veterinario
                    verifique la muerte y expida un certificado para que se practique una necropsia. La necropsia debe
                    realizarla un organismo oficial para que el certificado tenga validez legal (Ej: Facultad de
                    veterinaria en Capital Federal 4524-8400). Luego agregar los resultados al expediente y seguir la
                    causa.</li>
            </ol>
            <p>A la hora de interponer una denuncia, lo m&aacute;s aconsejable es hacerlo por escrito para que la explicaci&oacute;n
                de los hechos sea detallada y exacta y no se omita ning&uacute;n dato relevante. Es muy importante apoyar
                siempre la denuncia con la mayor cantidad posible de pruebas e informaci&oacute;n sobre la situaci&oacute;n del
                animal, tales como fotograf&iacute;as, v&iacute;deos, testimonios de testigos de los hechos.</p>
            <p><span>Es importante tener presente estos datos:</span></p>
            <ul className={styles.listasDenuncia}>
                <li>Lugar donde se produce el maltrato (agresi&oacute;n, detecci&oacute;n de animales en malas condiciones, etc.).
                </li>
                <li>Fecha y hora exacta en la que lo hemos presenciado.
                </li>
                <li>Nombre y direcci&oacute;n del denunciado (si no se conocen, cualquier informaci&oacute;n que pudiera facilitar su
                    identificaci&oacute;n posterior por parte de las fuerzas de seguridad).
                </li>
                <li>Nombre y direcci&oacute;n de los testigos si los hubiera.
                </li>
                <li>Descripci&oacute;n detallada de los hechos.</li>
                <li>Fotos con c&aacute;mara digital donde aparezca la fecha.
                </li>
                <li>V&iacute;deos que, adem&aacute;s de contener el d&iacute;a y hora sobreimpresos en la grabaci&oacute;n, comiencen filmando un
                    peri&oacute;dico de ese d&iacute;a y, sin dejar de grabar, filmen lo que supuestamente se quiere denunciar. Si el
                    maltrato es continuado, se deben filmar varios d&iacute;as para demostrarlo.
                </li>
                <li>Todos los documentos que tengamos ya sean actas, informes veterinarios, publicidad si es un negocio,
                    etc.</li>
                <li>Llevar una copia de la ley 14.346 o norma que se infringe para aportar a la denuncia.
                </li>
            </ul>
            <p><span>ES MUY IMPORTANTE tener previsto en caso de que se tenga que retirar el animal, d&oacute;nde se lo puede
                    alojar para que no termine en un lugar indeseado.</span></p>
            <h3>LEY 14.346</h3>
            <p><span>PROTECCI&oacute;N DE LOS ANIMALES CONTRA ACTOS DE CRUELDAD </span></p>
            <p>Sancionada el 27/IX/1954; promulgada el 27/X/1954; y publicada en el Bolet&iacute;n Oficial el 5/XI/1954 -
                C&oacute;digo Penal</p>
            <p> <span>Art.lº -</span> Ser&aacute; reprimido con prisi&oacute;n de 15 d&iacute;as a un año, el que infligiere malos tratos o
                hiciere v&iacute;ctima de actos de crueldad a los animales.</p>
            <p><span>Art.2º -</span> Ser&aacute;n considerados actos de maltrato:</p>
            <p>No alimentar en cantidad y calidad suficiente a los animales dom&eacute;sticos o cautivos.
            </p>
            <p>Azuzarlos para el trabajo mediante instrumentos que, no siendo de simple est&iacute;mulo, les provoquen
                innecesarios castigos o sensaciones dolorosas.
            </p>
            <p>Hacerlos trabajar en jornadas excesivas, sin proporcionarles descanso adecuado, seg&uacute;n las estaciones
                clim&aacute;ticas.</p>
            <p>Emplearlos en el trabajo cuando no se hallen en estado f&iacute;sico adecuado.
            </p>
            <p>Estimularlos con drogas sin perseguir fines terap&eacute;uticos.</p>
            <p>Emplear animales en el tiro de veh&iacute;culos que excedan notoriamente sus fuerzas.</p>
            <p><span>Art.3º - 
            </span>Ser&aacute;n considerados acto de crueldad:</p>
            <p>Practicar la vivisecci&oacute;n con fines que no sean cient&iacute;ficamente demostrables y en lugares o por personas que no est&eacute;n debidamente autorizadas para ello.
            </p>
            <p>Mutilar cualquier parte del cuerpo de un animal, salvo que el acto tenga fines de mejoramiento, marcaci&oacute;n o higiene de la respectiva especie animal o se realice por motivos de piedad.
            </p>
            <p>Intervenir quir&uacute;rgicamente animales sin anestesia y sin poseer el t&iacute;tulo de m&eacute;dico o veterinario, con fines que no sean terap&eacute;uticos o de perfeccionamiento t&eacute;cnico operatorio, salvo el caso de urgencia debidamente comprobada.
            </p>
            <p>Experimentar con animales de grado superior en la escala zool&oacute;gica al indispensable seg&uacute;n la naturaleza de la experiencia.
            </p>
            <p>Abandonar a sus propios medios a los animales utilizados en experimentaciones.
            </p>
            <p>Causar la muerte de animales gr&aacute;vidos cuando tal estado es patente en el animal y salvo el caso de las industrias legalmente establecidas que se fundan sobre la explotaci&oacute;n del nonato.
            </p>
            <p>Lastimar o arrollar animales intencionalmente, causarles torturas o sufrimientos innecesarios o matarlos por solo esp&iacute;ritu de perversidad.
            </p>
            <p>Realizar actos p&uacute;blicos o privados de riñas de animales, corridas de toros, novilladas o parodias, en que se mate, hiera u hostilice animales.
            </p>
            <p><span>Art.4º - 
            </span>- Comun&iacute;quese al Poder Ejecutivo.</p>
        </section>
        <section className={styles.denunciaImg}>
            <img src={imgDenuncia} alt="Denuncias" className={styles.imgDenuncia}  />
        </section>
    </main>
    <Footer />
    </div>)
  }

  
export default Denuncias;
