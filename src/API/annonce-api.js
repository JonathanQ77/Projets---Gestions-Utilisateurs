import axios from "axios";

const BASE_URL = "http://localhost:3090/annonces";

export class AnnonceAPI {
  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static formatId(annonce) {
    // met les id nombre en string
    return {
      ...annonce,
      id: annonce.id.toString(),
    };
  }
}
