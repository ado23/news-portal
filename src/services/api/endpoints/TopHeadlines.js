import BaseApi from "services/api/BaseApi";

class TopHeadlines extends BaseApi {
  constructor() {
    super();
    this.type = "top-headlines";
  }
}

export default new TopHeadlines();
