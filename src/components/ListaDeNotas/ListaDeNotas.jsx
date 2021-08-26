import { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          if (this.props.categoriaAtiva === "") {
            return (
              <li key={index}>
                <CardNota
                  titulo={nota.titulo}
                  texto={nota.texto}
                  categoria={nota.categoria}
                  indice={index}
                  apagarNota={this.props.apagarNota}
                />
              </li>
            )
          } else if (nota.categoria === this.props.categoriaAtiva) {
            return (
              <li key={index}>
                <CardNota
                  titulo={nota.titulo}
                  texto={nota.texto}
                  categoria={nota.categoria}
                  indice={index}
                  apagarNota={this.props.apagarNota}
                />
              </li>
            )
          }
          return null;
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
