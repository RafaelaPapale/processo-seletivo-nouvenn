import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
//header é um component
//cria uma pasta somente para ele pq vai ficar todos arquivos dele em um lugar só

//para importar o css, venho direto aqui tbm
import "./header.css";

//stateless components - criamos componentes por meio de variaveis
//pode tirar os parenteses se desejar
const Header = () => (
  <>
    <header id="main-header">Biblioteca Nouvenn</header>
  </>
);

export default Header;
