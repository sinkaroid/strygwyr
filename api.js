const { get } = require("http");
const { URL, URLSearchParams } = require("url");
const endpoints = require("./localized.json");

function getContent(url) {
  return new Promise((resolve, reject) => {
    get(url, (res) => {
      const { statusCode } = res;
      if (statusCode !== 200) {
        res.resume();
        reject(`Request failed. Status code: ${statusCode}`);
      }
      res.setEncoding("utf8");
      let rawData = "";
      res.on("data", (chunk) => {
        rawData += chunk;
      });
      res.on("end", () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (e) {
          reject(`Error: ${e.message}`);
        }
      });
    }).on("error", (err) => {
      reject(`Error: ${err.message}`);
    });
  });
}

class strygwyrClient {
  constructor() {
    let self = this;
    self.changes = {};
    self.stats = {};
    self.talent = {};

    let baseURL = "http://192.145.238.5/~pasirm5/v3/strygwyr";
    Object.keys(endpoints.changes).forEach(async (endpoint) => {
      self.changes[endpoint] = async function (queryParams = "") {
        let url = new URL(`${baseURL}${endpoints.changes[endpoint]}`);
        queryParams !== ""
          ? (url.search = new URLSearchParams(queryParams))
          : "";
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.stats).forEach(async (endpoint) => {
      self.stats[endpoint] = async function (queryParams = "") {
        let data = new URL(`${baseURL}${endpoints.stats[endpoint]}`);
        queryParams !== ""
          ? (data.search = new URLSearchParams(queryParams))
          : "";
        return await getContent(data.toString());
      };
    });
    Object.keys(endpoints.talent).forEach(async (endpoint) => {
      self.talent[endpoint] = async function (queryParams = "") {
        let data = new URL(`${baseURL}${endpoints.talent[endpoint]}`);
        queryParams !== ""
          ? (data.search = new URLSearchParams(queryParams))
          : "";
        return await getContent(data.toString());
      };
    });
  }
}

module.exports = strygwyrClient;
