import { useEffect } from "react";
import fundo from "../../assets/fundo.png";
import homefoto from "../../assets/home.png"; 

export default function Home() {
  useEffect(() => {
    document.title = "WorkRobot";
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <img src={homefoto} alt="Foto d eum robô com welcome to workrobot" className="w-64 mb-4" />
    </div>
  );
}
