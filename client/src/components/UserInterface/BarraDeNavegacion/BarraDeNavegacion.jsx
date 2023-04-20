import React, { useState } from "react";
import styles from "./BarraDeNavegacion.module.css";
import Logo from "../../../assets/img/LogoCampitoColor-01.svg"
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
				<Link to="./">
					<img src={Logo} className={styles.imgLogo} alt="Logo del campito"/>
				</Link>
				<div onClick={handleClick} className={styles.navIcon}>
						{
							open ? 
							<i className="fas fa-bars appear fa-4xs"></i> 
							: 
							<i className="fas fa-bars appear fa-4xs"></i>
						}	
				</div>
			</div>
			<nav>
				<ul className={open ? styles.navLinksActive : styles.navLinks}>
							<li key="index1"> 
								<Link to="/detalle" onClick={closeMenu}> 
									Nosotros
								</Link> 
							</li>
							<li key="index2" className={styles.hidden}>|</li>
							<li key="index21"> 
								<Link to="/colaborar" onClick={closeMenu}> 
									Colabor&aacute;
								</Link> 
							</li>
							<li  key="index3" className={styles.hidden} >|</li>
							<li key="index74"> 
								<Link to="/adoptar"  onClick={closeMenu}> 
									Adopt&aacute;
								</Link> 
							</li>
							<li key="index4" className={styles.hidden}>|</li>
							<li key="index22"> 
								<Link to="/voluntario"  onClick={closeMenu}> 
									Voluntariado
								</Link> 
							</li>
							<li key="index5" className={styles.hidden}>|</li>
							<li> 
								<Link to="/proyectos"  onClick={closeMenu}> 
									Proyectos
								</Link> 
							</li>
							<li  key="index6" className={styles.hidden}> |</li>
							<li key="index72"> 
								<Link to="/contactanos"  onClick={closeMenu}> 
									Contactanos
								</Link> 
							</li>
							<li key="index71"className={styles.hidden}>|</li>
							<li key="index7" className={styles.navItem}>
								<Link to="/profile" className={styles.navLink} onClick={closeMenu}> 
									Perfil	
								</Link> 
							</li>
					</ul>
			</nav>				
		</header>
	);
};

export default BarraDeNavegacion;
