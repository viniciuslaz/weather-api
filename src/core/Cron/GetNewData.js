const axios = require("../../config/axios");
require("dotenv").config();
const { Current } = require("../../models/Current.model");

module.exports = {
  GetNewData: async function () {
    const apikey = process.env.APIKEY;
    const query = `weather?lat=-29.65&lon=-50.57&appid=${apikey}`;

    try {
      const response = await axios.post(query);

      await GetLast();

      await Current.query().insert({
        Dados: JSON.stringify(response.data),
      });
    } catch (error) {
      console.log("Erro ao atualizar os dados!");
      console.log(error);
    }
  },
};

async function GetLast() {
  try {
    const totalRegistros = await Current.query().resultSize();

    if (totalRegistros == 10) {
      const lastRegistro = await Current.query().orderBy("Data", "asc").first();
      if (lastRegistro) await lastRegistro.$query().del();
    }

    return true;
  } catch (error) {
    console.log("Ocorreu um erro ao buscar o ultimo registro! ", error);
    throw new Error(error);
  }
}
