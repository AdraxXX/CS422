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
let hoveredState = null;

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

let zoomIntoState = (state) =>
{
    const OWM_KEY = "f43aa4ad79f1da0a9a64c735cb5fbd0e"
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${state}&limit=1&appid=${OWM_KEY}`
    return fetch(url)
        .then( (response) =>
        {
            return response.json();
        })
        .then( (info) =>
        {
            let result = info[0];
            goToCoordinates(result['lat'], result['lon'], 5.5);
        })
}

map.on('load', () =>
{
    addMapData();
    addMapManipulations();
    //addMapControls();

    map.on('mouseenter', 'county-fills', () => { map.getCanvas().style.cursor = 'pointer'; });
    map.on('mouseleave', 'county-fills', () => { map.getCanvas().style.cursor = ''; });

    map.on('mouseenter', 'state-fills', () => { map.getCanvas().style.cursor = 'pointer'; });
    map.on('mouseleave', 'state-fills', () => { map.getCanvas().style.cursor = ''; });

})

let curMapState = 'states';
let updateMapState = (showCounties) =>
{
    if(!showCounties)
    {
        if(curMapState == 'states')
            return;

        removeCounties();
        enableStatesGeo();
        curMapState = 'states';
        return;
    }

    if(curMapState == 'counties')
        return;

    removeStates();
    enableCountiesGeo();
    curMapState = 'counties';
}

let enableCountiesGeo = () =>
{
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

let enableStatesGeo = () =>
{
    map.addLayer
    (
        {
            'id': 'state-fills',
            'type': 'fill',
            'source': 'states',
            'layout': {},
            'paint': {
                'fill-color': 'green',
                'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    0.25,
                    0
                ]
            }
        }
    );

    if(map.getLayer('state-borders'))
        return;

    map.addLayer
    (
        {
            'id': 'state-borders',
            'type': 'line',
            'source': 'states',
            'layout': {},
            'paint':
                {
                    'line-color': 'red',
                    'line-width': 2.5
                }
        }
    );
}

let addMapData = () =>
{
    map.addSource('counties',
        {
            'type': 'geojson',
            'data': './data/gz_2010_us_050_00_5m.geojson',
            // generateId: true // for next time if we switch dataset
        });

    map.addSource('states',
        {
            'type': 'geojson',
            'data': 'https://maplibre.org/maplibre-gl-js-docs/assets/us_states.geojson'
        });


    //enableCountiesGeo();
    enableStatesGeo();
}

let removeCounties = () =>
{
    map.removeLayer('county-fills');
    map.removeLayer('county-borders');
}

let removeStates = () =>
{
    map.removeLayer('state-fills');
    // map.removeLayer('state-borders');
}

let addMapManipulations = () =>
{
    map.on('mousemove', 'state-fills', (e) =>
    {
        if(e.features.length == 0)
            return;

        if (hoveredState)
        {
            map.setFeatureState
            (
                { source: 'states', id: hoveredState },
                { hover: false }
            );
        }

        hoveredState = e.features[0].id;
        map.setFeatureState
        (
                { source: 'states', id: hoveredState },
                { hover: true }
        );
    });

    map.on('mouseleave', 'state-fills', () =>
    {
        if (hoveredState)
        {
            map.setFeatureState
            (
                { source: 'states', id: hoveredState },
                { hover: false }
            );
        }
        hoveredState = null;
    });

    map.on('click', 'state-fills', (e) => { getClickInfo(e); });

    map.on('mousemove', 'county-fills', (e) =>
    {
        if(e.features.length === 0)
            return;

        let countyId = e.features[0].id;
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

    map.on('click', 'county-fills', (e) => { getClickInfo(e); });
}

let getClickInfo = (e) =>
{
    let coords = e.lngLat;

    let url = `https://geo.fcc.gov/api/census/area?lat=${coords.lat}&lon=${coords.lng}&format=json`
    fetch(url)
        .then( (response) =>
        {
            return response.json();
        })
        .then( (info) =>
        {
            let result = info.results[0];

            let state = result['state_code'];
            let county = `${result['county_name']} County`

            // goToCoordinates(coords.lat, coords.lng, 7)
            fireSearchByClick(state, county.toLowerCase())
        })
}

/*let addMapControls = () =>
{
    map.addControl( new maplibregl.GeolocateControl() );
}*/

// geojson for US
// https://eric.clst.org/tech/usgeojson/
// https://github.com/jgoodall/us-maps
// https://github.com/OpenDataDE/State-zip-code-GeoJSON