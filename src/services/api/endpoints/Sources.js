import BaseApi from "services/api/BaseApi";

class Sources extends BaseApi {
  constructor() {
    super();
    this.type = "top-headlines/sources";
  }
}

export default new Sources();
