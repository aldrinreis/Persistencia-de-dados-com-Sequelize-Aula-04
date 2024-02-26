// IMPORTAR AS BIBLIOTECAS QUE IREMOS UTILIZAR.

const { Sequelize, Model, DataTypes } = require("sequelize");

//ABRINDO CNX COM O BANCO DE DADOS.

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite",
});

(async () => {
  //Sincronismo.
  await sequelize.sync({ force: true });
})();
