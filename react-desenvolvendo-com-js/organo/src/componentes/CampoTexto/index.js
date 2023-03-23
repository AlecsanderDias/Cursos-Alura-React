import "./CampoTexto.css";

const CampoTexto = (props) => {
    // nomeCampo = this.props.nomeCampo;
    const textoPlaceholder = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.nomeCampo}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={textoPlaceholder}/>
        </div>
    );
}

export default CampoTexto;