const service = require("../services/api-consumer");

const getCharactersHandler = async (req, res) => {
  try {
    const chars = await service.getCharacters();
    res.send(chars);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const fakeCreateCharacterHandler = async (req, res) => {
  res.send(req.body);
};

module.exports = {
  getCharactersHandler,
  fakeCreateCharacterHandler,
};
