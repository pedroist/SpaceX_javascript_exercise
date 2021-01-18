// Please implement your solution in this file
import LaunchesAPI from './spaceX_API';

const prepareData = payload => {
  LaunchesAPI.getPastLaunchesHttpRequest()
  .then(
    (result) => {
      console.log(result.data);
      debugger;
    },
    (error) => {
      console.log("error: " + error);
    }
  );
};

const renderData = data => {

}

module.exports = {
  prepareData: prepareData,
  renderData: renderData
};
