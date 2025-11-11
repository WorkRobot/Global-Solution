import { useEffect } from "react";
import fundo from "../../assets/fundo.png";
import homefoto from "../../assets/home.png"; 

export default function Home() {
  useEffect(() => {
    document.title = "WorkRobot";
  }, []);

  return (
    <div>
      <img src={homefoto} alt="Foto de um robô com welcome to workrobot" className="homefoto" />
    </div>
  );
}
