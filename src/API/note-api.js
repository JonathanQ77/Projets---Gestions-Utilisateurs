import axios from "axios";

const BASE_URL = "http://localhost:3090/users";

export class userAPI {
  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static formatId(user) {
    // met les id nombre en string
    return {
      ...user,
      id: user.id.toString(),
    };
  }
}
