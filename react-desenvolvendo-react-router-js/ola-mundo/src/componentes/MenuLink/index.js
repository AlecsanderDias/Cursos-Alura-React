import { NavLink} from "react-router-dom";
import styles from './MenuLink.module.css';

function MenuLink({children, to}) {
    const destacado = (ativo) => {
        return ativo === true ? styles.linkDestacado : "";
    };

    return(
        <NavLink className={({isActive}) => `${styles.link} ${destacado(isActive)}`} to={to} end>{children}</NavLink>
    );
}

export default MenuLink;