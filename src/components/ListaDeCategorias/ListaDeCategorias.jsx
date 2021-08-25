import { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if (e.code === "Enter") {
      const categoria = e.target.value;
      e.target.value = "";
      this.props.adicionarCategoria(categoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias-container">
        <ul className="lista-categorias">
          {this.props.categorias.map((categoria, index) => (
            <li key={index}>
              {categoria}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;