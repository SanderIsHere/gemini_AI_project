class Controller {
  static async readData(req, res) {
    try {
      res.send("Berhasil");
    } catch (er) {
      res.send(err);
    }
  }
}
module.exports = Controller;
