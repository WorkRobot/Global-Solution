import { Outlet } from "react-router-dom";
export default function App(){
  return(
    <div>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  );
}
