import { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _handleResetarForm() {
    this.titulo = "";
    this.texto = "";
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.criarNota(this.titulo, this.texto, this.categoria);

    // const form = event.target;
    // form.reset();
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._criarNota.bind(this)}
        onReset={this._handleResetarForm.bind(this)}
      >
        <select
          defaultValue=""
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option value="" disabled hidden>
            Selecione uma categoria
          </option>

          {this.props.categorias.map((categoria, index) => (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Título"
          onInput={this._handleMudancaTitulo.bind(this)}
          autoFocus
        />

        <textarea
          placeholder="Escreva sua nota..."
          rows={10}
          onInput={this._handleMudancaTexto.bind(this)}
        />

        <div className="button-container">
          <button>
            Criar Nota
          </button>
        </div>
      </form>
    );
  }
}

export default FormularioCadastro;