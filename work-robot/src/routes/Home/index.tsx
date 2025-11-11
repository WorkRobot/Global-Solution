import { useEffect } from "react";
import homefoto from "../../assets/home.png"; 

export default function Home() {
  useEffect(() => {
    document.title = "WorkRobot";
  }, []);

  return (
    <main >
      <img 
        src={homefoto} 
        alt="Foto de um robô com welcome to workrobot" 
        className="homefoto w-[40%] max-w-[800px] h-auto"
      />
    </main>
  );
}
