var x = document.getElementById('demo');
function getlocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else{
        x.innerHTML="o seu navegador não suporta geolocalização";
    }
    function showPosition(position){
x.innerHTML="Latitude: " + position.coords.latitude + "<br> longitide:" + position.coords.longitude;
    }
}