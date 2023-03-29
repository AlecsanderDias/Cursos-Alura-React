import React from 'react';
import styles from "./Rodape.module.scss";
import {ReactComponent as Facebook} from '../../assets/facebook.svg';
import {ReactComponent as Twitter} from '../../assets/twitter.svg';
import {ReactComponent as Instagram} from '../../assets/instagram.svg';


function Rodape() {
  return (
    <footer className={styles.footer}>
        <div  className={styles.footer__icones}>
            <Facebook />
            <Twitter />
            <Instagram />
        </div>
        <h2  className={styles.footer__texto}>Desenvolvido por Alura.</h2>
    </footer>
  );
}

export default Rodape;