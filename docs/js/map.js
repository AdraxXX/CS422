const API_KEY = 's2IV5u37GT4KxQM5eNIm' // <- sample API key, replace with your own

let map = new maplibregl.Map(
    {
        container: 'map',
        style: `https://api.maptiler.com/maps/outdoor/style.json?key=${API_KEY}`,
        zoom: 3.5,
        center: [-96, 37.8],
        // maxBounds: bounds
    })

let hoveredCounty = null;

let addPopup = ( latlon, msg ) =>
{
    return new maplibregl.Popup()
        .setLngLat([latlon[1], latlon[0]])
        .setHTML(msg)
        .addTo(map);
}

let goToCoordinates = (lat, lon, zoom) =>
{
    map.flyTo({
        center: [lon, lat],
        zoom: zoom,
        essential: true
    });
}

map.on('load', () =>
{
    addMapData();
    addMapManipulations();
    //addMapControls();

    map.on('mouseenter', 'county-fills', () => { map.getCanvas().style.cursor = 'pointer'; });
    map.on('mouseleave', 'county-fills', () => { map.getCanvas().style.cursor = ''; });
})

let addMapData = () =>
{
    map.addSource('counties',
        {
            'type': 'geojson',
            'data': './data/gz_2010_us_050_00_5m.geojson',
            // generateId: true // for next time if we switch dataset
        });

    map.addLayer(
        {
            'id': 'county-fills',
            'type': 'fill',
            'source': 'counties',
            'layout': {},
            'paint':
                {
                    'fill-color': '#627BC1',
                    'fill-opacity':
                        [
                            'case',
                            ['boolean', ['feature-state', 'hover'], false],
                            0.25,
                            0
                        ]
                }
        });

    map.addLayer(
        {
            'id': 'county-borders',
            'type': 'line',
            'source': 'counties',
            'layout': {},
            'paint':
                {
                    'line-color': 'grey',
                    'line-width': 1
                }
        });
}

let addMapManipulations = () =>
{
    map.on('mousemove', 'county-fills', (e) =>
    {
        if(e.features.length === 0)
            return;

        let countyId = e.features[0].id;
        console.log(countyId)
        if (hoveredCounty)
        {
            map.setFeatureState
            (
                { source: 'counties', id: hoveredCounty },
                { hover: false }
            );
        }

        hoveredCounty = countyId;
        map.setFeatureState
        (
            { source: 'counties', id: hoveredCounty },
            { hover: true }
        );
    });

    map.on('mouseleave', 'county-fills', () =>
    {
        if (hoveredCounty)
        {
            map.setFeatureState
            (
                { source: 'counties', id: hoveredCounty },
                { hover: false }
            );
        }
        hoveredCounty = null;
    });

    // Def don't need to keep this, just for example
    map.on('click', 'county-fills', (e) =>
    {
        let coords = e.lngLat;
        addPopup([coords.lat, coords.lng], e.features[0].properties.NAME)
    });
}

/*let addMapControls = () =>
{
    map.addControl( new maplibregl.GeolocateControl() );
}*/

// geojson for US
// https://eric.clst.org/tech/usgeojson/
// https://github.com/jgoodall/us-maps
// https://github.com/OpenDataDE/State-zip-code-GeoJSON