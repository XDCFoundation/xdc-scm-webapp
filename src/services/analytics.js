import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
  getTransactionsAnalytics,
  getGasUsedAnalytics,
  getActiveUsersAnalytics
};

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    skip: true,
  };
}

async function getTransactionsAnalytics(requestData) {
  let url =  process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE + "/get-transaction-analytics";
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getGasUsedAnalytics(requestData) {
    let url = process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE + "/get-gas-used-analytics";
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
      .then((response) => {
        if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
  }
  
  async function getActiveUsersAnalytics(requestData) {
    let url = process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE +  "/get-active-users-analytics";
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
      .then((response) => {
        if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
  }