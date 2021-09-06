var x = document.getElementById("result");

function geoLocation() {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {

    // used to override the block: {}
    x.innerHTML = "this is not supported";
  }
}

function showPosition(position) {
  x.innerHTML = `latitude: ${position.coords.latitude} <br>
    longitude: ${position.coords.longitude}`;
}
