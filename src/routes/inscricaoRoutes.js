const express = require("express");
const router = express.Router();
const inscricaoController = require("../controllers/inscricaoController");
const { proteger, ehProfessor, ehAluno } = require("../middleware/authMiddleware");

router.post(
  "/:id/presenca",
  [proteger, ehProfessor],
  inscricaoController.marcarPresenca
);

router.delete('/:id', [proteger, ehAluno], inscricaoController.cancelarInscricao);

module.exports = router;
