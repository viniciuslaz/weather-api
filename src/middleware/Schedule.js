const nodeSchedule = require("node-schedule");
const { GetNewData } = require("../core/Cron/GetNewData");

class Schedule {
  static IniciaRotinas() {
    this.CriaRotinas();
  }

  static CriaRotinas() {
    nodeSchedule.scheduleJob("*/5 * * * *", () => {
      GetNewData();
    });
  }
}

module.exports = Schedule;
