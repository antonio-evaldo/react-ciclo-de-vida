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
    const novaNota = {titulo, texto};

    const novoEstado = {
      notas: [...this.state.notas, novaNota]
    }

    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
