function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    var a = position.coords.latitude;
    var b = position.coords.longitude;
    var c = [a, b]
    getPos(c)
    function getPos(value) {
        google.script.run.getLoc(value);
    }
}