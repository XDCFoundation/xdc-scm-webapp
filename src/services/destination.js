import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
  getDestinations,
  addDestination,
  deleteDestination
};

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    skip: true,
  };
}

async function addDestination(requestData) {
  let url =process.env.REACT_APP_ALERT_MICROSERVICE + "/destination";
  return httpService(
    httpConstants.METHOD_TYPE.POST,
    getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getDestinations(requestData) {
    let url = process.env.REACT_APP_ALERT_MICROSERVICE + "/destination-list";
    return httpService(
      httpConstants.METHOD_TYPE.POST,
      getHeaders(),
      requestData,
      url
    )
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
  }
  async function deleteDestination(requestData) {
    let url =process.env.REACT_APP_ALERT_MICROSERVICE + "/destination/" + requestData;
    return httpService(
      httpConstants.METHOD_TYPE.DELETE,
      getHeaders(),
      {},
      url
    )
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
  }