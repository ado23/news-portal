import BaseApi from "services/api/BaseApi";

class Everything extends BaseApi {
  constructor() {
    super();
    this.type = "everything";
  }
}

export default new Everything();
