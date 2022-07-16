import React from "react";
import "./Styled.css";


export default class App extends React.Component {
  componentDidMount(){
    document.title ="Transporte | Nações Unidas de Bangu"
  }
render(){
    return(
        <body>
        <div className="mother-bus">
         <div className="son-box">
           <h4 className="article">Objetivo de Desenvolvimento Sustentável</h4>
           <h1 className="number">3</h1>
           <h2 className="sub">Transporte</h2>
           <h4 className="descr">
            Melhorar a qualidade da viagem do passageiro e aumentar a frota de linhas de onibûs para evitar superlotação nos transportes publicos
           </h4>
           </div>
        </div>
        <p className="intro">
        <strong>Objetivo 3: Melhorar a qualidade da viagem do passageiro e aumentar a frota de linhas de onibûs para evitar superlotação nos transportes publicos</strong>
        </p>
        </body>
    )
}
}