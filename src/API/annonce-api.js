import axios from 'axios';

//const BASE_URL_ANNONCES = 'http://localhost:3090/annonces';
const BASE_URL_ANNONCES = 'http://localhost:3000/api/stuff';

export class AnnonceAPI {
  static async fetchAllAnnonces() {
    // GET
    return (await axios.get(`${BASE_URL_ANNONCES}`)).data;
  }

  static async fetchCreateAnnonce(annonce) {
    // CREATE
    return (await axios.post(`${BASE_URL_ANNONCES}`, annonce)).data;
  }

  static async fetchById(annonceId) {
    // GET ID
    return (await axios.get(`${BASE_URL_ANNONCES}/${annonceId}`)).data;
  }

  static async deleteById(annonceId) {
    // DELETE ID
    return (await axios.delete(`${BASE_URL_ANNONCES}/${annonceId}`)).data;
  }

  static async update(annonce) {
    // update annonce
    return (await axios.patch(`${BASE_URL_ANNONCES}/${annonce.id}`, annonce))
      .data;
  }
  /** */
  static formatId(annonce) {
    // met les id nombre en string
    return {
      ...annonce,
      id: annonce.id.toString(),
    };
  }
}
