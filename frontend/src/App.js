import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Usuario/home";

import MainUsuario from './pages/Usuario/main';
import DetalhesUsuario from './pages/Usuario/detalhes';
import CriarUsuario from './pages/Usuario/criar';
import EditarUsuario from './pages/Usuario/editar';
import DeletarUsuario from './pages/Usuario/deletar';

import MainLivro from './pages/Livro/main';
import DetalhesLivro from './pages/Livro/detalhes';
import CriarLivro from './pages/Livro/criar';
import EditarLivro from './pages/Livro/editar';
import DeletarLivro from './pages/Livro/deletar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/usuarios" component={MainUsuario} />
            <Route path="/usuarios/:id" component={DetalhesUsuario} />
            <Route path="/criarUsuario" component={CriarUsuario} />
            <Route path="/editarUsuario/:id" component={EditarUsuario} />
            <Route path="/deletarUsuario/:id" component={DeletarUsuario} />

            <Route exact path = "/livros" component={MainLivro} />
            <Route path = "/livros/:id" component={DetalhesLivro} />
            <Route path = "/criarLivro" component={CriarLivro} />
            <Route path = "/editarLivro/:id" component={EditarLivro} />
            <Route path = "/deletarLivro/:id" component={DeletarLivro} />
        </Switch>
      </div>
    );
  }
}

export default App;
