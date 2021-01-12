import React from "react";
import "./App.css";
import { withGoogleMap, GoogleMap } from "react-google-maps";
const App = () => {
  const Example = withGoogleMap((props) => (
    <GoogleMap
      defaultCenter={{ lat: 27.6986, lng: 85.3356 }}
      defaultZoom={13}
    ></GoogleMap>
  ));
  return (
    <div>
      <Example
        containerElement={<div style={{ height: `500px`, width: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default App;
