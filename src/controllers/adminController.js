const { Usuario, Atividade } = require("../models/index");

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      attributes: { exclude: ["senha"] },
    });
    res.json(usuarios);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao listar utilizadores", error: error.message });
  }
};

exports.deletarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    if (parseInt(id, 10) === req.usuario.id) {
      return res.status(400).json({
        message: "Não pode apagar a sua própria conta de administrador.",
      });
    }

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Utilizador não encontrado" });
    }

    await usuario.destroy();
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao apagar utilizador", error: error.message });
  }
};

exports.deletarQualquerAtividade = async (req, res) => {
  try {
    const { id } = req.params;

    const atividade = await Atividade.findByPk(id);
    if (!atividade) {
      return res.status(404).json({ message: "Atividade não encontrada" });
    }

    await atividade.destroy();
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao apagar atividade", error: error.message });
  }
};
