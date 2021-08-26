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
      notas: [
        {titulo: "Título", texto: "Descrição 1", categoria: "Escola"},
        {titulo: "Título", texto: "Descrição 2", categoria: "Trabalho"}
      ],
      categorias: ["Escola", "Trabalho"],
      categoriaAtiva: ""
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
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

  selecionarCategoria(categoria) {
    this.setState({
      categoriaAtiva: categoria
    })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />

        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            selecionarCategoria={this.selecionarCategoria.bind(this)}
            categoriaAtiva={this.state.categoriaAtiva}
          />

          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
            categoriaAtiva={this.state.categoriaAtiva}
          />
        </main>
      </section>
    );
  }
}

export default App;
