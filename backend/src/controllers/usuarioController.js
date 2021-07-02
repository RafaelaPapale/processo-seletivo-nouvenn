const Usuario = require('../models/usuario');
const status = require('http-status');

//Inserir os dados no banco
exports.Insert = (req, res, next) => {
    //Na requisicao de insert ele retorna um json no corpo
    //É preciso pegar cada dado e inserir na respectiva propriedade
    const nome = req.body.nome;
    const email = req.body.email;
    const dataNascimento = req.body.dataNascimento;
    const ativo = req.body.ativo;

    //Passando os parametros com dados para os atributos do model
    Usuario.create({
        nome: nome,
        email: email,
        dataNascimento: dataNascimento,
        ativo: ativo,
    })
        //then = registra o que acontece quando a Promise for resolvida
        .then(usuario => {
            if (usuario) {
                res.status(status.OK).send(usuario);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que acontece quando a Promise falha
        .catch(error => next(error));
};

//Procurar todos os dados no banco referentes aquela tabela
exports.SearchAll = (req, res, next) => {
    Usuario.findAll()
        .then(usuario => {
            if (usuario) {
                res.status(status.OK).send(usuario);
            }
        })
        .catch(error => next(error));
}

//Procurar os dados de uma linha da tabela através da chave primária
exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) {
                res.status(status.OK).send(usuario);
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
    const email = req.body.email;
    const dataNascimento = req.body.dataNascimento;
    const ativo = req.body.ativo;

    Usuario.findByPk(id)
        //Primeiro é necessário verificar se o dado existe
        //then = registra o que acontece quando a Promise for resolvida
        .then(usuario => {
            if (usuario) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                usuario.update({
                    nome: nome,
                    email: email,
                    dataNascimento: dataNascimento,
                    ativo: ativo
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

    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) {
                usuario.destroy({
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
