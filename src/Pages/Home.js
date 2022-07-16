import React from "react";
import "./Styled.css";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  componentDidMount(){
    document.title ="Nações Unidas de Bangu"
  }

  render() {
    return (
      <body>
        <h1>Os Objetivos de Desenvolvimento Sustentável no Brasil</h1>
          <p>
            Os Objetivos de Desenvolvimento Sustentável são um apelo global à
            ação para acabar com a pobreza, proteger o meio ambiente e o clima e
            garantir que as pessoas, em todos os lugares, possam desfrutar de
            paz e de prosperidade. Estes são os objetivos para os quais as
            Nações Unidas estão contribuindo a fim de que possamos atingir a
            Agenda 2030 no Brasil.
          </p>
          <section>
        <Link to="/Security">
          <div className="sec">
            <h3>1</h3>
            <h4 className="subtit">Segurança</h4>
          </div>
        </Link>
        <Link to="/Nature">
          <div className="nat">
          <h3>2</h3>
          <h4 className="subtit">Natureza</h4>
        </div>
        </Link>
        <Link to="/Transport">
          <div className="bus">
          <h3>3</h3>
          <h4 className="subtit">Transporte</h4>
        </div>
        </Link>
        </section>
      </body>
    );
  }
}
