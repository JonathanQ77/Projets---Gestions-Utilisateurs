import axios from "axios";

const BASE_URL_ANNONCES = "http://localhost:3090/annonces";
const BASE_URL_INTERIEUR = "http://localhost:3090/interieur";

export class AnnonceAPI {
  static async fetchAllAnnonces() {
    return (await axios.get(`${BASE_URL_ANNONCES}`)).data.map(this.formatId);
  }

  static async fetchAllInterieur() {
    return (await axios.get(`${BASE_URL_INTERIEUR}`)).data.map(this.formatId);
  }

  static formatId(annonce) {
    // met les id nombre en string
    return {
      ...annonce,
      id: annonce.id.toString(),
    };
  }
}
