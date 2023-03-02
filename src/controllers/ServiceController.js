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
      //  console.log(body);

      const payload = {
        remoteJid: body.key.remoteJid,
        message: body.message.extendedTextMessage.text,
        timestamp: body.messageTimestamp,
      };
      console.log(payload);

      res.status(200).json({ messageOn: payload });
    } catch (err) {
      console.log(erro.message);
      res.status(400).json({ message: 'error try again or contact suport' });
    }
  }
}

module.exports = ServiceController;
