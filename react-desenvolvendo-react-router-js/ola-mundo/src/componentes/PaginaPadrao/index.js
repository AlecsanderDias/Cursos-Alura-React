import { Outlet } from "react-router-dom";
import Banner from "componentes/Banner";


function PaginaPadrao() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    );
}

export default PaginaPadrao;