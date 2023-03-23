import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    return (
        <div className="lista-suspensa">
            <label>{props.nomeCampo}</label>
                <select value={props.valor} onChange={aoDigitado} required={props.obrigatorio}>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
        </div>
    )
}

export default ListaSuspensa;