import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";

import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

import "./assets/reset.css";
import "./assets/app.css";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();

    this.state = {
      categoriaAtiva: ""
    };
  }

  selecionarCategoria(categoria) {
    this.setState({
      categoriaAtiva: categoria
    })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNota}
        />

        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria}
            selecionarCategoria={this.selecionarCategoria.bind(this)}
            categoriaAtiva={this.state.categoriaAtiva}
          />

          <ListaDeNotas
            notas={this.notas.notas}
            apagarNota={this.notas.apagarNota}
            categoriaAtiva={this.state.categoriaAtiva}
          />
        </main>
      </section>
    );
  }
}

export default App;
