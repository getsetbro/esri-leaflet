let uri =
  "https://services.arcgis.com/rOo16HdIMeOBI4Mb/ArcGIS/rest/services/USA_Rail_Network/FeatureServer/0";

function runr(lat: number, lon: number) {
  var map1 = L.map("map").setView([lat, lon], 5);
  var map = L.map("map").setView([45.526, -122.667], 9);
  // @ts-ignore
  L.esri.basemapLayer("Gray").addTo(map);
  // var items = L.esri.featureLayer({ url: uri }).addTo(map);
  // const worldCities = L.esri
  //   .featureLayer({
  //     url:
  //       "https://sampleserver6.arcgisonline.com/arcgis/rest/services/SampleWorldCities/MapServer/0"
  //   })
  //   .addTo(map);

  // worldCities.bindPopup(function(e) {
  //   return L.Util.template(
  //     "<div>{CITY_NAME}</div><div>" +
  //       e.feature.properties.POP.toLocaleString() +
  //       "</div>",
  //     e.feature.properties
  //   );
  // });
  // @ts-ignore
  let qwer = L.esri.Cluster.featureLayer({
    url:
      "https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Trimet_Transit_Stops/FeatureServer/0"
  }).addTo(map);

  qwer.bindPopup(function(e) {
    let zxcv = JSON.stringify(e.feature.properties)
      .split(",")
      .join("</div><div>");
    return L.Util.template("<div>" + zxcv + "</div>", e.feature.properties);
  });
}

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    runr(position.coords.latitude, position.coords.longitude);
  });
}
