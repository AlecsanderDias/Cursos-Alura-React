import Logo from "./components/Logo";


function App() {
  const opcoes = ['Categorias', 'Minha Estante', 'Favoritos'];
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-950 to-blue-400">
      <header className="bg-gray-200 flex py-3 px-2">
        <Logo/>
        <ul className="flex items-center text-xl gap-10 ml-5">
          {opcoes.map(opcao => <li className="uppercase cursor-pointer hover:bg-gray-400" key={opcao}><p>{opcao}</p></li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
