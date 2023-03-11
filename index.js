const axios = require("axios");

function kaanaServicesJsModule() {
  async function getUserData() {
    try {
      const response = await axios.get("https://dev.auth.kaana.io/api/v1/user");
      return (
        response.data || {
          name: "Guest",
          email: "guest@example.com",
        }
      );
    } catch (e) {
      console.error(e);
      return {
        name: "Guest",
        email: "guest@example.com",
      };
    }
  }

  return {
    getUserData,
  };
}

module.exports = kaanaServicesJsModule;
