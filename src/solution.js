// Please implement your solution in this file

const prepareData = payload => {
  
  //filter objects that have at least one payload whose customer is NASA
  let preparedData = payload.filter(launch => {
    return (
      launch.launch_year === "2018" &&
      launch.rocket.second_stage.payloads.some(obj => obj.customers.some(customer => customer.includes("NASA")))
    )
  });
  
  //Sort by  inverse chronological order with the exception that those that carried more payloads
  // that should appear first.
  preparedData.sort((a, b) => {
    //1st Priority - Descendent order of number of payloads
    if(a.rocket.second_stage.payloads.length < b.rocket.second_stage.payloads.length){
      return 1;
    }
    if(b.rocket.second_stage.payloads.length < a.rocket.second_stage.payloads.length){
      return -1;
    }
    //2nd Priority - for the ones that have the same number of payloads, 
    // inverse chronological order
    if(a.launch_date_utc < b.launch_date_utc){
      return 1;
    }
    if(b.launch_date_utc < a.launch_date_utc){
      return -1;
    }
    return 0;
  })
  
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
