function OpcoesHeader({dados}) {
    if(dados[0].includes("static")) {
        return (
            <ul className="flex items-center text-xl gap-5 ml-auto pr-5">
                {dados.map((dado, indice) => <li className="cursor-pointer" key={indice}><img src={dado} alt="Ícone" /></li>)}
            </ul>
          ) 
    } else {
        return (
          <ul className="flex items-center text-xl gap-10 ml-5">
              {dados.map(dado => <li className="uppercase cursor-pointer hover:bg-gray-400" key={dado}><p>{dado}</p></li>)}
          </ul>
        )
    }
}

export default OpcoesHeader;