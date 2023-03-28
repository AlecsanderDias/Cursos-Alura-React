import React from 'react';
import Tags from '../Tags';
import styles from "./Galeria.module.scss";
import Card from './Card';
import fotos from "./fotos.json";

function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Card itens={fotos} styles={styles}/>
    </section>
  )
}

export default Galeria;