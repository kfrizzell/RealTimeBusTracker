// Katrina Frizzell Real Time Bus Tracker
// Array of all bus stops
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  // Access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0cmluYWZyaXp6ZWxsIiwiYSI6ImNreWNjd3VuNzBud2oyb29saXowNHZ0ZWwifQ.G8wenepzr-81kcBxaLKC_A';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  // Create MIT Marker
  for (const feature of geojson.features) {
    
  // create a HTML element for the MIT marker
    const el = document.createElement('div');
    el.className = 'start-stop';

  // Add marker to map for MIT
  let marker = new mapboxgl.Marker().setLngLat([-71.104081, 42.365554]).addTo(map);
  
  // Create Harvard Marker
    for (const feature of geojson.features) {

  // create a HTML element for the Harvard marker
    const el = document.createElement('div');
    el.className = 'start-stop';
  
    // Add marker to map for Harvard
  let marker = new mapboxgl.Marker().setLngLat([-71.1167, 42.3772]).addTo(map);

  // counter is index of the current bus stop
  let counter = 0;
  function move() {
    // Use counter to access bus stops within busStops array
    setTimeout(( => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000));
  
  }

  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }