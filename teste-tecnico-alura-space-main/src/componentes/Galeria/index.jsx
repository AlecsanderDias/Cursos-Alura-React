import React, { useState } from 'react';
import Tags from '../Tags';
import styles from "./Galeria.module.scss";
import Card from './Card';
import fotos from "./fotos.json";

function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map(foto => foto.tag))];

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter(foto => {
      return foto.tag === tag;
    });

    setItens(novasFotos);
  }

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} fotos={fotos}/>
        <Card itens={itens} styles={styles}/>
    </section>
  )
}

export default Galeria;