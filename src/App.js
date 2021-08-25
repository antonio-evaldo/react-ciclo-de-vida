import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";

import "./assets/reset.css";
import "./assets/app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
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

    this.setState({
      notas: arrayNotas
    });
  }

  adicionarCategoria(categoria) {
    this.setState({
      categorias: [...this.state.categorias, categoria]
    })
  }


  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />

        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />

          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
