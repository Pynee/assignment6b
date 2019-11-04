import React from "react";
import { useSelector } from "react-redux";

const WeatherComponent = () => {
  const coords = useSelector(state => state.weatherReducer.coords);
  console.log(coords);
  return (
    <React.Fragment>
      {coords[0] ? (
        <div>
          Lat:{coords[0].lat.toFixed(2)} Lon:{coords[0].lng.toFixed(2)}
        </div>
      ) : (
        <div>Select a point in map</div>
      )}
    </React.Fragment>
  );
};

export default WeatherComponent;
