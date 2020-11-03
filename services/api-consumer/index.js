const axios = require("axios").default;

const getCharacters = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "https://rickandmortyapi.com/api/character/?page=1",
      responseType: "json",
    });
    const charsAPI = response.data.results;
    return charsAPI.map(({ id, name, species, status, origin, location }) => {
      return {
        id,
        name,
        species,
        status,
        origin: origin.name,
        location: location.name,
      };
    });
  } catch (err) {
    throw err;
  }
};

module.exports = { getCharacters };
