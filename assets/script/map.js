document.getElementById('map');
console.log("hei");

function MapmyIndia() {
    var map = new MapmyIndia.Map("map", {
        center: [28.61, 77.23],
        zoomControl: true,
        hybrid: true
    });
    console.log("map", map);
    // var map = map.invalidateSize();
}