import React, { useState } from "react";

import styles from "./NavBar.module.css";
import Logo from "../../img/LogoCampitoColor-01 1.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import icon from '../../img/icons/icon_user.png'


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.LinkImg}>
        <img src={Logo} alt="LogoCampito" className={styles.imgLogo} />
      </Link>

      <div onClick={handleClick} className={styles.navIcon}>
        {open ? <FiX /> : <FiMenu />}
      </div>
      <div className={styles.contenedorLinks}>
        <ul className={open ? styles.navLinksActive : styles.navLinks}>
          <li className={styles.navItem}>
            <Link to="/detalle" className={styles.navLink} onClick={closeMenu}>
              Nosotros
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/colaborar"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Colaborá
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/adoptar" className={styles.navLink} onClick={closeMenu}>
              Adoptá
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/visitas" className={styles.navLink} onClick={closeMenu}>
              Visitanos
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/voluntario"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Voluntariado
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/contactanos"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Contactanos
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/denuncia" className={styles.navLink} onClick={closeMenu}>
              Denunciá
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/admin" className={styles.navLink} onClick={closeMenu}>
              <img alt="img_login" src={icon} className={styles.icon}/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
