//
class ServiceController {
  static async index(req, res) {
    res.status(200).json({ message: 'welcome to webook api-code-chat' });
  }
  static async dev(req, res) {
    res.status(200).json({ message: 'route success' });
  }

  static async webhook(req, res) {
    const body = req.body;
    try {
      console.log(body);

      res.status(200).json({ messageOn: body });
    } catch (err) {
      console.log(erro.message);
      res.status(400).json({ message: 'error try again or contact suport' });
    }
  }
}

module.exports = ServiceController;
