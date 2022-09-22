import config from "./config.json";

class BaseApi {
  constructor() {
    this.type = "";
    this.baseUrl = config.host;
  }

  generateRequestHeaders = () => ({
    method: "GET",
    headers: { Authorization: config.key }
  });

  generateQueryFilters = (filterObject) =>
    Object.keys(filterObject)
      .reduce((acc, key) => {
        if (filterObject[key]) {
          acc = [...acc, [key, filterObject[key]]];
        }

        return acc;
      }, [])
      .map((e) => e.join("="))
      .join("&");

  generateFullUrl = (filter) => {
    let baseUrl = `${this.baseUrl}${this.type}`;

    if (filter) {
      const queryParameters = this.generateQueryFilters(filter);
      return `${baseUrl}?${queryParameters}`;
    }

    return baseUrl;
  };

  handleResponse = (response) => {
    return response.json().then((data) => {
      if (data.status !== "ok") {
        const error = data && data.message;
        return Promise.reject(error);
      }

      return data;
    });
  };

  getData = (filter) => {
    const fullUrl = this.generateFullUrl(filter);
    const requestOptions = this.generateRequestHeaders();

    return fetch(fullUrl, requestOptions).then((response) =>
      this.handleResponse(response)
    );
  };
}

export default BaseApi;
