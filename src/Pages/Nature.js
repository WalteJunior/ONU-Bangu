import React from "react";
import { Link } from "react-router-dom";
import "./Styled.css";


export default class App extends React.Component {
  componentDidMount(){
    document.title ="Natureza | Nações Unidas de Bangu"
  }
render(){
    return(
        <body>
        <div className="mother-nature">
         <div className="son-box">
          <h4 className="article">Objetivo de Desenvolvimento Sustentável</h4>
          <h1 className="number">2</h1>
          <h2 className="sub">Natureza</h2>
          <h4 className="descr">
            Proteger, restaurar e promover o uso sustentável dos ecossistemas
            terrestres, gerir de forma sustentável as florestas, combater a
            desertificação, travar e reverter a degradação dos solos e travar a
            perda da biodiversidade
          </h4>
         </div>
        </div>
        <p className="intro">
        <strong>Objetivo 2: Proteger, restaurar e promover o uso sustentável dos ecossistemas
            terrestres, gerir de forma sustentável as florestas, combater a
            desertificação, travar e reverter a degradação dos solos e travar a
            perda da biodiversidade</strong>
        </p>
        <p className="intro"><strong>2.1</strong>Até 2022, aplicar multas para quem joga lixo na rua</p>
        <p className="intro"><strong>2.1</strong>Até 2022, posicionar em pontos estratégicos, latas de lixo</p>
        <Link to="/">
          <button>Voltar</button>
          </Link>
        </body>
    )
}
}