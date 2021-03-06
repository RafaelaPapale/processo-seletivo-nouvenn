import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import './index.css';

class CriarLivro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livro: {
                nome: "",
                autor: "",
                valor: "",
                dataLancamento: "",
                isbn: "true"
            },
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
        </div>
            );
        }
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/livros" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Criar Livro</legend>
                        <div className="livro-insert">
                            <label htmlFor="nome">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.livro.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="autor">Autor </label>
                            <br />
                            <input
                                type="text"
                                id="autor"
                                name="autor"
                                placeholder="Autor"
                                required
                                value={this.state.livro.autor}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="isbn">ISBN </label>
                            <br />
                            <input
                                type="number"
                                id="isbn"
                                name="isbn"
                                placeholder="Autor"
                                required
                                value={this.state.livro.isbn}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="valor">Valor </label>
                            <br />
                            <input
                                type="text"
                                id="valor"
                                name="valor"
                                placeholder="Valor"
                                required
                                value={this.state.livro.valor}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="dataLancamento">Data de Lançamento </label>
                            <br />
                            <input
                                type="date"
                                id="dataLancamento"
                                name="dataLancamento"
                                placeholder="Data de Nascimento"
                                required
                                value={this.state.livro.dataLancamento}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Cadastrar
                    </button>
                    
                    </fieldset>
                    <Link to={`/`}> Voltar </Link> <br />
                </form>
            );
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            livro: { ...prevState.livro, [name]: value }
        }));
        console.log(value);
    };

    handleSubmit = event => {
        fetch("http://localhost:3003/livros", {
            method: "post",
            body: JSON.stringify(this.state.livro),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));

        event.preventDefault();
    };
}

export default CriarLivro;
