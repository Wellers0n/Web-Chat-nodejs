module.exports.iniciaChat = function(application, req, res){
    let dataReq = req.body
    req.assert('apelido', 'Nome obrigatório').notEmpty();
    req.assert('apelido', 'Nome deve conter maior que 3 e menor que 15 caracteres').len(3, 15);

    let erros = req.validationErrors();
    if (erros) {
        res.render('index', {validacao: erros});
        return    
    }
    application.get('io').emit('msgParaCliente', {nome: dataReq.apelido, msg: 'conectou no chat'})
    res.render('chat', {apelido: dataReq.apelido});
}