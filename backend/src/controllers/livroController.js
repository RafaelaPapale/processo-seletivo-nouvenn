const Livro = require('../models/livro');
const status = require('http-status');

//Inserir os dados no banco
exports.Insert = (req, res, next) => {
    //Na requisicao de insert ele retorna um json no corpo
    //É preciso pegar cada dado e inserir na respectiva propriedade
    const nome = req.body.nome;
    const autor = req.body.autor;
    const valor = req.body.valor;
    const dataLancamento = req.body.dataLancamento;
    const isbn = req.body.isbn;

    //Passando os parametros com dados para os atributos do model
    Livro.create({
        nome: nome,
        autor: autor,
        valor: valor,
        dataLancamento: dataLancamento,
        isbn: isbn
    })
        //then = registra o que acontece quando a Promise for resolvida
        .then(livro => {
            if (livro) {
                res.status(status.OK).send(livro);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que acontece quando a Promise falha
        .catch(error => next(error));
};

//Procurar todos os dados no banco referentes aquela tabela
exports.SearchAll = (req, res, next) => {
    Livro.findAll()
        .then(livro => {
            if (livro) {
                res.status(status.OK).send(livro);
            }
        })
        .catch(error => next(error));
}

//Procurar os dados de uma linha da tabela através da chave primária
exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Livro.findByPk(id)
        .then(livro => {
            if (livro) {
                res.status(status.OK).send(livro);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};


//Atualizar os dados
exports.Update = (req, res, next) => {
    //Na requisicao de atualizar, quando atualizamos, enviamos o id que vai ser pego da url
    const id = req.params.id;
    const nome = req.body.nome;
    const autor = req.body.autor;
    const valor = req.body.valor;
    const dataLancamento = req.body.dataLancamento;
    const isbn = req.body.isbn;

    Livro.findByPk(id)
        //Primeiro é necessário verificar se o dado existe
        //then = registra o que acontece quando a Promise for resolvida
        .then(livro => {
            if (livro) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                livro.update({
                    nome: nome,
                    autor: autor,
                    valor: valor,
                    dataLancamento: dataLancamento,
                    isbn: isbn
                },
                    //recebe um parametro id na clausula where
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        //status 200 é o padrao
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                //caso nao existir, retorna erro
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que acontece quando a Promise falha
        .catch(error => next(error));
};

//Deletar uma linha da tabela através do ID
exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Livro.findByPk(id)
        .then(livro => {
            if (livro) {
                livro.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
