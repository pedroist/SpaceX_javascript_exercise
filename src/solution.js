// Please implement your solution in this file
import LaunchesAPI from './spaceX_API';

const prepareData = payload => {
  
  //filter objects that have at least one payload whose customer is NASA
  let preparedData = payload.filter(launch => {
    return (
      launch.launch_year === "2018" &&
      launch.rocket.second_stage.payloads.some(obj => obj.customers.some(customer => customer.includes("NASA")))
    )
  });

  //Transform the objects to get only the desired properties
  preparedData = preparedData.map(launch => {
    return {
      flight_number: launch.flight_number,
      mission_name: launch.mission_name,
      payloads_count: launch.rocket.second_stage.payloads.length
    };
  });
};

const renderData = data => {

}

module.exports = {
  prepareData: prepareData,
  renderData: renderData
};
