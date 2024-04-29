const db = require("../../database/config");

const { Model } = require("objection");
Model.knex(db);

class Current extends Model {
  static get tableName() {
    return "current";
  }

  static get idColumn() {
    return "Id";
  }
}

module.exports.Current = Current;
