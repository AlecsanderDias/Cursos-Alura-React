import Logo from "./components/Logo";
import perfil from "./assets/imagens/perfil.svg";
import sacola from "./assets/imagens/sacola.svg";
import OpcoesHeader from "./components/OpcoesHeader";

function App() {
  const opcoes = ['Categorias', 'Minha Estante', 'Favoritos'];
  const imagens = [perfil, sacola];
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-950 to-blue-400">
      <header className="bg-gray-200 flex py-3 px-2">
        <Logo/>
        <OpcoesHeader dados={opcoes}/>
        <OpcoesHeader dados={imagens}/>
      </header>
    </div>
  );
}

export default App;
