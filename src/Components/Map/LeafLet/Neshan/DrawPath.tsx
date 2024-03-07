import { useEffect, useRef } from "react";
import { useTravelData } from "../../../../Context/Path";
import { createPolyline, createPointsMarker } from "./ScriptMap";
import MapContainer from "./MapContainer";

export default function DrawPath() {
  const travelData = useTravelData();
  const mapRef = useRef(null);
  var locationList = new Array();
  var Start = new Array();
  var End = new Array();
  useEffect(() => {
    const map = mapRef.current;
    if (travelData && travelData.length > 0 && map) {
      Start.push([travelData[0].lat, travelData[0].lng]);
      End.push([travelData.length - 1].lat, [travelData.length - 1].lng);
      travelData.forEach((dt) => {
        createPointsMarker([dt.lat, dt.lng]).addTo(map);
        locationList.push([dt.lat, dt.lng]);
      });
      console.log(locationList);

      createPolyline(locationList).addTo(map);
    }
  }, [travelData]);

  if (!travelData) {
    return <div>Loading...</div>;
  }

  return <MapContainer ref={mapRef} />;
}
