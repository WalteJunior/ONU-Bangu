import React from "react";
import "./Styled.css";


export default class App extends React.Component {
    componentDidMount(){
        document.title ="Segurança | Nações Unidas de Bangu"
      }
render(){
    return(
        <body>
        <div className="mother-blue">
         <div className="son-box">
           <h4 className="article">Objetivo de Desenvolvimento Sustentável</h4>
           <h1 className="number">1</h1>
           <h2 className="sub">Segurança</h2>
           <h4 className="descr">
           Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas a todos os níveis
           </h4>
         </div>

        </div>
        <p className="intro">
        <strong>Objetivo 1: Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas a todos os níveis</strong>
        </p>
        
        </body>
    )
}
}