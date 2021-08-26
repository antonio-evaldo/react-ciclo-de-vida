import { Component } from "react";
import Categoria from "../Categoria/Categoria";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if (e.code === "Enter") {
      const categoria = e.target.value;
      e.target.value = "";
      this.props.adicionarCategoria(categoria);
    }
  }

  _handleClickCategoria(e) {
    const categoria = e.target.textContent;
    if (categoria === this.props.categoriaAtiva) {
      this.props.selecionarCategoria("");
    } else {
      this.props.selecionarCategoria(categoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias-container">
        <ul className="lista-categorias">
          {this.props.categorias.map((categoria, index) => (
            <li
              key={index}
              onClick={this._handleClickCategoria.bind(this)}
            >
              <Categoria
                categoriaDaLista
                categoriaAtiva={this.props.categoriaAtiva}
              >
                {categoria}
              </Categoria>
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