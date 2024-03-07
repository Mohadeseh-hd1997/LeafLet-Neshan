
import { useEffect, forwardRef } from "react";
import { mapScript } from "./ScriptMap";

const MapContainer = forwardRef((props, ref) => {
  useEffect(() => {
    const map = mapScript();
    if (ref) {
      ref.current = map; // Assign the map instance to the ref
    }
  }, [ref]);

  return <div id="map"></div>;
});

export default MapContainer;