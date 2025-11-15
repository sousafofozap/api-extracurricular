const express = require("express");
const router = express.Router();
const atividadeController = require("../controllers/atividadeController");
const {
  proteger,
  ehProfessor,
  ehAluno,
} = require("../middleware/authMiddleware");

router.post("/", [proteger, ehProfessor], atividadeController.criar);

router.get("/", proteger, atividadeController.listar);

router.get("/:id", proteger, atividadeController.buscarPorId);

router.post(
  "/:id/inscrever",
  [proteger, ehAluno],
  atividadeController.inscrever
);

router.get(
  "/:id/inscritos",
  [proteger, ehProfessor],
  atividadeController.listarInscritos
);

router.delete("/:id", [proteger, ehProfessor], atividadeController.deletar);

router.post(
  "/:id/adicionar-responsavel",
  [proteger, ehProfessor],
  atividadeController.adicionarResponsavel
);

router.put("/:id", [proteger, ehProfessor], atividadeController.atualizar);

router.post(
  "/:id/iniciar-checkin",
  [proteger, ehProfessor],
  atividadeController.iniciarCheckin
);

router.post(
  "/:id/fazer-checkin",
  [proteger, ehAluno],
  atividadeController.fazerCheckin
);

module.exports = router;
