export class Retrieve {
  static getKaanaData() {
    try {
      return fetch("https://auth.kaana.io/api/v1")
        .then((response) => response.json())
        .then((data) => data);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
