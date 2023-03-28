import search from './../../assets/search.png';
import logo from './../../assets/logo.png';
import styles from './Cabecalho.module.scss';

function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo da Alura Space"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura..."></input>
                <img src={search} alt="Ícone de lupa"/> 
            </div>
        </header>
    );
}

export default Cabecalho;