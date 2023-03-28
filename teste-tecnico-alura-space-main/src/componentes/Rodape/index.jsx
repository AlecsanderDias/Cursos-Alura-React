import React from 'react';
import styles from "./Rodape.module.scss";
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';


function Rodape() {
  return (
    <footer className={styles.footer}>
        <div  className={styles.footer__icones}>
            <img src={facebook} alt="Logo do facebook" />
            <img src={twitter} alt="Logo do twitter" />
            <img src={instagram} alt="Logo do instagram" />
        </div>
        <h2  className={styles.footer__texto}>Desenvolvido por Alura.</h2>
    </footer>
  );
}

export default Rodape;