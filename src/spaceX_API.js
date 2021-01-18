import axios from "axios";

const API_BASE_ADDRESS = "https://api.spacexdata.com/v3";

export default class LaunchesAPI {
  /*---HTTP REQUESTS-------------------------------------*/

  /**GET /launches/past
   * Get Past Launches from SpaceX API
   */
  static getPastLaunchesHttpRequest() {
    const url = `${API_BASE_ADDRESS}/launches/past`;

    return axios.get(url);
  }
}
