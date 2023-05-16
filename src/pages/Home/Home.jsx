import React from "react";
import "./style.css"
import 'animate.css';
import profile from "../../assets/cartoon.svg";
import jeanCarlos from "../../assets/jeanCarlos.pdf";
import TypeIt from "typeit-react";


export default function Home() {
    return (
        <>
       <header className="header-home">
            <a href="">Tecnologias</a>
            <a href="">Projetos</a>
            <a href="">Contato</a>
        </header>
        <div className=" container-home">
            <div className="title-subtitle">
        <h1 className="animate__animated animate__rubberBand title">Ola , eu sou o Jean Matos</h1>
        <h2 className="  subtitle">
            
        <TypeIt
  getBeforeInit={(instance) => {
      instance.type("Desenvolvedor web full stack !" ).pause(1000).delete(16).pause(1000).type(" Front end !").pause(1000).delete(11).type(' back end !' ).pause(1000).delete(10).type("web full stack !" )
          return instance
}}
/>
 
</h2>
        <button className="btn-download"><a href={jeanCarlos} download>Download CV </a></button>
            </div>
        <div className="container-img animate__animated animate__bounceIn">
        <div>        
        </div>
        <div className="back-img">
                <img  className="img" src={profile} alt="cartoon profile" />
            </div>
            </div>
       
        </div>
    </>
    )
}


