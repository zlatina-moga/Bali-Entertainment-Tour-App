function initMap(){
    //map option
    let options = {
        center: {lat:-8.3405, lng:115.0920},
        zoom: 9
    }
    map = new google.maps.Map(document.getElementById('map'), options)

    let markers = [
        {
            coordinates:{lat: -8.5188, lng: 115.2586},
            content: '<h1>Sacred Monkey Forest Sanctuary</h1>'
        },
        {
            coordinates:{lat: -8.6913, lng: 115.1682},
            content: '<h1>Seminyak</h1>'
        },
        {
            coordinates:{lat: -8.7509, lng: 115.4732},
            content: '<h1>Kelingking Beach</h1>'
        },
        {
            coordinates:{lat: -8.2401, lng: 115.3775},
            content: '<h1>Mount Batur</h1>'
        },
        {
            coordinates:{lat: -8.4340, lng: 115.2793},
            content: '<h1>Tegallalang Rice Terrace</h1>'
        },
        {
            coordinates:{lat: -8.4158, lng: 115.3152},
            content: '<h1>Tirta Empul Water Temple</h1>'
        },
        {
            coordinates:{lat: -8.8135, lng: 115.0962},
            content: '<h1>Uluwatu Beach</h1>'
        }
    ]

    //loop through markers
    for (let i = 0; i < markers.length; i++){
        addMarker(markers[i])
    }

    //create marker function
    function addMarker(props){
        let marker = new google.maps.Marker({
            position: props.coordinates,
            map: map,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        })

        if (props.content){
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            })
            marker.addListener('click', () => {
                infoWindow.open(map, marker)
            })
        }  
    }
}