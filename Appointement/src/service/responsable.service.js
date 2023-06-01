import { request } from "../service/request.service";

/**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function addResponsable(data) {
    return request("reservation", "POST", data);
  }
  /**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function updateResponsable(data) {
    return request("responsable/", "UPDATE", data);
  }
/**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function getResponsable(data) {
    return request("responsable/", "GET", data);
  }
  /**
   * Sends a PUT request to update cars with the provided data.
   *
   * @param {object} data - The data to be used in the update request.
   * @return {Promise} A Promise that resolves with the result of the update request.
   */
  export function deleteResponsable(data) {
    return request("responsable/", "DELETE", data);
  }