import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from "react-router-dom";

import './index.css';
import Header from '../../../components/Header/header.js';

export default function Home() {
    let history = useHistory();

    return(
        <div className="title">
            <Header />
            <h4>Menu</h4>
            <Button label="Usuários" onClick={() => {history.push('/usuarios')}}/>
            <br />
            <Button label="Cadastrar Usuários" onClick={() => {history.push('/criarUsuario')}}/>
            <br />
            <Button label="Livros" onClick={() => {history.push('/livros')}}/>
            <br />
            <Button label="Cadastrar Livros" onClick={() => {history.push('/criarLivro')}}/>
            <br />
        </div>
    )
};