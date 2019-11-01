//Definição das rotas e dos verbos
const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
//router.get("/dataInclusao", controller.getDataInclusao)
router.get("/concluido/filtrar", controller.getConcluido)
//router.get("/descricao", controller.getDescricao)*/
router.get("/:id", controller.getById)
router.get("/:nomeColaborador/buscar", controller.getNomeColaborador)
router.get("/:dataConclusao", controller.getDataConclusao)

module.exports = router