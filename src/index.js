// Please run your solution from this file
import { renderData, prepareData } from "./solution";
import LaunchesAPI from './spaceX_API';

LaunchesAPI.getPastLaunchesHttpRequest()
  .then(
    (result) => {
        const preparedData = prepareData(result.data);

        renderData(preparedData);
    },
    (error) => {
        console.log("error: " + error);
    }
  );


