import logo from "../../assets/imagens/logo.svg"

function Logo() {
  return (
    <>
        <img src={logo} alt="Logo da Alura Books" className="px-1"/>
        <p className="text-2xl"><strong>Alura</strong>Books</p>
    </>
  )
}

export default Logo