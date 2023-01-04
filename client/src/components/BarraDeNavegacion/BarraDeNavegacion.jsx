import React, { useState } from "react"
import styles from "./BarraDeNavegacion.module.css";
import Logo from "../../assets/img/LogoCampitoColor-01.svg"
import {  FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BarraDeNavegacion = () => {
  
  const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};


	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<header>
		<div className={styles.headerNav}>
		<Link to="./"><img src={Logo} className={styles.imgLogo} alt="Logo del campito"/></Link>
		<div onClick={handleClick} className={styles.navIcon}>
				{open ? <FiX /> :<i class="fas fa-bars appear fa-4xs"></i>}	</div>
		</div>
		<nav>
			<ul className={open ? styles.navLinksActive : styles.navLinks}>
						<li> <Link to="/detalle" onClick={closeMenu}> Nosotros</Link> </li>
						<li className={styles.hidden}>|</li>
						<li> <Link to="/colaborar" onClick={closeMenu}> Colabor&aacute;</Link> </li>
						<li className={styles.hidden} >|</li>
						<li> <Link to="/adoptar"  onClick={closeMenu}> Adopt&aacute;</Link> </li>
						<li className={styles.hidden}>|</li>
						<li> <Link to="/voluntario"  onClick={closeMenu}> Voluntariado</Link> </li>
						<li className={styles.hidden}>|</li>
						<li> <Link to="/proyectos"  onClick={closeMenu}> Proyectos</Link> </li>
						<li className={styles.hidden}> |</li>
						<li> <Link to="/contactanos"  onClick={closeMenu}> Contactanos</Link> </li>
						<li className={styles.hidden}> |</li>
						<li className={styles.navItem}><Link to="/profile" className={styles.navLink} onClick={closeMenu}> Perfil	
						</Link> </li>
				</ul>
		</nav>
	
		
</header>
	);
};

export default BarraDeNavegacion;
