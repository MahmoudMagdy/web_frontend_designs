/*$(document).ready(function() {
    $("#google-map").onload=(element,event)=>{
        const mapOptions = {
            center: new google.maps.LatLng(51.5, -0.12),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        const map = new google.maps.Map(element, mapOptions);
    };
});*/

function myMap() {
    const mapOptions = {
        center: new google.maps.LatLng(31, 31),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    const map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
}

$(document).ready(()=>{
   $("header").height($(window).height());
});

/*
$(window).resize(()=>{
    $("header").height($(window).height());
});*/
