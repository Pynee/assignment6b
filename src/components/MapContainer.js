import React from "react";
import GoogleMapReact from "google-map-react";
import { useDispatch } from "react-redux";

const Map = props => {
  const dispatch = useDispatch();
  const handleClick = e => {
    const lat = e.lat;
    const lng = e.lng;
    dispatch({ type: "SELECT_COORDINATES", payload: { lat, lng } });
  };

  return (
    // Important! Always set the container height explicitly

    <div className="flex-grow">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        center={props.center}
        zoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onClick={handleClick}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
