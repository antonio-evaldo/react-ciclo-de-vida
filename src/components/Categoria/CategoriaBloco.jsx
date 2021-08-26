import { Component } from "react";
import "./estilo.css";

class CategoriaBloco extends Component {
  render() {
    return (
      <div
        className={`
          categoria
          ${this.props.categoriaDaLista ? "categoriaDaLista" : ""}
          ${this.props.categoriaDoCard ? "categoriaDoCard" : ""}
          ${this.props.categoriaAtiva === this.props.children ? "categoria-ativa" : ""}
        `}
      >
        {this.props.children}
      </div>
    );
  }
}

export default CategoriaBloco;