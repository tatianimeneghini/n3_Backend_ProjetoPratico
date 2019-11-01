//Definição da ação
const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
console.log(req.url)
res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const tarefa = tarefas.find((tarefas) => tarefas.id == id)
        res.status(200).send(tarefa)
}

exports.getNomeColaborador = (req, res) => {
    const nomeColaborador = req.params.nomeColaborador
    const nomeColaboradorTarefa = tarefas.find((tarefas) => tarefas.nomeColaborador == nomeColaborador)
    if (!nomeColaboradorTarefa) {
        res.send("O nome não foi encontrado em nosso sistema. Digite novamente.")}
    res.status(200).send(nomeColaboradorTarefa)
}

exports.getConcluido = (req, res) => {
    const concluidoTarefas = tarefas.filter((tarefas) => tarefas.concluido == "true")
    res.status(200).send(concluidoTarefas)
}

/*exports.getDataInclusao = (req, res) => {
    const dataInclusao = req.params.dataInclusao
    const dataInclusaoTarefas = dataInclusao.filter((dataInclusao) => tarefa.dataInclusao == dataInclusao)
        res.status(200).send(dataInclusao)
}

function buscarTarefas(tarefa){
    const tarefaEncontrada = tarefa.id == id 
    return tarefaEncontrada
}*/