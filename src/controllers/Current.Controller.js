const { Current } = require("../models/Current.model");

module.exports = {
  Busca: async function (req, res) {
    try {
      const lastData = await Current.query().orderBy("Data", "DESC").first();

      if (!lastData) {
        return res.status(404).send({});
      }

      const data = JSON.parse(lastData.Dados);
      
      return res.status(200).send(data);
    } catch (error) {
      console.log("Ocorreu um erro ao buscar os dados!", error);
      return res.status(500).send();
    }
  },
};
