import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

import "./assets/reset.css";
import "./assets/app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };

    const novoEstado = {
      notas: [...this.state.notas, novaNota]
    }

    this.setState(novoEstado);
  }

  deletarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);

    const novoEstado = {
      // notas: this.state.notas.filter(nota => (
      //   nota.indice !== indice
      // ))
    }

    this.setState({
      notas: arrayNotas
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
          notas={this.state.notas}
          apagarNota={this.deletarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;
