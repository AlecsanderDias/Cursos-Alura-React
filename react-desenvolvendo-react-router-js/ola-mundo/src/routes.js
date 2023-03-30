import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import NaoEncontrado from "Paginas/NaoEncontrado";
import Post from "Paginas/Post";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={ <PaginaPadrao />}>
          <Route index element={ <Inicio /> }/>
          <Route path="sobremim" element={ <SobreMim /> }/>
        </Route>
        <Route path="posts/:id/*" element={ <Post /> }/>
        <Route path="*" element={<NaoEncontrado />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>   
  );
}

export default AppRoutes;
