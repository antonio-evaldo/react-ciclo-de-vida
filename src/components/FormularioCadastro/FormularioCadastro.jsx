import { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)}
          autoFocus
        />
        
        <textarea
          placeholder="Escreva sua nota..."
          rows={10}
          onChange={this._handleMudancaTexto.bind(this)}
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