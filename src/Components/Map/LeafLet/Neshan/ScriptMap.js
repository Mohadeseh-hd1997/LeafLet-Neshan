// create a map
export const mapScript = () => {
  return new L.Map("map", {
    key: "web.a73395fe8099414e92d83d23e9efe8a9",
    maptype: "neshan",
    poi: false,
    traffic: false,
    center: [35.700936, 51.391194],
    zoom: 14
  });
};

export const createPolyline = (LatLng) => {
  return L.polyline(LatLng, {
    color: "#250ECD",
    weight: 12
  });
};

// add point in start of step
export const createPointsMarker = (LatLng) => {
  return L.circleMarker(LatLng, {
    weight: 1,
    color: "#FFFFFF",
    radius: 5,
    fill: true,
    fillColor: "#9fbef9",
    fillOpacity: 1.0
  });
};
