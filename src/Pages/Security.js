import React from "react";
import { Link } from "react-router-dom";
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
        <p className="intro"><strong>1.1</strong>Até 2028,reforçar o nível de segurança, com patrulhas frequentes da polícia em pontos estratégicos, principalmente à noite quando está tendo vários assaltos</p>
        <p className="intro"><strong>1.2</strong>Até 2028,melhorar a iluminação de algumas áreas que ficam totalmente escuras à noite.</p>
        <p className="intro"><strong>1.3</strong>Até 2028, ter um meio onde moradores pudessem se comunicar sobre as situações recorrentes, como um lugar para avisar onde está sendo mais perigoso</p>
        <Link to="/">
          <button>Voltar</button>
          </Link>
        </body>
    )
}
}